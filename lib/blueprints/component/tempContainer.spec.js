import {{name | camelCase}}Container from './{{name | camelCase}}Container'
import { mount } from '@vue/test-utils'

describe('{{name | camelCase}}Container.vue', () => {
  it('is a component', () => {
    const wrapper = mount({{name | camelCase}}Container)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
