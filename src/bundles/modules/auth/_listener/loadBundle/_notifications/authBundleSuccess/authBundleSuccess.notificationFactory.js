import notificationFactory from "../../../../../main/_reducer/notifications/_utils/notificationFactory/notificationFactory";

export default () => 

  notificationFactory({
    title: 'Application chargée !',
    content: 'À vous de jouer !',
    timeout: 5000
  })