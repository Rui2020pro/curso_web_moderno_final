module.exports = app => {
    app.route('/users')
        .post(app.api.user.guardar) // api é a pasta, user é o nome do ficheiro, guardar é 								    // a função
}