const requestPromise = require('request-promise');
    // unused yet
const api = require('genius-api');
const genius = new api(process.env.GENIUS_CLIENT_ACCESS_TOKEN);
const format = require('../helpers/format');



module.exports = {
    /**
     * @param lyrics: a lyrics 
     * use the genius api to find out a music 
     */
    search (lyrics) {
        let formatedLyrics = format.formatSlotValue(lyrics);
        return genius.search(formatedLyrics).then(result => {
            let data = [];

            for(let i = 0; i < result.hits.length; i++) {
                data.push({
                    title: format.formatTitle(result.hits[i].result.full_title),
                    artist:  result.hits[i].result.primary_artist.name
                })
            }

            if (data.length === 0) throw 'Aucune chanson n\'a été trouvée';
            else return data;
        })
    },

    findLyrics (title) {
        
    }
}
   