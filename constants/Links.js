import { Platform } from 'react-native'

export default {
  location: Platform.OS === 'ios' ? 'http://maps.apple.com/?ll=-15.7997119,-47.8663516' : 'geo:-15.7997119,-47.8663516',
  guiaVirtual: 'http://www.camara.leg.br/internet/camara360/pt-br/index.html',
  visitasTecnicas: 'https://www2.congressonacional.leg.br/visite/visitas-tematicas-pt',
  agendamento: 'https://www2.congressonacional.leg.br/visite/agendamento/buscardata',
  contato: 'https://www2.congressonacional.leg.br/visite/contato',
  arte: 'https://www2.congressonacional.leg.br/visite/arte',
  eventosCamara: 'https://www.camara.leg.br/eventos-divulgacao/eventosprogramados',
  eventosSenado: 'https://www12.senado.leg.br/institucional/eventos',
  dfTrans: 'http://www.horarios.dftrans.df.gov.br',
  comoChegar: 'https://maps.google.com/maps?f=q&source=s_q&hl=pt-BR&geocode=&q=congresso+nacional&aq=&sll=37.0625,-95.677068&sspn=51.089971,93.076172&vpsrc=0&t=h&ie=UTF8&hq=&hnear=&z=17&iwloc=A&cid=411739593941032767',
  funcionamentoSenado: 'https://www12.senado.leg.br/institucional/sobre-atividade',
  funcionamentoCamara: 'http://www2.camara.leg.br/a-camara/conheca',
  viibra: 'https://www.viibra.gov.br'
}
