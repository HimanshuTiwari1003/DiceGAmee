
//img1
var n =Math.floor((Math.random()*6)+1) ;

 var rondomimage1="images\\dice"+n+".png";
 var image1=document.querySelector(".img1");
 image1.setAttribute("src", rondomimage1);
//img2
var m =Math.floor((Math.random()*6)+1) ;

 var rondomimage2="images\\dice"+m+".png";
 var image2=document.querySelector(".img2");
 image2.setAttribute("src", rondomimage2);


 if (n > m) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
  }
  else if (m > n) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }

