const Audios = {
  maquete: {
    en: require('../assets/audios/maquete_en.mp3'),
    pt: require('../assets/audios/maquete_pt.mp3')
  },
  muro: {
    // en: require('../assets/audios/muro_en.mp3'),
    pt: require('../assets/audios/muro_pt.mp3')
  },
  painel: {
    // en: require('../assets/audios/painel_en.mp3'),
    pt: require('../assets/audios/painel_pt.mp3')
  }
}

const flatten = arr => [].concat(...arr)

Audios.sources = flatten(Object.values(Audios).map(Object.values))

export default Audios
