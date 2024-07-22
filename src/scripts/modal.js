const INFOBUTTON = document.querySelector('.info__button')
const MODAL = document.querySelector('.modal')
const CLOSEBUTTOM = document.querySelector('.modal__close')

const ENTERBUTTON = document.querySelector('#enter')
const REGBUTTON = document.querySelector('#reg')

const openModal = () =>  MODAL.hidden = false 
const closeModal = () => MODAL.hidden = true
const sendFormData = (e) => {
  e.preventDefault()
  const form = e.target.closest('form')
  const data = new FormData(form)
  const dataToSend = {
    email: data.get('email'),
    password: data.get('password'),
    remember: !!data.get('remember'),
  }

  console.log(dataToSend)
  closeModal()
}

INFOBUTTON.addEventListener('click', openModal)
CLOSEBUTTOM.addEventListener('click', closeModal)

ENTERBUTTON.addEventListener('click', sendFormData)
REGBUTTON.addEventListener('click', sendFormData)
