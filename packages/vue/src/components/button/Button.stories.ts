export default { title: 'Button' }

export const plain = () => ({
  template: '<dk-button onclick="console.log(`Button`)">Button</dk-button>',
})

export const disabled = () => ({
  template:
    '<dk-button disabled onclick="console.log(`Disabled`)">Disabled</dk-button>',
})

export const focusableDisabled = () => ({
  template:
    '<dk-button disabled focusable onclick="console.log(`Focusable disabled`)">Focusable disabled</dk-button>',
})
