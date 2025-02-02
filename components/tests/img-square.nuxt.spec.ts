import { describe, it, expect, vi} from 'vitest'
import { shallowMount } from '@vue/test-utils'
import * as helpers from '~/utils/helpers'

import imgSquare from '../img-square.vue'

const imageProp = { id: 1 }

describe('image square', () => {

    const spyNewURL = vi.spyOn(helpers, 'newURL').mockImplementation(() => 'https://test.com/image.png')

    const component = () => shallowMount(
      imgSquare, 
      {
        props: {
          imageProp: imageProp
        }
      }
    )

    it('component renders image square properly', () => {
      const wrapper = component()
      expect(wrapper).toBeTruthy()
    })

    it('component html renders properly after setting tagImage variable', async () => {
      const wrapper = component()
      expect(spyNewURL).toHaveBeenCalledWith(1)
      wrapper.vm.setTagImage('https://test.com/image.png')
      await wrapper.vm.$nextTick();
      expect(wrapper.html()).toMatchSnapshot()
    })

    it('Test hideImg', async () => {
      const wrapper = component()
      expect(spyNewURL).toHaveBeenCalledWith(1)
      const imageWrapper = wrapper.find('.image');
      await imageWrapper.trigger('click');
      await wrapper.vm.$nextTick();
      expect(wrapper.find('.image').exists()).toBe(false);
    })

})