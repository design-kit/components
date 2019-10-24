import { Component, Host, h, Prop } from '@stencil/core'

@Component({
  tag: 'dk-checkbox',
  styleUrl: 'checkbox.css',
  shadow: true,
})
export class Checkbox {
  /**
   * The label of checkbox
   */
  @Prop() label: string

  /**
   * The unique identifier of checkbox
   */
  @Prop() id: string

  /**
   * The unique identifier of checkbox
   */
  @Prop() name: string

  render() {
    const { label, name, id } = this

    return (
      <Host>
        <input type="checkbox" id={id} name={name} />
        <label htmlFor={id}>{label}</label>
      </Host>
    )
  }
}
