# Nuxt 3 Template

![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/tingminitime/nuxt3-template/dev/nuxt/master?color=00dc82)　![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/tingminitime/nuxt3-template/dev/tailwindcss/master?color=0ea5e9)　![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/tingminitime/nuxt3-template/dev/pinia/master?color=ffd859)　![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/tingminitime/nuxt3-template/dev/%40vueuse%2Fnuxt/master?color=41b883)　![GitHub package.json dependency version (subfolder of monorepo)](https://img.shields.io/github/package-json/dependency-version/tingminitime/nuxt3-template/%40headlessui%2Fvue?color=69bdfe)　![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/tingminitime/nuxt3-template/dev/eslint/master?color=4B32C3)


This Nuxt 3 template is inspired by [antfu/vitesse-nuxt3](https://github.com/antfu/vitesse-nuxt3) .

## Features

- [Nuxt 3](https://nuxt.com/)
- [ESLint](https://eslint.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)
- [tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms)
- [tailwindcss/aspect-ratio](https://github.com/tailwindlabs/tailwindcss-aspect-ratio)
- [tailwindcss/container-queries](https://github.com/tailwindlabs/tailwindcss-container-queries)
- [headless UI](https://headlessui.com/)

Nuxt Modules : 

- [Pinia](https://nuxt.com/modules/pinia)
- [VueUse](https://nuxt.com/modules/vueuse)
- [color-mode](https://nuxt.com/modules/color-mode)

## Prerequistes

- Node.js >= v18.0.0
- pnpm >= v8.0.0
- [VS Code](https://code.visualstudio.com/)

### VS Code Extensions

- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

### Volar Takeover Mode

In order to enable Vue SFC (Single File Component) and TypeScript Vue Plugin (Volar) to work together in VSCode and enhance performance using Volar's Takeover Mode, follow these steps : 

1. Press `F1` or `Ctrl` + `Shift` + `P` in VSCode.
2. Type `built` and select `Extensions: Show Built-in Extensions`.
3. In the input box on the left side of the "EXTENSIONS" pane, type `@builtin` followed by `typescript`.
4. Choose `TypeScript and JavaScript Language Features`.
5. Click the `Disable` button in the dropdown menu for `Disable (Workspace)`.
6. Click `Reload required` to restart VSCode.

If the configuration is successful, you will see the following icon in the bottom right corner of VSCode : 

![Volar Takeover Mode](https://raw.githubusercontent.com/tingminitime/my-assets/main/nuxt3-template/volar-takeover.png)


## Clone to local

```bash
npx degit tingminitime/nuxt3-template <your-project-name>
cd <your-project-name>
pnpm install # If you don't have pnpm installed, run `npm i -g pnpm` first.
```
