# Vue js component generator

Developed upon the work of [vue-generate-component](https://github.com/NetanelBasal/vue-generate-component).

CLI util for easy generate Vue component structure.

## Installation
```bash
npm install -g @calidae/vue-generate-component
```

If you want to try it out without polluting your global npm, you can use [npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b):

```bash
npx @calidae/vue-generate-component [ARGUMENTS]
```

## Usage

### Create new component
```bash
vgc Footer
```
Will generate a folder called `Footer` in *your current directory* vue component file:

**Footer.vue**
```vue
<template>
  <div class="footer">
    Footer component
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {}
  }
}
</script>

<style scoped></style>

```

### Creating a index.js to simplify the import statements
If you want to create a index.js to simplify the import statements simply add the `--index` flag or use the alias `-i`

```bash
vgc Footer --index
vgc Footer -i
```

**index.js**
```js
import Footer from './Footer'

export default Footer
```

### Creating a boilerplate test file
If you want to create a **.spec.js test file as a boilerplate where start wrtiting your own tests simply add the `--test` flag or use the alias `-t`

```bash
vgc Footer --test
vgc Footer -t
```

**Footer.spec.js**
```js
import Footer from './index.js'
import { mount } from '@vue/test-utils'

describe('Footer.vue', () => {
  it('renders main node', () => {
    const wrapper = mount(Footer)
    expect(wrapper.classes()).toContain('Footer')
  })
})
```

## Disclaimer

This project tries to solve tedious copy&paste operations from **our** daily workflow.
Please notice that the generated files will require some external libraries such as
Vue, @vue/test-utils or Sass loader configuration. Make sure these libraries are available in your project.


## TODO

1. Add tests(!)
2. Add ability to define folder path (now it only creates a folder in the current directory)
3. swig@1.4.2 is no longer maintained
3. ...

