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
        value: "Thank you for your extra effort to finish this project. Your helpful attitude makes it clear that you can continue to take on new challenges and grow with the company.",
        likes: 9,
    },
    {
        id: 2,
        value: "All the training you have done with the new hire has been very helpful. You're giving him a great start to his internship.",
        likes: 6,
    },
    {
        id: 3,
        value: "You've been doing a great job lately. Thank you for your hard work",
        likes: 11,
    },
    {
        id: 4,
        value: "Thank you for putting in the extra effort during this busy time at work. You are a valuable member of our team, and your positive attitude has helped us all continue to feel motivated.",
        likes: 3,
    },
    {
        id: 5,
        value: "You're the best!",
        likes: 0,
    },
    {
        id: 6,
        value: "Thank you for your help with the new site launch",
        likes: 12,
    },
    {
        id: 7,
        value: "You are always there to help when I need it which is very much appreciated!",
        likes: 8,
    },
    {
        id: 8,
        value: "The way you take ownership of tickets has really improved turnaround times",
        likes: 7,
    },
    {
        id: 9,
        value: "Amazing work on the recent investigations!",
        likes: 3,
    },
    {
        id: 10,
        value: "I admire your work ethic and your talent, you set a great example.",
        likes: 12,
    },
    {
        id: 11,
        value: "I know things are stressful right now, but thanks to you, we are on track to get everything finished on time",
        likes: 16,
    },
    {
        id: 12,
        value: "Your work leading this project from start to finish is truly exemplary!",
        likes: 4,
    },
    {
        id: 13,
        value: "Nice work, colleague",
        likes: 7,
    },
    {
        id: 14,
        value: "Go you!",
        likes: 0,
    },
    {
        id: 15,
        value: "He is the best!",
        likes: 10,
    },
    {
        id: 16,
        value: "Great work on Hack Day!",
        likes: 5,
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
