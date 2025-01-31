const baseUrl =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/";

const inputError = document.getElementById("input-error");
const coin = document.getElementById("coin");
const date = document.getElementById("date");
const dropdowns = document.querySelectorAll(".dropdown select");
const swipeCoin = document.getElementById("swipe-coin");
const baseCoin = "USD";
const convertCoin = "PKR";
const exchangeBtn = document.getElementById("convert-btn");
const userAmount = document.getElementById("user-amount");
const results = document.querySelector(".result");
const fromCoin = document.querySelector(".from select");
const toCoin = document.querySelector(".to select");
const exchangeRate = document.getElementById("exchange-rate");

for (let select of dropdowns) {
  for (coinCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = coinCode;
    newOption.value = coinCode;

    if (select.name === "from" && coinCode === "USD")
      newOption.selected = "selected";
    else if (select.name === "to" && coinCode === "PKR")
      newOption.selected = "selected";

    select.append(newOption);

    select.addEventListener("change", (evt) => {
      updateFlag(evt.target);
    });
  }
}

const updateFlag = (element) => {
  let coinCode = element.value;
  let countryCode = countryList[coinCode];
  let newSrc = `https://flagsapi.com/${countryCode}/shiny/64.png`;
  let newImg = element.parentElement.querySelector("img");
  newImg.src = newSrc;
};

let swiper = document.querySelector(".fa-right-left");

swipeCoin.addEventListener("click", (evt) => {
  evt.preventDefault();

  swiper.classList.toggle("flip");

  let temp = fromCoin.value;
  fromCoin.value = toCoin.value;
  toCoin.value = temp;

  updateFlag(fromCoin);
  updateFlag(toCoin);
});

userAmount.addEventListener("keydown", (evt) => {
  if (evt.key === "Enter") {
    evt.preventDefault();
    exchangeBtn.click();
  }
});

userAmount.addEventListener("input", () => {
  let amountValue = userAmount.value.trim();
  if (
    !/^\d+(\.\d*)?$/.test(amountValue) ||
    amountValue == 0 ||
    isNaN(amountValue)
  ) {
    inputError.style.display = "block";
    userAmount.value = 1;
  } else {
    inputError.style.display = "none";
  }
});

exchangeBtn.addEventListener("click", async (evt) => {
  evt.preventDefault();

  let amountValue = userAmount.value;

  const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json`;
  // const url = `${baseUrl}${fromCoin.value.toLowerCase()}/${toCoin.value.toLowerCase()}.json`;

  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  return
  date.innerText = dateConverter(data.date);
  let rate = data[toCoin.value.toLowerCase()];
  rate *= amountValue;
  const roundedRate = parseFloat(rate.toFixed(3));

  const fromRate = exchangeRate.querySelector("span:first-child");
  const toRate = exchangeRate.querySelector("span:last-child");

  inputError.style.display = "none";
  fromRate.innerText = `${amountValue} ${fromCoin.value}`;
  toRate.innerText = `${roundedRate} ${toCoin.value}`;
  results.style.visibility = "visible";
});
