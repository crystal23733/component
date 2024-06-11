const a = (name, age, job) => {
  return {
    name : name,
    age : age,
    job : job
  }
}

// console.log(a());
const b = a('유호영', 28, '학생');
console.log('첫 번째 b:', b);
b.address = '대전';
console.log('두 번째 b:', b);