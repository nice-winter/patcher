import type { Plugin } from 'vite'

const nuxtUIProPatcher = (nuxtUIProVitePlugin: Plugin | Plugin[]) => {
  if (Array.isArray(nuxtUIProVitePlugin)) {
    nuxtUIProVitePlugin.splice(
      nuxtUIProVitePlugin.findIndex(
        (item) => item.name === 'nuxt:ui-pro:license'
      ),
      1
    )

    return nuxtUIProVitePlugin
  }

  throw new Error('This is not a valid Vite plugin!')
}

export { nuxtUIProPatcher, nuxtUIProPatcher as uiPro }
