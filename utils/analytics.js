import { Analytics, ScreenHit } from 'expo-analytics'
import config from '../config'

const analytics = new Analytics(config.analytics.id)
const screenHit = nome => !__DEV__ && analytics.hit(new ScreenHit(nome))

export default analytics
export { screenHit }
