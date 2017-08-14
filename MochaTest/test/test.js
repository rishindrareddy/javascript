const assert = require('chai').assert;
//const sayHello = require('../app').sayHello;
//const addNumbers = require('../app').addNumbers;
const app = require('../app');

describe('App', function(){

  describe('sayHello', function(){

    it('App should return hello', function(){
      let result = app.sayHello();
    assert.equal(result,'hello');
    });

    it('sayHello should return type string', function(){
      let result = app.sayHello();
      assert.typeOf(result,'string');
    });

  });

describe('addNumbers',function(){

  it('addNumbers should be above 15', function(){
    let result = app.addNumbers(10,20);
    assert.isAbove(result,15);
  });

  it('addNumbers should return type number', function(){
    let result = app.addNumbers(2,3);
    assert.typeOf(result,'number');
  });
  
});

});
