// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then((response) => {
    tabs(response);
  })
  .catch((error) => {
    console.log("error", error);
  });

const tabs = (object) => {
  const topics = object.data.topics;
  topics.forEach((e) => {
    const tab = document.createElement("div");
    tab.classList.add("tab");
    tab.textContent = e;

    const tabInfo = document.querySelector(".topics");
    tabInfo.appendChild(tab);
  });
};
