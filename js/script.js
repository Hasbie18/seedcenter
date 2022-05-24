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