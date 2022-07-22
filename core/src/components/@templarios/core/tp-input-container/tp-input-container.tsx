import { Component, Host, h, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../@templarios/utilities/color';
import { MedColor } from '../../../../interface';

@Component({
  tag: 'tp-input-container',
  styleUrl: 'tp-input-container.scss',
  scoped: true,
})
export class TpInputContainer {
  @Prop({ reflect: true }) dsColor?: MedColor;

  @Prop({ reflect: true }) dsName?: 'secondary';

  @Prop({ reflect: true }) disabled = false;

  @Prop({ reflect: true }) feedback = false;

  @Prop({ reflect: true }) hasButton?: 'start' | 'end' | 'both';

  @Prop({ reflect: true }) hasIcon?: 'start' | 'end' | 'both';

  render() {
    const { dsColor, dsName, disabled, feedback, hasButton, hasIcon } = this;

    return (
      <Host
        class={generateMedColor(dsColor, {
          'tp-input-container': true,
          'tp-input-container--disabled': disabled,
          'tp-input-container--feedback': feedback,
          [`tp-input-container--${dsName}`]: dsName !== undefined,
          [`tp-input-container--has-button-${hasButton}`]: hasButton !== undefined,
          [`tp-input-container--has-icon-${hasIcon}`]: hasIcon !== undefined,
        })}
      >
        <slot name="start"></slot>
        <slot></slot>
        <slot name="end"></slot>
      </Host>
    );
  }
}
