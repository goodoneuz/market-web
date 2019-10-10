import getPageTitle from '@/utils/get-page-title'
import router from './router'

router.beforeEach(async(to, from, next) => {
  document.title = getPageTitle(to.meta)
  next()
})
