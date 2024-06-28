const path = require('path')

const createPath = (page) => path.resolve(__dirname, '../../frontend', `${page}.ejs`)

module.exports = createPath