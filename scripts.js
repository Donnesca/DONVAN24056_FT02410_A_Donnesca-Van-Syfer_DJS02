const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  //result.innerText = dividend / divider;

  const divisionResult = dividend / divider;
  const flooredResult = Math.floor(divisionResult);
  result.innerText = flooredResult;

  if (!dividend || !divider) {
    result.innerText =
      "Division not performed. Both values are required in inputs. Try again.";
    return;
  }
});
