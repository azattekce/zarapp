var opet = opet || {};

(function () {

 opet.rnd1=function(){

   

 var rnd=Math.random()*6+1;

 document.querySelector("img.img1").setAttribute('src','imagescopy/dice'+Math.floor(rnd)+'.png');
},

 opet.rnd2=function(){

 var rnd=Math.random()*6+1; 
 document.querySelector("img.img2").setAttribute('src','imagescopy/dice'+Math.floor(rnd)+'.png');
 
}
})();



opet.rnd1();
opet.rnd2();