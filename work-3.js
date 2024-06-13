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

const root = document.getElementById('root');

const objContent = (tagName, text) => {
  let contents = [];
  for(const value in text){
    contents.push(`<${tagName}>${text[value]}</${tagName}>`);
  }
  return contents.join('');
}



const component = () => {
  let obj = new BasicData('유호영', 28, '학생');
  
  const decision = () => {
    if(obj instanceof BasicData){
      return true;
    } else {
      return false;
    }
  }
  
  if(decision() === true){
    return `
          ${objContent('h1', obj)}
      `;
  } 
}

root.innerHTML = component();