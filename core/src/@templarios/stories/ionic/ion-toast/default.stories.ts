import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { toastController } from '../../../../../dist/ionic/index.esm.js';
import { MedColors } from '../../../templarios';
import { generateMedColor } from '../../../../@templarios/utilities/color';

export default {
  title: 'Components/Ionic/Toast',
  decorators: [withDesign],
};

const Template = ({'color-modifiers': colorModifiers}) => {

  const openToast = async () => {
    toastController.create({
      header: 'Mensagem da Notificação.',
      position: 'bottom',
      showCloseButton: true,
      cssClass: `tp-toast ${colorModifiers}`,
      buttons: [
      {
        side: 'end',
        icon: 'med-fechar',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
    }).then((toast) => {
      toast.present()
    })
  }

  return html`
    <ion-app>
      <ion-content>

        <ion-button mode="ios" ds-size="xs" @click="${openToast}">toast</ion-button>

      </ion-content>
    </ion-app>
  `;
};

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/01.-Componentes?node-id=8211%3A57102',
  },
};
Default.argTypes = {
  'color-modifiers': {
    options: [undefined, 'tp-toast--success', 'tp-toast--warning'],
    control: { type: 'select' },
    description: 'Define a cor do componente.',
    defaultValue: undefined,
    table: {
      type: { summary: 'tp-toast--success | tp-toast--warning' },
      defaultValue: { summary: 'undefined' },
    },
  },
};

