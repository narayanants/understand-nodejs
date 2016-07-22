// by value
function change(b){
    b = 2;
    console.log(b);
}

var a = 1;
change(a);
console.log(a);


// pass by referene

function changeObj(d) {
    d.prop1 = function(){};
    d.prop2 = {};
}

var c = {};
c.prop1 = {};
changeObj(c);
console.log(c);