// let age= 8;
//  if( age>18){  console.log("vous ete adulte");
   
//  } 

//  else{console.log("vous ete minure");

// }

// function addi(a,b){
//     return a+b;
// }
// console.log(addi(2,5))
// ///////////////////

// function deff(a,b){
//     return a-b;
// }
// console.log(deff(2,5))

// ////////////////////////////

// function mult(a,b){
//     return a*b;
// }

// console.log(mult(2,5))


// function div(a,b){
//     if(b==0){ 
//         console.log("operation impossible")

//     }
//     else{ return a/b;}

   
// }
// console.log(div(2,0))
let mot = document.querySelector("#pass");
let btn = document.querySelector("button");
console.log(btn);

btn.onclick=function() {

    let val=mot.value;

    if(val.length>8){
        alert("mot de pass fort")
    }

        else{
            alert(" mot de pass faible")
        
    }

}
mot.onfocus=function (){
    console.log("hhhh")
    
}
mot.blur=function (){
    this.addEventListener=h1
    
}
