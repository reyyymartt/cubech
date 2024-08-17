



const devs=[
  {
    name: "Reymart, C.",
    description: "Our goal is to be globaly competent and innovative",
    profile: "me.jpg"
  }
]

const texts = ["CubeTech","Innovative Designs","Creative devs","Unique styles","-£(_-#(£:#("]

var rand = function(max) {
  return Math.floor(Math.random() * max);
};

window.onload = function (){
  const title = document.getElementById("tit")
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
