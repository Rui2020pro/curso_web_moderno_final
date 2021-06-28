module.exports = app => {
    const guardar = (req, res) => {
        res.send('user guardar')
    }

    return { guardar }
}