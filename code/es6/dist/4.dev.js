"use strict";

// 闭包
function sayHi(person) {
  var name = person.name;
  setTimeout(function () {
    console.log('Hello, ' + name);
  }, 3000);
}

var someone = {
  name: 'Dan'
};
sayHi(someone);
someone = {
  name: 'Yuzhi'
};
sayHi(someone);
someone = {
  name: 'Dominic'
};
sayHi(someone);