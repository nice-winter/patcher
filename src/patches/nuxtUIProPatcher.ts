/**
 * A patched Vite plugin for Nuxt UI Pro that allows building for production without a license.
 *
 * ⚠️ Note: This patch is for educational purposes only.
 *
 * If you find value in Nuxt UI Pro and earn from your projects, please support the developers
 * by purchasing a license from the official Nuxt UI website!
 *
 * Purchase a License: https://ui.nuxt.com/pro/pricing
 */

import type { Plugin } from 'vite'

/**
 * Vite Plugin Patch for Nuxt UI Pro.
 *
 * @param nuxtUIProVitePlugin The original Vite plugin for Nuxt UI Pro.
 */
const nuxtUIProPatcher = (nuxtUIProVitePlugin: Plugin | Plugin[]) => {
  if (
    Array.isArray(nuxtUIProVitePlugin) &&
    nuxtUIProVitePlugin.filter((item) => item.name.startsWith('nuxt:ui'))
      .length > 0
  ) {
    nuxtUIProVitePlugin.splice(
      nuxtUIProVitePlugin.findIndex(
        (item) => item.name === 'nuxt:ui-pro:license'
      ),
      1
    )
  } else {
    throw new TypeError('This is not a valid Nuxt UI plugin!')
  }

  return nuxtUIProVitePlugin
}

export { nuxtUIProPatcher, nuxtUIProPatcher as uiPro }
