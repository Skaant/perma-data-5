const EmailChainItem = require('../../../../../../../../../../_patterns/_chains/_classes/EmailChainItem/EmailChainItem')
const mailer = require('../../../../../../../../../../_utils/mailer/mailer')

module.exports = new EmailChainItem(
  ({
    user
  }) =>
  
    new Promise((resolve, reject) => {
    
      mailer()
        .sendMail({
          from: 'Support PERMA-DATA <support@permadata.net>',
          to: user.email,
          subject: 'Confirmez votre email',
          text: `
Bonjour et bienvenue sur PERMA-DATA !

Vous venez de vous inscrire à la version alpha* de PERMA-DATA et nous vous en remercions chaleureusement :)

Pour finaliser votre inscription, vous devez confirmez votre adresse mail en cliquant sur le lien suivant :
https://permadata.net/verifiy-mail?token=${ user.verificationToken }

A très bientôt sur PERMA-DATA !

*Le projet est actuellement en version alpha : des bugs et des régressions peuvent se produire sur la plateforme.
Vous pouvez utiliser cette adresse pour signaler à notre équipe tout soucis que vous pourriez rencontrer.`,
          html: `
<h1>Bonjour et bienvenue sur <b>PERMA-DATA !</b></h1>
<br/><br/>
Vous venez de vous inscrire à la version <i>alpha</i>* de <b>PERMA-DATA</b> et nous vous en remercions chaleureusement :)
<br/><br/>
Pour finaliser votre inscription, <b>vous devez confirmez votre adresse mail en cliquant sur le lien suivant</b> :<br/>
<a href="https://permadata.net/verify-mail?token=${ user.verificationToken }">https://permadata.net/verify-mail?token=${ user.verificationToken }</a>
<br/><br/>
A très bientôt sur <b>PERMA-DATA</b> !<br/>
<br/><br/>
<i>*Le projet est actuellement en version alpha : des bugs et des régressions peuvent se produire sur la plateforme.<br/>
Vous pouvez utiliser cette adresse pour signaler à notre équipe tout soucis que vous pourriez rencontrer.</i>`
        })
        .then(() => resolve())
        .catch(err => reject(err))
  })
)