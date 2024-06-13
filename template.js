const tagComponent = (tagName, textNode) => {
  return `<${tagName}>${textNode}</${tagName}>`;
}

const dateFunc = () => {
  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${month}월 ${day}일`;
}

const dateStatusFunc = () => {
  if(dateFunc() === '6월 12일'){
    return '날짜 맞음';
  } else {
    return '날짜 다름';
  }
}

const container = () => {
  return `
  ${tagComponent('header', '헤더부분')}
  ${tagComponent('main', dateStatusFunc())}
  ${tagComponent('footer', '푸터부분')}
  `;
}

console.log(container());