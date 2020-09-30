import { mount } from '@vue/test-utils'
import {{name | camelCase}} from './index.js'

describe('{{name | camelCase}}.vue', () => {
  it('renders main node', () => {
    const wrapper = mount({{name | camelCase}})
    expect(wrapper.classes()).toContain('{{name | camelCase }}')
  })
})
