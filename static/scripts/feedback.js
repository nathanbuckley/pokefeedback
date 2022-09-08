const feedbackForm = document.getElementById("feedback-form");
const feedbackInput = document.getElementById("feedbackInput");
const feedbackHolder = document.getElementById("feedback-holder");
const feedback = document.getElementById("feedback");
// console.log(feedbackInput);
// console.log(feedbackHolder);
// console.log(feedbackForm);

let feedbackLongList = [
    {
        id: 1,
        value: "He is the best!",
        likes: 14,
    },
    {
        id: 2,
        value: "He is way better than the rest!",
        likes: 12,
    },
    {
        id: 3,
        value: "He is the best!",
        likes: 14,
    },
    {
        id: 4,
        value: "He is way better than the rest!",
        likes: 12,
    },
    {
        id: 5,
        value: "He is the best!",
        likes: 14,
    },
    {
        id: 6,
        value: "He is way better than the rest!",
        likes: 12,
    },
    {
        id: 7,
        value: "He is the best!",
        likes: 14,
    },
    {
        id: 8,
        value: "He is way better than the rest!",
        likes: 12,
    },
    {
        id: 9,
        value: "He is the best!",
        likes: 14,
    },
    {
        id: 10,
        value: "He is way better than the rest!",
        likes: 12,
    },
    {
        id: 11,
        value: "He is the best!",
        likes: 14,
    },
    {
        id: 12,
        value: "He is way better than the rest!",
        likes: 12,
    },
    {
        id: 13,
        value: "He is the best!",
        likes: 14,
    },
    {
        id: 14,
        value: "He is way better than the rest!",
        likes: 12,
    },
    {
        id: 15,
        value: "He is the best!",
        likes: 14,
    },
    {
        id: 16,
        value: "He is way better than the rest!",
        likes: 12,
    },
];

let shuffled = feedbackLongList.sort(() => 0.5 - Math.random());
let feedbackList = shuffled.slice(0, 5);

feedbackForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // If the input field is empty do nothing
    if (feedbackInput.value === "") return;
    console.log(feedbackInput.value);

    let newFeedback = {
        value: `${feedbackInput.value}`,
        id: new Date().getTime(),
        likes: 0,
    };
    feedbackList.push(newFeedback);
    feedbackInput.value = "";
    feedbackInput.focus();

    renderFeedback();
});

function renderFeedback() {
    html = feedbackList
        .map((feedback) => {
            return `<div class="feedback"><div class="content feedback-${feedback.id}">${feedback.value}<button data-id="${feedback.id}" id="like-button">Like</button><p> Likes: <span id="like-counter-${feedback.id}">${feedback.likes}</span> </p></div></div>`;
        })
        .join("");
    feedbackHolder.innerHTML = html;
}

feedback.addEventListener("click", (e) => {
    const el = e.target;
    if (!el.dataset.id) return;
    if (el.id === "like-button") {
        const id = parseInt(el.dataset.id);
        for (const obj of feedbackList) {
            if (obj.id === id) {
                obj.likes++;
            }
        }
        renderFeedback();
    }
});

renderFeedback();
