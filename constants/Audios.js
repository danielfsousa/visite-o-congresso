const Audios = {
  maquete: {
    en: require('../assets/audios/maquete_en.mp3'),
    pt: require('../assets/audios/maquete_pt.mp3')
  },
  muroEscultorico: {
    en: require('../assets/audios/muro-escultorico_en.mp3'),
    pt: require('../assets/audios/muro-escultorico_pt.mp3')
  }
}

const flatten = arr => [].concat(...arr)

Audios.sources = flatten(Object.values(Audios).map(Object.values))

export default Audios
