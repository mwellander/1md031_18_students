//
// 'use strict';
// var socket1 = io();
// var v = new Vue({
//   el: '#everything',
//   data: {
//     orders: {},
//     details:{},
//     burgers:itemsArray2
//   },
//   created: function () {
//     socket1.on('initialize', function (data) {
//       this.orders = data.orders;
//     }.bind(this));
//
//     socket1.on('currentQueue', function (data) {
//       this.orders = data.orders;
//     }.bind(this));
//   },
//   methods:{
//     clickedvue: function(){
//       var info = new getInfo();
//     },
//     displayOrder: function (event){
//       var offset = {x: event.currentTarget.getBoundingClientRect().left,
//                 y: event.currentTarget.getBoundingClientRect().top};
//               this.details = { x: event.clientX - 10 - offset.x,
//                                        y: event.clientY - 10 - offset.y }
//                           }
//                         }
// });


'use strict';
var socket = io();

var vm = new Vue({
  el: '#everything',
  data: {
    orders: {},
    details:{},
    burgers:itemsArray2,
  },
  created: function () {
    socket.on('initialize', function (data) {
      this.orders = data.orders;
    }.bind(this));

    socket.on('currentQueue', function (data) {
      this.orders = data.orders;
    }.bind(this));
  },
  methods: {
    clickedvue: function(){
      this.firstname = document.getElementById("firstn").value;
      this.lastname = document.getElementById("lastn").value;
      this.email = document.getElementById("email").value;
      this.payment = document.getElementById("payment").value;
      this.gender = getGender();
      this.chosenBurger = getBurgers();
      document.getElementById('fn').innerHTML = "First Name: " + this.firstname;
      document.getElementById('ln').innerHTML = "Last Name: " + this.lastname;
      document.getElementById('em').innerHTML = "Email: " + this.email;
      document.getElementById('pay').innerHTML = "Payment: " + this.payment;
      document.getElementById('gen').innerHTML = "Gender: " + this.gender;
      document.getElementById('order').innerHTML = "Order: " + this.chosenBurger;
    },
    getNext: function () {
      var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
        return Math.max(last, next);
      }, 0);
      return lastOrder + 1;
    },
    displayOrder: function (event) {
      var offset = {x: event.currentTarget.getBoundingClientRect().left,
                    y: event.currentTarget.getBoundingClientRect().top};
      this.details= { x: event.clientX - 10 - offset.x,
                      y: event.clientY - 10 - offset.y};
    },
    addOrder: function(){
      socket.emit("addOrder",{orderId:this.getNext(),details:{x:this.details.x, y:this.details.y},
      personalInfo:[this.firstname,this.lastname,this.email,this.payment,this.gender], orderItems:[this.chosenBurger]});
    }
  }
});



function getInfo(){
  var firstn = document.getElementById("firstn").value;
  var lastn = document.getElementById("lastn").value;
  var email = document.getElementById("email").value;
  var payment = document.getElementById("payment").value;
  var gender = getGender();
  var chosenBurger = getBurgers();
  var Order = new Customer(firstn,lastn,email,payment,chosenBurger,gender)
  document.getElementById('fn').innerHTML = "First Name: " + firstn;
  document.getElementById('ln').innerHTML = "Last Name: " + lastn;
  document.getElementById('em').innerHTML = "Email: " + email;
  document.getElementById('pay').innerHTML = "Payment: " + payment;
  document.getElementById('gen').innerHTML = "Gender: " + gender;
  document.getElementById('order').innerHTML = "Order: " + chosenBurger;
};

function getGender(){
  if(document.getElementById("other").checked){return "Other"}
  if(document.getElementById("male").checked){return "Male"}
  if(document.getElementById("female").checked){return "Female"}
}
function getBurgers(){
  var order = [];
  var burger1 = document.getElementById("burger1");
  var burger2 = document.getElementById("burger2");
  var burger3 = document.getElementById("burger3");
  var burger4 = document.getElementById("burger4");
  var burger5 = document.getElementById("burger5");
  if (burger1.checked){ order.push("Burger 1")}
  if (burger2.checked){ order.push("Burger 2")}
  if (burger3.checked){ order.push("Burger 3")}
  if (burger4.checked){ order.push("Burger 4")}
  if (burger5.checked){ order.push("Burger 5")}
  return order
}
function Customer(fn, ln, em, pay, burg, gen) {
    this.firstName = fn;
    this.lastName = ln;
    this.email = em;
    this.payment = pay;
    this.gender = gen;
    this.order = burg;
}
