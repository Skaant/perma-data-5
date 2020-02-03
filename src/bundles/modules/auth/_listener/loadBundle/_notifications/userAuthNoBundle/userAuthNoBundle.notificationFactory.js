import notificationFactory from "../../../../../main/_reducer/notifications/_utils/notificationFactory/notificationFactory";

export default () =>

  notificationFactory({
    title: 'Connecté !',
    content: [
      'L\'application est en train de charger ...',
      '',
      'Selon votre connexion cela peut prendre quelques secondes.'
    ]
  })