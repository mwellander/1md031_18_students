// 
// document.getElementById("sendBtn").onclick = function(){
//   var firstn = document.getElementById("firstn").value;
//   var lastn = document.getElementById("lastn").value;
//   var email = document.getElementById("email").value;
//   var houseno = document.getElementById("housenumber").value;
//   var payment = document.getElementById("payment").value;
//   var gender = getGender();
//   var chosenBurger = getBurgers();
//   var Order = new Customer(firstn,lastn,email,houseno,payment,chosenBurger,gender)
//   document.getElementById('fn').innerHTML = "First Name: " + firstn;
//   document.getElementById('ln').innerHTML = "Last Name: " + lastn;
//   document.getElementById('em').innerHTML = "Email: " + email;
//   document.getElementById('hn').innerHTML = "House Number: " + houseno;
//   document.getElementById('pay').innerHTML = "Payment: " + payment;
//   document.getElementById('gen').innerHTML = "Gender: " + gender;
//   document.getElementById('order').innerHTML = "Order: " + chosenBurger;
// };
//
// function getGender(){
//   if(document.getElementById("other").checked){return "Other"}
//   if(document.getElementById("male").checked){return "Male"}
//   if(document.getElementById("female").checked){return "Female"}
// }
// function getBurgers(){
//   var order = [];
//   var burger1 = document.getElementById("burger1");
//   var burger2 = document.getElementById("burger2");
//   var burger3 = document.getElementById("burger3");
//   var burger4 = document.getElementById("burger4");
//   var burger5 = document.getElementById("burger5");
//   if (burger1.checked){ order.push("Burger 1")}
//   if (burger2.checked){ order.push("Burger 2")}
//   if (burger3.checked){ order.push("Burger 3")}
//   if (burger4.checked){ order.push("Burger 4")}
//   if (burger5.checked){ order.push("Burger 5")}
//   return order
// }
// function Customer(fn, ln, em, hno, pay, burg, gen) {
//     this.firstName = fn;
//     this.lastName = ln;
//     this.email = em;
//     this.houseNumber = hno;
//     this.payment = pay;
//     this.gender = gen;
//     this.order = burg;
// }
