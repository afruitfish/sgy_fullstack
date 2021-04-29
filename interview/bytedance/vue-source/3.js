const { h } = require('snabbdom')

const MyComponent = props => {
    return h('h1', props.title, [
        h('span', { style: { fontWeight: 'bold' } }, 'this is bold')
    ])
}

console.log(MyComponent({ title: '???' }));