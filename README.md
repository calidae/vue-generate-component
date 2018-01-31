# Vue js component generator

Developed upon the work of [vue-generate-component](https://github.com/NetanelBasal/vue-generate-component).

CLI util for easy generate Vue js component

## Installation
```js
npm install -g vue-generate-component
```

## Usage

```bash
vgc --help
```

### Create new component
```bash
vgc Footer
```
Will generate three files:


**index.js**
```js
import Footer from './Footer'

export default Footer
```



**Footer.vue**
```vue
<template>
  <div class="c-footer">

  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {}
  }
}
</script>
```


**Footer.spec.js**
```javascript
import Vue from 'vue'
import Footer from './index.js'
import { mount, shallow } from '@vue/test-utils'

describe('Footer.vue', () => {
  it('is a component', () => {
    const wrapper = mount(Footer)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders an snapshot', () => {
    const wrapper = shallow(Footer)
    expect(wrapper.html()).toMatchSnapshot('default')
  })
})
```


### Creating a container component
If you want to replicate the structure outlined above but adding a Container
component, just add the `container` flag:

```bash
vgc Footer --container
```

Will modify the `index.js` file and create a new container component and test file:

**index.js**
```js
import FooterContainer from './FooterContainer'

export default FooterContainer
```

**FooterContainer.vue**
```vue
<template>
  <div>
    <Footer />
  </div>
</template>

<script>
import Footer from './Footer'

export default {
  name: 'FooterContainer',
  components: {
    Footer
  },
  data() {
    return {}
  }
}
</script>
```


**FooterContainer.spec.js**
```javascript
import Vue from 'vue'
import FooterContainer from './FooterContainer'
import { mount, shallow } from '@vue/test-utils'

describe('FooterContainer.vue', () => {
  it('is a component', () => {
    const wrapper = mount(FooterContainer)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders an snapshot', () => {
    const wrapper = shallow(FooterContainer)
    expect(wrapper.html()).toMatchSnapshot('default')
  })
})
```