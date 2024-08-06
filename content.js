function addButton() {
  const footer = document.querySelector(
    ".Footer__StyledFooter-sc-1hvq9jy-0.ewPDML"
  );
  if (footer) {
    const button = document.createElement("button");
    button.className =
      "sc-fFubgz beGHPL FAB__FloatActionButton-sc-sby9zf-0 gtdmYv";
    button.dir = "rtl";
    button.id = "kamafood_button";
    button.style.bottom = "75px";
    button.style.backgroundColor = "#0075ff";

    button.innerHTML = `<svg viewBox="-204.8 -204.8 1433.60 1433.60" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#ffffff" d="M384 523.392V928a32 32 0 0 0 46.336 28.608l192-96A32 32 0 0 0 640 832V523.392l280.768-343.104a32 32 0 1 0-49.536-40.576l-288 352A32 32 0 0 0 576 512v300.224l-128 64V512a32 32 0 0 0-7.232-20.288L195.52 192H704a32 32 0 1 0 0-64H128a32 32 0 0 0-24.768 52.288L384 523.392z"></path></g></svg>`;

    button.onclick = handleSubmit;

    footer.appendChild(button);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", addButton);
} else {
  addButton();

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  if (urlParams.has("kamafood")) {
    document.querySelector("#kamafood_button").click();
  }
}

function handleSubmit() {
  document.querySelector("#kamafood_button").style.backgroundColor = "red";

  repeatScrollToEnd(10, 1000);
  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setTimeout(() => {
      filterFoods(4.4);

      document.querySelectorAll(".sc-citwmv .jOCtGV > a > section").forEach((ele) => {
        ele.style.backgroundColor = 'rgb(255 224 60 / 31%)';
      });

      document.querySelector("#kamafood_button").style.backgroundColor =
        "#0075ff";
    }, 1e3);
  }, 11e3);
}
function scrollToEnd() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
}
function repeatScrollToEnd(times, delay) {
  let count = 0;
  console.log("repeatScrollToEnd", new Date());
  function callScroll() {
    if (count < times) {
      scrollToEnd();
      count++;
      setTimeout(callScroll, delay);
    }
  }

  callScroll();
}
function filterFoods(minimumRating) {
  var toEnglishNumbers = (num, dontTrim) => {
    dontTrim = dontTrim || false;
    num = dontTrim ? num.toString() : num.toString().trim();
    const len = num.length;
    const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    let res = "";
    let pos;
    for (let i = 0; i < len; i++) {
      if (~(pos = persianNumbers.indexOf(num.charAt(i)))) {
        res += pos;
      } else {
        res += num.charAt(i);
      }
    }
    return res;
  };
  document.querySelectorAll(".sc-citwmv.jOCtGV").forEach((card) => {
    parseFloat(
      toEnglishNumbers(card.querySelector(".sc-hKgILt.jsaCNc").innerText)
    ) < minimumRating ||
    card.querySelector(".sc-hKgILt.jsaCNc").innerText === "جدید"
      ? card.remove()
      : null;
  });
}
