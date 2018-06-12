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
Will generate a folder called `Footer` in *your current directory* with three files :


**index.js**
```js
import Footer from './Footer'

export default Footer
```



**Footer.vue**
```vue
<template>
  <div class="Footer">
    
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

<style lang="scss" scoped>

</style>

```


**Footer.spec.js**
```js
import Footer from './index.js'
import { mount } from '@vue/test-utils'

describe('Footer.vue', () => {
  it('is a component', () => {
    const wrapper = mount(Footer)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders main node', () => {
    const wrapper = mount(Footer)
    expect(wrapper.classes()).toContain('Footer')
  })

  it('renders a snapshot', () => {
    const wrapper = mount(Footer)
    expect(wrapper.html()).toMatchSnapshot('default')
  })
})
```


### Creating a folder with Container Component
If you want to replicate the structure outlined above but adding a Container
component, add the `container` flag:

```bash
vgc Footer --container
```

In addition to previously outlined files, this command will modify `index.js`:

**index.js**
```js
import FooterContainer from './FooterContainer'

export default FooterContainer
```

and create 2 new files:

**FooterContainer.vue**
```vue
<template>
  <Footer />
</template>

<script>
import Footer from './Footer'

export default {
  name: 'FooterContainer',
  components: {
    Footer
  },
  data () {
    return {}
  }
}
</script>
```


**FooterContainer.spec.js**
```javascript
import FooterContainer from './FooterContainer'
import { mount } from '@vue/test-utils'

describe('FooterContainer.vue', () => {
  it('is a component', () => {
    const wrapper = mount(FooterContainer)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders a snapshot', () => {
    const wrapper = mount(FooterContainer)
    expect(wrapper.html()).toMatchSnapshot('default')
  })
})
```


## Disclaimer

This project tries to solve tedious copy&paste operations from **our** daily workflow.
Please notice that the generated files will require some external libraries such as
Vue or @vue/test-utils. Make sure these libraries are available in your project.


## TODO

1. Add tests(!)
2. Add ability to define folder path (now it only creates a folder in the current directory)
3. ...

