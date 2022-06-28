/*$(function(){
})*/

/*const fibonacci = n =>
      [...Array(n)].reduce(
        (a, v, i) => a.concat(i > 1 ? a[i - 1] + a[i - 2] : i),
        []
      )
console.log(fibonacci(15))*/

/*function foo(bar = "hfhfg") {
  let m =  bar.match(/\d/g)
  if( m.length === 3){
    console.log(true)
  }else{
    console.log(false)
  }
   
}

foo("gkj1hgbt3rew125")*/


/*let a = [];
for (let i = 1; a.length < 10; i ++) {
  let r = Math.floor(Math.random() * (151 - i));
  if(!a.includes(r)){
  a.push(r)}
  
}

console.log(a);*/


/*function foo(num) {
  let x = new Array(num);
  for (let i = 0; i < x.length; i++) {
    x[i] = new Array();
}
for(let j = 0; j < num; j++){
for(let m = 0; m < num; m++){
    x[m].push(Math.floor(Math.random()*10))
  }
}
console.log(x);
}

foo(5)*/


function foo(num) {
  let x = new Array(num);
  for (let i = 0; i < x.length; i++) {
    x[i] = new Array();
}
for(let j = 1; j <= num; j++){
for(let m = 0; m < num; m++){
  x[m].push(Math.floor(j * (m + 1)));
    
  }
}
console.log(x);
}

foo(5)




