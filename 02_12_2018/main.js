const parentListLi = document.getElementById('list-todo');
let tab=[];
document.forms.myform.onsubmit = function () {
    var newLi = document.createElement('li');
    newLi.innerHTML = this.task.value ;
    newLi.setAttribute('contentEditable', 'true');
    this.task.value=null; 
    newLi.ondblclick = function () {
     if (newLi.hasAttribute('data-id')){

        newLi.removeAttribute('data-id','done');
        newLi.setAttribute('data-id','undone')
        newLi.setAttribute('contentEditable', 'true');
    }
        else  {
        newLi.setAttribute('data-id','done')
            newLi.setAttribute('contentEditable', 'false');
        }
    }
    parentListLi.appendChild(newLi);


    var btn = document.createElement('button');
    
    btn.setAttribute('name', 'btn')
    btn.setAttribute('contenteditable','false')
    btn.textContent=('Usunąć?')
    newLi.appendChild(btn);

    
    btn.onclick = function usuń() {
    
        newLi.parentNode.removeChild(newLi);
    
}

    tab.push(newLi.textContent);
    console.log(tab)
    


 return false;
}


