/* eslint-disable  func-names */
/* eslint-disable  no-console */
'use strict';

// https://github.com/alexa/skill-sample-nodejs-highlowgame/blob/master/lambda/custom/index.js
//
require('dotenv').config();
const Alexa = require('ask-sdk-core');
//const Alexa = require('alexa-sdk');
const APP_ID = undefined;
const Api = require('./services/api.js');
const sentences = require('./helpers/situation_sentences.js');
const validations = require('./helpers/validation');

//Api.findTopSong('pop').then(console.log);
// Api.search('je manque d\'application comme les gsm t\'as réparé le mal').then(r => console.log(r));

const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },
  handle(handlerInput) {
    const speechText = sentences.randomOpenningSentence();
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('Tu cherches un titre ?', speechText)
      .getResponse();
  },
};

const FindSongNameIntent = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'FindSongNameIntent';
    },
    handle(handlerInput) {
        return Api.search(handlerInput.requestEnvelope.request.intent.slots.Lyrics.value)
            .then(songs => {
                let index = 0;  // current songs returns to the users
                // first we return the first result then in the no intent we will return other songs
                let speechText = sentences.randomSearchMusicSentence(songs[index].title);
                handlerInput.attributesManager.setSessionAttributes({
                    songs: songs,
                    index: index // starts with 0
                });

                return handlerInput.responseBuilder.speak(speechText).reprompt(speechText)
                    .withSimpleCard('trouver un titre', speechText).getResponse()

            }).catch(e => {
                handlerInput.attributesManager.setSessionAttributes({
                    songs: undefined,
                    index: undefined
                });
                const speechText = 'Désolé ' + e.toString();
                return handlerInput.responseBuilder
                    .speak(speechText)
                    .reprompt(speechText)
                    .withSimpleCard('Erreur', speechText)
                    .getResponse();

            })
    },
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speechText = sentences.randomHelpSentence();

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withSimpleCard('Aide', speechText)
            .getResponse();
    },
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
                || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speechText = sentences.randomCloseSentence();

        return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard('A bientot mon pote', speechText)
            .getResponse();
    },
};

const YesIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.YesIntent'
    },
    handle(handlerInput) {
        let attribute = handlerInput.attributesManager.getSessionAttributes();
        let speechText = '';
        if (attribute.songs === undefined) { // user call this intent without have searched a song before
            speechText = sentences.randomYesSentence();
        } else {
            handlerInput.attributesManager.setSessionAttributes({
                songs: undefined,
                index: undefined
            });
            speechText = sentences.randomSuccessSentence();
        }
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withSimpleCard('Yes intent', speechText)
            .getResponse();
    }
};


const NoIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.NoIntent'
    },
    handle(handlerInput) {
        let attribute = handlerInput.attributesManager.getSessionAttributes();
        let speechText = '';
        if (attribute.songs === undefined) { // user call this intent without have searched a song before
            speechText = sentences.randomNoSentence();
        } else if (attribute.index + 1 < attribute.songs.length) { // there is at least one option
            speechText = sentences.randomMusicNotFoundSentence(attribute.songs[attribute.index + 1].title);
            handlerInput.attributesManager.setSessionAttributes({
                songs: attribute.songs,
                index: attribute.index + 1
            });
        } else { // no more option
            speechText = sentences.randomFailureSentence();
        }
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withSimpleCard('Yes intent', speechText)
            .getResponse();
    }
};


const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);

        return handlerInput.responseBuilder
            .getResponse();
    },
};

const Unhandled = {
    canHandle() {
        return true
    },
    handle(handlerInput) {
        let speechText = 'Desolé je n\'ai pas compris';
        return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard('A bientot mon pote', speechText)
            .getResponse();
    },
};

const ErrorHandler = {
    canHandle(handlerInput, error) {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`Error handled: ${error.message}`);
        return handlerInput.responseBuilder
            .speak('Désolé je n\'ai pas compris...')
            .reprompt('Peux tu réessayer ?')
            .getResponse();
    },
};

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
    .addRequestHandlers(
        LaunchRequestHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FindSongNameIntent,
        YesIntentHandler,
        NoIntentHandler,
        SessionEndedRequestHandler,
        Unhandled
    )
    .addErrorHandlers(ErrorHandler)
    .lambda();

/*const handlers = {
    'LaunchRequest': function () {
        this.emit(':ask', sentences.randomOpenningSentence())
    },
    'FindSongNameIntent': function () {
        if (this.event.request.error ||!validations.isSlotValid(this.event.request.intent, 'Lyrics')) {
            this.emit('ErrorIntent')
        } else {
            this.emit(':ask',  this.event.request.intent.slots.Lyrics.value, 'C\'est bien ce que tu cherchais ?');
        }
    },
    'ErrorIntent': function () {
        this.emit(':ask', 'Désolé boss, il me manque les paroles', 'Ok');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = sentences.randomHelpSentence();
        const reprompt = "Donne une parole";

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(sentences.randomCloseSentence());
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(sentences.randomCloseSentence());
        this.emit(':responseReady');
    },
};

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

*/