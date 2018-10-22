const sentences = {
    OPENNING_SENTENCES: [
        'Salut l\'ami ! Je sens que tu as besoin d\'aide',
        'Salut toi ! Je vais essayer de trouver le titre de ta chanson, tu as les paroles ?',
        'Du travail pour moi boss ?',
        'Hey ! Laisse moi t\'aider avec la musique que tu as dans la tête !',
        'C\'est qui cette Alexa dont tout le monde parle ?',
        'Oui je le suis ! Je vais trouver le titre que tu cherches !',
        'Un titre contre des paroles ! Marché conclut ?',
        'Que me voulez vous ?'
    ],
    HELP_SENTENCES: [
        'Donne moi juste des paroles je ferai le reste !',
        'Je trouve les titres de chanson dont tu connais les paroles !',
        'Si tu parles clairement je devrais m\'en sortir !',
        'Donne moi des paroles. Par exemple: ramenez la coupe à la maison !'
    ],
    MUSIC_SEARCH_RETURN_SENTENCES: [ // '*' will be replace by the title of the song
        'J\'aime bien celle la, *, pas toi ?',
        '*, une chason magnifique, tu aimes aussi ?',
        'Si mes recherches sont exactes, c\'est * que tu cherchais ?',
        'C\'est bien * ?',
        'Je parie que c\'est celle là * ?',
        'Je pense que c\'est *',
        'Je tente ma chance, *, J\'ai juste ?'
    ],
    SUCCESS: [
        'Où est la concurrence ?',
        'La seule chose que je ne sais pas, pourquoi je sais tout ?',
        'Encore gagné !',
        'Autre chose ?',
        'Je m\'impression toute seule',
        'Moi aussi je suis championne du monde qu\'est ce que tu crois !',
        'je suis devenu celui dont aurait rêvé celui que je rêvais d\'être !',
        'Qui a parlé d\'efficacité ?',
        'Pas convaincu ? Réessaie je te montre !'
    ],
    FAILURE: [
        'Désolé je n\'ai rien trouvé boss',
        'J\'ai épuisé le stock, plus aucune proposition...',
        'J\'ai plus rien à proposer essayez autre chose',
        'J\'ai plus rien... Je ferai mieux la prochaine fois. Promis !',
        'Hum... Je n\'ai pas réuissi à trouvé cette fois ci...',
        'J\'ai plus rien, j\'ai honte..',
        'Je n\'ai pas trouvé.. Que celui qui n\'a jamais péché me jette la première pierre !'
    ],
    MUSIC_NOT_FOUND_SENTENCES: [ // go to the next music
        'Laisse moi réessayer, * ?',
        'C\'est peut-être celle-ci, * ?',
        '*, me semble un meilleur choix !',
        'C\'est forcément celle là, * !',
        'Ca ne peut être que, * !'
    ],
    YES_SENTENCES: [
        'Ah bon, Tu veux jouer au ni Oui ni Non ? Dommage tu as déjà perdu !',
        'Oui quoi ?',
        'Plait-il ?',
        'Quoi encore ?',
        'Je sais',
        'Second,  poteau, Pavaaaard !'
    ], // returns to a basic yes intent => the user haven't searched yet
    NO_SENTENCES: [
        'Non quoi',
        'Oui ?',
        'Tu veux quoi ?',
        'Ok !',
        'D\'accord',
        'Je ne t\'ai rien demandé !',
        'Hum...',
        'Très bien alors',
        'Ah bon, Tu veux jouer au ni Oui ni Non ? Dommage tu as déjà perdu !'
    ], // returns to a basic no intent => the user haven't searched yet
    CLOSE_SENTENCES: [
        'Aurevoir !',
        'A bientôt l\'ami !',
        'Je vais me reposer un peu...',
        'A très vite mon pote !',
        'Ce n\'est qu\'un aurevoir !'
    ]
};


module.exports = sentences;