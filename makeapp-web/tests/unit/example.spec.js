import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import NavBar from '@/components/NavBar.vue';

describe('NavBar.vue', () => {
  it('renders home', () => {
    const msg = 'Home';
    const wrapper = shallowMount(NavBar, {});
    expect(wrapper.text()).to.include(msg);
  });
});
