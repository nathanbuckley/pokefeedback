const path = require("path");
const feedbackData = require("../data/users");

module.exports = [
    // {
    //     method: "GET",
    //     path: "/{userId}",
    //     handler: (request, h) => {
    //         return h.view("user", { feedbackData });
    //     },
    // },
    {
        method: "GET",
        path: "/{userId}",
        handler: (request, h) => {
            const userId = request.params.userId;
            console.log(userId);

            const feedback = feedbackData.filter((item) => item.id === userId);
            return h.view("user", { user: feedback[0] });
        },
    },
];
