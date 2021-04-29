const { template } = require('lodash')

const compiler = template('<h1><%= title%></h1>')

const html = compiler({ title: 'MY COMPONENT' })

console.log(html);

const newHTML = compiler({ title: 'New component' })

console.log(newHTML);