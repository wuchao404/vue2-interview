// ``字面量
(function(){
    var name = 'zhangsan', age = 23, year = 'year';
    function cast(strings = [], ...values){
        return strings.reduce((str, text, i) => 
            (str += text + (values[i] || ''))
        ,"")
    }
    var text = cast`my name is ${name}, age is ${age}${year}, sex is `;
    console.log(text)
})()