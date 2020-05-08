window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

document.getElementById("titlegroup").style.textShadow = '2px 2px 5px black';

function blurUp() {
  document.getElementById("name").style.textShadow = '2px 2px black';
}
  document.getElementById("name").addEventListener("mouseover", blurUp);

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

  //var blurOut = function() {
  //  document.getElementById("name").style.textShadow = '2px 2px 5px black';
//  }
  //  document.getElementById("name").addEventListener("mouseout", blurOut);

function autoScroll() {
  var elmnt = document.getElementById("work");
  elmnt.scrollIntoView();
}

function comeIn() {
  document.getElementById("footer").style.opacity = '100%';
  document.getElementById("footer").style.transition = '1s ease';
}
  document.getElementById("firstbutton").addEventListener("click", comeIn);

function blurUpAgain() {
  document.getElementById("name").style.textShadow = '2px 2px black';
}
  document.getElementById("firstbutton").addEventListener("hover", blurUpAgain);


function getOut() {
  document.getElementById("footer").style.opacity = '0%';
}
  document.getElementById("footer").addEventListener("click", getOut);

  var coll = document.getElementsByClassName("project");
  var i;

//  for (i = 0; i < coll.length; i++) {
  //  coll[i].addEventListener("click", function() {
  //    this.classList.toggle("active");
  //    var post = this.nextElementSibling;
  //    var lastpost = this.previousElementSibling;
  //    if (post.style.width === "0%") {
  //      post.style.width = "66%";
  //      lastpost.style.width = "0%";
  //    } else {
  //      post.style.width = "0%";
  //    }
//    });
//  }

function openGun() {
  document.getElementById("gunnin").style.width = "66%";
}

function closeGun() {
  document.getElementById("gunnin").style.width = "0%";
}

function openHello() {
  document.getElementById("helloworld").style.width = "66%";
}

function closeHello() {
  document.getElementById("helloworld").style.width = "0%";
}

function openHack() {
  document.getElementById("cuhackit").style.width = "66%";
}

function closeHack() {
  document.getElementById("cuhackit").style.width = "0%";
}

var gunninbutton = document.getElementById("gunninbutton");
gunninbutton.addEventListener("mouseover", () => {
  openGun();
  closeHello();
  closeHack();
});

var hellobutton = document.getElementById("hellobutton");
hellobutton.addEventListener("mouseover", () => {
  openHello();
  closeGun();
  closeHack();
});

var hackbutton = document.getElementById("hackbutton");
hackbutton.addEventListener("mouseover", () => {
  openHack();
  closeGun();
  closeHello();
});


function majextend() {
  if (document.getElementById("major").style.height === '50em') {
    document.getElementById("major").style.height = '0';
  } else {
    document.getElementById("major").style.height = '50em';
    document.getElementById("about").style.height = '0';
    document.getElementById("contact").style.height = '0';
  }
}

document.getElementById("majorbutton").addEventListener("mouseover", majextend);
document.getElementById("major").style.transitionDuration = ".5s";

function aboutextend() {
  if (document.getElementById("about").style.height === '82%') {
    document.getElementById("about").style.height = '0';
  } else {
    document.getElementById("about").style.height = '82%';
    document.getElementById("major").style.height = '0';
    document.getElementById("contact").style.height = '0';
  }
}
document.getElementById("aboutbutton").addEventListener("mouseover",() => {
  aboutextend();
  closeGun();
  closeHack();
  closeHello();
});

function contactextend() {
  if (document.getElementById("contact").style.height === '10em') {
    document.getElementById("contact").style.height = '0';
  } else {
    document.getElementById("contact").style.height = '10em';
    document.getElementById("major").style.height = '0';
    document.getElementById("about").style.height = '0';
  }
}
document.getElementById("contactbutton").addEventListener("mouseover", () => {
  contactextend();
  closeGun();
  closeHack();
  closeHello();
});

function gunninShift() {
  document.getElementById("work").style.backgroundColor = "#a3a09f";
  document.getElementById("navigation").style.backgroundColor = "#a3a09f";
  document.getElementById("upbutton").style.backgroundColor = "#a3a09f";
  document.getElementsByClassName("navbutt")[0].style.color = "#494241";
  document.getElementsByClassName("navbutt")[1].style.color = "#494241";
  document.getElementsByClassName("navbutt")[2].style.color = "#494241";
  document.getElementsByClassName("social")[0].style.color = "white";
  document.getElementsByClassName("social")[1].style.color = "white";
  document.getElementsByClassName("social")[2].style.color = "white";
  document.getElementsByClassName("social")[0].style.backgroundColor = "#f26735";
  document.getElementsByClassName("social")[1].style.backgroundColor = "#f26735";
  document.getElementsByClassName("social")[2].style.backgroundColor = "#f26735";

}
document.getElementById("gunninbutton").addEventListener("mouseover", gunninShift);

function helloShift() {
  document.getElementById("work").style.backgroundColor = "#f7a73c";
  document.getElementById("navigation").style.backgroundColor = "#f7a73c";
  document.getElementById("upbutton").style.backgroundColor = "#f7a73c";
  document.getElementsByClassName("navbutt")[0].style.color = "#ffe67b";
  document.getElementsByClassName("navbutt")[1].style.color = "#ffe67b";
  document.getElementsByClassName("navbutt")[2].style.color = "#ffe67b";
  document.getElementsByClassName("social")[0].style.color = "#ea7657";
  document.getElementsByClassName("social")[1].style.color = "#ea7657";
  document.getElementsByClassName("social")[2].style.color = "#ea7657";
  document.getElementsByClassName("social")[0].style.backgroundColor = "#8fe4ea";
  document.getElementsByClassName("social")[1].style.backgroundColor = "#8fe4ea";
  document.getElementsByClassName("social")[2].style.backgroundColor = "#8fe4ea";
}
document.getElementById("hellobutton").addEventListener("mouseover", helloShift);

function hackShift() {
  document.getElementById("work").style.backgroundColor = "#50c6df";
  document.getElementById("navigation").style.backgroundColor = "#50c6df";
  document.getElementById("upbutton").style.backgroundColor = "#50c6df";
  document.getElementsByClassName("navbutt")[0].style.color = "#2e3192";
  document.getElementsByClassName("navbutt")[1].style.color = "#2e3192";
  document.getElementsByClassName("navbutt")[2].style.color = "#2e3192";
  document.getElementsByClassName("social")[0].style.color = "#fef8c0";
  document.getElementsByClassName("social")[1].style.color = "#fef8c0";
  document.getElementsByClassName("social")[2].style.color = "#fef8c0";
  document.getElementsByClassName("social")[0].style.backgroundColor = "#f78d36";
  document.getElementsByClassName("social")[1].style.backgroundColor = "#f78d36";
  document.getElementsByClassName("social")[2].style.backgroundColor = "#f78d36";
}
document.getElementById("hackbutton").addEventListener("mouseover", hackShift);

function returnStyle() {
  document.getElementById("work").style.backgroundColor = "#f8c9dc";
  document.getElementById("navigation").style.backgroundColor = "#f8c9dc";
  document.getElementById("upbutton").style.backgroundColor = "#f8c9dc";
  document.getElementsByClassName("navbutt")[0].style.color = "white";
  document.getElementsByClassName("navbutt")[1].style.color = "white";
  document.getElementsByClassName("navbutt")[2].style.color = "white";
  document.getElementsByClassName("social")[0].style.color = "white";
  document.getElementsByClassName("social")[1].style.color = "white";
  document.getElementsByClassName("social")[2].style.color = "white";
  document.getElementsByClassName("social")[0].style.backgroundColor = "hotpink";
  document.getElementsByClassName("social")[1].style.backgroundColor = "hotpink";
  document.getElementsByClassName("social")[2].style.backgroundColor = "hotpink";
  }
  document.getElementById("navigation").addEventListener("mouseout", returnStyle);

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
