//Nhập 2 số từ bài phím
let firstNumber = parseInt(prompt("Nhập số thứ nhất: "));
let secondNumber = parseInt(prompt("Nhập số thứ hai: "));
//Kiểm tra firstNumber có chia  hết cho secondNumber hay không
if ( firstNumber % secondNumber === 0) {
     alert(firstNumber + " là bội số của " + secondNumber);
     console.log(firstNumber + " là bội số của " + secondNumber);
     document.write(firstNumber + " là bội số của " + secondNumber);
} else {
     alert(firstNumber + " không phải là bội số của " + secondNumber);
     console.log(firstNumber + " không phải là bội số của " + secondNumber);
     document.write(firstNumber + " không phải là bội số của " + secondNumber);
}
