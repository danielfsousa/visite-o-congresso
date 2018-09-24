import { Analytics, PageHit } from 'expo-analytics'
import config from '../config'

const analytics = new Analytics(config.analytics.id)
const pageHit = nome => !__DEV__ && analytics.hit(new PageHit(nome))

export default analytics
export { pageHit }
