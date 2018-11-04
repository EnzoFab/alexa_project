const sentences = {
    OPENNING_SENTENCES: [
        'Bienvenue dans ma tête, si c\'est ta première utilisation tu peux demander de l\'aide en disant: "aide moi". ' +
        'Qu\'est ce que je peux faire pour toi ?',
        'Dans ma tête il se passe beaucoup de chose ! Commence ta phrase par: "trouve moi le titre de", ou "c\'est quoi le titre de". ' +
        'Puis donne moi les paroles. J\'essaierai de trouver un titre. ' +
        'Tu peux aussi me demander la meilleure musique de ton genre musical préféré. Je t\'ecoute ',
        //'Je vais essayer de trouver le titre de ta chanson, tu as les paroles ?',
        'Bonjour, demande moi trouver le titre d\'une musique en me donnant des paroles, ' +
        'ou demande de moi la meilleure musique de ton genre musical préféré.',
        'Laisse moi t\'aider. Demande moi le titre d\'une musique dont tu connais quelques paroles' +
        ' j\'essaierai de te la retrouver',
        //'Oui je suis là ! Je vais trouver le titre que tu cherches !',
        //'Un titre contre des paroles ! Marché conclut ?',
        //'Qu\'est ce que je peux faire pour t\'aider ?',
        //'Je t\'ecoute, donne moi des paroles je trouverai le titre',
        //'As tu les paroles du titre de musique que tu cherches ?'
    ],
    HELP_SENTENCES: [
        'Je trouve les titres de chanson dont tu connais les paroles ! Par exemple tu peux dire: Donne moi le titre de ramenez la coupe à la maison !',
        'Pour trouver un titre, donne moi les paroles en commençant ta phrase par : "Donne moi le titre de" ou "connais tu le titre de". ' +
        'Si le titre renvoyé ne convient pas, tu peux passer au titre suivant en disant: "essaie la suivante" ou "pas du tout".' +
        'Si aucune proposition ne convient essaie de recommencer en parlant lentement. ' +
        'Tu peux aussi valider une proposition pour que j\'arrête de chercher en disant "Oui c\'est celle là" ou "Tout à fait." ',
        'Tu peux aussi avoir mes chansons préférées par genre ! ' +
        'Par exemple: "Ton titre préféré Pop" ou "les meilleures musiques du genre Trap"',
        `Si tu cherches un titre, choisis parmi les phrases suivantes :
                "connais tu le titre de" ,
                "trouve moi la chanson ", "parole", "peux tu me trouver ces paroles", "peux tu me trouver le titre de", 
                "C'est quoi le titre de", "Tu connais le titre de", "Je cherche le titre de", "Retrouve moi le titre de", 
                "Trouve moi le titre de. Puis donne les paroles de ta musique".`
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
        'Je te propose *, ma chanson préférée du genre #.',
        '*, un titre incontournable du genre # !',
        'Qui peut s\'asseoir à une table et dire qu\'il est meilleur que * en # ? ',
        '*, le meilleur du genre # !'
    ],
    SUCCESS: [
        //'Où est la concurrence ?',
        //'La seule chose que je ne sais pas, pourquoi je sais tout ?',
        'Encore gagné !',
        'Coup de chance ? Hum.. je ne crois pas !',
        'Ravie d\'avoir pu aider !',
        'J\'en etais sure !',
        'Super !',
        'Génial !',
        'Qui a parlé d\'efficacité ?',
        'Pas convaincu ? Réessaie je te montre !'
    ],
    FAILURE: [
        'Désolé je n\'ai rien trouvé',
        'J\'ai épuisé le stock, plus aucune proposition...',
        'Je n\'ai plus rien à proposer essayez autre chose',
        'Je n\'ai plus rien... Je ferai mieux la prochaine fois. Promis !',
        'Hum... Je n\'ai pas réussi à trouvé cette fois ci...',
        'Je n\'ai plus rien',
        'Je ne sais plus quoi dire..',
        'Je ne peux pas faire mieux désolé...'
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
        'Ah bon ? Vous voulez jouer au ni Oui ni Non ? Dommage je n\'ai pas cette fonctionnalité !',
        'Oui quoi ?',
        'Plait-il ?',
        'Quoi encore ?',
        'Je sais'
    ], // returns to a basic yes intent => the user haven't searched yet
    NO_SENTENCES: [
        'Non quoi ?',
        'Oui ?',
        'Que voulais vous ?',
        'Ok !',
        'D\'accord !',
        'Je n\'ai rien demandé !',
        'Hum...',
        'Très bien alors !',
        'Ah bon ? Vous voulez jouer au ni Oui ni Non ? Dommage je n\'ai pas cette fonctionnalité'
    ], // returns to a basic no intent => the user haven't searched yet
    CLOSE_SENTENCES: [
        'Aurevoir !',
        'A bientôt !',
        'Je vais me reposer un peu...',
        'A très vite !',
        'Ce n\'est qu\'un aurevoir !'
    ]
};


module.exports = sentences;