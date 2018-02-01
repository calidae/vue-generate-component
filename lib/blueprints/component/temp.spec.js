import {{name | camelCase}} from './index.js'
import { mount, shallow } from '@vue/test-utils'

describe('{{name | camelCase}}.vue', () => {
  it('is a component', () => {
    const wrapper = mount({{name | camelCase}})
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders main node', () => {
    const wrapper = mount({{name | camelCase}})
    expect(wrapper.hasClass('c-{{name | camelCaseOnly }}')).toBeTruthy()
  })

  it('renders an snapshot', () => {
    const wrapper = shallow({{name | camelCase}})
    expect(wrapper.html()).toMatchSnapshot('default')
  })
})
