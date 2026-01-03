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
