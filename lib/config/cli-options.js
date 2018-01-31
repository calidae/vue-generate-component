export default [{
    name: 'help',
    type: Boolean,
    group: "options",
    description: 'help'
  }, {
    name: 'component',
    alias: 'c',
    type: String,
    group: "options",
    description: 'generate Vue js component',
    defaultOption: true
  },{
    name: 'folder',
    alias: 'f',
    type: Boolean,
    group: "options",
    description: 'generate Vue js component single file inside new folder'
  },{
    name: 'container',
    alias: 'd',
    type: Boolean,
    group: "options",
    description: 'generate Vue js container component inside new folder'
  }

]
