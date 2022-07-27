import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColors } from '../../../templarios';

export default {
  title: 'Components/Ionic/Toggle',
  decorators: [withDesign],
};

const Template = ({ 'ds-color': dsColor, disabled }) => {
  return html`
    <ion-app>
      <ion-content>
        <ion-item mode="ios">
          <ion-toggle slot="start" ds-color=${dsColor} .disabled=${disabled} mode="ios" value="value-1" checked></ion-toggle>
          <ion-label>Value 1</ion-label>
        </ion-item>

        <ion-item mode="ios">
          <ion-label>Value 2</ion-label>
          <ion-toggle slot="end" ds-color=${dsColor} .disabled=${disabled} mode="ios" value="value-2" disabled></ion-toggle>
        </ion-item>
      </ion-content>
    </ion-app>
  `;
};

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/01.-Componentes?node-id=12435%3A44190',
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
  disabled: {
    disabled: false,
    control: { type: 'boolean' },
    description: 'Define o estado disabled do componente.',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'undefined' },
    },
  },
};
