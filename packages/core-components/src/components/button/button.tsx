import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core'

/**
 * @slot - Content is placed between the named slots if provided without a slot.
 * @slot icon-only - Should be used on an icon in a button that has no text.
 * @slot start - Content is placed to the left of the button text in LTR, and to the right in RTL.
 * @slot end - Content is placed to the right of the button text in LTR, and to the left in RTL.
 */
@Component({
  tag: 'dk-button',
  styleUrl: 'button.css',
  shadow: true,
})
export class Button {
  /**
   * The type of the button.
   */
  @Prop() type: 'submit' | 'reset' | 'button' = 'button'

  /**
   * If `true`, the user cannot interact with the button.
   */
  @Prop({ reflect: true }) disabled = false

  @Event() onClick: EventEmitter

  private handleClick = (e: UIEvent) => {
    this.onClick.emit(e)
  }

  render() {
    const { disabled, type } = this
    return (
      <Host>
        <button
          type={type}
          onClick={(event: UIEvent) => this.handleClick(event)}
          aria-disabled={disabled ? 'true' : 'false'}
          disabled={disabled}
        >
          <span class="button-inner">
            <slot name="icon-only"></slot>
            <slot name="start"></slot>
            <slot></slot>
            <slot name="end"></slot>
          </span>
        </button>
      </Host>
    )
  }
}
