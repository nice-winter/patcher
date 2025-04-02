import type { Plugin } from 'vite'

const nuxtUIProPatcher = (nuxtUIProVitePlugin: Plugin | Plugin[]) => {
  if (Array.isArray(nuxtUIProVitePlugin)) {
    return nuxtUIProVitePlugin.splice(
      nuxtUIProVitePlugin.findIndex(
        (item) => item.name === 'nuxt:ui-pro:license'
      ),
      1
    )
  }

  throw new Error('This is not a valid Vite plugin!')
}

export { nuxtUIProPatcher, nuxtUIProPatcher as uiPro }
