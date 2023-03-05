import favicon from './extensions/favicon.png'

export default {
  config: {
    locales: ['pt-BR'],
    tutorials: false,
    notifications: {
      releases: false,
    },
    translations: {
      en: {
        'app.components.LeftMenu.navbrand.title': 'Dashboard'
      },
      'pt-BR': {
        'app.components.LeftMenu.navbrand.title': 'Painel'
      }
    },
    head: {
      favicon: favicon,
    },
  },
  bootstrap() {
  },
};
