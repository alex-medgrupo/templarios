import { withDesign } from 'storybook-addon-designs';
import { MedColors } from '../../../templarios';

export default {
  title: 'Components/Ionic/Item',
  decorators: [withDesign],
};

const Template = ({ 'ds-color': dsColor }) => {
  return `
    <ion-app>
      <ion-content>

        <ion-item-group>
          <ion-item ds-color=${dsColor} mode="ios" lines="none">
            <ion-label token="p14x">
              Texto Primario
            </ion-label>
          </ion-item>
        </ion-item-group>

      </ion-content>
    </ion-app>
  `;
};

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/01.-Componentes?node-id=13338%3A46802',
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
