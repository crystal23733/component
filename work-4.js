const component = (age, job) => {
  let obj = {
    name : '유호영',
    age : age,
    job : job
  };

  let innerFunc = () => {
    if(obj.age > 20){
      return '여름엔 역시 칵테일이 최고지!';
    } else {
      return '여름엔 논알콜 칵테일이 최고지!';
    }
  }

  let anotherFunc = () => {
    if(obj.job === '학생'){
      return '이사람은 학생임';
    } else {
      return '학생이 아님';
    }
  }

  return `
  <h1>${obj.name}</h1>
  <h2>${innerFunc()}</h2>
  <h3>${anotherFunc()}</h3>
  `;
}