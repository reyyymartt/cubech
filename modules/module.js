
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


const Earl = new Student("Earl Matthew", 18)

export default {Earl}