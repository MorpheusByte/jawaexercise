//* ==============================================
//*                  EVENTS
//* ===============================================

console.log("******Events******")


//? Selectorler
const h2 = document.querySelector("h2")
const body = document.querySelector("body")
const myInput = document.getElementById("input")


// Event Tanımlama

//Mouse h2 elementi üzerine geldiğinde tetiklenir
h2.onmouseover = function(){
    // console.log("tetiklendi")
    // h2.style.color="red"
    h2.classList.add("red", "center")
}

//Mouse h2 elementi üxerinden ayrıldığında tetiklenir
h2.onmouseout = () =>{
    h2.classList.remove("red", "center")
}

//* DOM içeriklerinin tamamı yüklendikten sonra tetiklenen event (onload)
body.onload= function(){
    myInput.focus()
}