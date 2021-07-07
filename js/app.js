const progresRates = document.querySelectorAll(
  ".dash-board__bottom-section__progress-list__item__header__progress-rate"
);

progresRates.forEach((progressRate) => {
  const progressValue = parseInt(progressRate.textContent);
  progressRate.parentElement.nextElementSibling.style.width =
    progressValue + `%`;
});

// arrow btn functionality
const arrowBtn = document.querySelector(".arrow-btn");
const targetElement = document.querySelector(".app");
arrowBtn.addEventListener("click", () => {
  const translateValue =
    secondContainer.data["right"] - firstContainer.data["right"];
  console.log(translateValue);
  targetElement.style.setProperty =
    ("--transform", `-${translateValue + 100}px`);
  targetElement.style.webkitAnimationPlayState = "running";

  // scroll page
  window.scr
});

const firstContainer = {
  element: document.querySelector("#mainContainer"),
  data: {},
  requiredSides: ["left", "right", "bottom", "top"],
};
const secondContainer = {
  element: document.querySelector("#other"),
  data: {},
  requiredSides: ["left", "right", "bottom", "top"],
};

getContainersCordinates(secondContainer);
getContainersCordinates(firstContainer);

// we can do that bcs objects are passed by reference not value
console.log(secondContainer.data);
console.log(firstContainer.data);

function getContainersCordinates(container) {
  container.data = getOffset(container.element, container.requiredSides);
}

function getOffset(el, sides) {
  const rect = el.getBoundingClientRect();
  const cordiantes = {
    left: rect.left + window.scrollX,
    right: rect.right + window.screenX,
    top: rect.top + window.scrollY,
    bottom: rect.bottom + window.screenY,
  };

  let returnObject = {};
  // this is how to make new and get object props using a passed string param
  sides.forEach((side) => (returnObject[`${side}`] = cordiantes[`${side}`]));
  return returnObject;
}
