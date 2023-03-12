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
        'app.components.LeftMenu.navbrand.title': 'Dashboard',
        'Auth.form.welcome.title': 'Welcome!',
        'Auth.form.welcome.subtitle': 'Login in to your account',
        'Auth.form.register.subtitle': "Credentials are only used to authenticate. All saved data will be stored in your database."
      },
      'pt-BR': {
        'app.components.LeftMenu.navbrand.title': 'Painel',
        'Auth.form.welcome.subtitle': 'Acesse a sua conta',
      }
    },
    head: {
      favicon: favicon,
    },
  },
  bootstrap() {
  },
};
