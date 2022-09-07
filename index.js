"use strict";

const Hapi = require("@hapi/hapi");
const Inert = require("@hapi/inert");
const Vision = require("@hapi/vision");
const Nunjucks = require("nunjucks");
const path = require("path");
const fs = require("fs");
const routes = require("./routes");

const init = async () => {
    const server = new Hapi.Server({
        port: 3000,
        host: "localhost",
        // port: ~~process.env.PORT || 3000,
        // host: "0.0.0.0",
        routes: {
            files: {
                relativeTo: path.join(__dirname, "public"),
            },
        },
    });

    await server.register([
        {
            plugin: Inert,
        },
        {
            plugin: Vision,
        },
    ]);

    server.views({
        engines: {
            njk: {
                compile: (src, options) => {
                    const template = Nunjucks.compile(src, options.environment);
                    return (context) => {
                        return template.render(context);
                    };
                },
                prepare: (options, next) => {
                    options.compileOptions.environment = Nunjucks.configure(
                        options.path,
                        { watch: false }
                    );
                    return next();
                },
            },
        },
        path: path.join(__dirname, "views"),
    });

    server.route(routes);

    // server.route({
    //     method: "GET",
    //     path: "/",
    //     handler: (request, h) => {
    //         return "Hello World!";
    //     },
    // });
    await server.start();
    console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
    console.log(err);
    process.exit(1);
});

init();
