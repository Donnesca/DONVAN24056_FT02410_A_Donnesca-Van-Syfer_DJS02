const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  const divisionResult = dividend / divider;
  const flooredResult = Math.floor(divisionResult);
  result.innerText = flooredResult;

  if (!dividend || !divider) {
    result.innerText =
      "Division not performed. Both values are required in inputs. Try again.";
    return;
  }

  const numDividend = parseFloat(dividend);
  const numDivider = parseFloat(divider);

  if (numDivider === 0) {
    result.innerText =
      "Division not performed. Invalid number provided. Try again.";
    console.error(
      "Division not performed. Invalid number provided. Try again",
      new Error().stack
    );
    return;
  }

  if (isNaN(numDividend) || isNaN(numDivider)) {
    const errorMessage =
      "Something critical went wrong. Please reload the page.";
    document.body.innerHTML = `<p style="color: red;">${errorMessage}</p>`;
    console.error(errorMessage, new Error().stack);
    return;
  }
});
