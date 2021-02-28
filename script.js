var shrink = true;
function expand() {
  if (shrink) {
    document.getElementById("link1").style.transform = "translateX(-150px)";
    document.getElementById("link2").style.transform =
      "translate(-100px, -100px)";
    document.getElementById("link3").style.transform = "translateY(-150px)";
    document.getElementById("link4").style.transform =
      "translate(100px, -100px)";
    document.getElementById("link5").style.transform = "translateX(150px)";
    document.getElementById("link6").style.transform =
      "translate(100px, 100px)";
    document.getElementById("link7").style.transform = "translateY(150px)";
    document.getElementById("link8").style.transform =
      "translate(-100px, 100px)";
    shrink = false;
  } else {
    document.getElementById("link1").style.transform = "translate(0)";
    document.getElementById("link2").style.transform = "translate(0)";
    document.getElementById("link3").style.transform = "translate(0)";
    document.getElementById("link4").style.transform = "translate(0)";
    document.getElementById("link5").style.transform = "translate(0)";
    document.getElementById("link6").style.transform = "translate(0)";
    document.getElementById("link7").style.transform = "translate(0)";
    document.getElementById("link8").style.transform = "translate(0)";
    shrink = true;
  }
}
