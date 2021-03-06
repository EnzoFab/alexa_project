// return random sentences 

const sentences = require('./sentences');
const random = require('./random');


module.exports = {
    randomOpenningSentence: () => {
        let limit = random.randomNumber(sentences.OPENNING_SENTENCES.length);
        return `${sentences.OPENNING_SENTENCES[limit]}`
    },
    randomCloseSentence: () => {
        let limit = random.randomNumber(sentences.CLOSE_SENTENCES.length);
        return sentences.CLOSE_SENTENCES[limit]
    },
    randomHelpSentence: () => {
        let limit = random.randomNumber(sentences.HELP_SENTENCES.length);
        return `${sentences.HELP_SENTENCES[limit]}, Autre chose ?`
    },
    randomSearchMusicSentence: (title) => {
        let limit = random.randomNumber(sentences.MUSIC_SEARCH_RETURN_SENTENCES.length);
        return sentences.MUSIC_SEARCH_RETURN_SENTENCES[limit].replace('*', title)
    },
    randomYesSentence () {
        let limit = random.randomNumber(sentences.YES_SENTENCES.length);
        return `${sentences.YES_SENTENCES[limit]} Qu'est ce que je peux faire pour toi ?`
    },

    randomSuccessSentence () {
        let limit = random.randomNumber(sentences.SUCCESS.length);
        return `${sentences.SUCCESS[limit]} Autre chose ?`
    },
    randomNoSentence () {
        let limit = random.randomNumber(sentences.NO_SENTENCES.length);
        return `${sentences.NO_SENTENCES[limit]} Qu'est ce que je peux faire pour toi ?`
    },

    randomMusicNotFoundSentence (title) {
        let limit = random.randomNumber(sentences.MUSIC_NOT_FOUND_SENTENCES.length);
        return `${sentences.MUSIC_NOT_FOUND_SENTENCES[limit]
            .replace('*', title)}`
    },

    randomFailureSentence () {
        let limit = random.randomNumber(sentences.FAILURE.length);
        return `${sentences.FAILURE[limit]}, Autre chose ?`
    },

    randomMusicTopSentence (title, type) {
        let limit = random.randomNumber(sentences.MUSIC_SEARCH_TOP_SENTENCES.length);
        return sentences.MUSIC_SEARCH_TOP_SENTENCES[limit].replace('*', title).replace('#', type) + "De quoi as tu besoin ?"
    }
};