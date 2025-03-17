//* ============================================
//*                FOR LOOP
//* ============================================
console.log("**** LOOPS IN ARRAYS ***");
//? Örnek

const maaslar = [50000, 80000, 40000, 30000]

let sum = 0;
for (let i = 0; i < maaslar.length; i++) {
    sum+=maaslar[i]
}

console.log("toplam mmaş ödemesi:", sum)

/* -------------------------------------------------------------------------- */
//? ÖRNEK
//? notlar dizisindeki notların 50'den kucuk olanları ve buyuk olanları 2 ayri diziye kaydediniz.
const notlar = [50, 45, 67, 75, 15];