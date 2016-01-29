window.onload=function(){

	var show=document.getElementsByClassName('show');
	var smallcircle=document.getElementsByClassName('smallcircle');
	var change=document.getElementsByClassName('change');

	var index=0, first=show[0],
		first1=smallcircle[0],
		luntime,
		kaiguan=true;
// 轮播
	var lunfn=function(){
		index++;
		if(index==5){
			index=0;
		}
	  //banner 
		first.style.display="none";
		show[index].style.display="block";
		first=show[index];
	  // 小点
		first1.removeAttribute('id');
		smallcircle[index].setAttribute('id','small1');
		first1=smallcircle[index];

	}
	luntime=setInterval(lunfn,2000);
	

// 背景
	for(var i=0;i<show.length;i++){
		show[i].onmouseover=function(){
			clearInterval(luntime);
		}
		show[i].onmouseout=function(){
			clearInterval(luntime);
			if(kaiguan){
				luntime=setInterval(lunfn,2000);				
			}
		}
	}

// 圆
	for(var i=0;i<smallcircle.length;i++){
		smallcircle[i].index1=i;
		smallcircle[i].onclick=function(){
			kaiguan=false;
			first.style.display='none';
			first1.removeAttribute('id');

			this.setAttribute('id','small1');
			show[this.index1].style.display='block';

			first=show[this.index1];
			first1=this;
			clearInterval(luntime);
			index=(this.index1 == smallcircle.length)?0:this.index1;
			//index为轮播的index  不写这句换图的那里就会出错 当点击完最后一个的时候
			// 按左 右的就会从轮播那里接着开始
		}
	}
// 换图---------1
	// 
	change[0].onclick=function(){
		kaiguan=false;
		clearInterval(luntime);
		index--;
		if(index==-1){
			index=4;
		}
		//banner
		first.style.display="none";
		show[index].style.display="block";
		first=show[index];
	// 小点
		first1.removeAttribute('id');
		smallcircle[index].setAttribute('id','small1');
		first1=smallcircle[index];
		// class="smallcircle small1"//不写id的情况
		// first1.setAttribute('class','smallcircle');
		// smallcircle[index].setAttribute('class','smallcircle small1');		
	}

	change[1].onclick=function(){
		kaiguan=false;
		clearInterval(luntime);
		index++;
		if(index==5){
			index=0;
		}
		//banner
		first.style.display="none";
		show[index].style.display="block";
		first=show[index];
	// 小点
		first1.removeAttribute('id');
		smallcircle[index].setAttribute('id','small1');
		first1=smallcircle[index];
	}

// 换图------2
	// change[0].onclick=function(){
	// 	kaiguan=false;
	// 	clearInterval(luntime);
	// 	// 轮播那里 当前的 first---banner    first1----circle
	// 	first.style.display='none';
	// 	var pre=(first.previousElementSibling)?first.previousElementSibling:show[4];
	// 	console.log(pre);
	// 	pre.style.display='block';
	// 	first=pre;
		
	// 	first1.removeAttribute('id');
	// 	var pre1=(first1.previousElementSibling)?first1.previousElementSibling:smallcircle[4];
	// 	pre1.setAttribute('id','small1');
	// 	first1=pre1;
	// };
	// // 点的快去蓝色
	// change[0].onmousedown=function(e){
	// 	e.preventDefault();
	// }
	// change[1].onmousedown=function(e){
	// 	e.preventDefault();
	// }

	// change[1].onclick=function(){
	// 	kaiguan=false;
	// 	clearInterval(luntime);
	// 	// 轮播那里 当前的 first---banner    first1----circle
	// 	first.style.display='none';
	// 	var next=(first.nextElementSibling)?first.nextElementSibling:show[0];
	// 	next.style.display='block';
	// 	first=next;
		
	// 	first1.removeAttribute('id');
	// 	var next1=(first1.nextElementSibling)?first1.nextElementSibling:smallcircle[0];
	// 	next1.setAttribute('id','small1');
	// 	first1=next1;
	// }

// a标签上的链接 阻止连接到本页面
	var aa=document.getElementsByTagName('a');
	for(var i=0;i<aa.length;i++){
		aa[i].onclick=function(e){
			e.preventDefault();
			return false;
		}
		
	}





}