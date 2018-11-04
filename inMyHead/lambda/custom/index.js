/* eslint-disable  func-names */
/* eslint-disable  no-console */
'use strict';

require('dotenv').config();
const Alexa = require('ask-sdk-core');
//const Alexa = require('alexa-sdk');
const APP_ID = undefined;
const Api = require('./services/api.js');
const sentences = require('./helpers/situation_sentences.js');
const random = require('./helpers/random');

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
      .reprompt("Demande moi de trouver le titre d'une musique,\n" +
          "ou demande moi de trouver la meilleur chanson du genre de musique de ton chois")
      .withSimpleCard('Tu cherches un titre ?', speechText)
      .getResponse();
  },
};

const TrouverChansonIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'TrouverChansonIntent';
    },
    handle(handlerInput) {
        return Api.search(handlerInput.requestEnvelope.request.intent.slots.Parole.value)
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
                const speechText = 'Désolé j\'ai un petit souci, essaie de recommencer';
                return handlerInput.responseBuilder
                    .speak(speechText)
                    .reprompt(speechText)
                    .withSimpleCard('Erreur', speechText)
                    .getResponse();

            })
    },
};

const MeilleureChansonIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'MeilleureChansonIntent';
    },
    handle(handlerInput) {
        if (handlerInput.requestEnvelope.request.intent.slots.Tag.value !== undefined || handlerInput.requestEnvelope.request.intent.slots.Tag.value !== '') {
            return Api.findTopSong(handlerInput.requestEnvelope.request.intent.slots.Tag.value, 50)
                            // essaie de chercher 50 resultats
                .then(songs => {
                    let song = songs[random.randomNumber(songs.length - 1)];
                    let speechText = sentences.randomMusicTopSentence(
                        song.title + ' de ' + song.artist,
                        handlerInput.requestEnvelope.request.intent.slots.Tag.value);
                    return handlerInput.responseBuilder
                        .speak(speechText)
                        .reprompt(speechText)
                        .withSimpleCard('Resultat', speechText)
                        .getResponse();

                })
        } else {
            return handlerInput.responseBuilder
                .speak('De quel type ? ')
                .reprompt('De quel type ? ')
                .withSimpleCard('Erreur', 'Il manque le type de musique')
                .getResponse();
        }

    }
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
            .reprompt(`Autre choses ?`)
            .withSimpleCard('Aide', `Si tu cherches un titre choisis parmis les phrases suivantes suivies des paroles de la musiques
             connais tu le titre de {Paroles},

            trouve moi la chanson {Paroles},

            parole {Paroles},

            peux tu me trouver ces paroles {Paroles},

            peux tu me trouver le titre de {Paroles},

            le titre de {Paroles},

            C'est quoi le titre de {Paroles},

            Tu connais le titre de{Paroles},

            Je cherche le titre de {Paroles},

            Retrouve moi le titre de {Paroles},

            Trouve moi le titre de {Paroles}
 `)
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
            .withSimpleCard('A bientot mon pote', '')
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
            handlerInput.attributesManager.setSessionAttributes({
                songs: undefined,
                index: undefined
            });
        }
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withSimpleCard('No intent', speechText)
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
        TrouverChansonIntentHandler,
        MeilleureChansonIntentHandler,
        YesIntentHandler,
        NoIntentHandler,
        SessionEndedRequestHandler,
        Unhandled
    )
    .addErrorHandlers(ErrorHandler)
    .lambda();
