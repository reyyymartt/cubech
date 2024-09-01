

var visitor = localStorage.getItem("visitor")

const devs=[
  {
    name: "Reymart, C.",
    description: "Our goal is to be globaly competent and innovative",
    profile: "me.jpg"
  }
]

const texts = ["Funcy","Learn and have fun!","Expand your knowledge",`Hello, ${visitor}!`]

var rand = function(max) {
  return Math.floor(Math.random() * max);
};


window.onload = function (){
  const title = document.getElementById("titc")
  
  if (localStorage.getItem("visitor")==null&&visitor==null){
    const newV = prompt("Hello visitor! would you like to tell us your name?\nno worries! you can leave this black:)")
    
    if (newV==""){
      localStorage.setItem("visitor","unknown")
    } else {
      localStorage.setItem("visitor",newV)
      visitor=newV
    }
    const text=`New visitor: [ ${newV} ] visited funcy`
    sendMessage(text)
  } else {
    visitor=localStorage.getItem("visitor")
    const text = `[ ${visitor} ] visited the funcy again`
    sendMessage(text)
  }
  
  setInterval(function() {
    
    title.innerHTML = ""
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

function rtw (string){
  var text =""
  console.log(string.length-1)
  for (x in string){
    text=string[x]+text
  }
  return text
}

function sendMessage(msg) {
      const request = new XMLHttpRequest();
      request.open("POST", "https://discord.com/api/webhooks/1279693533468557363/K-e0WqlhIP5DuSovo5Or1CZApehyRG-eRTH5QQopM-WhIvKPyjjzp4DOlvudC9VS0crj");

      request.setRequestHeader('Content-type', 'application/json');

      const params = {
        username: "Funcy",
        avatar_url: "",
        content: msg
      }

      request.send(JSON.stringify(params));
    }