var nav=document.querySelector('.nav');
document.querySelector('.head img').onclick=()=>{
  nav.classList.toggle("show");

}
function confirm() {
  // Tab to edit

var goods=document.querySelector('#goods');
var x=goods.value;
console.log(x);
var y=13500;
var price=document.querySelector('#price');
if(x<=2){
var p=x*y-(x-1)*5000;
  price.innerHTML=p;
}
else { 
  price.innerHTML='above 30,000';
}
}


function order() {
  // Tab to edit
  
  var price=document.querySelector('#price');
var goods=document.querySelector('#goods');
var state=document.getElementById('state');
var location=state.value;

if (goods.value=='') {
  alert('Please Input A Number')
}
else {
  var msg='Hello, I Will Like To Order '+goods.value+' Quantity Of Your Strong Man Product And I Reside In '+location+'. Thanks You Very Much!.';
console.log(msg);
window.location.href="https://wa.me/+2348026577678?text="+msg;
}
}