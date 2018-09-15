import React, { Component } from 'react'
import { StyleSheet, ScrollView } from 'react-native'

import { Colors, Images } from '../constants'
import BackgroundImage from '../components/BackgroundImage'
import Header from '../components/Header'
import AccordionView from '../components/AccordionView'

class PerguntasFrequentesScreen extends Component {
  questions = [
    {
      title: 'Posso visitar o Congresso Nacional?',
      text: 'Sim. A Câmara dos Deputados e o Senado Federal realizam em conjunto visitas guiadas aos principais espaços das duas instituições. As visitas acontecem todos os dias incluindo sábados, domingos e feriados tendo início às 9h e encerrando às 17h30 com grupos saindo a cada meia hora.  Porém, atenção! Às terças e quartas a visita é fechada. Às quintas somente grupos agendados com antecedência são atendidos. Eventualmente as visitas poderão ser suspensas por motivos de segurança.'
    },
    {
      title: 'Quanto custa o ingresso para a visita ao Congresso Nacional?',
      text: 'Nada! As visitas institucionais realizadas pelos monitores do Congresso Nacional são gratuitas.'
    },
    {
      title: 'Posso fotografar e filmar durante a visita?',
      text: 'Pode. O uso de máquinas fotográficas e filmadoras não-profissionais é permitido durante a visita, a não ser nos Plenários, quando há sessão.'
    },
    {
      title: 'Durante a minha visita, posso assistir a uma sessão do Plenário ou das Comissões?',
      text: 'O percurso da visita institucional ao Congresso inclui uma passagem pelos Plenários. Entretanto, é possível vir ao Palácio exclusivamente para assistir aos trabalhos dos Plenários e das Comissões, que são abertos ao público na maior parte das vezes.'
    },
    {
      title: 'Preciso usar traje social para assistir a uma reunião do Plenário ou das Comissões?',
      text: 'O Ato Conjunto dos Presidentes da Câmara dos Deputados e do Senado Federal nº 5 de 2014 (está no Diário Oficial do Senado Federal, na página 13) define as regras de vestimenta no acesso ao Congresso. Não é permitida a entrada de visitante trajando shorts, bermudas, calças Capri ou Corsário, camisetas sem manga e chinelos em dias de trabalho parlamentar, sendo o uso dessas vestimentas liberado aos finais de semana e feriados.  Em algumas circunstâncias, como em sessões solenes, ou locais como a Tribuna de Honra do Plenário do Senado ou o Salão Verde da Câmara, é exigido dos homens o uso de terno e gravata. Em caso de dúvida, entre em contato.'
    },
    {
      title: 'Posso dar minha opinião durante os debates e votações?',
      text: 'Como em todos os parlamentos democráticos, não é permitido se manifestar durante os debates e votações a fim de não comprometer o andamento dos trabalhos.'
    },
    {
      title: 'Em algumas sessões, os Plenários ficam com poucos parlamentares. Onde eles estão nessa hora?',
      text: 'As sessões não deliberativas costumam ser mais vazias pois a presença dos parlamentares não é obrigatória nessas sessões. Também vale lembrar que o trabalho parlamentar prevê o atendimento nos gabinetes a lideranças e cidadãos; a participação em seminários e audiências públicas para debater temas de interesse nacional; a participação em entrevistas e encontros nacionais e internacionais diversos; a atuação nas comissões permanentes, especiais e temporárias. Os parlamentares também costumam acompanhar lideranças sindicais e empresariais, governadores, prefeitos ou vereadores em visitas aos ministérios em busca de projetos e recursos para as suas regiões. Quando eles não se encontram nos plenários estão em outras atividades parlamentares como as listadas.'
    },
    {
      title: 'Queria acompanhar o trabalho do parlamentar que elegi quando eu visitar o Congresso Nacional. É possível?',
      text: 'Sua visita não necessariamente coincidirá com o momento em que o parlamentar estiver em Plenário. Lembre-se, o trabalho dele não se resume apenas ao Plenário. No site da Câmara dos Deputados e do Senado Federal, você poderá acessar  informações sobre a atuação do seu deputado e/ou senador, tais como sua presença no Plenário e nas Comissões; como ele votou em cada proposição; a íntegra de seus discursos; os projetos que apresentou, etc.'
    },
    {
      title: 'Outro dia, vi na TV o Plenário da Câmara cheio e muitos parlamentares em pé. Por que isso acontece?',
      text: 'O Plenário tem capacidade para 396 pessoas sentadas, número menor do que o de deputados (513). Assim, quando há um debate mais acirrado, votação nominal ou até mesmo sessões conjuntas com a presença de deputados e senadores, o recinto acaba ficando muito cheio. Mas isso não prejudica as votações: o sistema eletrônico é rápido, permitindo que os parlamentares votem e logo deem lugar aos colegas.'
    },
    {
      title: 'Há restaurantes e lanchonetes no Congresso? São abertos ao público?',
      text: 'Em dias úteis há a possibilidade de acesso na Câmara e no Senado aos restaurantes e lanchonetes que são abertos ao público em geral. Porém, para frequentá-los o visitante deverá se identificar na portaria de uma das Casas.'
    },
    {
      title: 'Soube que a Câmara dos Deputados e o Senado Federal promovem seminários, exposições, lançamentos de livros e vários outros eventos. Eles são abertos ao público?',
      text: 'Sim, desde que o visitante se identifique em uma das portarias da respectiva instituição, e informe o evento e o local de destino.'
    },
    {
      title: 'Quanto tempo dura a visita?',
      text: 'A visita é planejada para durar aproximadamente 1 hora, mas o tempo pode ser uma pouco mais extenso ou menos extenso a depender de alguns fatores extras como quantidade de perguntas, presença de pessoas com dificuldade de locomoção e até mesmo interação dos visitantes com o percurso, parlamentares e monitores. Em dias de maior movimento, para possibilitar atendimento a todos os interessados, o tempo e percurso poderão ser reduzidos.'
    },
    {
      title: 'O que verei no percurso da visita ao Congresso Nacional?',
      text: 'Cada dia possui um roteiro diferente. Espaços como o Salão Negro, os Salões Nobres, os Plenários, os Salões Azul e Verde, o Túnel do Tempo, a Chapelaria estão entre os locais contemplados no roteiro completo. Nos feriados e finais de semana, comumente visitam-se os Gabinetes dos Presidentes. Lembre-se que alterações podem ocorrer sem aviso prévio.'
    },
    {
      title: 'Posso realizar a visitação sem acompanhamento do guia?',
      text: 'O visitante não poderá ficar sozinho no Congresso Nacional, a menos que esteja se dirigindo a algum gabinete, plenário, comissão ou setor específico do Palácio, após devida identificação e checagem por parte da segurança. O trabalho dos monitores é desenvolvido para garantir a segurança e o acesso dos cidadãos conforme as regras estabelecidas em conjunto pelas duas instituições.'
    }
  ]

  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header
        transparent
        detach
        type='big'
        onBackButtonClick={() => navigation.goBack()}>
        Como chegar
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

          {
            this.questions.map((props, i) => <AccordionView key={props.title} {...props} index={i} />)
          }

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

export default PerguntasFrequentesScreen
