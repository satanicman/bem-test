module.exports = {
    block: 'page',
    title: 'Главная страница',
    favicon: '/favicon.ico',
    head: [
        {elem: 'meta', attrs: {name: 'description', content: ''}},
        {elem: 'meta', attrs: {name: 'viewport', content: 'width=device-width, initial-scale=1'}},
        {elem: 'css', url: 'index.css'}
    ],
    scripts: [{elem: 'js', url: 'index.min.js'}],
    mods: {theme: 'test'},
    content: [
        "test",
        {
            block: 'icon',
            mods: {type: 'meet'}
        }
    ]
};
