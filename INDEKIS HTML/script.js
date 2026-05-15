function calculatePrice(){

    let price =
    document.getElementById("carType").value;

    document.getElementById("price")
    .innerHTML =
    "Цена поездки: " + price + " сом";

}