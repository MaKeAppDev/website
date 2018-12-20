import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import ContentRow from '@/components/ContentRow.vue';

describe('ContentRow.vue', () => {
  it('Passing title property correctly', () => {
    const wrapper = shallowMount(ContentRow);
    wrapper.setProps({ title: 'Test Title' });
    expect(wrapper.text()).to.include('Test Title');
    expect(wrapper.contains('lead'));
  });
  it('Passing slot content correctly', () => {
    const wrapper = shallowMount(ContentRow, {
      slots: {
        default: '<div class=".fancy-div">Div Content</div>',
      },
    });
    expect(wrapper.text()).to.include('Div Content');
    expect(wrapper.contains('.fancy-div'));
  });
});
