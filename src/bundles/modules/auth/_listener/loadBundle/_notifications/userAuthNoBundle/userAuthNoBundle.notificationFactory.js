import notificationFactory from "../../../../../main/_reducer/notifications/_utils/notificationFactory/notificationFactory";

export default () =>

  notificationFactory({
    title: 'Connexion réussie ...',
    content: 'L\'application est en train de charger'
  })