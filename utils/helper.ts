import { Meta } from '~/types'

/**
 * Generates a meta object with the given name, content, and optional extended properties.
 *
 * @param {string} name - The name of the meta object. Defaults to an empty string.
 * @param {string} content - The content of the meta object. Defaults to an empty string.
 * @param {E} extend - Optional extended properties to be merged into the meta object.
 * @return {Meta & E} - The generated meta object with the specified properties.
 */
export function meta<E>(
  name: string = '',
  content: string = '',
  extend?: E
): Meta & E {
  return {
    name,
    hid: name,
    content,
    ...(extend ?? ({} as E))
  }
}

/**
 * Generates an Open Graph meta object with the given property, content, and optional extended properties.
 *
 * @param {string} property - The property of the Open Graph meta object. Defaults to an empty string.
 * @param {string} content - The content of the Open Graph meta object. Defaults to an empty string.
 * @param {E} extend - Optional extended properties to be merged into the Open Graph meta object.
 * @return {Partial<Meta> & E} - The generated Open Graph meta object with the specified properties.
 */
export function metaOg<E>(
  property: string = '',
  content: string = '',
  extend?: E
): Partial<Meta> & E {
  return {
    property,
    hid: property,
    content,
    ...(extend ?? ({} as E))
  }
}

/**
 * Recommends a color based on the provided background color by calculating the contrast ratio with white and black.
 *
 * @param {string} backgroundColor - The background color for which to recommend a contrasting color.
 * @return {string} The recommended contrasting color ('#FFF' for white or '#000' for black).
 */
export function detechMode(backgroundColor: string): string {
  function calculateRelativeLuminance(r: number, g: number, b: number): number {
    const linearize = (value: number): number => {
      const v = value / 255
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
    }

    const rLinear = linearize(r)
    const gLinear = linearize(g)
    const bLinear = linearize(b)

    return 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear
  }

  function calculateContrastRatio(
    luminance1: number,
    luminance2: number
  ): number {
    const lighter = Math.max(luminance1, luminance2)
    const darker = Math.min(luminance1, luminance2)
    return (lighter + 0.05) / (darker + 0.05)
  }

  const backgroundRgb =
    backgroundColor.match(/\w\w/g)?.map((hex) => parseInt(hex, 16)) || []

  // @ts-ignore
  const backgroundLuminance = calculateRelativeLuminance(...backgroundRgb)

  const whiteContrast = calculateContrastRatio(
    backgroundLuminance,
    calculateRelativeLuminance(255, 255, 255)
  )
  const blackContrast = calculateContrastRatio(
    backgroundLuminance,
    calculateRelativeLuminance(0, 0, 0)
  )

  return whiteContrast > blackContrast ? 'dark' : 'light'
}
