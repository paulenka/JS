//zad przykładowe
//const parentListP = document.getElementById('parent-element');

//for (let i=0; i<3; i++) {
//const newP = document.createElement('p');
//const newPText = document.createTextNode(`Qui ipsum ${i+1}`);
//newP. appendChild(newPText);
//newP.setAttribute('id', `test ${i+1}`)


//parentListP.appendChild(newP);
//}
//zad 1
let tab = ['Java', 'Sript', 'jest', 'super'];
console.log(tab);

const parentListP = document.getElementById('parent-element');
for (let i = 0; i < tab.length; i++) {
    // tworzenie elementu z textem
    const newPText = document.createTextNode(tab[i]);
    //zad 2 - za każdym razem nowy NODE!! appendChild przyjmuje go tylko raz 
    const newH2Text = document.createTextNode(`${i + 1}` + '.');
    // tworzenie nowego h2
    const newH2 = document.createElement('h2');
    // wrzucanie tekstu do h2
    newH2.appendChild(newH2Text);
    //wrzucanie nowego h2 do listy elementow #parent-element
    parentListP.appendChild(newH2)
    // tworzenie nowego elementu p 
    const newP = document.createElement('p')
    // wrzucanie tekstu do p
    newP.appendChild(newPText);
    // wrzucanie nowego p do listy elementow #parent-element
    parentListP.appendChild(newP);




    // zad 3 
    // wywolujemy funkcjonalnosc kliknieciem
    newH2.onclick = function () {
        // jesli dla elementow p w ktorych dodalismy wlasnie nowa klase hide 
        if (newP.classList.contains('hide')) {
            //klikniemy na naglowek h2 - element sie ukryje
            newP.classList.remove('hide')
        } else {

            newP.classList.add('hide')
        }
    }


    //zad 4 
    //const newPForm 
    document.forms.myform.onsubmit = function () {

        const newH2TextForm = document.createTextNode(`${i=tab.length + 1}` + '.');
        const newH2Form = document.createElement('h2');
        newH2Form.appendChild(newH2TextForm);
        parentListP.appendChild(newH2Form)


        var newPForm = document.createElement('p');
        newPForm.innerHTML = this.nazwa.value;
        parentListP.appendChild(newPForm);

        tab.push(newPForm.textContent);
        console.log(tab)

    
return false
    }

    // zad 5
    //const newAData = document.createTextNode ('http://wi.pb.edu.pl')
   // const newA = document.createElement('a');
    //newA.appendChild(newAData);
    //parentListP.appendChild(newA);




newP.onmousedown = function (){
    this.style.background = 'red';
}
newP.onmouseup = function (){
    this.style.background = null;
}
newP.onmouseover = function (){
    this.style.background = 'green';
}
newP.onmouseout = function (){
    this.style.background = null;
}


}

