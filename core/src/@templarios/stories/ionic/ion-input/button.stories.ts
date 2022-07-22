import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColors } from '../../../templarios';

export default {
  title: 'Components/Ionic/Input',
  decorators: [withDesign],
};

const Template = ({ 'ds-color': dsColor, 'ds-name': dsName, disabled }) => {
  return html`
    <ion-app>
      <ion-content>
        <ion-label token="p14">Description</ion-label>
        <tp-input-container .dsColor=${dsColor} ds-name=${dsName} .disabled=${disabled} has-button="start">
          <ion-button slot="start" .disabled=${disabled} ds-size="xxs" mode="ios" fill="clear" icon-only>
            <ion-icon class="med-icon" slot="icon-only" name="med-direita"></ion-icon>
          </ion-button>
          <ion-input .dsColor=${dsColor} .disabled=${disabled} placeholder="Lorem ipsum dolor"></ion-input>
        </tp-input-container>

        <ion-label token="p14">Description</ion-label>
        <tp-input-container .dsColor=${dsColor} ds-name=${dsName} .disabled=${disabled} has-button="end">
          <ion-input .dsColor=${dsColor} .disabled=${disabled} placeholder="Lorem ipsum dolor"></ion-input>
          <ion-button slot="end" .disabled=${disabled} ds-size="xxs" mode="ios" fill="clear" icon-only>
            <ion-icon class="med-icon" slot="icon-only" name="med-direita"></ion-icon>
          </ion-button>
        </tp-input-container>

        <ion-label token="p14">Description</ion-label>
        <tp-input-container .dsColor=${dsColor} ds-name=${dsName} .disabled=${disabled} has-button="both">
          <ion-button slot="start" .disabled=${disabled} ds-size="xxs" mode="ios" fill="clear" icon-only>
            <ion-icon class="med-icon" slot="icon-only" name="med-direita"></ion-icon>
          </ion-button>
          <ion-input .dsColor=${dsColor} .disabled=${disabled} placeholder="Lorem ipsum dolor"></ion-input>
          <ion-button slot="end" .disabled=${disabled} ds-size="xxs" mode="ios" fill="clear" icon-only>
            <ion-icon class="med-icon" slot="icon-only" name="med-direita"></ion-icon>
          </ion-button>
        </tp-input-container>
      </ion-content>
    </ion-app>
  `;
};

export const Button = Template.bind({});
Button.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/01.-Componentes?node-id=9341%3A58123',
  },
};
Button.argTypes = {
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
