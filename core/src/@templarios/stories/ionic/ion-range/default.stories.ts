import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { TemplariosAvatarSize, MedColors } from '../../../templarios';

export default {
  title: 'Components/Ionic/Range',
  decorators: [withDesign],
};

const Template = ({ 'ds-color': dsColor }) => {
  return html`
    <ion-app>
      <ion-content>

        <ion-item>
          <ion-range ds-color=${dsColor} min="20" max="80" step="2">
            <ion-icon class="med-icon" slot="start" name="med-fontemenor"></ion-icon>
            <ion-icon class="med-icon" slot="end" name="med-fontemaior"></ion-icon>
          </ion-range>
        </ion-item>

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
