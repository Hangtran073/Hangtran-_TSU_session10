function average(){
    let math = parseFloat(document.getElementById("math").value);
    let physics = parseFloat(document.getElementById("physics").value);
    let chemistry = parseFloat (document.getElementById("chemistry").value);
   
    let average = (math + physics + chemistry) / 3;
    //Hiển thị kết quả trên màn hình
    alert("Điểm trung bình: " + average.toFixed(2));
    document.getElementById("result").innerText=  average.toFixed(2);
    console.log("Điểm trung bình: " + average.toFixed(2)); // toFixed(2): làm tròn kết quả 2 số thập phân


}

