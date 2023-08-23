const babelLoader = require('babel-loader');

module.exports = function(content, map) {
    console.log(this.resource);
    if (
        this.resource.includes('lang=js') ||
        this.resource.includes('.js')
    ) {
        console.log(`transform jsx file ===> ${this.resource} \n`);
        babelLoader.call(this, content);
    } else {
        return content;
    }
};
