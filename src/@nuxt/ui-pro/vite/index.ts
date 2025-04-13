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

import uiProVite, { NuxtUIProOptions } from '@nuxt/ui-pro/vite'
import type { Plugin } from 'vite'

/**
 * Vite Plugin Patch for Nuxt UI Pro.
 * @param uiProVitePlugin The original Vite plugin for Nuxt UI Pro.
 */
const uiProVitePatcher = (uiProVitePlugin: Plugin | Plugin[]) => {
  if (
    Array.isArray(uiProVitePlugin) &&
    uiProVitePlugin.filter((item) => item.name.startsWith('nuxt:ui')).length > 0
  ) {
    uiProVitePlugin.splice(
      uiProVitePlugin.findIndex((item) => item.name === 'nuxt:ui-pro:license'),
      1
    )
  } else {
    throw new TypeError('This is not a valid Nuxt UI plugin!')
  }

  return uiProVitePlugin
}

/**
 * Nuxt UI Pro (Patched)
 * @param options
 * @example
 * // import uiPro from '@nuxt/ui-pro/vite'
 * import uiPro from '@nice-winter/patcher/@nuxt/ui-pro/vite'
 */
const uiPro = (options?: NuxtUIProOptions | undefined) =>
  uiProVitePatcher(uiProVite(options))

export { uiPro as default, uiProVitePatcher }
