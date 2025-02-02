import { describe, it, expect} from 'vitest'
import { mount } from '@vue/test-utils'

import topBar from '../top-bar.vue'

describe('top bar', () => {
    it('component renders top bar properly', () => {
      const wrapper = mount(topBar)
      expect(wrapper).toBeTruthy()
    })

    it('component html renders properly', () => {
      const wrapper = mount(topBar)
      expect(wrapper.html()).toMatchSnapshot()
    })
})