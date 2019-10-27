import Vue from 'vue'
import { configure } from '@storybook/vue'
import { applyPolyfills, defineCustomElements } from '@design-kit/core/loader'
import '@design-kit/core/dist/design-kit/design-kit.css';

Vue.config.productionTip = false
Vue.config.ignoredElements = [/dk-\w*/]

// Bind the custom elements to the window object
applyPolyfills().then(() => {
  defineCustomElements(window)
})

configure(require.context('../src/', true, /\.stories\.ts$/), module)
