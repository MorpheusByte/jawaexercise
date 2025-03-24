/* -------------------------------------------------------------------------- */
/*                                   OBJECT                                   */
/* -------------------------------------------------------------------------- */

//! Diziler sıralı bellek bölgeleridir ve sıralı bir şekilde ulaşılabilir. Ama daha karmaşık veriler için Object kullanılır

//! Objectlerde key-value ( Property-value) değerlerini içerir. Bu o nesnenin özelliklerini belirtir.

//! Herhangi bir veriye erişim için property (key) adı kullanılır.

const isim = ["Ali", "Veli", "Sema"]
const soyad = ["Yılmaz", "Çelik", "Taş"]

console.log(`${isim[0]},${soyad[1]}`)

const ogr = {ad:"Ali", soyad:"Yılmaz"}
console.log(ogr.ad, ogr.soyad)

/* -------------------------------------------------------------------------- */
//* --------------------------------------------------------------*/
//*               Object Oluşturma Yöntemleri                    */
//* --------------------------------------------------------------*/
//! 3 farkli yöntem ile Object oluşturulabilir.
//? 1. Object() class'ından türetme
// Bu yöntem, JavaScript'teki Object sınıfını kullanarak bir nesne oluşturmayı içerir. 
// Bunun için new Object() yazılır ve sonradan nesneye özellikler atanır.

const car = new Object()
car.marka = "BMW"
car.model = "2024"
car.beygir = 180 
console.log(car)

const car1 = new Object()
car1.marka = "Mercedes"
car1.model = 2020 
car1.beygir = 220
console.log(car1)
/* -------------------------------------------------------------------------- */
//? 2. Constructor metodu ile Object oluşturma
//! OOP(Object Oriented Programming)

function PersonelList(id,ad,maas){
    this.id=id
    this.ad=ad
    this.maas=maas
}

const personel1= new PersonelList(1000,"Ali",50000)
console.log(personel1)

const personel2 = new PersonelList(1001, "Harvey", 55000);
console.log(personel2);
//! her nesne için ayrı bir kopya oluşturulan metodlar, bellek kullanımını arttırabilir

//? 3. Object Literal (en çok kullanacağımız ve tercih edilen yöntem)

const icecek = {
  ad: "cay",
  hazırlıkSüresi: "Yarım Saat",
  tercihler: ["demli", "açık", "paşa çayı"],
  menşei: "Rize",
};

console.log(icecek);

//Boş Obje

const ev = {};

ev.oda = 5;
ev.ısıtma = "doğalgaz";
ev.havuz = true;

console.log(ev);

/* -------------------------------------------------------------------------- */

let personal = {
  name: "Brad",
  lastName: "Pitt",
  birth: 1988,
  horoscobe: "Gemini",
  isMaried: true,
  children: ["chole", "shiloh", "angel"],
  adress: { city: "losangeles", street: "brooklyn", number: 5 },
  calculateAge: function () {
    return new Date().getFullYear() - this.birth;
  },

  selamla: () => {
    return "Merhaba";
  },
  // * Object içinde arrow function kullanılıyorsa this keywordu window nesnesine karşılık gelir. Zaten arrow functionın ortaya çıkma sebebi thislerden kurtulmaktır.

  arrowFunction: () => {
    return personal.isMaried;
  },
  
};

console.log(personal.calculateAge());
console.log(personal.selamla());
console.log(personal.arrowFunction());

