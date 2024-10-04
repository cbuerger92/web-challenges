console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');

likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

/* // Funktion zum Erstellen des zweiten Social Media-Posts
function createSecondPost() {
  // Erstellen des Containers für den Post
  const postContainer = document.createElement("div");
  postContainer.classList.add("post");

  // Erstellen des Textes
  const postText = document.createElement("p");
  postText.textContent =
    " Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
  postContainer.appendChild(postText);

  // Erstellen des Like-Buttons
  const likeButton = document.createElement("button");
  likeButton.textContent = "♥ Like";
  likeButton.classList.add("post__button");
  postContainer.appendChild(likeButton);

  // Erstellen des Usernames
  const postUser = document.createElement("p");
  postUser.innerHTML = "@username";
  postContainer.appendChild(postUser);
  postContainer.classList.add("post__username");

  // Event Listener für den Like-Button hinzufügen
  likeButton.addEventListener("click", handleLikeButtonClick);

  // Füge den erstellten Post zum Body hinzu
  document.body.appendChild(postContainer);
}

// Funktion zum Handling des Like-Buttons
function handleLikeButtonClick(event) {
  const button = event.target;
  if (button.textContent === "Like") {
    button.textContent = "Unlike";
  } else {
    button.textContent = "Like";
  }
}

// Den zweiten Post erstellen
createSecondPost(); */

// Elemente erstellen
const article = document.createElement("article");
const content = document.createElement("p");
const footer = document.createElement("footer");
const usernameDisplay = document.createElement("span");
const generatedLikeButton = document.createElement("button");

// CSS Klasse hinzufügen
article.classList.add("post");
content.classList.add("post__content");
footer.classList.add("post__footer");
usernameDisplay.classList.add("post__username");
generatedLikeButton.classList.add("post__button");

// Inhalt hinzufügen
content.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
usernameDisplay.textContent = "@username2";
generatedLikeButton.textContent = "♥ Like";

// Event Listener hinzufügen - klickbar machen
generatedLikeButton.addEventListener("click", handleLikeButtonClick);

// Elemente verschachteln:
article.append(content, footer);
footer.append(usernameDisplay, generatedLikeButton);

// Artikel dem Body hinzufügen:
document.body.append(article);
