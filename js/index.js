$(function(){

   var bannerbox=$('.bannerimg1')[0];
   var bannertu=$('.bannerw',bannerbox);
   var bgarr=["#F8DEA1","#FECCD7","#F8DEA1","#FD4C16","#5CC25F","#1BA9EB","#FF7170","#C67BFC"];

   var bbbox=$('.banner')[0];
   
   var btn=$('.btn')[0];
  var btns=btn.getElementsByTagName('li');
  var index=0;
  var flag=true;
  var t=setInterval(aa,2000);
  function aa(){

         index++;
         if(index==bannertu.length){
          index=0;
         }
         for (var i = 0; i < bannertu.length; i++) {
          
           bannertu[i].style.display="none"
            btns[i].className='';
          //animate(bannertu[i],{opacity:0});
         };
           
             bannertu[index].style.display="block";
              btns[index].className='btn1';
         //animate(bannertu[index],{opacity:1});
         bbbox.style.background=bgarr[index];
  }

 for (var i = 0; i < btns.length; i++) {
    btns[i].index=i;

    btns[i].onclick=function(){

      for (var j = 0; j < bannertu.length; j++) {
        console.log(j)
        btns[j].className='';
         bannertu[j].style.display="none"
  
      };
      btns[this.index].className='btn1';
      bannertu[this.index].style.display="block";
       bbbox.style.background=bgarr[this.index];
      //console.log(this.index)

      index=this.index;       
    }

  };


/*banner 按钮*/
     var btnleft=getClass('btnleft')[0];

    
     var btnright=getClass('btnright')[0];

      btnright.onclick=function(){//给btnright设置单击事件
      aa();
     }
 var box=$('.banneroutbox')[0];
     box.onmouseover=function(){
          clearInterval(t);//设置鼠标经过事件将上面的t循环清除
          animate(btnright,{opacity:0.5},500);
          animate(btnleft,{opacity:0.5},500);
     }

     box.onmouseout=function(){
          t=setInterval(aa,2000);
          //设置鼠标离开事件 将循环再次执行
         animate(btnright,{opacity:0},500);
          animate(btnleft,{opacity:0},500);
     }
  
     btnleft.onclick=function(){
         index--;
         if(index==-1){
          index=bannertu.length-1;
         }
         for (var i = 0; i < bannertu.length; i++) {
            bannertu[i].style.display="none"
            btns[i].className='';
       
          
         };
           bannertu[index].style.display="block";
              btns[index].className='btn1';
       bbbox.style.background=bgarr[index];
    }

     

    

  /*   */

function wheel(s,t){

  var liaout=$('.f1lu')[s];
  var lia=$('a',liaout);
  
  var  f1btn=$('.f1lul')[s];
  var f1btns=$('a',f1btn);

  var f1w=parseInt(getStyle(lia[0],'width'));
  liaout.style.width=lia.length*f1w+'px';
  var f1=0;
  
  var t1=setInterval(cc,t);
  var f2=true;
  function cc(){
    if(!f2){return}
    f2=false;
        animate(liaout,{marginLeft:-f1w},400,function(){liaout.appendChild(getFirst(liaout));//把第一个子元素放到最后
            f1++;
          liaout.style.marginLeft=0;
        if(f1==f1btns.length){
          f1=0;
        }
        for(var i=0;i<f1btns.length;i++){
              f1btns[i].className="";
        };
        f1btns[f1].className="f1li1";
        f2=true;
        })
      }
    

      liaout.onmouseover=function(){
        clearInterval(t1);
      }
      liaout.onmouseout=function(){
        t1=setInterval(cc,2000);
      }
  
     
}
  wheel(0,2000);
  wheel(1,2000);
  wheel(2,2000);
  wheel(3,2000);
  wheel(4,2000);
  wheel(5,2000);
  wheel(6,2000);
  wheel(7,2000);
 /* for(i=0;i<=7;i++){
     
  }*/

  /*侧栏轮播*/
var outbox=$('.xiaoggbox')[0];
var  lunbobox=$('.xiaoggboxul')[0];
var  lunbotu=$('li',lunbobox);
var lunw=parseInt(getStyle(lunbotu[0],'width'));

lunbobox.style.width=lunbotu.length*lunw+'px';

var celan=0;

 var ss=setInterval(mo,2000);
function mo(){
        

       lunbobox.style.marginLeft=0;
      animate(lunbobox,{marginLeft:-lunw},400,function(){lunbobox.appendChild(getFirst(lunbobox));//把第一个子元素放到最后
            celan++;
          lunbobox.style.marginLeft=0;
        if(celan==lunbotu.length){
          celan=0;
        }
      })
     }
      



})