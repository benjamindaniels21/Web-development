
// //add event listener, if h1 is clicked it changes color
// $("h1").click(function(){
//   $("h1").css("color", "purple");
// });


// //button click changes h1 color
// for(var i = 0; i < 5; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", function(){
//     document.querySelector("h1").style.color = "purple";
//   });
// }

// //use jQuery to do the same color change
// $("button").click(function(){
//   $("h1").css("color", "purple");
// });


// //record keypresses in the console
// $(document).keypress(function(event){
//   console.log(event.key);
// });

// //change h1 to our keypress
// $(document).keypress(function(event){
//   $("h1").text(event.key);
// });

// //change h1 color on mouseover
// $(document).on("mouseover",function(){
//   $("h1").css("color", "purple");
// });

// //add HTML element before an element
// $("h1").before("<button>New</button>");

// //add HTML element after an element
// $("h1").after("<button>New</button>");

//prepend an element
// $("h1").prepend("<button>New</button>");

//append an element
// $("h1").append("<button>New</button>");

//remove an element
// $("button").remove();

// //use jQuery to hide h1
// $("button").click(function(){
//   $("h1").hide();
// });

// //use jQuery to hide then show h1
// $("button").click(function(){
//   $("h1").toggle();
// });


// //use jQuery to toggle fade in and out h1
// $("button").click(function(){
//   $("h1").fadeToggle();
// });


// //slide up/down
// $("button").click(function(){
//   $("h1").slideToggle();
// });



// //animate...can only use things that have numerical value...remember curly braces {}
// $("button").click(function(){
//   $("h1").animate({opacity: 0.5});
// });


//custom animation
$("button").click(function(){
  $("h1").slideUp().slideDown().animate({opacity: 0.5});
});
