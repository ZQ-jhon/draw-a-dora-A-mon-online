


var n= 0;
var controller = setInterval(function(){
	
	var styleTag = document.getElementById('styleTag');
	var sourceBoard = document.getElementById('sourceBoard');
	var str = (`
    /*大家好,给大家带来一只萌萌哒多啦A梦*/
	body {background:#3FBF50;font-family:sans-serif;}
	h1 { margin:1em auto;text-align:center;color:#fff; }
	p { margin:1em auto;text-align:center;color:#fff; }
	/*代码有点丑,那就让代码高亮吧*/
   .token.property{
     color:#905;
    }
   .token.comment{
     color:#cc3300;
   }
   .token.selector{
     color:#690;
   }
   .dora {
	cursor: pointer;
	font-size:20px;
	width:10em;
	height:9.9em;
	margin:2em auto 10em;
	position:relative;
	border-radius:50%;
	background:#fff;/*face*/
	box-shadow:
    /*左腿*/
    2.5em 10.7em 0 -3.5em #fff,
    2.5em 10.9em 0 -3.2em #ddd,
    2.5em 10.9em 0 -3.1em #000,
    /*hand R*/
    -5.9em 4.3em 0 -3.5em #fff,
    -5.7em 4.4em 0 -3.2em #ddd,
    /*肚子*/
    0 5.5em 0 -4.5em #dd0,
    0 5.5em 0 -4.4em #000,
    /*脖子*/
    0 1.2em 0 -1em #000,
    0 2em 0 -1.3em #d00,
    0 2.1em 0 -1.3em #000,
    /*身子*/
    0 7.1em 0 -1.8em #f8f8f8,/*body inner*/
    0 7.1em 0 -1.2em #26f,
    /*右胳膊*/
    -4.6em 5.0em 0 -3.8em #15e,
    -3.3em 5.4em 0 -4em #15e,
    /*右腿*/
    -1.3em 10.8em 0 -3.6em #26f,
    -1.3em 11.8em 0 -3.6em #eee,
    /*左胳膊*/
    3.2em 5.9em 0 -4.0em #26f,
    3.6em 6.0em 0 -4.0em #26f,
    3.9em 6.1em 0 -4.0em #26f,
    4.0em 6.2em 0 -4.0em #26f,
    4.1em 6.3em 0 -4.0em #26f,
    4.2em 6.4em 0 -4.0em #26f,
    4.3em 6.5em 0 -4.0em #26f,
    /*hand L*/
    5.4em 7.1em 0 -4.1em #eee,
    /*圆滚滚的头*/
    0 1em 0 1em #26f inset,
    /*outline*/
    0 7.1em 0 -1.1em #000,/*body*/
    0 0 0 0.1em #000,/*head*/
    -5.7em 4.4em 0 -3.1em #000,/*右手*/
    5.4em 7.1em 0 -4.0em #000,/*左手*/
    -1.3em 11.8em 0 -3.5em #000,/*右腿*/
    /*左胳膊再修饰一下*/
    3.2em 5.9em 0 -3.9em #000,
    3.6em 6.0em 0 -3.9em #000,
    3.9em 6.1em 0 -3.9em #000,
    4.0em 6.2em 0 -3.9em #000,
    4.1em 6.3em 0 -3.9em #000,
    4.2em 6.4em 0 -3.9em #000,
    4.3em 6.5em 0 -3.9em #000,
    /*右胳膊也是*/
    -4.6em 5.0em 0 -3.7em #000,
    -3.3em 5.4em 0 -3.9em #000,
    /*还有右腿*/
    -1.3em 10.8em 0 -3.5em #000,
    0 0 0 0 transparent;/* --- */
}
/*再润色一下*/
.dora:after {
  font-size:1em;
  display:block;
  width:1em;
  height:1em;
  position:absolute;
  top:3em;
  left:4.5em;
  border-radius:50%;
  content:"|";
  line-height:1;
  color:transparent;
  text-shadow:
    0 0em 0 #000,
    0 0.74em 0 #000,/*鼻子轮廓*/
    0 0 0 transparent;/* --- */
  ;
  text-align:center;
  line-height:2.8;
  background:#fff;/*鼻子上的白点高亮*/
  box-shadow:
    -0.1em 0 0 0.3em #c00 inset,
    /*左眼*/
    0.9em -1.5em 0 -0.4em #fff,
    1em -1.3em 0 -0.2em #000,
    1.1em -1.3em 0 0.5em #fff,/*白眼仁*/
    1.1em -1.3em 0 0.6em #333,/*眼线*/
    /*右眼*/
    -1.1em -1.5em 0 -0.4em #fff,
    -1em -1.3em 0 -0.2em #000,
    -1em -1.3em 0 0.5em #fff,/*白眼仁润色*/
    -1em -1.3em 0 0.6em #333,/*眼线润色*/
    0 0 0 0 transparent;/* --- */
}
.dora:before {
  font-size:1em;
  width:5em;
  height:2.5em;
  display:block;
  margin:5em auto;
  position:absolute;
  top:1em;
  left:2.5em;
  content:"——";
  /*谁的胡子掉在这里啦*/
  color:transparent;
  letter-spacing:-0.26em;
  text-shadow:
    3em -2em 0 #000,/*再来一撇胡子*/
    3em -2.5em 0 #000,
    3em -3em 0 #000,
    -3em -2em 0 #000,
    -3em -2.5em 0 #000,
    -3em -3em 0 #000,
    0 0 0 transparent;/* --- */
  ;
  text-align:center;
  border-radius:0 0 50% 50% / 0 0 100% 100%;
  background:#d33;/*mouse*/
  box-shadow:
    0 2em 0em -1em #c00 inset,/*小嘴巴*/
    0 6.2em 0 0 #f8f8f8,/*把小嘴巴拷贝一份,变成小肚兜*/
    0 6.2em 0 0.1em #333,/*神奇的小肚兜*/
    0 0 0 0 transparent;/* --- */
}

/* 加上hover过渡,神奇的效果 */
.dora,
.dora:before,
.dora:after {
  -webkit-transform: translate3d(0,0,0);
  -webkit-transition:0.5s;
  -moz-transform: translate3d(0,0,0);
  -moz-transition:0.5s;
  transform: translate3d(0,0,0);
  transition:0.5s;
}
.dora:hover,
.dora:hover:before,
.dora:hover:after {
  border-radius: 0;
  box-shadow:none;
  -webkit-transform: translate3d(0,0,0);
  -moz-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
  /*好了,这只多啦A梦送给你*/
}`
	);
	
	   styleTag.innerHTML = str.substring(0,n);
	   sourceBoard.innerHTML = str.substring(0,n);
	   n++;
	  
	  sourceBoard.scrollTop  +=100;
	  
	if(n>212){
	  	sourceBoard.innerHTML = Prism.highlight(str.substring(0,n), Prism.languages.css)
	  }
    if(n>str.length){window.clearInterval(controller);document.getElementById('h1').innerHTML = '把鼠标移上去试试看？'}
    
    console.log(n)
},30);





