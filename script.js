let savol = prompt("Ismingizni yozing")
let savol2 = prompt("Familyangizni yozing")
let savol3 = prompt("Nicname ingiz")
let savol4 = prompt("telefon raqamingiz")
let savol5 = prompt("E-mail")
// savol = confirm("ismingiz:  " + savol + "\n" + "familiyangiz:  " + savol2 + "\n" + "nicname:  " + savol3 + "\n" + "telefon raqamingiz:  " + savol4 + "\n");
console.log(savol);
console.log(savol2);
console.log(savol3);
console.log(savol4);
console.log(savol5);
let malumot = "Ismingiz:  " + savol + "\n" + "Familiyangiz:  " + savol2 + "\n" + "Nicname:  " + savol3 + "\n" + "telefon raqamingiz:  " + savol4 + "\n" + "E-mail:  " + savol5 + "\n";
document.getElementById("malumot").innerText = malumot;