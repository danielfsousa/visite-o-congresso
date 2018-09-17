import React, { Component } from 'react'
import { Images } from '../constants'
import { BodyText } from '../components/StyledText'
import StyledImage from '../components/StyledImage'
import withParallax from './ParallaxScreenFactory'

class AHistoriaScreen extends Component {
  render () {
    return (
      <React.Fragment>
        <StyledImage
          float='right'
          image={Images.camaraDosDeputados}
          caption={'Câmara\nDos Deputados'}
        />
        <BodyText>
          O prédio que abriga a Câmara dos Deputados e o Senado Federal é um marco arquitetônico da Capital da República e está de portas abertas para receber visitantes interessados em conhecer um pouco mais sobre o Poder legislativo brasileiro.
          {'\n\n'}
          Aqui, deputados e senadores, representantes eleitos do povo e dos estados, dedicam-se a discutir e elaborar leis, a fiscalizar e controlar os atos do Poder Executivo, a aprovar o Orçamento da União, entre outras atribuições de fundamental importância para o Brasil.
        </BodyText>
        {/* <StyledImage
          float='left'
          image={Images.camaraDosDeputados}
          caption='Senado Federal'
        /> */}
        <BodyText>
          {'\n'}
          O prédio que abriga a Câmara dos Deputados e o Senado Federal é um marco arquitetônico da Capital da República e está de portas abertas para receber visitantes interessados em conhecer um pouco mais sobre o Poder legislativo brasileiro.
          {'\n\n'}
          Aqui, deputados e senadores, representantes eleitos do povo e dos estados, dedicam-se a discutir e elaborar leis, a fiscalizar e controlar os atos do Poder Executivo, a aprovar o Orçamento da União, entre outras atribuições de fundamental importância para o Brasil.
        </BodyText>
      </React.Fragment>
    )
  }
}

const ScreenWithParallax = withParallax(AHistoriaScreen, () => 'A História')
export default ScreenWithParallax
