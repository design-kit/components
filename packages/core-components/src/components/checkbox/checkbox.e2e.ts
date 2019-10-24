import { newE2EPage } from '@stencil/core/testing';

describe('dk-checkbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dk-checkbox></dk-checkbox>');

    const element = await page.find('dk-checkbox');
    expect(element).toHaveClass('hydrated');
  });
});
