const sentences = {
    OPENNING_SENTENCES: [
        'Salut l\'ami ! Je sens que tu as besoin d\'aide',
        'Salut toi ! Je vais essayer de trouver le titre de ta chanson, tu as les paroles ?',
        'Du travail pour moi boss ?',
        'Bonjour, bonjour, je peux aider ?',
        'Hey ! Laisse moi t\'aider avec la musique que tu as dans la tête !',
        'C\'est qui cette Alexa dont tout le monde parle ?',
        'Oui je suis là ! Je vais trouver le titre que tu cherches !',
        'Un titre contre des paroles ! Marché conclut ?',
        'Qu\'est ce que je peux faire pour t\'aider ?',
        'Je t\'ecoute'
    ],
    HELP_SENTENCES: [
        'Donne moi juste des paroles je ferai le reste !',
        'Je trouve les titres de chanson dont tu connais les paroles !',
        'Si tu parles clairement je devrais m\'en sortir !',
        'Donne moi des paroles. Par exemple: ramenez la coupe à la maison !',
        'Commence ta phrase par: <emphasis level="strong">trouver moi le titre de, ou c\'est quoi le titre de</emphasis>. ' +
        'Puis donne moi les paroles et le tour est joué !',
        'Tu peux aussi avoir mes chansons préféré par genre ! ' +
        '<emphasis level="strong">exemple: Ton titre préféré Pop</emphasis>'
    ],
    MUSIC_SEARCH_RETURN_SENTENCES: [ // '*' will be replace by the title of the song
        'J\'aime bien celle la, *, pas toi ?',
        '*, une chanson magnifique, tu aimes aussi ?',
        'Si mes recherches sont exactes, c\'est * que tu cherchais ?',
        'C\'est bien * ?',
        'Je parie que c\'est celle là * ?',
        'Je pense que c\'est *',
        'Je tente ma chance, *, J\'ai juste ?'
    ],
    MUSIC_SEARCH_TOP_SENTENCES: [
        'Pour le genre #, je te propose *, un grand classique !',
        '*, un titre incontournable du genre # !',
        'Qui peut s\'asseoir à une table et dire qu\'il est meilleur que * en # ? ',
        '*, le meilleur du genre # !'
    ],
    SUCCESS: [
        'Où est la concurrence ?',
        'La seule chose que je ne sais pas, pourquoi je sais tout ?',
        'Encore gagné !',
        'Coup de chance ? Hum.. je crois pas !',
        'Autre chose ?',
        'Je m\'impressionne toute seule',
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
        'Hum... Je n\'ai pas réussi à trouvé cette fois ci...',
        'J\'ai plus rien, j\'ai honte..',
        'Je n\'ai pas trouvé.. Que celui qui n\'a jamais péché me jette la première pierre !',
        'Je ne sais plus quoi dire..'
    ],
    MUSIC_NOT_FOUND_SENTENCES: [ // go to the next music
        'Laisse moi réessayer, * ?',
        'C\'est peut-être celle-ci, * ?',
        '*, me semble un meilleur choix !',
        'C\'est forcément celle là, * !',
        'Ca ne peut être que, * !',
        '* ?',
        'Je pense que c\'est *',
        'Je retente ma chance, * ?',
        'C\'est *, Plus aucun doute !',
        'Pourquoi pas celle-ci, * ?'
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
        'Je n\'ai rien demandé !',
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