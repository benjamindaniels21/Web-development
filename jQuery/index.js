
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

//
$(document).on("mouseover",function(){
  $("h1").css("color", "purple");
});
