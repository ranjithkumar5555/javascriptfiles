console.log("check")
fetch('http://localhost:5000/')
  .then((response) => response.json())
  .then((data) =>{
let apiData = data.data
let navMenu = ""

 apiData.header.navMenu.map((nav,index)=>{
   navMenu = navMenu + `<div class="menu" >Menu-${index+1}</div>`
})
let header = document.getElementById("header")
let headerleft = document.getElementById("headerleft")
let brandNameDiv = `<h1>${ apiData.header.brandName}<h1>`
let headerBrand = document.getElementById("headerlogo")
headerBrand.innerHTML = brandNameDiv
headerleft.innerHTML = navMenu
header.style.background = apiData.header.background
header.style.height = apiData.header.height
console.log(navMenu)


  } );





//   var n=12;
//   var Mynamapidataeis='raman';
//  // alert(Mynameis);
//   var animal=["tiger","dog","line"];
//   animal.push("haik");
//   //alert(animal);//loops
//  // console.log("wow");
//  // for(var i=0;i<5;i++){
//    // console.log(i);
// //
//   //}
//   var k=6;
//   while(k<12){
//     console.log(k);
//     k++;
//   }
// var b=[2,3,4,5,6];
// b.forEach(function(c){
//   console.log(c);
// });
// var ka=10;
// var ra=1;
// var na=1
// if(ka==10 && ra==na){
//   console.log("wows")
// }
// else{
//   console.log("bad");
// }
// var co="red";
// switch(co){
//   case"red":console.log("i like red");
//   break;
//   case"blue": console.log("i dont like");
//   break;
//   case"yellow":console.log("i am okey");
//   break;
//   default:alert("choose");
//   break;

// }
// //var ani=new Object();
// //co
// var person={
//   name:"ranjith",
//   age:22,
//   mark:84,//embedded
//   ch:["raja","kumar"],
//   address:{
//     s:"singai",
//     lo:"sivagangai",
//   },
// }
// console.log(person.ch[1]);
// var bi=new Object();
// bi.n1="parrot"
// bi.n2="beatiful"
// console.log(bi.n2);
// //function with object
// function student(na,ma,lo){
//   this.na=na;
//   this.ma=ma;
//   this.lo=lo;
// }
// var praveen=new student("ff","jhg","iii")
// console.log(praveen);
// document.write("<h1>helo</h1>")
// document.write(Date());
