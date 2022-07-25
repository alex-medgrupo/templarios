import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColors } from '../../../templarios';

export default {
  title: 'Components/Ionic/Fab Button',
  decorators: [withDesign],
};

const Template = ({ 'ds-color': dsColor }) => {
  return html`
    <ion-app>
      <ion-content>
        <ion-fab vertical="center" horizontal="center" slot="fixed">
          <ion-fab-button ds-color=${dsColor}>
            <ion-icon class="med-icon" name="med-mais"></ion-icon>
          </ion-fab-button>
          <ion-fab-list side="top">
            <ion-fab-button ds-color="neutral-10">
              <ion-icon class="med-icon" name="med-star-filled"></ion-icon>
            </ion-fab-button>
            <ion-fab-button ds-color="neutral-10">
              <ion-icon class="med-icon" name="med-star-filled"></ion-icon>
            </ion-fab-button>
            <ion-fab-button ds-color="neutral-10">
              <ion-icon class="med-icon" name="med-star-filled"></ion-icon>
            </ion-fab-button>
            <ion-fab-button ds-color="neutral-10">
              <ion-icon class="med-icon" name="med-star-filled"></ion-icon>
            </ion-fab-button>
          </ion-fab-list>
        </ion-fab>
      </ion-content>
    </ion-app>
  `;
};

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/01.-Componentes?node-id=13948%3A31953',
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
