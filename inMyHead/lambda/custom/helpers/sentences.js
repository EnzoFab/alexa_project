const sentences = {
    OPENNING_SENTENCES: [
        'Salut l\'ami ! Je sens que tu as besoin d\'aide',
        'Salut toi ! Je vais essayer de trouver le titre de ta chanson, tu as les paroles ?',
        'Du travail pour moi boss ?',
        'Hey ! Laisse moi t\'aider avec la musique que tu as dans la tête !',
        'C\'est qui cette Alexa dont tout le monde parle ?',
        'Wesh, chante un coup ? (pas trop vite quand même)',
        'Vous là ! tu vous me voulez quoi ?'
    ],
    HELP_SENTENCES: [
        'Donne moi juste des paroles je ferai le reste !',
        'Je trouve les titres de chanson dont tu connais les paroles !',
        'Un titre contre des paroles ! Marché conclut ?',
        'Si tu parles clairement je devrais m\'en sortir !'
    ],
    MUSIC_SEARCH_RETURN_SENTENCES: [ // '*' will be replace by the title of the song
        'J\'aime bien celle la, *, pas toi ?',
        '*, une chason magnifique, tu aimes aussi ?',
        'Si mes recherches sont exactes, c\'est * que tu cherchais ?',
        'C\'est bien * ?',
        'Je parie que c\'est celle là * ?'
    ],
    SUCCESS: [
        'Où est la concurrence ?',
        'La seule chose que je ne sais pas, pourquoi je sais tout ?',
        'Encore gagné !',
        'Autre chose ?',
        'Je m\'impression toute seule',
        'Moi aussi je suis championne du monde qu\'est ce que tu crois !'
    ],
    MUSIC_NOT_FOUND_SENTENCES: [ // go to the next music
        'Laisse moi réessayer, * ?',
        'C\'est peut-être celle-ci, * ?',
        '*, me semble un meilleur choix !',
        'C\'est forcément celle là, * !',
        'Ca ne peut être que, * !'
    ],
    YES_SENTENCES: [
        'Tu veux jouer au ni Oui ni Non ? Dommage tu as déjà perdu !',
        'Oui quoi ?',
        'Plait-il ?',
        'Quoi encore ?',
        'Je sais',
        'Second poteau Pavard !'
    ], // returns to a basic yes intent => the user haven't searched yet
    NO_SENTENCES: [
        'Ok mec !',
        'D\'accord',
        'Je ne t\'ai rien demandé !',
        'Reste souple !'
    ], // returns to a basic no intent => the user haven't searched yet
    CLOSE_SENTENCES: [
        'Aurevoir !',
        'A bientot l\'ami !',
        'Je vais me reposer un peu...'
    ]
};


module.exports = sentences;