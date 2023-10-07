

// const elements = ['B', 'i', 'a', 'n', 'c', 'a'];


// function returnConcat(elements) {
//     console.log(elements.join(''));
// }

//returnConcat(elements);

var a = "casa";
var b = "pana";

function returnNoCh(a, b) {

    var no = 0;
    if(a.length != b.length) {
        return -1;
    }
    for(i = 0; i < a.length; i++) {
        if(a[i] != b[i]){
            no++;
        }
    }

    return no;
}

console.log(returnNoCh(a, b));