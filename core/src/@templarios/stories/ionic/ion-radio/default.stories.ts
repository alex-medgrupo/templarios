import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColors } from '../../../templarios';

export default {
  title: 'Components/Ionic/Radio',
  decorators: [withDesign],
};

const Template = ({ 'ds-color': dsColor, 'ds-name': dsName, disabled }) => {
  return html`
    <ion-app>
      <ion-content>
        <ion-radio-group value="Value 1">
          <ion-item mode="ios">
            <ion-label ds-color="neutral-10">Value 1</ion-label>
            <ion-radio ds-color=${dsColor} ds-name=${dsName} .disabled=${disabled} slot="start" value="value-1" mode="md"></ion-radio>
          </ion-item>

          <ion-item mode="ios">
            <ion-label ds-color="neutral-10">Value 2</ion-label>
            <ion-radio ds-color=${dsColor} ds-name=${dsName} .disabled=${disabled} slot="start" value="value-2" mode="md"></ion-radio>
          </ion-item>

          <ion-item mode="ios">
            <ion-label ds-color="neutral-10">Value 3</ion-label>
            <ion-radio ds-color=${dsColor} ds-name=${dsName} .disabled=${disabled} slot="start" value="value-3" mode="md"></ion-radio>
          </ion-item>
        </ion-radio-group>
      </ion-content>
    </ion-app>
  `;
};

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/01.-Componentes?node-id=4668%3A26339',
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
  'ds-name': {
    options: [undefined, 'secondary'],
    control: { type: 'inline-radio' },
    description: 'Define a variação do componente.',
    defaultValue: undefined,
    table: {
      type: { summary: 'secondary | undefined' },
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
