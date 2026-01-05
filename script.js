const all = document.querySelector(".all");
const btn = document.querySelector(".menu-btn");
const overlay = document.querySelector(".overlay");

btn.onclick = () => all.classList.toggle("menu-open");
overlay.onclick = () => all.classList.remove("menu-open");


const btnprva = document.getElementById('idbtnprva')
const menulogo = document.getElementById('menulogo')
const logotext = document.getElementById('logotext')
const prvasmenawrapper = document.getElementById('prvasmenawrapper')
const navarrow = document.getElementById('navarrow')




btnprva.onclick = () => {
    all.style.display = 'none';
    menulogo.style.display = 'none'
    logotext.style.display = 'none'

    prvasmenawrapper.style.display = 'block'
    navarrow.style.display = 'block'



}


navarrow.onclick = () => {
        all.style.display = 'block'
    menulogo.style.display = 'block'
    logotext.style.display = 'block'

    prvasmenawrapper.style.display = 'none'
    navarrow.style.display = 'none'

}


let startX = 0;
let endX = 0;
const minSwipeDistance = 60; // px

const body = document.body;

document.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

document.addEventListener('touchend', (e) => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  const diff = startX - endX;

  // Swipe s desna ka levo → otvori meni
  if (diff > minSwipeDistance) {
    body.classList.add('menuopen');
  }

  // Swipe s leva ka desno → zatvori meni
  if (diff < -minSwipeDistance) {
    body.classList.remove('menuopen');
  }
}






