document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.getElementById("foodName-input");
  searchButton.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  });
});

function handleSubmit() {
  const foodName = document.querySelector("#foodName-input").value;

  window.open(
    `https://snappfood.ir/products?query=${encodeURI(
      foodName
    )}&page=0&kamafood=true`
  );
}
