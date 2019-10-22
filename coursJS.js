/*let x=5;
let y=6; 
//alert(x+y);
let age=50;
const pi=3.14;

console.log(`j'ai ${age} ans
  );
x=x?alert(1):alert(2);
let rep=prompt("donner un nombre");
Number.parseInt(rep)>=10?alert("Nje7ti :)"):alert("s9eti :(");*/

/*let val1= Number.parseInt(prompt("donner la 1ere valeur :"));
let op = prompt("donner l'operation ");
let val2=Number.parseInt(prompt("donner la 2eme valeur :"));


switch(op){
	case "+" : alert(`${val1}${op}${val2}= ${val1+val2}`);break;
	case "-" : alert(`${val1}${op}${val2}= ${val1-val2}`);break;
	case "*" : alert(`${val1}${op}${val2}= ${val1*val2}`);break;
	case "/" : if (val2=="0" ) alert(" division par 0"); else alert(`${val1}${op}${val2}= ${val1/val2}`);break;
	default : alert("non valid operation");
}*/

/* function Somme( x ,y ){

 	if( Number.isInteger(x)&&Number.isInteger(y))
 		return x+y;
 	else return NaN;
 }

 alert(Somme("lol",3));*/

 /*let f= function(a,b){
 	
 	console.log(a+b);
 };

 f(1,11);*/

/* function decompt(n){

 	if(n>0){
 		console.log(n);return decompt(n-1);}

 		
 };


decompt(5);*/
/*function Vecteur(x,y){

	this.x=x;
	this.y = y;

};
Vecteur.prototype.mod= function(){

	return Math.sqrt(this.x**2+this.y**2);
}
Vecteur.prototype.equals=function(v){
if(this.x==v.x && this.y==v.y)
	return true;
else return false;

}
let v1= new Vecteur(2,2);
let v2= new Vecteur(3,2);

console.log(v1.mod());
console.log(v1.equals(v2));*/
/*

class vect {
	constructor (x,y){
		this.x=x;
	    this.y = y;
	}

	mod(){
		return Math.sqrt(this.x**2+this.y**2);
	}
	equals(v){
		if(this.x==v.x && this.y==v.y)
		return true;
		else return false;
	}
}
let v1=new vect(2,3);
let v2=new vect(5,3);
console.log(v1.mod());
console.log(v1.equals(v2));
*/
const elt=document.querySelector(".normal");

function eventclbk(e){
	console.log("clicked");
	elt.classList.toggle("normal");

}
elt.onclick = eventclbk;









































