import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { TemplariosBadgeSize, MedColors } from '../../../templarios';

export default {
  title: 'Components/Ionic/Badge',
  decorators: [withDesign],
};

const Template = ({ 'ds-color': dsColor, 'ds-size': dsSize, fill, slot }) => {
  return html`
    <ion-app>
      <ion-content>
        <ion-badge ds-color=${dsColor} ds-size=${dsSize} fill=${fill}> ${slot} </ion-badge>
      </ion-content>
    </ion-app>
  `;
};

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/01.-Componentes?node-id=12498%3A44031',
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
  'ds-size': {
    options: [undefined, ...Object.values(TemplariosBadgeSize)],
    control: { type: 'select' },
    description: 'Define a variação de tamanho do componente.',
    defaultValue: 'sm',
    table: {
      type: { summary: Object.values(TemplariosBadgeSize).join(' |') },
      defaultValue: { summary: 'undefined' },
    },
  },
  fill: {
    options: [undefined, 'outline'],
    control: { type: 'radio' },
    description: 'Define a variação de peenchimento componente.',
    table: {
      type: { summary: 'outline' },
      defaultValue: { summary: 'undefined' },
    },
  },
  slot: {
    control: { type: 'text' },
    defaultValue: 'Badge',
  },
};
