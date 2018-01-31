import {{name | camelCase}}Container from './{{name | camelCase}}Container'
import { mount, shallow } from '@vue/test-utils'

describe('{{name | camelCase}}Container.vue', () => {
  it('is a component', () => {
    const wrapper = mount({{name | camelCase}}Container)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders an snapshot', () => {
    const wrapper = shallow({{name | camelCase}}Container)
    expect(wrapper.html()).toMatchSnapshot('default')
  })
})
