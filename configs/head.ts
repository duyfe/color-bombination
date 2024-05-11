import { meta, metaOg } from '../utils/helper'
import configs from '.'

const OGP_IMAGE = `${configs.domain}/images/common/ogp.png`

const head = {
  title: configs.title,
  titleTemplate: configs.titleTemplate,
  htmlAttrs: {
    lang: 'en'
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    meta('description', configs.description),

    // Facebook
    metaOg('og:title', configs.title),
    metaOg('og:description', configs.description),
    metaOg('og:type', 'website'),
    metaOg('og:site_name', configs.siteName),
    metaOg('og:locale', 'en'),
    metaOg('og:url', configs.domain),
    metaOg('og:image', OGP_IMAGE),

    // // Twitter
    meta('twitter:title', configs.title),
    meta('twitter:description', configs.description),
    meta('twitter:card', 'summary_large_image'),
    meta('twitter:domain', configs.domain),
    meta('twitter:image', OGP_IMAGE)
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', href: '/images/common/apple-touch-icon.png' },
    { rel: 'canonical', href: configs.domain }
  ],
  noscript: [],
  script: [
    {
      type: 'text/javascript',
      innerHTML: ``
    }
  ],
  __dangerouslyDisableSanitizers: ['script', 'noscript']
}

export default head
