const list = document.querySelector('.header__list')

document.querySelector('.burger').addEventListener('click',(e)=>{
   list.classList.toggle('active')
   e.target.classList.toggle('active')
})