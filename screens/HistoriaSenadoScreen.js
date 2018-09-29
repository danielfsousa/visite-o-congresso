import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import { pageHit } from '../utils/analytics'
import { Images, Colors, Fonts } from '../constants'
import { BodyText } from '../components/StyledText'

import StyledImage from '../components/StyledImage'
import withParallax from './ParallaxScreenFactory'

class HistoriaSenadoScreen extends Component {
  static __name__ = 'A História do Senado Federal'

  componentDidMount () {
    pageHit(HistoriaSenadoScreen.__name__)
  }

  render () {
    return (
      <View>
        <StyledImage
          float='right'
          image={Images.congresso_old}
          caption={'Congresso em construção'}
          style={[styles.image, styles.first]}
          overlayStyle={{ backgroundColor: Colors.rgba(Colors.black, 30) }}
        />
        <BodyText>
          O Poder Legislativo brasileiro é exercido pelo Congresso Nacional, que se compõe da Câmara dos Deputados e do Senado Federal. Para saber um pouco da história desta segunda Casa, é preciso remontar à nossa Independência, passando pela instauração da República e por suas sucessivas reformulações até chegarmos aos dias de hoje.
          {'\n\n'}
          Mesmo antes de tornar-se República, o Brasil já contava com uma Câmara dos Senadores, instituição que foi mantida pela primeira Constituição republicana, com a designação de Senado Federal. Sua existência configura a marca da Federação, em que se busca o equilíbrio entre suas unidades constituidoras.
          {'\n\n'}
          Composto pelos representantes dos estados e do Distrito Federal, escolhidos pelo princípio majoritário, distingue-se da Câmara dos Deputados, cujos membros são eleitos pelo sistema proporcional. Enquanto o número de deputados pode variar, segundo a população estadual, cada uma das unidades da Federação elege, de maneira igualitária, o número fixo de três senadores.
          {'\n\n'}
          O nome remonta ao latim – Senatus –, Casa composta pelos anciões, chefes do patriciado, cujo papel era central no Império Romano. A importância dessa instituição na Antiguidade pode ser constatada pela sigla dos estandartes das legiões romanas, SQPR, cuja versão em português seria algo equivalente “O Senado e o Povo de Roma”, ou seja, o Senatus era o centro do poder formal. Na tradição republicana moderna, a ideia de que seja composto pelos mais experientes se mantém, pois, para se eleger senador, é necessário que o cidadão tenha completado 35 anos.
          {'\n\n'}
          Atualmente, o Senado Federal é composto por 81 senadores, enviados pelos 26 estados e pelo Distrito Federal, para mandatos de oito anos. Entretanto, a renovação dos membros desta Casa guarda consonância com a duração das legislaturas, que é de quatro anos. Assim sendo, a cada pleito, são escolhidos ora um terço, ora dois terços de sua composição, em eleições coincidentes com as de presidente da República, governador, deputado federal, estadual e distrital.
          {'\n\n'}
          As atribuições, composições e características do Senado estão dispostas nas constituições brasileiras e no Regimento Interno do Senado Federal e no Regimento Comum.
          {'\n\n'}
          Rui Barbosa é considerado o patrono do Senado e o Plenário da Casa o homenageia exibindo seu busto. As razões para isso devem-se ao destaque daquele parlamentar, por sua notoriedade e dedicação à vida pública, ao grande prestígio internacional e à relatoria do Código Civil Brasileiro.
        </BodyText>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    marginVertical: 50
  },

  button: {
    marginTop: 50
  },

  quote: {
    fontFamily: Fonts.oblique,
    fontWeight: 'bold',
    color: 'white'
  },

  subtitle: {
    marginTop: 50,
    marginBottom: 25
  },

  first: {
    marginTop: 0
  },

  last: {
    marginBottom: 0
  }
})

const ScreenWithParallax = withParallax(
  HistoriaSenadoScreen,
  HistoriaSenadoScreen.__name__
)

export default ScreenWithParallax
