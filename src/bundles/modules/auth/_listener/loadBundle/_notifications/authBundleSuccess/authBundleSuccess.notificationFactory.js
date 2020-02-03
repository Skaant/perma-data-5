import notificationFactory from "../../../../../main/_reducer/notifications/_utils/notificationFactory/notificationFactory";

export default user => 

  notificationFactory({
    title: 'Chargement réussi !',
    content: [
      user.pseudo
        + ',',
      'Encore bienvenu·e sur PERMA-DATA.',
      '',
      'Fermez ce message pour accéder l\'application.'
    ],
    timeout: 5000
  })