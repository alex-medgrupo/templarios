import { newSpecPage } from '@stencil/core/testing';
import { TpInputContainer } from '../tp-input-container';

describe('tp-input-container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TpInputContainer],
      html: `<tp-input-container></tp-input-container>`,
    });
    expect(page.root).toEqualHtml(`
      <tp-input-container>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </tp-input-container>
    `);
  });
});
