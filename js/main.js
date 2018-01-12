window.onload=function(){
	// var oImg=document.getElementsByClassName('show')[0];
	// var oLeft=document.getElementsByClassName('left')[0];
	// var oRight=document.getElementsByClassName('right')[0];
	// var index=0;
	// var oUl=document.getElementsByClassName('dot')[0];
	// var oLi=oUl.getElementsByTagName('li');
	// var wrap=document.getElementsByClassName('wrap')[1];
	// var timer=null;
	// oImg.src='../img/carousel_'+index+'.jpg';
	// clearInterval(timer);
	// function toRun(){
	// 	 if(index>=oLi.length-1){
 //         	index=0;
 //       	}else{
 //       		index++;
 //        }
 //        for(var i=0;i<oLi.length;i++){
 //        	oLi[i].className='';
 //          oLi[index].className='on';
	// 	}
 //       oImg.src='../img/carousel_'+index+'.jpg';

	// }
	// timer=setInterval(toRun,2000);
	// wrap.onmouseover=function(){
	// 	clearInterval(timer);
	// };
	// wrap.onmouseout=function(){
	// 	timer=setInterval(toRun,2000);
	// };

 //    oLeft.onclick=function(){
	// 		if(index<=0){
 //         	index=oLi.length-1;
 //       	}else{
 //       		index--;
 //        }
 //        for(var i=0;i<oLi.length;i++){
 //        	oLi[i].className='';
 //          oLi[index].className='on';
	// 	}
 //       oImg.src='../img/carousel_'+index+'.jpg'; 
	// }
	// oRight.onclick=function(){
	// 		toRun();
	// }

	////////////////////////////////////////////////////////
	var carousel=document.getElementsByClassName('carousel')[0];
	var wrap=carousel.getElementsByClassName('wrap')[0];
	var oUl=wrap.getElementsByTagName('ul')[0];
	var oLi=oUl.getElementsByTagName('li');
	var preBtn=document.getElementsByClassName('left')[0];
	var nextBtn=document.getElementsByClassName('right')[0];
	var dot=wrap.getElementsByTagName('ul')[1];
	var dotLi=dot.getElementsByTagName('li');
	var index=0;
	var num=0;
	nextBtn.onclick=function(){
		index++;
		if(index>oLi.length-1){
			index=0;
		}
		for(var i=0;i<oLi.length;i++){
			oLi[i].className='';
			dotLi[i].className='';
		}
		oLi[index].className='on';
		dotLi[index].className='on';		
	};
	preBtn.onclick=function(){
		if(index==0){
			index=oLi.length;
		}
         index--;
		for(var i=0;i<oLi.length;i++){
			oLi[i].className='';
			dotLi[i].className='';
		}
		oLi[index].className='on';
		dotLi[index].className='on';	
	};
	
	for(var i=0;i<dotLi.length;i++){
		dotLi[i].index=i;
		dotLi[i].onclick=function(){
			 index=this.index;
			for(var i=0;i<dotLi.length;i++){
				dotLi[i].className='';
				oLi[i].className=''
			}
			dotLi[index].className='on';
			oLi[index].className='on';
		}
	}
	function autoPlay(){
		index++;
		if(index>oLi.length-1){
			index=0;
		}
		for(var i=0;i<oLi.length;i++){
			oLi[i].className='';
			dotLi[i].className='';
		}
		oLi[index].className='on';
		dotLi[index].className='on';
	}
	//autoPlay();
    var timer=null;
    timer=setInterval(autoPlay,2000);
   wrap.onmouseover=function(){
   	clearInterval(timer);
   };
   wrap.onmouseout=function(){
   	timer=setInterval(autoPlay,2000);
   }
};