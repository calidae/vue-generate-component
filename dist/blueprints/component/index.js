{% if container %}import {{name}}Container from './{{name}}Container'

export default {{name}}Container
{% else %}import {{name}} from './{{name}}'

export default {{name}}
{% endif %}