const requestPromise = require('request-promise');
    // unused yet
const api = require('genius-api');
const genius = new api(process.env.GENIUS_CLIENT_ACCESS_TOKEN);


module.exports = {
    /**
     * @param lyrics: a lyrics 
     * use the genius api to find out a music 
     */
    search (lyrics) {
        return genius.search(title)
    },

    findLyrics (title) {
        
    }
}
   