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
