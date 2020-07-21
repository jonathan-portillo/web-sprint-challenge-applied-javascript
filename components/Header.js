// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
  const head = document.createElement("div");
  const date = document.createElement("span");
  const times = document.createElement("h1");
  const temp = document.createElement("span");

  head.classList.add("header");
  date.classList.add("date");
  temp.classList.add("temp");

  head.appendChild(date);
  head.appendChild(times);
  head.appendChild(temp);

  times.textContent = "Lambda Times";
  date.textContent = "March 28th, 2020";
  temp.textContent = "98°";

  return head;
}

const headContainer = document.querySelector(".header-container");

headContainer.appendChild(Header());
