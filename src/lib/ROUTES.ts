/** 
 * This file was generated by 'vite-plugin-kit-routes'
 * 
 *      >> DO NOT EDIT THIS FILE MANUALLY <<
 */

export const PAGES = {
  "_ROOT": (sp?: Record<string, string | number>) =>  { return ensurePrefix(`/${appendSp(sp)}`) },
  "situations_nom": (params: {nom: number | string}, sp?: Record<string, string | number>) =>  { return `/situations/${params.nom}${appendSp(sp)}` },
  "situations_nom_etape": (params: {nom: number | string, etape: number | string}, sp?: Record<string, string | number>) =>  { return `/situations/${params.nom}/${params.etape}${appendSp(sp)}` }
}

export const SERVERS = {
  
}

export const ACTIONS = {
  
}

const appendSp = (sp?: Record<string, string | number | undefined>) => {
  if (sp === undefined) return ''
  const mapping = Object.entries(sp)
    .filter(c => c[1] !== undefined)
    .map(c => [c[0], String(c[1])])

  const formated = new URLSearchParams(mapping).toString()
  if (formated) {
    return `?${formated}`
  }
  return ''
}

const ensurePrefix = (str: string) => {
  if (str.startsWith('/')) {
    return str
  }
  return `/${str}`
}


/**
 * Add this type as a generic of the vite plugin `kitRoutes<ROUTES>`.
 * 
 * Full example:
 * ```ts
 * import type { ROUTES } from './ROUTES'
 * import { kitRoutes } from 'vite-plugin-kit-routes'
 * 
 * kitRoutes<ROUTES>({
 *  extend: {
 *    PAGES: {
 *      // here, "paths" it will be typed!
 *    }
 *  }
 * })
 * ```
 */
export type ROUTES = { 
  PAGES: { '_ROOT': never, 'situations_nom': 'nom', 'situations_nom_etape': 'nom' | 'etape' }
  SERVERS: {  }
  ACTIONS: {  }
}
  