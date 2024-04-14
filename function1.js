
let tab=[1,5,7,9]

function averageEven(tab){
let average=0
let somme=0
let j=0

for(let i=0;i<tab.length;i++){
   
    if(tab[i]%2!==0){
        somme=somme+tab[i]   
        j++
       
    }
    
    
   
}
 
average=somme/j
console.log(average)
 
}
 averageEven(tab)