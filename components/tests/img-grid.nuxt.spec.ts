import { describe, it, expect} from 'vitest'
import { shallowMount } from '@vue/test-utils'

import imgGrid from '../img-grid.vue'

const imagesProp = [
  { id: 1 },
  { id: 2 },
  { id: 3 }
]

describe('image grid', () => {
    const component = () => shallowMount(
      imgGrid, 
      {
        props: {
          images: imagesProp
        }
      }
    )

    it('component renders image grid properly', () => {
      const wrapper = component()
      expect(wrapper).toBeTruthy()
    })

    it('component html renders properly', () => {
      const wrapper = component()
      expect(wrapper.html()).toMatchSnapshot()
    })
})