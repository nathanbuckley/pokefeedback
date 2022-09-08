const feedbackForm = document.getElementById("feedback-form");
const feedbackInput = document.getElementById("feedbackInput");
const feedbackHolder = document.getElementById("feedback-holder");
console.log(feedbackInput);
console.log(feedbackHolder);
console.log(feedbackForm);
let feedbackList = [];

feedbackForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // If the input field is empty do nothing
    if (feedbackInput.value === "") return;
    console.log(feedbackInput.value);
    feedbackList.push(feedbackInput.value);
    renderFeedback();
    feedbackInput.value = "";
});

let likeCounter = 0;
function renderFeedback() {
    html = feedbackList
        .map((feedback) => {
            return `<div class="feedback"><div class="content">${feedback}<button id="like-button">Like</button><p id="like-counter">Likes: ${likeCounter}</p></div></div>`;
        })
        .join("");
    feedbackHolder.innerHTML = html;

    feedbackHolder.innerHTML = html;
}

function liked() {
    const likeButton = document.getElementById("like-button");
    likeButton.addEventListener("click", (e) => {
        likeCounter + 1;
        renderFeedback();
    });
}
