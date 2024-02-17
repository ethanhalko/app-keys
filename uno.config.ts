import {defineConfig, presetIcons} from 'unocss';

export default defineConfig({
  content: {
    filesystem: [
      '**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}',
    ],
  },
  presets: [
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
      },
    }),
  ],
  safelist: [
    'mdi:apple-keyboard-command'
  ]
});
