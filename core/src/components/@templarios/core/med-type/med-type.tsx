import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../@templarios/utilities/color';
import { MedColor, MedTypeTag, MedTypeToken } from '../../../../interface';

@Component({
  tag: 'med-type',
  styleUrl: 'med-type.scss',
  scoped: true,
})
export class MedType implements ComponentInterface {
  /**
   * Define a cor do componente.
   */
  @Prop({ reflect: true }) dsColor?: MedColor;

  /**
   * Define o token do componente.
   */
  @Prop({ reflect: true }) token?: MedTypeToken;

  /**
   * Define a tag HTML do componente.
   */
  @Prop({ reflect: true }) tag?: MedTypeTag = 'span';

  render() {
    const { dsColor, token, tag } = this;

    const TagType = tag === undefined ? 'span' : tag;

    return (
      <Host
        class={generateMedColor(dsColor, {
          'med-type': true,
          [`med-type--${token}`]: token !== undefined,
        })}
      >
        <TagType>
          <slot></slot>
        </TagType>
      </Host>
    );
  }
}
