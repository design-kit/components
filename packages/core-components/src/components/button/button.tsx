import { Component, Host, h, Prop, Listen } from '@stencil/core'

/**
 * @slot - Content is placed between the named slots if provided without a slot.
 * @slot icon-only - Should be used on an icon in a button that has no text.
 * @slot start - Content is placed to the left of the button text in LTR, and to the right in RTL.
 * @slot end - Content is placed to the right of the button text in LTR, and to the left in RTL.
 */

@Component({
  tag: 'dk-button',
  styleUrl: 'button.css',
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

  /**
   * If `true` and disabled is `true`, only aria-disable prop will be true.
   */
  @Prop() focusable: boolean

  @Listen('keydown')
  handleKeyDown(e: KeyboardEvent) {
    if (this.disabled && !e.defaultPrevented) {
      if (e.keyCode !== undefined && [32, 13].includes(e.keyCode)) {
        e.preventDefault()
        return
      } else if (e.code !== undefined && ['Space', 'Enter'].includes(e.code)) {
        e.preventDefault()
      }
    }
  }

  render() {
    const { disabled, focusable, type } = this
    const ariaDisabled =
      disabled && !focusable ? 'true' : disabled ? 'true' : 'false'

    return (
      <Host aria-disabled={ariaDisabled}>
        <button
          type={type}
          aria-disabled={ariaDisabled}
          disabled={disabled && !focusable}
        >
          <span>
            <slot name="icon-only" />
            <slot name="start" />
            <slot />
            <slot name="end" />
          </span>
        </button>
      </Host>
    )
  }
}
