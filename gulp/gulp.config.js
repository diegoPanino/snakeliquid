const path = require('path');

const scssSource = 'scss/**/*.scss';
const jsSource = 'script/index.js';

const dest = 'assets';

module.exports = {
    paths: {
        source: {
            scss: scssSource,
            js: jsSource,
            jsvendor: [
                path.resolve(__dirname, '../node_modules/bootstrap/js/dist/dom/data.js'),
                path.resolve(__dirname, '../node_modules/bootstrap/js/dist/dom/event-handler.js'),
                path.resolve(__dirname, '../node_modules/bootstrap/js/dist/dom/manipulator.js'),
                path.resolve(__dirname, '../node_modules/bootstrap/js/dist/dom/selector-engine.js'),
                path.resolve(__dirname, '../node_modules/bootstrap/js/dist/base-component.js'),
                path.resolve(__dirname, '../node_modules/bootstrap/js/dist/collapse.js')
            ]
        },
        destination: {
            assets: dest
        }
    }
};

