const Person = function(name){
    this.name = name
}
Person.prototype.getName = function(){
    console.log(this.name);
}

Person.prototype.name = 'name'

const Man = function(sex){
    this.sex = sex
}
Person.prototype.getSex = function(){
    console.log(this.sex);
}

const _extends = function(Sup, Sub){
    for(var k in Sup){
        if (Sup.hasOwnProperty(k)){
            Sub[k] = Sup[k];
        }
    }
    Sub.prototype = Sup.prototype;
    var obj = 
}

