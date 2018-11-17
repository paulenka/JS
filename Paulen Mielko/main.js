const $field = document.getElementById('field');
const $btn = document.getElementById('btn');
const $btn2 = document.getElementById('btn2')
const $btn3 = document.getElementById('btn3')

const myArray = [1, 3, 15, 26, 100, -200];

$btn.addEventListener('click', function () {
    const valueFromField = $field.value;
    updateMyArray(valueFromField);
});



function updateMyArray(value) {
    const $result = document.getElementById('result');
    value = parseFloat(value);

    if (isNaN(value)) {
        value = Math.floor(Math.random() * 20) + 1;
    }

    myArray.push(value)
    $result.textContent = myArray;

    showMessege(value, myArray.length)

}
function showMessege(value, index) {
    const $messege = document.getElementById('messege');
    //const textMsg = "dodano wartość " + value + " na pozycji " + index;
    const textMsg = `dodano wartość ${value} na pozycji ${index}`;
    $messege.textContent = textMsg;
}

$btn2.addEventListener('click', function () {
    const valueFromField = $field.value;
    dodajDoFunkcji(valueFromField);

});
function dodajDoFunkcji(value) {
    const $result = document.getElementById('result');
    value = parseFloat(value);

    if (isNaN(value)) {
        value = Math.floor(Math.random() * 30) + 1;
    }

    myArray.unshift(value)
    $result.textContent = myArray;

    showMessege(value, 0)
}
function showMessege2 (value, index) {
    const $messege2 = document.getElementById('messege2');
    const textMsg = `dodano wartość ${value} na pozycji ${index}`;
    $messege.textContent = textMsg;
}
$btn3.addEventListener('click', function () {
    const usunieta = myArray.shift(1);
    usunZTablicy(usunieta)
});
function usunZTablicy(deleted) {
const $resultfield3 = document.getElementById('resultfield3');
    deleted = parseFloat(deleted);
  
   $resultfield3.value = deleted;
}