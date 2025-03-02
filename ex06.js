function convertCurrency() {
    var usd = document.getElementById("usd").value; //lấy giá trị nhập vào
    var rate = 25000; //tỷ gia 1usd=25000 vnd
    let vnd = usd * rate; //chuyển đổi
    document.getElementById("result").innerHTML = usd + " USD = " + vnd.toLocaleString() + "VND";


}
