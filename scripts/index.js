



const devs=[
  {
    name: "Reymart, C.",
    description: "Our goal is to be globaly competent and innovative",
    profile: "me.jpg"
  }
]

const bgs=["bg1.gif","bg2.gif","bg3.gif"]

function loadDevs(){
  const devs = document.getElementById("devs")
}

var rand = function(max) {
  return Math.floor(Math.random() * max);
};

window.onload = function (){
  const bg = document.getElementById("headPage")
  setInterval(function() {
    bg.style.backgroundImage = `url(/assets/${bgs[rand(bgs.length)]})`
  }, 10000);
}
