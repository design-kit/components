import { Config } from '@stencil/core'

// TODO based process.env.NODE_ENV use different global styles

export const config: Config = {
  namespace: 'design-kit',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  globalStyle: 'src/global/variables.dev.css',
}
