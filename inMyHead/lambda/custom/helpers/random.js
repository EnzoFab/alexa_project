
const rn = require('random-number');

module.exports = {
    /**
     * @param top_limit: Int
     * @return number random number between 0 and top_limit (exclude)
     */
    randomNumber (top_limit) {
         let gen = rn.generator({
             min: 0,
             max:  top_limit - 1,
             integer: true
         });
        return gen();
        //return Math.floor(Math.random() * Math.floor(top_limit))
    }
};


