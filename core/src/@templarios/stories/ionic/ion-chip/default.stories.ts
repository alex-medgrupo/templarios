import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { TemplariosChipSize, MedColors } from '../../../templarios';

export default {
  title: 'Components/Ionic/Chip',
  decorators: [withDesign],
};

const Template = ({ 'ds-color': dsColor, 'ds-name': dsName, 'ds-size': dsSize, active, disabled, slot }) => {
  return html`
    <ion-app>
      <ion-content>

        <ion-chip mode="ios" ds-color=${dsColor} ds-name=${dsName} ds-size=${dsSize} ?active=${active} .disabled=${disabled}>
          <ion-label> ${slot} </ion-label>
        </ion-chip>

        <ion-chip mode="ios" ds-color=${dsColor} ds-name=${dsName} ds-size=${dsSize} ?active=${active} .disabled=${disabled}>
          <ion-icon class="med-icon" name="med-star-filled"></ion-icon>
          <ion-label> ${slot} </ion-label>
        </ion-chip>

        <ion-chip mode="ios" ds-color=${dsColor} ds-name=${dsName} ds-size=${dsSize} ?active=${active} .disabled=${disabled}>
          <ion-label> ${slot} </ion-label>
          <ion-icon class="med-icon" name="med-star-filled"></ion-icon>
        </ion-chip>

        <ion-chip mode="ios" ds-color=${dsColor} ds-name=${dsName} ds-size=${dsSize} ?active=${active} .disabled=${disabled}>
          <ion-icon class="med-icon" name="med-star-filled"></ion-icon>
          <ion-label> ${slot} </ion-label>
          <ion-icon class="med-icon" name="med-star-filled"></ion-icon>
        </ion-chip>

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
  'ds-name': {
    options: [undefined, 'secondary'],
    control: { type: 'inline-radio' },
    description: 'Define a varia????o do componente.',
    defaultValue: undefined,
    table: {
      type: { summary: 'secondary | undefined' },
      defaultValue: { summary: 'undefined' },
    },
  },
  'ds-size': {
    options: [undefined, ...Object.values(TemplariosChipSize)],
    control: { type: 'select' },
    description: 'Define a varia????o de tamanho do componente.',
    defaultValue: 'sm',
    table: {
      type: { summary: Object.values(TemplariosChipSize).join(' |') },
      defaultValue: { summary: 'undefined' },
    },
  },
  active: {
    disabled: false,
    control: { type: 'boolean' },
    description: 'Define o estado disabled do componente.',
    table: {
      type: { summary: 'boolean' },
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
  slot: {
    control: { type: 'text' },
    defaultValue: 'Chip',
  },
};
