// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const cardContainer = document.querySelector(".cards-container");
axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then((response) => {
    const articles = response.data.articles;

    for (let names in articles) {
      articles[names].forEach((e) => {
        cardContainer.appendChild(cards(e));
      });
    }
  })
  .catch((error) => {
    console.log("error", error);
  });

const cards = (object) => {
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const image = document.createElement("img");
  const authorName = document.createElement("span");

  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  card.appendChild(headline);
  card.appendChild(author);
  card.appendChild(imgContainer);
  imgContainer.appendChild(image);
  author.appendChild(authorName);
  author.appendChild(imgContainer);

  headline.textContent = object.headline;
  image.src = object.authorPhoto;
  name.textContent = object.authorName;

  card.addEventListener("click", () => {
    console.log(headline.textContent);
  });

  return card;
};
