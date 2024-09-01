
var words=null


const config = {
  version:1,
  owner:"reymart",
  title:"Profile",
  profile_info: {
    Name: "Reymart Centeno"
  }
}

class Student{
  constructor(name, age){
    this.name = name;
    this.age = age;
    this.status = "alive"
    this.kill = function (){
      this.status = "dead"
    }
  }
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
    
    
    function  optionMessage(value) {
      localStorage.setItem("msg",value)
    }


function getData(url){
            return fetch(url)
                .then((response) => { 
                  return response.json().then((data) => {
                  return data;
              }).catch((err) => {
                  console.log(err);
              }) 
          });
        }

const Earl = new Student("Earl Matthew", 18)

export default {Earl, sendMessage, getData}