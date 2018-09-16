const Audios = {
  '04': {
    en: require('../assets/audios/04_en.mp3'),
    pt: require('../assets/audios/04_pt.mp3')
  },
  '05': {
    en: require('../assets/audios/05_en.mp3'),
    pt: require('../assets/audios/05_pt.mp3')
  }
}

const Images = {
  obraMuro: require('../assets/images/interativo/muro.png'),
  obraPainel: require('../assets/images/interativo/painel.png'),
  obraMaquete: require('../assets/images/interativo/muro.png')
}

Images.sources = Object.values(Images)

const Conteudo = {
  '1': {
    titulo: 'Painel Di Cavalcanti',
    descricao: `Óleo sobre tela, sem título e sem data. Obra encomendada pelo ex-presidente Juscelino Kubitschek. Seria uma
        homenagem aos trabalhadores, conhecidos como candangos, vindos das diversas regiões do país, para ajudar
        na construção da nova capital. A tela, conhecida popularmente como “Alegoria de Brasília”, está presente no
        Palácio desde a inauguração da capital em 1960.`,
    imagem: Images.obraPainel,
    audio: Audios['05']
  },
  '2': {
    titulo: 'Muro Escultórico',
    descricao: 'Criado por Athos Bulcão em madeira coberta com resina envernizada na cor verde escuro.',
    imagem: Images.obraMuro,
    audio: Audios['05']
  },
  '3': {
    titulo: 'Maquete',
    descricao: `A maquete exibe, além do prédio principal e das duas torres, os prédios anexos da Câmara e do Senado, onde
        estão localizados os gabinetes parlamentares, as salas das comissões, os escritórios administrativos e os serviços
        de apoio.\n
        Cada torre é chamada de Anexo 1 da Instituição a que se vincula. Essas torres têm 28 andares e uma altura de
        100m cada uma e são alguns dos prédios mais altos do Plano Piloto da capital brasileira.\n
        As cúpulas dos Plenários foram uma opção estética utilizada pelo arquiteto para dar destaque a esses
        importantes espaços.\n
        Os Anexos 1 das duas Casas abrigam diversos departamentos administrativos e, no caso do Senado, alguns
        gabinetes de senadores.\n
        O Anexo 2A do Senado abriga as Alas das Comissões, a maioria dos gabinetes dos senadores e a Biblioteca Luiz
        Viana Filho.\n
        Além de um auditório no Anexo 2B do Senado estão localizados alguns gabinetes de senadores, as instalações
        da TV, da Rádio Senado e das Relações Públicas.\n
        No Anexo 2 da Câmara funcionam as Comissões Permanentes e Temporárias, alguns gabinetes de deputados e
        a Biblioteca Pedro Aleixo.\n
        No total, a Câmara dos Deputados tem 25 comissões permanentes, além da Comissão Diretora.\n
        No Anexo 3, estão a Consultoria Legislativa e cerca de 80 gabinetes de deputados.\n
        O Anexo 4 é o prédio onde se localiza a maioria dos gabinetes dos deputados federais e dois restaurantes.
        Abertos ao público de segunda a sexta.`,
    imagem: Images.obraMaquete,
    audio: Audios['04']
  }
}

export default Conteudo