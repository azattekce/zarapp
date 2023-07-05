var opet=opet||{};

(function(){
	
	opet.ABC=function(){
		
		return [
				{
				harf:'A',
				mp3:'A Sese',
				img:'A RESİM'	 

				},
				{
				harf:'B',
				mp3:'B Sese',
				img:'B RESİM'	 

				},
				{
				harf:'C',
				mp3:'C Sese',
				img:'C RESİM'	 

				}
		]
			
		
	}
	
	opet.handle=function(e){	
	
	     var colors=['Yellow','green','white','blue','gray','pink'];
		 var colorItem=Math.floor(Math.random(6)*6);
		 console.log(colorItem);
		 
		e.target.style.color='green';	
		e.target.style.backgroundColor=colors[colorItem];	
		var txt=e.target.innerText;		

		var audio = new Audio('sounds/'+txt+'.mp3');
		audio.play();		
		console.log(txt);
	
	}
	
	opet.LoadAddEventListener=function(){		
		for(var i=0;i<document.querySelectorAll('button').length;i++){
			document.querySelectorAll('button')[i].addEventListener('click',opet.handle);
            		
		}

	}
	opet.LoadAddEventListener();	
	var item=opet.ABC();
	console.log(item);
	for(var a=0;a<item.length;a++){
		
		console.log('Harf:'+item[a].harf+',Resim:'+item[a].img+',Ses:'+item[a].mp3);
	}
	
})();

