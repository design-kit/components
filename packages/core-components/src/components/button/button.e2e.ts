import { newE2EPage } from '@stencil/core/testing';

describe('dk-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dk-button></dk-button>');

    const element = await page.find('dk-button');
    expect(element).toHaveClass('hydrated');
  });
});
