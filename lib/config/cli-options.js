export default [{
    name: 'help',
    type: Boolean,
    group: "options",
    description: 'help'
  },{
    name: 'component',
    alias: 'c',
    type: String,
    group: "options",
    description: 'generate Vue js component',
    defaultOption: true
  },{
    name: 'index',
    alias: 'i',
    type: Boolean,
    group: "options",
    description: 'generate Vue js component with index.js file',
  },{
    name: 'test',
    alias:'t',
    type: Boolean,
    group: "options",
    description: 'generate test file with boilerplate code',
  }]