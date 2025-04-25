let lastScrollTop = 0;
const header = document.querySelector("header");
const timeText = document.querySelector(".time");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }

  lastScrollTop = scrollTop;
});

const now = new Date();
const nairobiTime = now.toLocaleString("en-US", { timeZone: "Africa/Nairobi" });
const [date, time] = nairobiTime.split(", ");
timeText.textContent = `${time} EAT`;

const yearText = document.getElementById("year");
const year = new Date().getFullYear();

yearText.textContent = year;