// postcss.config.js
module.exports = {
    plugins: {
        "postcss-pxtorem": {
            "rootValue": 32,
            "propList": ["*"]
        }
    }
};