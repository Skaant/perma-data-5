import React, {
  useState
} from 'react'

export default ({
  closeModal
}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signIn = () =>
    fetch('/login/signIn', {
      method: 'post',
      body: JSON.stringify({
        email,
        password: btoa(password)
      })
    })

  return (
    <div id='login-modal'
        className='modal fade right'>
      <div className='modal-dialog modal-side modal-top-right mr-4'
          role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>
              Connexion</h5>
            <button type='button'
                className='close'
                onClick={ closeModal }>
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body bg-danger'>
            <div className='container'>
              <h3 className='row text-white mt-4 pl-2'>
                Déjà enregistré ?</h3>
              <form className='row px-4'>
                <style scoped>
                  {
                    `.navbar.navbar-dark form .md-form input.form-control:focus {
                        border-bottom: 2px white solid !important;
                        box-shadow: none;
                    }`
                  }
                </style>
                <div className='md-form col-12 mb-2'>
                  <input type='email'
                      className='form-control'
                      placeholder='E-mail'
                      value={ email }
                      onChange={ e =>
                        setEmail(e.target.value) }/>
                </div>
                <div className='md-form col-12'>
                  <input type='password'
                      className='form-control'
                      placeholder='Mot de passe'
                      value={ password }
                      onChange={ e =>
                        setPassword(e.target.value) }/>
                </div>
              </form>
            </div>
          </div>
          <div className='modal-footer'>
            <button type='button'
                className='btn btn-outline-danger'
                onClick={ closeModal }>
              Close</button>
            <button type='button'
                className='btn btn-danger'
                onClick={ signIn }>
              Connexion</button>
          </div>
        </div>
      </div>
    </div>
  )
}