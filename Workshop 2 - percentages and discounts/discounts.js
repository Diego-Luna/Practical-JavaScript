function calculateCountPrice(price, discount) {
  const PercentageDiscountPrice = 100 - discount;
  const priceWithDiscount = (price * PercentageDiscountPrice) / 100;

  return priceWithDiscount;
}

function CalculateValue() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;

  const inputDiscount = document.getElementById("InputDiscount");
  const discountValue = inputDiscount.value;

  const priceWithDiscount = calculateCountPrice(
    priceValue,
    discountValue
  );

  const resultP = document.getElementById("ResultPrice");
  resultP.innerText = "The discounted price are: $" + priceWithDiscount;
}
