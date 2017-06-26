// JavaScript File

var a = Number(prompt('Введіть коефіцієнт а'));

var b = Number(prompt('Введіть коефіцієнт в'));

var c = Number(prompt('Введіть коефіцієнт с'));
var resultNunber=discriminant(a,b,c);
document.write(resultNunber);

   function discriminant(a,b,c) {
   var result;
   var x1;
   var x2;
   
   var d = b*b-4*a*c;

    if(a==0){
     result='рівняння не квадратне';
     return result;
     }
    else
    if(d>0)
    {
     x1=(-b+Math.sqrt(d))/(2*a);
     x2=(-b-Math.sqrt(d))/(2*a);
     result ='Рівняння має 2 корені: x1=' +x1+',' +'x2=' +x2;
     return result;
}else{
 result ='Рівняння  не має дійсних коренів';
     return result;
}
}

//else{ 
//    var n =b-c ;
//  return n;
//}
//}

