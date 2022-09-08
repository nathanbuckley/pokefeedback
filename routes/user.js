const path = require("path");
const feedbackData = require("../data/users");

module.exports = [
    {
        method: "GET",
        path: "/{userId}",
        handler: (request, h) => {
            const userId = request.params.userId;
            // if project not in projectData then throw boom.notfound (checkout hapi boom)
            // else
            const feedback = feedbackData.filter((item) => item.id === userId);
            return h.view("user", { feedback: feedback[0].feedback });
        },
    },
];
