const header = require("./src/header/index.js");

module.exports = function (eleventyConfig) {
    eleventyConfig.addShortcode("header", header);

    return {
        dir: {
            input: "src",
            output: "public",
        }
    }
}