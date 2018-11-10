
const replacer = [
    {
        origin: 'By',
        replace: 'de'
    },
    {
        origin: 'by',
        replace: 'de'
    },
    {
        origin: 'feat.',
        replace: 'avec'
    },
    {
        origin: 'Feat.',
        replace: 'avec'
    },
    {
        origin: 'Ft.',
        replace: 'avec'
    },
    {
        origin: '(',
        replace: ', '
    },
    {
        origin: ')',
        replace: ' '
    },
    {
        origin: '.',
        replace: '. '
    },
    {
        origin: '.  ',
        replace: '. '
    },
    {
        origin: `' `,
        replace: `'`
    },
    {
        origin: ' ,',
        replace: ','
    },
    {
        origin: '&',
        replace: ' et '
    },
    {
        origin: ' English Translation',
        replace: ''
    }


];


function replaceAll(str, origin, replacement) {
    return str.split(origin).join(replacement);
}

/**
 * remove ponctuation sign
 * @param str
 * @returns {*}
 */
function removePonctuation (str) {
    let ponctuations = [' ?', '  !', '?', '!', '#'];
    let withoutPonctuation = str;
    for (let i = 0; i < ponctuations.length; i++) {
        withoutPonctuation.split(ponctuations[i]).join('');
    }
    return withoutPonctuation
}

module.exports = {
    /**
     * format
     * @param slotValue
     */
    formatSlotValue (slotValue) {
        let formatedValue = slotValue.trim();
        for(let i = 0; i < replacer.length; i++) {
            formatedValue = replaceAll(formatedValue, replacer[i].origin, replacer[i].replace)
            // formatedValue = slotValue.replace(new RegExp(replacer[i].origin, 'g'), replacer[i].replace);
        }
        return removePonctuation(formatedValue);
    },

    /**
     * format the title of the song in french
     * @param title
     */
    formatTitle (title) {
        let formated_title = title;
        for(let i = 0; i < replacer.length; i++) {
            formated_title = replaceAll(formated_title, replacer[i].origin, replacer[i].replace)
            //formated_title.replace(new RegExp(replacer[i].origin, 'g'), replacer[i].replace);
        }
        return formated_title
    }
};