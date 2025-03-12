console.log("***Strings****");

// ?=========================================================
// ?                 STRINGLER
// ?=========================================================

//! String Tanımlama

const str1 = "Clarusway"
const str2 = 'Hello'
const str11 = `Harvey`;

console.log(typeof str1, typeof str2)

const str3 = new String("World");

console.log(typeof str3)

const str4 = "🦕"
console.log(typeof str4)

//! Normalde primitive veri tiplerinin property veya metodu olmaz.
//! Ancak Javascript  otomatik olarak primitive String'leri String object lerine dönüştürür. Bu sayede, String object lerine ait olan
//! fonksiyonlar veya özellikleri primitive string ile kullanmak
//! mümkün olur. Ayrıca 2 tür arasında çevrim yapmakta mümkündür.

/* ---------------------------------- */
/*     STRING YAPISI VE INDEXLEME     */
/* ---------------------------------- */

let kelime = "Clarusway IT BOOTCAMP";

console.log(kelime[0])
console.log(kelime[1])
console.log(kelime[2])

for (let i = 0; i <= kelime.length-1; i++) {
    console.log(kelime[i])
}
// console.log(kelime[8])

// Stringler, parça olarak değiştiremezsiniz
//immutable

kelime[0] = "D"
console.log(kelime)

//! ************STRING PROPERTY ************
// Property bir stringin kendi özelliğidir bir method(fonksiyon) değildir
//parantez açıp kapatmaya gerek yoktur

//? lenght
//Prototype

// *=========================================================
// *               lenght - Property
// *=========================================================
console.log(kelime.length)

let metin = "Clarusway  🦆"
let emoji = "🥶"
//Emojiler 2 karakter uzunluğundadır.
console.log(metin.length)
console.log(emoji.length)

for (let i = 0; i < metin.length ; i++) {
    console.log(metin[i]);
    
}



//! ************STRING METHODS ************
// charAt()             Returns the character at the specified index.
// charCodeAt()	        Returns the Unicode of the character at the specified index.
// concat()	            Joins two or more strings, and returns a new string.
// endsWith()	        Checks whether a string ends with a specified substring.
// fromCharCode()	    Converts Unicode values to characters.
// includes()	        Checks whether a string contains the specified substring.
// indexOf()	        Returns the index of the first occurrence of the specified value in a string.
// lastIndexOf()	    Returns the index of the last occurrence of the specified value in a string.
// localeCompare()	    Compares two strings in the current locale.
// match()	            Matches a string against a regular expression, and returns an array of all matches.
// repeat()	            Returns a new string which contains the specified number of copies of the original string.
// replace()	        Replaces the occurrences of a string or pattern inside a string with another string, and return a new string without modifying the original string.
// search()	             Searches a string against a regular expression, and returns the index of the first match.
// slice()	            Extracts a portion of a string and returns it as a new string.
// split()	            Splits a string into an array of substrings.
// startsWith()	        Checks whether a string begins with a specified substring.
// substr()	            Extracts the part of a string between the start index and a number of characters after it.
// substring()	        Extracts the part of a string between the start and end indexes.
// toLocaleLowerCase()	Converts a string to lowercase letters, according to host machine's current locale.
// toLocaleUpperCase()	Converts a string to uppercase letters, according to host machine's current locale.
// toLowerCase()	    Converts a string to lowercase letters.
// toString()	        Returns a string representing the specified object.
// toUpperCase()	    Converts a string to uppercase letters.
// trim()	            Removes whitespace from both ends of a string.
// valueOf()	        Returns the primitive value of a String object.

//! ************STRING METHODS ************
// String metodları () kullanılır. (Arkaplanda fonksiyonlardır)
//? Chaining yani zincirleme olarak birden fazla metod birlikte kullanılabilir.

// *=========================================================
// *   toLowerCase() toUpperCase() immutable=değiştirmez
// *=========================================================
//? Karakterleri küçük harfe dönüştürme => .toLowerCase()
// Değişim geçicidir.Tamamen değiştirmiyor değiştirp kaydetmek istiyorsak yeni bir değere atamalıyız

let metin2 = "Clarusway"
console.log(metin2.toLowerCase())
console.log(metin2)
let yeniMetin = metin2.toLowerCase()
console.log(yeniMetin)

//? Karakterleri büyük harfe dönüştürme => .toUpperCase()
console.log(metin2.toUpperCase())

// let sehir = "Istanbul"
// console.log(sehir.toLocaleLowerCase("tr-TR"))

/* ---------------------------------- */
/*    String Bİrleştirme yöntemleri   */
/* ---------------------------------- */

//* + ile birleştirme
//* concat ile birleştirme
//* Template literal (``) ile birleştirme

let text1 = "Merhaba";
let text2 = "JavaScript";

console.log(text1 + " " + text2)

let text = "merhaba"

text += " Dünya"
console.log(text)

// *=========================================================
// *               concat() immutable=değiştirmez
// *=========================================================
//concatanation

let s1 = "Yakarsa Dünyayı"
let s2 = " Garipler yakar"

console.log(s1.concat(s2))

// *=========================================================
// *               Template Literals
// *=========================================================
// ES6 ile tanıtılan bu yöntem, backtick işareti (`) kullanarak string birleştirmeyi kolaylaştırır ve değişkenleri doğrudan string içinde kullanmanıza olanak tanır.

let str5= "Ali"
let str6= "Veli"

console.log(str5, str6)

console.log(`${str5} ve ${str6}`)

console.log(`merhaba ali
nasılsın
iyimisin?`.length)

// //! Heap Stack Örneği

// let a = 10
// let b = a
// console.log(b)
// a = 55
// console.log(b)

// let x = [1,2,3,4,5]
// let y = x
// x[0]= 55
// console.log(x)
// console.log(y)

// *=========================================================
// *                 split() immutable
// *=========================================================