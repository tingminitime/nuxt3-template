import antfu from '@antfu/eslint-config'
import tailwindcss from 'eslint-plugin-tailwindcss'

export default antfu(
  /* onfigures for antfu's config */
  {
    rules: {
      'no-unused-vars': 'warn',
      'vue/no-unused-vars': 'warn',
      'unused-imports/no-unused-vars': 'warn',
      'vue/max-attributes-per-line': 'error',
    },
  },
  /* From the second arguments they are ESLint Flat Configs */
  {
    ignores: [
      'node_modules/',
      'dist/',
      '.output/',
      '.nuxt/',
      '.storybook/',
      'storybook-static',
      '.github/',
      'coverage',
      '*.log',
      'nuxt.d.ts',
      '.DS_Store',
      '.vscode/',
      '.md',
      'package.json',
      'package-lock.json',
      'babel.config.js',
      'graphql',
      'types.ts',
      'generated',
      'components.d.ts',
      'icons.d.ts',
      'auto.d.ts',
      'src-tauri',
      'auto-imports.d.ts',
      'components.d.ts',
    ],
    rules: {
      'no-unused-vars': 'off',
    },
  },
  {
    plugins: {
      tw: tailwindcss,
    },
    rules: {
      /* Add custom rules */
      'tw/classnames-order': 'error',
      'tw/enforces-negative-arbitrary-values': 'error',
      'tw/enforces-shorthand': 'error',
      'tw/migration-from-tailwind-2': 'error',
      'tw/no-arbitrary-value': 'off',
      'tw/no-custom-classname': [
        'error',
        {
          whitelist: [
            'my\\[_-](.*)',
          ],
        },
      ],
      'tw/no-contradicting-classname': 'error',
    },
  },
)
