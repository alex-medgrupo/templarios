import { newE2EPage } from '@stencil/core/testing';

describe('med-type', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<med-type></med-type>');

    const element = await page.find('med-type');
    expect(element).toHaveClass('hydrated');
  });
});
