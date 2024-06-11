const getUserInfo = () => {
  return {
    name : '유호영',
    age : 28,
    job : '학생'
  }
}

const formComponent = (action, method) => {
  const userInfo = getUserInfo();
  return `
  <form action="${action} method=${method}">
    <label for="name">이름:</label>
    <input type="text" id="name" name="name" value="" required>
    <label for="age">나이:</label>
    <input type="number" id="age" name="age" value="" required>
    <label for="job">직업:</label>
    <input type="text" id="job" name="job" value="" required>
    <input type="submit" value="제출">
  </form>
  `
}