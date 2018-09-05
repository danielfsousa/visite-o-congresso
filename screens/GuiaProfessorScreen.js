import React, { Component } from 'react'
import { StyleSheet, ScrollView } from 'react-native'

import { Colors, Images, GuiaProfessor } from '../constants'
import BackgroundImage from '../components/BackgroundImage'
import Header from '../components/Header'
import AccordionView from '../components/AccordionView'

class GuiaProfessorScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header
        transparent
        detach
        type='big'
        onBackButtonClick={() => navigation.goBack()}
      >
        Em Construção
      </Header>
    )
  })

  render () {
    return (
      <BackgroundImage
        source={Images.backgroundFade}
        style={styles.container}
        imageStyle={styles.backgroundImage}
        overlayStyle={styles.overlay}>

        <ScrollView
          alwaysBounceVertical={false}
          overScrollMode='never'
          style={styles.scrollContainer}>
          {GuiaProfessor.map((props, i) => <AccordionView key={props.title} {...props} index={i} />)}
        </ScrollView>

      </BackgroundImage>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch'
  },

  overlay: {
    backgroundColor: Colors.rgba(Colors.background, 96)
  },

  scrollContainer: {
    marginTop: 130
  }

})

export default GuiaProfessorScreen
