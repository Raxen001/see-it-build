let a = document.getElementById('').addEventListener("click" , counter);
let b= document.getElementById('countbar');
let c = document.getElementById('');
let d = document.getElementById('cartid');

let count = 0;

function counter(){
        count++;
    d.innerhtml = count;
}
