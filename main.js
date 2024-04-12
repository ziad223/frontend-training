// document.querySelector(".nav-links").onmouseover = function(){
//     document.querySelector(".mouse-menu").nextElementSibling.style.display = 'flex'
// }

// toolbar
setInterval(() =>{
    let dateNow = new Date();
    let hours = dateNow.getHours();
    if(hours < 10){
        hours = `0${hours}`
    }
    if(hours == '00'){
      hours = 12
    }
    if(hours > 12){
      hours = hours - 12
    }
    let minutes = dateNow.getMinutes();
    if(minutes < 10){
        minutes = `0${minutes}`
    }
    let seconds = dateNow.getSeconds();
    if(seconds < 10){
        seconds = `0${seconds}`
    }
    document.querySelector(".clock").innerHTML = `${hours} : ${minutes} : ${seconds}`;
} , 1000)



// navbar
document.querySelector(".nav-links.a").onclick = function(){
  document.querySelector(".nav-menu.abo").classList.toggle("open")
  document.querySelector(".nav-menu.ser").classList.remove("open")
  document.querySelector(".nav-menu.pag").classList.remove("open")
}
document.querySelector(".nav-links.s").onclick = function(){
  document.querySelector(".nav-menu.ser").classList.toggle("open")
  document.querySelector(".nav-menu.abo").classList.remove("open")
  document.querySelector(".nav-menu.pag").classList.remove("open")
}
document.querySelector(".nav-links.p").onclick = function(){
  document.querySelector(".nav-menu.pag").classList.toggle("open")
  document.querySelector(".nav-menu.ser").classList.remove("open")
}

  // btn-up

  window.onscroll = function(){
    if(window.scrollY > 800){
      document.querySelector(".btn-up").style.display = 'block';
    }else{
      document.querySelector(".btn-up").style.display = 'none';

    }
  }

  document.querySelector(".btn-up").onclick = function(){
    window.scrollTo({
      top : 0,
      behavior : 'smooth'
    })
  }

  // nav

