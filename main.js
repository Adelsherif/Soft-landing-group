var my1=document.getElementById("bar");
var my2=document.getElementById("li");
var my3=document.getElementById("pa");
let lin=document.querySelectorAll('.section ul li a');

my1.onclick=function(){
    my2.classList.toggle("show")
    my2.style.display==="block" ? my2.style.display="none":my2.style.display="block";
}
window.onscroll=function (){
    window.scrollY>=500 ? document.getElementById('bt').style.display='block' :document.getElementById('bt').style.display='none';
    if(window.scrollY>=100){
      document.getElementById('head').style.backgroundColor='white';
      document.getElementById('head').style.color='black';
      document.getElementById('head1').style.color='black';
        lin.forEach((ele) => {
          ele.style.color='black';
        });
    }
    else{
      document.getElementById('head').style.backgroundColor='rgb(0 0 0/0)';
      document.getElementById('head').style.color='white';
      document.getElementById('head1').style.color='white';
      lin.forEach(ele => {
        ele.style.color='#e3e5e6';
      });
    }
  }
  document.getElementById('bt').onclick=function (){scrollTo(0,0);}