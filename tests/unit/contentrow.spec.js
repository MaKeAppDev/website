import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import ContentRow from '@/components/ContentRow.vue';

describe('ContentRow.vue', () => {
  it('Passing slot content correctly', () => {
    const wrapper = shallowMount(ContentRow, {
      slots: {
        default: '<div class=".fancy-div">Div Content</div>',
      },
    });
    expect(wrapper.text()).to.include('Div Content');
    expect(wrapper.find('.fancy-div'));
  });
});
