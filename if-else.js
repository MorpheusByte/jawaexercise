/* -------------------------------------------------------------------------- */
//!                                CONDITONALS                             */
/* -------------------------------------------------------------------------- */
//! ******* IF -  ELSE

// if ( şart ) {
//     şart durumu doğru ise bu bloğu çalıştır
// }
// else {
//     şart durumu doğru değilse ise bu bloğu çalıştır
// }

// / Kullancıdan alınan sayının tek mi çift olduğuna karar veren kod bloğu

let sayi = Number(prompt("Bir sayi giriniz?"))

let kalan = sayi%2

if (kalan === 0){
    console.log("sayı çifttir")
}else{
    console.log("sayi tektir")
}