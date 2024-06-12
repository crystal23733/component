class BasicData {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }
  set name(value){
    if(typeof value === 'string'){
      this._name = value;
    }
  }
  get name(){
    return this._name;
  }
  set age(value){
    if(typeof value === 'number'){
      this._age = value;
    }
  }
  get age(){
    return this._age;
  }
  set job(value){
    if(typeof value === 'string'){
      this._job = value;
    }
  }
  get job(){
    return this._job;
  }
}

const objContent = (tagName, text) => {
  for(const value in text){
    return `<${tagName}>${text[value]}</${tagName}>`;
  }
}



const component = () => {
  let obj = new BasicData('유호영', 28, '학생');
  
  const decision = (obj) => {
    if(obj instanceof BasicData === true){
      return true;
    } else {
      return false;
    }
  }
  
  console.log(objContent('h1', obj));
  if(decision(obj) === 'true'){
    console.log('성공')
    // return `
    //   <html>
    //     <head>
    //       <meta charset='utf-8'>
    //     </head>
    //     <body>

    //     </body>
    //   </html>
    //   `;
  } 
}

component();