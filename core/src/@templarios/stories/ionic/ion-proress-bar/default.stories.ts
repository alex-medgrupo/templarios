import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { TemplariosAvatarSize, MedColors } from '../../../templarios';

export default {
  title: 'Components/Ionic/Progress Bar',
  decorators: [withDesign],
};

const Template = ({ 'ds-color': dsColor, value }) => {
  return html`
    <ion-app>
      <ion-content>

        <ion-progress-bar .ds-color=${dsColor} value=${value / 100}></ion-progress-bar>

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
  value: {
    defaultValue: '50',
    control: { type: 'range', min: 0, max: 100, step: 1 },
    description: 'Define a porcentagem a ser mostrada.'
  },
};
