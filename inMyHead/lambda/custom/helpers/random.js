module.exports = {
    /**
     * @param top_limit: Int
     * @return number random number between 0 and top_limit (exclude)
     */
    randomNumber (top_limit) {
        return Math.round(Math.random() * top_limit)
    }
};