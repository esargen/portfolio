window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

document.getElementById("titlegroup").style.textShadow = '2px 2px 5px black';

function blurUp2() {
  document.getElementById("epithet").style.textShadow = '2px 2px black';
}

function blurUp3() {
  document.getElementById("firstbutton").style.opacity = '1';
}

document.getElementById("epithet").addEventListener("mouseover", () => {
  blurUp2();
  blurUp3();
});

//autoscroll on initial click
$("#firstbutton").click( function() {
  let work = $("#work")[0];
  $("#footer").toggleClass("visible");
  work.scrollIntoView();
});

//deblur
$("#name, #firstbutton").hover(function() {
  $("#name").css("textShadow", "2px 2px black")
})

//project width-controlling buttons
$("#gunninbutton").mouseover(function() {
  $(".desc").removeClass("openwidth");
  $("#gunnin").children("div").addClass("openwidth");
});
$("#hellobutton").mouseover(function() {
  $(".desc").removeClass("openwidth");
  $("#helloworld").children("div").addClass("openwidth");
});
$("#hackbutton").mouseover(function() {
  $(".desc").removeClass("openwidth");
  $("#cuhackit").children("div").addClass("openwidth");
});

//main site navigation buttons
$("#majorbutton").mouseover(function() {
  $(".desc").removeClass("openwidth");
  $("#major,#about,#contact").removeClass("majheight");
  $("#major").addClass("majheight");
});

$("#aboutbutton").mouseover(function() {
  $(".desc").removeClass("openwidth");
  $("#major,#about,#contact").removeClass("majheight");
  $("#about").addClass("majheight");
});

$("#contactbutton").mouseover(function() {
  $(".desc").removeClass("openwidth");
  $("#major,#about,#contact").removeClass("majheight");
  $("#contact").addClass("majheight");
});


//site theme color changing buttons
$("#gunninbutton").hover( function() {
  $("#work,#navigation,#upbutton").css("backgroundColor", "#a3a09f");
  $(".navbutt").css("color", "#494241");
  $(".social").css({"color": "white", "backgroundColor": "#f26735"});
});

$("#hellobutton").hover( function() {
  $("#work,#navigation,#upbutton").css("backgroundColor", "#f7a73c");
  $(".navbutt").css("color", "#ffe67b");
  $(".social").css({"color": "#ea7657", "backgroundColor": "#8fe4ea"});
});

$("#hackbutton").hover( function() {
  $("#work,#navigation,#upbutton").css("backgroundColor", "#50c6df");
  $(".navbutt").css("color", "#2e3192");
  $(".social").css({"color": "#fef8c0", "backgroundColor": "#f78d36"});
});

$("#navigation").mouseout( function() {
  $("#work,#navigation,#upbutton").css("backgroundColor", "#f8c9dc");
  $(".navbutt").css("color", "white");
  $(".social").css({"color": "white", "backgroundColor": "hotpink"});
});

  function shadowNone(x) {
    if (x.matches) { // If media query matches
      document.getElementById("titlegroup").style.textShadow = "none";
    } else {
      document.getElementById("titlegroup").style.textShadow = '2px 2px 5px black';
    }
  }

  var x = window.matchMedia("(max-device-width: 480px)")
  myFunction(x) // Call listener function at run time
  x.addListener(shadowNone)
