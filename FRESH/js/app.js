$(document).ready(function(){
    /*hero slider */
    $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        items: 1,
        dots:false,
        smartSpeed: 1000,
        responsive:{
            0:{
                nav: false,
            },
            768:{
                nav:false,
            }
        }
    })
    



 //Project slider
  $('#project-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    smartSpeed: 1000,
    margin: 24,
    responsive:{
        0:{
            items:1,
            nav:false,
            margin:0,
        },
        768:{
            items:2,
        },
        1140:{
            items:2,
            center: true,
        }
    }
  })

});


//navText: ['PREV','NEXT'],

//<div class="banner">
            
           // <div class="slider">
             //   <img src="./img/campaign-creators-e6n7uoEnYbA-unsplash.jpg" id="slideImg">
          //  </div>
       // </div>


//var slideImg = document.getElementById("slideImg");
//var images =  new Array(
   // "./img/cherrydeck-UpsEF48wAgk-unsplash.jpg",
    //"./img/brooke-cagle-Uduc5hJX2Ew-unsplash.jpg",
    //"./img/brooke-cagle-Uduc5hJX2Ew-unsplash.jpg",
    //"./img/"
  //);

//var len = images.length;
//var i = 0;

//function slider(){
  //  if(i > len-1){
    //    i = 0;
    //}
    //slideImg.src = images[i];
    //i++;
    //setTimeout('slider()',3000);
//}