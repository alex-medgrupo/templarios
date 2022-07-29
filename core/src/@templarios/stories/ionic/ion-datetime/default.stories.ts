import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColors } from '../../../templarios';

export default {
  title: 'Components/Ionic/Datetime',
  decorators: [withDesign],
};

const Template = ({ 'ds-color': dsColor, 'ds-name': dsName, disabled, pickerOptions }) => {
  return html`
    <ion-app>
      <ion-content>

        <ion-label>Description</ion-label>
        <tp-input-container .dsColor=${dsColor} ds-name=${dsName} .disabled=${disabled}>
          <ion-datetime
            ds-color=${dsColor}
            ds-name=${dsName}
            .disabled=${disabled}
            .pickerOptions=${pickerOptions}
            mode="ios"
            placeholder="dd/mm/aaaa">
          </ion-datetime>
          <ion-icon class="med-icon" slot="end" name="med-cronograma"></ion-icon>
        </tp-input-container>

      </ion-content>
    </ion-app>
  `;
};

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/01.-Componentes?node-id=4920%3A33705',
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
  pickerOptions:{
    defaultValue: {
      cssClass: "tp-datetime",
    },
    control: { type: 'object' },
    description: 'Define a classe css parra a modal do datepicker.',
  }
};
