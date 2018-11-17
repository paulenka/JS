const $field = document.getElementById('field');
const $btn = document.getElementById('btn');


const myArray=[1,3,15,26,100,-200];

$btn.addEventListener('click', function() {
    const valueFromField = $field.value;
    updateMyArray(valueFromField);
});
function updateMyArray(value) {
    const $result=document.getElementById('result');
    value=parseFloat(value);

    if (isNaN(value)) {
        value = Math.floor(Math.random()*20)+1;
    }

    myArray.push(value)
   $result.textContent = myArray;
   showMessege(value, myArray.length)
}
function showMessege(value, index) {
    const $messege = document.getElementById('messege');
    //const textMsg = "dodano wartość " + value + " na pozycji " + index;
    const textMsg =`dodano wartość ${value} na pozycji ${index}`;
    $messege.textContent = textMsg;
}