// function reverseString() {

//     let inputString = document.getElementById('chuoi').value;


//     let reversedString = inputString.split('').reverse().join('');

//     // alert("Chuỗi sau khi đảo ngược là " + reversedString + "");
//     document.getElementById('Result').value = reversedString;
// }

function reverseString() {
    let inputString = document.getElementById('chuoi').value;
    let reversedString = inputString.split('').reverse().join('');
    document.getElementById('Result').value = reversedString;
}
function sum(){
    let a = document.getElementById('mang').value;
    console.log(a);
    let b = a.split(",");
    console.log(b);
    let sum = 0;
    // let i = 0;
    for(i = 0; i <= b.length; i++){
        sum += parseInt(b[i]);
    }

    // while(i < b.length){
    //     sum += parseInt(b[i]);
    //     i++;
    // }
    document.getElementById('Result2').value = sum;
}