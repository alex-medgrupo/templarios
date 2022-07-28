import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColors } from '../../../templarios';

export default {
  title: 'Components/Ionic/Segment Button',
  decorators: [withDesign],
};

const Template = ({ 'ds-color': dsColor }) => {
  return html`
    <ion-app>
      <ion-content>

        <ion-segment value="tab-1" scrollable>
          <ion-segment-button ds-color=${dsColor} value="tab-1">
            <ion-label>TABS 1</ion-label>
          </ion-segment-button>

          <ion-segment-button ds-color=${dsColor} value="tab-2">
            <ion-label>TABS 2</ion-label>
          </ion-segment-button>

          <ion-segment-button ds-color=${dsColor} value="tab-3">
            <ion-label>TABS 3</ion-label>
          </ion-segment-button>

          <ion-segment-button ds-color=${dsColor} value="tab-4">
            <ion-label>TABS 4</ion-label>
          </ion-segment-button>

          <ion-segment-button ds-color=${dsColor} value="tab-5">
            <ion-label>TABS 5</ion-label>
          </ion-segment-button>

          <ion-segment-button ds-color=${dsColor} value="tab-6">
            <ion-label>TABS 6</ion-label>
          </ion-segment-button>
        </ion-segment>

      </ion-content>
    </ion-app>
  `;
};

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/01.-Componentes?node-id=8211%3A57102',
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
  }
};
