var swiper = new Swiper(".slide-content", {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets:true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
      0:{
        slidesPerView:1,
      },
      520:{
        slidesPerView:2,
      },
      770:{
        slidesPerView:3,
      },
      990:{
        slidesPerView:4,
      }
      
    }
  });

  let footerLinks = document.getElementsByClassName('.link');
  for(let footerLink of footerLinks){
    footerLink.addEventListener('click',function(e){
      console.log("Hey");
    });
  }
  let cartIcon = document.querySelector('#cart-icon');
  let cart = document.querySelector('.cart');
  let closeCart = document.querySelector('#close-cart');
  cartIcon.onclick = () =>{
    cart.classList.add('active');
  }
  closeCart.onclick = () =>{
    cart.classList.remove('active');
  }
  // cartIcon.addEventListener('click', function(e){
  //   cart.classList.add('active');
  // });

  if(document.readyState =="loading"){
    document.addEventListener("DOMContentLoaded", ready);
  } else{
    ready(); 
  }
  function ready(){
    var removeCartButtons = document.getElementsByClassName('cart-remove');
    console.log(removeCartButtons);
    for(var i = 0; i <removeCartButtons.length; i++){
      var button = removeCartButtons[i];
      button.addEventListener('click', removeCartItem);
    }
    var quantityInputs = document.getElementsByClassName('cart-quantity')
    for(var i = 0; i < quantityInputs.length; i++){
      var input = quantityInputs[i];
      input.addEventListener('onchange', quantityChanged);
    }
  }
  function removeCartItem(e){
    let buttonClicked = e.target; 
    buttonClicked.parentElement.remove();
    updateTotal();
  }
  function quantityChanged(e){
    var input = e.target;
    if(isNaN(input.value) || input.value <=0){
      input.value=1;
    }
    updateTotal();
  }
  function updateTotal(){
    let cartContent = document.getElementsByClassName('cart-content')[0];
    let cartBoxes = cart.getElementsByClassName('cart-box');
    var total = 0;
    for(var i= 0; i <cartBoxes.length; i++){
      var cartBox = cartBoxes[i];
      var priceElement = cartBox.getElementsByClassName('cart-price')[0];
      var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
      var price = parseFloat(priceElement.innerText.replace("₱",""));
      var quantity = quantityElement.value;
      total = total +(price * quantity);
      document.getElementsByClassName("total-price")[0].innerText= "₱" + total;
    }
  }