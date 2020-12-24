
//------------------------function add item-----------

var plus = document.querySelectorAll('.fa-plus') ;
var total = document.querySelector('.total') ;
var price = document.querySelector('.price') ;

plus.forEach(elm => {
    elm.addEventListener ('click', function () {
      s=  elm.nextElementSibling.innerHTML++
      tot= total.innerHTML.replace('$', '') 
     priceunit= elm.parentElement.nextElementSibling.innerHTML.replace('$', '') 
     
        sum=(parseFloat(tot))+(parseFloat(priceunit))
        console.log(sum);
        total.innerHTML= sum+('$');
})
   
    });
//------------------function minus item------------

var minus = document.querySelectorAll('.fa-minus') ;
var total = document.querySelector('.total') ;

minus.forEach(elm =>{

   elm.addEventListener ('click', function(){

    if (elm.previousElementSibling.innerHTML>0){
    s=elm.previousElementSibling.innerHTML--
    tot= total.innerHTML.replace('$', '') 
    priceunit= elm.parentElement.nextElementSibling.innerHTML.replace('$', '')
    sum=(parseFloat(tot))-(parseFloat(priceunit))
        console.log(sum);
        total.innerHTML= sum+('$');
}
})
});
 //----------------function i love it ------------

var hearts = document.querySelectorAll('.love') ;
console.log(hearts)


Array.from(hearts).map(heart => {
    heart.addEventListener ('click', function () {
        heart.classList.toggle('color-heart')
        });
} )

//----------------function remove items -------------

var removeCarts = document.querySelectorAll('.remove');
Array.from(removeCarts).map(removeCart => {
    removeCart.addEventListener ('click', function(e){
  
 
     removeCart.parentElement.parentElement.remove();
})  
}); 

//------------------function purchase-------

var pay= document.getElementById("purchase") ;
 function conf(){
    confirm("finaliser la commande!" );
 }
pay.addEventListener("click",conf);
