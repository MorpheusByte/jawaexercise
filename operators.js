/* ---------------------------------- */
//!             OPERATORS             */
/* ---------------------------------- */
//! Aritmatik Operatorler

let a = 10
let b = 2

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
console.log(a**b)

// Öncelik sıralaması-  işlem önceliği
// üs, parantez içi, çarpma/bölme, çıkarma/toplama


// Dakika olarak verilen ağaşıdaki deger kaç saat kaç dakikaya denk gelmektedir

let sure = 377
let saat = Math.floor(sure/60)
console.log(saat)
let dakika = sure%60
console.log(dakika)
console.log(`${saat}:${dakika}`)

// INCREMENT ++  - DECREMENT --

let x = 10
// x ++ önce yazdır sonra arttır
// ++ x önce arttır sonra yazdır
console.log("INCREMENT")
console.log(++x)
console.log("DECREMENT")
// x-- önce yazdır sonra azalt
// --x önce azalt sonra yazdır
//x=x-1
console.log(--x)

console.clear()

// ASSIGMENT OPERATORS

let t = 7;
let z = 6;
console.log(t)
t = z
console.log(t)

// t = t+z
// t = t-z
console.log(t)
t+=z //! t = t+z
console.log(t)
t-=z //! t = t-z
console.log(t)
t*=3  //! t = t*z
console.log(t)
t/=2 //! t = t/z
console.log(t)
t%=4 //! t = t%z
console.log(t)
t++
t**=6 //! t = t**z
console.log(t)