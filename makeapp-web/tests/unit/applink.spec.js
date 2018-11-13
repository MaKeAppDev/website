import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import AppLink from '@/components/AppLink.vue';

describe('AppLink.vue', () => {
  it('renders app link', () => {
    const msg = 'https';
    const wrapper = shallowMount(AppLink, {
      props: {
        to: 'https://example.com',
      },
    });
    expect(wrapper.text()).to.include(msg);
  });
});
