// return random sentences 

const sentences = require('./sentences');
/**
 * @param top_limit: Int
 * @return number random number between 0 and top_limit (exclude)
 */
function randomNumber (top_limit) {
    return Math.round(Math.random() * top_limit)
}


module.exports = {
    randomOpenningSentence: () => {
        let limit = randomNumber(sentences.OPENNING_SENTENCES.length);
        return sentences.OPENNING_SENTENCES[limit]
    },
    randomCloseSentence: () => {
        let limit = randomNumber(sentences.CLOSE_SENTENCES.length);
        return sentences.CLOSE_SENTENCES[limit]
    },
    randomHelpSentence: () => {
        let limit = randomNumber(sentences.HELP_SENTENCES.length);
        return sentences.HELP_SENTENCES[limit]
    },
    randomSearchMusicSentence: (title) => {
        let limit = randomNumber(sentences.MUSIC_SEARCH_RETURN_SENTENCES.length);
        return sentences.MUSIC_SEARCH_RETURN_SENTENCES[limit].replace('*', title)
    },
    randomYesSentence () {
        let limit = randomNumber(sentences.YES_SENTENCES.length);
        return sentences.YES_SENTENCES[limit]
    },

    randomSuccessSentence () {
        let limit = randomNumber(sentences.SUCCESS.length);
        return sentences.SUCCESS[limit]
    },
    randomNoSentence () {
        let limit = randomNumber(sentences.NO_SENTENCES.length);
        return sentences.NO_SENTENCES[limit]
    },

    randomMusicNotFoundSentence (title) {
        let limit = randomNumber(sentences.MUSIC_NOT_FOUND_SENTENCES.length);
        return sentences.MUSIC_NOT_FOUND_SENTENCES[limit].replace('*', title)
    },

    randomFailureSentence () {
        let limit = randomNumber(sentences.FAILURE.length);
        return sentences.FAILURE[limit]
    }
};