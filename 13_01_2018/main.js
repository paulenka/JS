var liList = document.getElementById("ListOfMovies").getElementsByTagName("li")
var length = liList.length
console.log(length)

const counth2 = document.getElementById('CountOfMovies')
counth2.appendChild(length)
//const countTitle = document.createElement('h2');
//countTitle.appendChild(length)