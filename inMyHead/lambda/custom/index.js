/* eslint-disable  func-names */
/* eslint-disable  no-console */
'use strict';


require('dotenv').config();
const Alexa = require('ask-sdk-core');
//const Alexa = require('alexa-sdk');
const APP_ID = undefined;
const Api = require('./services/api.js');
const sentences = require('./helper/situation_sentences.js');
const validations = require('./helper/validation');


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
        const speechText = handlerInput.requestEnvelope.request.intent.slots.Lyrics.value;

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt('vas y mon gars')
            .withSimpleCard('Hello World', speechText)
            .getResponse();
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

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);

    return handlerInput.responseBuilder.getResponse();
  },
};

const ErrorHandler = {
  canHandle() {
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
        SessionEndedRequestHandler,
        FindSongNameIntent
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