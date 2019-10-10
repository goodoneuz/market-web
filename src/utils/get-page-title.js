
const title = 'WeBazar.uz'

export default function getPageTitle(meta, withSiteName = true) {
  if (meta && meta.title) {
    if (withSiteName) {
      return `${meta.title} - ${title}`
    } else {
      return meta.title
    }
  }
  return `${title}`
}
