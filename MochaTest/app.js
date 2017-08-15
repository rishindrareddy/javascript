module.exports = {
  sayHello: function(){
    return 'hello';
  },

  addNumbers: function(num1, num2){
    return num1 + num2;
  },

  sum: function(...numbers){
    return numbers.reduce((a,b) => a+b);
  }
}
