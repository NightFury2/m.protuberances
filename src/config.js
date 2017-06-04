require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || '127.0.0.1',
  apiPort: process.env.APIPORT || '8000',
  app: {
    title: 'Protuberance Show',
    description: 'Официальный сайт Театр танца и огня Protuberance (Протуберанс, Протуберанец)',
    head: {
      titleTemplate: 'Театр огня и танца Protuberance: %s',
      meta: [
        {name: 'description', content: 'Официальный сайт Театр танца и огня Protuberance (Протуберанс, Протуберанец)'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'Protuberance Show'},
        {property: 'og:image', content: 'http://protuberances.ru/static/img/logo_protub.png'},
        {property: 'og:locale', content: 'ru-RU'},
        {property: 'og:title', content: 'Protuberance Show'},
        {property: 'og:description', content: 'Официальный сайт Театр танца и огня Protuberance (Протуберанс, Протуберанец)'},
        {property: 'og:card', content: 'summary'},
        {property: 'og:site', content: 'Protuberance Theatre'},
        {property: 'og:creator', content: '@NightFury'},
        {property: 'og:image:width', content: '200'},
        {property: 'og:image:height', content: '200'}
      ]
    }
  },

}, environment);
