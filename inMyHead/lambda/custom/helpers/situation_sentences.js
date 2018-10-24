// return random sentences 

const sentences = require('./sentences');
const random = require('./random');


module.exports = {
    randomOpenningSentence: () => {
        let limit = random.randomNumber(sentences.OPENNING_SENTENCES.length);
        return `<speak>${sentences.OPENNING_SENTENCES[limit]}</speak>`
    },
    randomCloseSentence: () => {
        let limit = random.randomNumber(sentences.CLOSE_SENTENCES.length);
        return sentences.CLOSE_SENTENCES[limit]
    },
    randomHelpSentence: () => {
        let limit = random.randomNumber(sentences.HELP_SENTENCES.length);
        return `<speak>${sentences.HELP_SENTENCES[limit]}</speak>`
    },
    randomSearchMusicSentence: (title) => {
        let limit = random.randomNumber(sentences.MUSIC_SEARCH_RETURN_SENTENCES.length);
        let src = sentences.MUSIC_SEARCH_RETURN_SENTENCES[limit].replace('*',title);
        return `<speak>${src}</speak>`
    },
    randomYesSentence () {
        let limit = random.randomNumber(sentences.YES_SENTENCES.length);
        return `<speak>${sentences.YES_SENTENCES[limit]}</speak>`
    },

    randomSuccessSentence () {
        let limit = random.randomNumber(sentences.SUCCESS.length);
        return `<speak>${sentences.SUCCESS[limit]}</speak>`
    },
    randomNoSentence () {
        let limit = random.randomNumber(sentences.NO_SENTENCES.length);
        return `<speak>${sentences.NO_SENTENCES[limit]}</speak>`
    },

    randomMusicNotFoundSentence (title) {
        let limit = random.randomNumber(sentences.MUSIC_NOT_FOUND_SENTENCES.length);
        return `<speak>${sentences.MUSIC_NOT_FOUND_SENTENCES[limit]
            .replace('*', title)}</speak>`
    },

    randomFailureSentence () {
        let limit = random.randomNumber(sentences.FAILURE.length);
        return `<speak>${sentences.FAILURE[limit]}</speak>`
    },

    randomMusicTopSentence (title, type) {
        let limit = random.randomNumber(sentences.MUSIC_SEARCH_TOP_SENTENCES.length);
        let str = sentences.MUSIC_SEARCH_TOP_SENTENCES[limit].replace('*', title).replace('#', type)
        return `<speak>${str}</speak>`
    }
};