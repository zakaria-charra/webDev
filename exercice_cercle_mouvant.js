const c=document.querySelector("#cercle");
console.log(c);
console.log(c.style.top);
console.log(c.style.left);

function getCard(e){

//var x=(e.clientX-25)+"px";
//var y=(e.clientY-25)+"px";
var w = window.innerWidth;
var h=window.innerHeight;

var x=w-e.clientX+"px";
var y=h-e.clientY+"px";
c.style.top=y;
c.style.left=x;
/*if(e.clientX <= w-e.clientX+30 && e.clientX >= w-e.clientX &&e.clientY <= h-e.clientY+30 && e.clientY >= h-e.clientY){
	c.style.backgroundColor="blue";
}
else c.style.backgroundColor="white";
*/
console.log(x,y);

return [x,y];
}

var b=document.querySelector("body");
b.addEventListener("mousemove",getCard);
c.addEventListener("mouseenter",function(){
	c.style.backgroundColor="blue";
});
c.addEventListener("mouseleave",function(){
	c.style.backgroundColor="white";
})