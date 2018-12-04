const Audios = {
  maquete: {
    pt: require('../assets/audios/maquete_pt.mp3'),
    en: require('../assets/audios/maquete_en.mp3')
  },
  muro: {
    pt: require('../assets/audios/muro_pt.mp3'),
    en: require('../assets/audios/muro_en.mp3')
  },
  painel: {
    pt: require('../assets/audios/painel_pt.mp3'),
    en: require('../assets/audios/painel_en.mp3')
  }
}

const flatten = arr => [].concat(...arr)

Audios.sources = flatten(Object.values(Audios).map(Object.values))

export default Audios
