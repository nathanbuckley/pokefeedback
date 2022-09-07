const userData = require("../data/users");

module.exports = [
    {
        method: "GET",
        path: "/feed",
        handler: (request, h) => {
            return h.view("home", { userData });
        },
    },
];
