



const devs=[
  {
    name: "Reymart, C.",
    description: "Our goal is to be globaly competent and innovative",
    profile: "me.jpg"
  }
]

const bgs=["bg1.gif","bg2.gif","bg3.gif"]
const texts = ["CubeTech","Innovative Designs","Creative devs","Unique styles"]

function loadDevs(){
  const devs = document.getElementById("devs")
}

var rand = function(max) {
  return Math.floor(Math.random() * max);
};

window.onload = function (){

  const bg = document.getElementById("headPage")
  const title = document.getElementById("tit")
  setInterval(function() {
    bg.style.backgroundImage = `url(/assets/${bgs[rand(bgs.length)]})`
  }, 10000);
  
  setInterval(function() {
    title.innerText = ""
    var i = 0
    txt = texts[rand(texts.length)]
    var speed = 50
    function typeWriter() {
       if (i < txt.length) {
        title.innerHTML += txt.charAt(i);
        i++;
      setTimeout(typeWriter, speed);
     }
    }
    typeWriter()
  }, 5000);
}
