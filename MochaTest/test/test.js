const assert = require('chai').assert;
//const sayHello = require('../app').sayHello;
//const addNumbers = require('../app').addNumbers;
const app = require('../app');
let sinon = require('sinon');

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


describe('sum function', function(){

  it('sum function should return 25', function(){
    let sinonSpy = sinon.spy(app.sum);
  let result = app.sum(5,5,5,5,5);
  assert.equal(result,25);
  assert(sinonSpy.calledOnce);
  });

  // it('sum should return type number', function(){
  //   let result = app.sum(2,3,5,8,7,14,3);
  //   assert.typeOf(result,'number');
  // });


});

});
