const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
})

window.onscroll = function(){
  const nav = document.querySelector('nav');
  const fixedNav = nav.offsetTop;

  if(window.pageYOffset > fixedNav){
    nav.classList.add('navbar-fixed');
  } else {
    nav.classList.remove('navbar-fixed');
  }
}


// modal
window.addEventListener('DOMContentLoaded', () =>{
  const overlay = document.querySelector('#overlay')
  const delBtn = document.querySelector('#show-modal')
  const closeBtn = document.querySelector('#close-modal')
  const closeBtn2 = document.querySelector('#close-modal2')

  const toggleModal = () => {
      overlay.classList.toggle('hidden')
      overlay.classList.toggle('flex')
  }

  delBtn.addEventListener('click', toggleModal)

  closeBtn.addEventListener('click', toggleModal)
  closeBtn2.addEventListener('click', toggleModal)
})