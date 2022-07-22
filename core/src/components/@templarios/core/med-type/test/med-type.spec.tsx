import { newSpecPage } from '@stencil/core/testing';
import { MedType } from '../med-type';

describe('med-type', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MedType],
      html: `<med-type></med-type>`,
    });
    expect(page.root).toEqualHtml(`
      <med-type>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </med-type>
    `);
  });
});
