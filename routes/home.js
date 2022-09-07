const path = require("path");
const userData = require("../data/users");

module.exports = [
    {
        method: "GET",
        path: "/",
        handler: (request, h) => {
            return h.view("home", { userData });
        },
    },
    {
        method: "*",
        path: "/{any*}",
        handler: (request, h) => {
            return "Whoops something broke, 404 Error! Page Not Found!";
        },
    },
    {
        method: "GET",
        path: "/{param*}",
        handler: {
            directory: {
                path: "../",
                listing: true,
            },
        },
    },
];
