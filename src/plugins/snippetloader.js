const files = require.context("@/snippets/", true, /\.json$/i).keys();
const messages = files.reduce((accumulator, file) => {
    file = file.replace('./', '');
    accumulator[file.split('.')[0]] = require(`@/snippets/${file}`);

    return accumulator;
}, {});

export default messages;