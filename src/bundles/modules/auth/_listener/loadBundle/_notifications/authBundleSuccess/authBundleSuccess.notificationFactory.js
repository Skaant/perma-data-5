import notificationFactory from "../../../../../main/_reducer/notifications/_utils/notificationFactory/notificationFactory";

export default user => 

  notificationFactory({
    title: 'Application chargée !',
    content: [
      user.pseudo
        + ',',
      'Encore bienvenu·e sur PERMA-DATA.',
      '',
      'Fermez ce message pour accéder l\'application.'
    ],
    timeout: 0
  })