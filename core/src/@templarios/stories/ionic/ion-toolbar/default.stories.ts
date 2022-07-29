import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColors } from '../../../templarios';

export default {
  title: 'Components/Ionic/Toolbar',
  decorators: [withDesign],
};

const Template = ({ 'ds-color': dsColor }) => {
  return html`
    <ion-app>
      <ion-header mode="ios">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-button ds-size="xxs" mode="ios" fill="clear">
              <ion-icon slot="start" class="med-icon" name="med-setaesquerda"></ion-icon>
              anterior
            </ion-button>
          </ion-buttons>

          <ul>
            <ion-buttons>
              <ion-button ds-size="xxs" mode="ios" fill="clear" icon-only>
                <ion-icon slot="icon-only" class="med-icon" name="med-star-filled"></ion-icon>
              </ion-button>
              <ion-button ds-size="xxs" mode="ios" fill="clear" icon-only>
                <ion-icon slot="icon-only" class="med-icon" name="med-star-filled"></ion-icon>
              </ion-button>
              <ion-button ds-size="xxs" mode="ios" fill="clear" icon-only>
                <ion-icon slot="icon-only" class="med-icon" name="med-star-filled"></ion-icon>
              </ion-button>
              <ion-button ds-size="xxs" mode="ios" fill="clear" icon-only>
                <ion-icon slot="icon-only" class="med-icon" name="med-star-filled"></ion-icon>
              </ion-button>
            </ion-buttons>
          </ul>

          <ion-buttons slot="end">
            <ion-button ds-size="xxs" mode="ios" fill="clear">
              <ion-icon slot="end" class="med-icon" name="med-setadireita"></ion-icon>
              próxima
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>

      <ion-content>
      </ion-content>
    </ion-app>
  `;
};

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/01.-Componentes?node-id=5248%3A39909',
  },
};
Default.argTypes = {
  'ds-color': {
    options: [undefined, ...Object.values(MedColors)],
    control: { type: 'select' },
    description: 'Define a cor do componente.',
    defaultValue: undefined,
    table: {
      type: { summary: Object.values(MedColors).join(' |') },
      defaultValue: { summary: 'undefined' },
    },
  },
};
