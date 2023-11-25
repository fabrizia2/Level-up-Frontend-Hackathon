const accordionElement = document.querySelectorAll(".accordion-cont");
const tickElement = document.querySelectorAll(".tick");
const completedCountElement = document.querySelector(".completed");
const arrowDown = document.querySelector(".arrow-down");
const mainContentElement = document.querySelector(".main-content");
const topBlackElement = document.querySelector(".top-black");
const dcElement = document.querySelector(".two");
const dropDownElement = document.querySelector(".dropdown");
const notificationElement = document.querySelector(".one");
const alertElement = document.querySelector(".alert");
const topHeaderElement = document.querySelector(".top-header");
const removeElement = document.querySelector(".remove");
const secElement = document.querySelector(".sec");

function toggleAlert() {
  dropDownElement.classList.add("hidden");

  if (alertElement.style.display === "inline-flex") {
    alertElement.style.display = "none";
  } else {
    alertElement.style.display = "inline-flex";
  }
}

function toggleDropdown() {
  alertElement.style.display = "none";
  dropDownElement.classList.toggle("hidden");
}

const removeActive = function (index) {
  accordionElement.forEach((el, i) => {
    if (i !== index) {
      el.classList.remove("active");
      let contentBox = el.querySelector(".content-box");
      contentBox.style.height = "0px";
    }
  });
};

accordionElement.forEach((el, i) => {
  let contentBox = el.querySelector(".content-box");
  el.addEventListener("click", () => {
    const isActive = el.classList.contains("active");

    if (!isActive) {
      contentBox.style.height = "120px";
    } else {
      contentBox.style.height = "0px";
    }

    el.classList.toggle("active");
    removeActive(i);
  });
});

arrowDown.addEventListener("click", function () {
  const currentSrc = arrowDown.attributes.src.value;
  const arrowUpSrc =
    "https://crushingit.tech/hackathon-assets/icon-arrow-up.svg";
  const arrowDownSrc =
    "https://crushingit.tech/hackathon-assets/icon-arrow-down.svg";

  arrowDown.attributes.src.value =
    currentSrc === arrowUpSrc ? arrowDownSrc : arrowUpSrc;

  mainContentElement.classList.toggle("active");
  mainContentElement.style.transition = "all 0.5s ease-in-out";
});

document.body.addEventListener("click", function (event) {
  const tickElement = event.target.closest(".tick");
  const checkmarkClass = "checked";

  if (tickElement) {
    const isChecked = tickElement.classList.contains(checkmarkClass);

    if (isChecked) {
      tickElement.classList.remove(checkmarkClass);
      tickElement.innerHTML = `
        <circle cx="12" cy="12" r="10" stroke="#8A8A8A" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 5"/>
      `;
      if (Number(completedCountElement.innerHTML) > 0) {
        completedCountElement.innerHTML =
          Number(completedCountElement.innerHTML) - 1;
        topBlackElement.style.transition = "width 0.5s ease-in-out";
        topBlackElement.style.width = `${completedCountElement.innerHTML * 20}%`;
      }
    } else {
      tickElement.classList.add(checkmarkClass);
      tickElement.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" fill="#303030"></circle>
          <path
            d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
            fill="#fff"
          ></path>
        </svg>
      `;
      if (Number(completedCountElement.innerHTML) < 6) {
        completedCountElement.innerHTML =
          Number(completedCountElement.innerHTML) + 1;
        topBlackElement.style.width = `${completedCountElement.innerHTML * 20}%`;
      }
    }
  }
});

// Toggle dropdown functionality
[dcElement, dropDownElement, secElement].forEach((el) =>
  el.addEventListener("click", toggleDropdown)
);

// Toggle alert functionality
[alertElement, notificationElement].forEach((el) =>
  el.addEventListener("click", toggleAlert)
);

// Hide the top header on remove button click
removeElement.addEventListener("click", () => {
  topHeaderElement.style.visibility = "hidden";
});
