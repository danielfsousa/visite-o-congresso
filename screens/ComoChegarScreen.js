import React, { Component } from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'

import { pageHit } from '../utils/analytics'
import { Colors, Images, Layout, Links } from '../constants'
import { Title } from '../components/StyledText'
import Hyperlink from '../components/Hyperlink'
import BackgroundImage from '../components/BackgroundImage'
import Header from '../components/Header'
import AccordionView from '../components/AccordionView'

class ComoChegarScreen extends Component {
  static __name__ = 'Como Chegar'

  infos = [
    {
      title: 'De ônibus',
      text: 'As linhas 152, 152.2, 152.3, 162, 161, 108, 108.3 e 108.5  passam pela Esplanada dos Ministérios e pela Praça dos Três Poderes'
    },
    {
      title: 'De micro-ônibus (zebrinha)',
      text: 'As linhas 07, 08, 11, 16, 24, 25, 31, 32 e 113 passam pela Esplanada dos Ministérios e pela Praça dos Três Poderes'
    },
    {
      title: 'De táxi',
      text: 'Peça ao taxista para deixá-lo na Chapelaria do Congresso Nacional. Nesse local também há um ponto de táxi caso precise de um após a visita. Na Chapelaria informe que deseja ir ao Salão Negro.\nAtenção: o ponto de táxi não funciona nos finais de semana e nos feriados.'
    },
    {
      title: 'De metrô',
      text: 'Desça na estação da rodoviária do Plano Piloto (ponto final) e pegue um dos ônibus que passam pela Praça dos Três Poderes: 108, 108.3 e 108.5'
    },
    {
      title: 'De carro',
      text: 'Como são vários os caminhos possíveis para chegar à Esplanada dos Ministérios, o jeito mais fácil é avaliar as possibilidades por mapas da internet. Quem vier de carro poderá estacionar em vagas ao longo das vias de acesso ao Congresso'
    },
    {
      title: 'A partir do aeroporto',
      text: 'A linha executiva de ônibus 113, parte  do aeroporto de Brasília  e passa pela Praça dos Três Poderes.'
    }
  ]

  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header
        transparent
        detach
        type='big'
        onBackButtonClick={() => navigation.goBack()}
      >
        Como chegar
      </Header>
    )
  })

  componentDidMount () {
    pageHit(ComoChegarScreen.__name__)
  }

  render () {
    return (
      <BackgroundImage
        source={Images.backgroundFade}
        style={styles.container}
        imageStyle={styles.backgroundImage}
        overlayStyle={styles.overlay}
      >

        <ScrollView
          alwaysBounceVertical={false}
          overScrollMode='never'
          style={styles.scrollContainer}
        >

          <View style={styles.titleContainer}>
            <Title style={styles.title}>
              Para mais informações como itinerários dos ônibus e mapa, consultar:
            </Title>
            <Hyperlink style={styles.link} href={Links.dfTrans}>
              Site DFTrans
            </Hyperlink>
            <Hyperlink style={styles.link} href={Links.comoChegar}>
              Mapa
            </Hyperlink>
            ß
          </View>

          {this.infos.map((props, i) => (
            <AccordionView key={props.title} {...props} index={i} />
          ))}

        </ScrollView>

      </BackgroundImage>
    )
  }
}

const styles = StyleSheet.create({
  titleContainer: {
    marginBottom: 13
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch'
  },

  overlay: {
    backgroundColor: Colors.rgba(Colors.background, 96)
  },

  title: {
    marginBottom: 15,
    paddingHorizontal: Layout.padding,
    textAlign: 'justify'
  },

  link: {
    marginBottom: 10,
    paddingHorizontal: Layout.padding
  },

  scrollContainer: {
    marginTop: 130
  }
})

export default ComoChegarScreen
