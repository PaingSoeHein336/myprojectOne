const MinuTag = document.querySelector(".minu");
const PluTag = document.querySelector(".plu");
const ValuTag = document.getElementById("text")

PluTag.addEventListener("click", () => {
    let value = parseInt(ValuTag.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    let ValeContext = document.getElementById('text').value = value;
    ValuTag.innerHTML = ValeContext;
});
MinuTag.addEventListener("click", () => {
    let value = parseInt(ValuTag.value, 10);
    if (value < 1) {
        value = 0;
        return;
    }
    value--;
    let ValeContext = document.getElementById('text').value = value;
    ValuTag.innerHTML = ValeContext;
});