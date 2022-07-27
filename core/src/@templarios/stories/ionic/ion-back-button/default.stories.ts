import { withDesign } from 'storybook-addon-designs';
import { TemplariosButtonSize, MedColors } from '../../../templarios';

export default {
  title: 'Components/Ionic/Back Button',
  decorators: [withDesign],
};

const Template = ({ 'ds-color': dsColor, 'ds-size': dsSize, disabled, expand }) => {
  return `
    <ion-app>
      <ion-content>
        <ion-back-button
          mode="ios"
          text=""
          ${dsColor ? `ds-color=${dsColor}` : ''}
          ${dsSize ? `ds-size=${dsSize}` : ''}
          ${disabled ? `disabled=${disabled}` : ''}
          ${expand !== 'none' ? `expand=${expand}` : ''}
          >
          <ion-icon class="med-icon" name="med-esquerda"></ion-icon>
        </ion-back-button>
      </ion-content>
    </ion-app>
  `;
};

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/01.-Componentes?node-id=6441%3A51186',
  },
};
Default.argTypes = {
  'ds-color': {
    options: [undefined, ...Object.values(MedColors)],
    control: { type: 'select' },
    description: 'Define a cor do componente.',
    defaultValue: 'brand',
    table: {
      type: { summary: Object.values(MedColors).join(' |') },
      defaultValue: { summary: 'undefined' },
    },
  },
  'ds-size': {
    options: Object.values(TemplariosButtonSize),
    control: { type: 'select' },
    description: 'Define a variação de tamanho do.',
    defaultValue: 'xs',
    table: {
      type: { summary: Object.values(TemplariosButtonSize).join(' |') },
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
  expand: {
    defaultValue: 'none',
    options: ['block'],
    control: { type: 'check' },
    description: 'Define a variação de estilo do componente.',
    table: {
      type: { summary: ['block'] },
      defaultValue: { summary: 'undefined' },
    },
  },
};
