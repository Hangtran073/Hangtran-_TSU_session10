let a = 5;
let b = 8;
let c = 3;
let max; 

if (a >= b && a >= c) {
    max = a;  
} else if (b >=  a && b >= c){
    max = b;
} else {
    max = c;
}
console.log("Giá trị lớn nhất: " + max);
alert("Giá trị lớn nhất là: " + max)
document.write("Giá trị lớn nhất: " + max)

// Cách làm khác
//1. let max = Math.max(a, b, c)

//2. let numbers = [a, b, c]
//   let max = Math.max(...numbers);

//2. function findMax(a, b, c){
/*   let max = a;
    if (b > max){
         max = b;
    }if (c > max){
         max = c;
    }return max;
}
*/








