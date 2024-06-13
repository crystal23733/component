class Room {
  constructor(){
    this.computer = ['본체2', '키보드3', '마우스2', '스피커2', '헤드셋2', '헤드셋 거치대', '마우스 패드2'];
    this.medicine = ['마데카솔', '밴드', '타이레놀'];
    this.book = ['셜록홈즈 시리즈', '스케치북'];
    this.chair = '의자2';
    this.desk = '책상2';
  }
}

// *root 선택자
const root = document.getElementById('root');

// *태그 생성
const ul = (li) => {
  return `
  <ul>${li}</ul>
  `;
}

const objContent = (tagName, text) => {
  let contents = [];
  for(const value in text){
    contents.push(`<${tagName}>${text[value]}</${tagName}>`);
  }
  return contents.join('');
}

const component = () => {
  let obj = new Room();
  
  const decision = () => {
    if(obj instanceof Room){
      return true;
    } else {
      return false;
    }
  }
  
  if(decision() === true){
    return `
          ${ul(objContent('li', obj))}
      `;
  } 
}

root.innerHTML = component();