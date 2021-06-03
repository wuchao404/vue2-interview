const Person = function(name){
    this.name = name
}
Person.prototype.getName = function(){
    console.log(this.name);
}

const _new = function(){
    var obj = Object();
    var Constructor = [].shift.call(arguments);
    obj.__proto__ = Constructor.prototype;
    Constructor.apply(obj,arguments);
    return obj;
};
var p = _new(Person,'buzz');
console.log(p.name)
console.log(p.getName())