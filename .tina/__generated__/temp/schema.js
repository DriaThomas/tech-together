"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cli_1 = require("@tinacms/cli");
exports.default = (0, cli_1.defineSchema)({
    collections: [
        {
            label: "Blog Posts",
            name: "posts",
            path: "content/posts",
            fields: [
                {
                    type: "string",
                    label: "Title",
                    name: "title",
                },
                {
                    type: "string",
                    label: "Blog Post Body",
                    name: "body",
                    isBody: true,
                    ui: {
                        component: "textarea"
                    },
                },
            ],
        },
    ],
});
