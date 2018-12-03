import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import { screenHit } from '../utils/analytics'
import { Images, Colors, Fonts } from '../constants'
import { BodyText } from '../components/StyledText'

import StyledImage from '../components/StyledImage'
import withParallax from './ParallaxScreenFactory'

class HistoriaCamaraScreen extends Component {
  static __name__ = 'A História da Câmara dos Deputados'

  componentDidMount () {
    screenHit(HistoriaCamaraScreen.__name__)
  }

  render () {
    return (
      <View>
        <StyledImage
          float='right'
          image={Images.historiaCamara}
          caption={'Congresso em construção'}
          style={[styles.image, styles.first]}
          overlayStyle={{ backgroundColor: Colors.rgba(Colors.black, 10) }}
        />
        <BodyText>
          A História do Brasil mostra a todos nós a importância da participação da Câmara dos Deputados nos grandes momentos do Congresso brasileiro – durante o Império e depois da Proclamação da República, nos temas em discussão, nos contenciosos mais importantes da vida brasileira e na formulação de uma legislação democrática e cidadã – momentos estes registrados em mais de 3,5 milhões de páginas dos Anais Parlamentares. Aliás, a História Parlamentar do Brasil, no Império e na República, resgata o extremo valor da representação popular.
          {'\n\n'}
          A história da Câmara dos Deputados começa a ser escrita na Província do Rio de Janeiro em 17 de abril de 1823, quando da abertura da Primeira Sessão Preparatória da Assembléia Geral, Constituinte e Legislativa do Império do Brasil. Mas tudo tem início no momento em que o imperador dos franceses, Napoleão Bonaparte, declara a deposição da Dinastia de Bragança (ou Bragantina) e ordena a invasão do território português. Essas medidas impõem a transferência da Família Real e da Corte lusitana para o Reino Americano. Sob pressão do exército francês, a 27 de novembro o embarque da Família Real para o Brasil tem de ser feito às pressas e em confusão.
          {'\n\n'}
          Temendo afundar-se no atraso ao qual estavam submetidas as colônias, o Príncipe Regente D. João, logo ao chegar no Brasil (Salvador, Bahia) a 22 de janeiro de 1808, toma uma série de medidas administrativas e políticas que são colocadas imediatamente em execução. Entre essas, abre os portos ao comércio com as nações amigas, o que se efetua pela Carta Régia de 28 de janeiro. Logo depois cria novas repartições públicas em território brasileiro, como o Banco do Brasil e a Imprensa Régia.
          {'\n\n'}
          A invasão do território português pelas tropas francesas sob o comando do general Junot não apenas altera a realidade da colônia, que em 16 de dezembro de 1815 se vê elevada à categoria de Reino Unido junto a Portugal e Algarves, mas também afeta profundamente a própria metrópole, com a introdução dos ideais iluministas da Revolução Francesa de 14 de julho de 1789. Quando, enfim, as tropas de Napoleão abandonam Portugal, os súditos de D. João VI, influenciados pelos princípios revolucionários, insurgem-se contra os privilégios absolutistas e deflagram a Revolução Constitucionalista do Porto, no dia 24 de agosto de 1820, em que se exige a volta do rei e a convocação das Cortes Gerais, Extraordinárias e Constituintes da Nação Portuguesa.
          {'\n\n'}
          A Revolução do Porto foi um movimento com idéias nitidamente liberais que arrastou adeptos entusiásticos em todas as partes do império lusitano no período pós-invasão napoleônica. Exige-se a elaboração de uma Constituição, "cuja falta é a origem de todos os nossos males", e convocam-se as primeiras eleições de Portugal, Brasil e Algarves para as "Cortes Gerais Extraordinárias e Constituintes da Nação Portuguesa", em Lisboa. Os revolucionários proclamam a soberania da Nação sobre o rei e intimam D. João VI a retornar imediatamente a Portugal.
          {'\n\n'}
          Em 7 de março de 1821, no Rio de Janeiro, o rei D. João VI expede decreto que "manda proceder a nomeação dos deputados às Cortes portuguesas, dando instruções a respeito". Em 23 de março é comunicada a retirada de Sua Majestade para Portugal e fica determinado, também, que "sem perda de tempo, se façam as eleições dos deputados para representarem o Reino do Brasil nas Cortes Gerais Extraordinárias e Constituintes da Nação Portuguesa, convocadas em Lisboa".
          {'\n\n'}
          O Príncipe Regente D. Pedro de Alcântara assume o governo em situação político-financeira bastante difícil. Seu pai, o rei D. João VI, antes do seu retorno a Portugal, saca tudo que tinha no Banco do Brasil, que ele mesmo criara e para o qual havia dado, em depósito, as jóias da Coroa, visando a estimular a credibilidade dos correntistas nativos, e leva, então, consigo todos os seus bens. Acompanham o rei D. João VI no seu regresso um contingente considerável de súditos, entre os quais comerciantes e capitalistas. Este fato prejudica o comércio brasileiro, pois a saída súbita de tais pessoas implica a retirada de capitais não só do movimento comercial, como também do Banco do Brasil, que com estes saques e mais os que o rei realizara, fica sem lastro e é forçado a suspender pagamentos.
          {'\n\n'}
          As Cortes Gerais, Extraordinárias e Constituintes da Nação Portuguesa são instaladas tão-somente com os deputados de Portugal e que se achavam em Lisboa, excluídos os representantes ainda ausentes ou não-eleitos dos domínios ultramarinos da América, África e Ásia. No dia 26 de janeiro de 1821 teve lugar a solene instalação do Congresso Constituinte, que só encerraria os seus trabalhos legislativos no dia 4 de novembro de 1822.
          {'\n\n'}
          As eleições dos primeiros deputados do Brasil se dão com atraso e obedecem ao decreto e às instruções expedidas em 7 de março de 1821. Todas as províncias brasileiras existentes à época – então Reino Americano Unido à Monarquia Portuguesa – fazem a escolha de seus representantes para as Cortes Gerais, Extraordinárias, e Constituintes da Nação Portuguesa. São eleitos 97 deputados (inclusive suplentes), procuradores e delegados, mas somente 51 parlamentares comparecem às Cortes Constituintes.
          {'\n\n'}
          Os primeiros deputados do Brasil a desembarcarem em Lisboa são os da Província de Pernambuco, que prestam juramento e tomam assento "em Cortes" no dia 29 de agosto de 1821, sete meses após instalados os trabalhos constituintes. O primeiro deles a usar da palavra foi o Monsenhor Francisco Moniz Tavares, na sessão de 30 de agosto, seguido de Manuel Zeferino dos Santos e Pedro de Araújo Lima, na sessão de 31 do mesmo mês. Em 10 de setembro tomam posse os representantes da Província do Rio de Janeiro e, em seguida, foram comparecendo e tomando assento os representantes das outras províncias. A representação de Minas Gerais, a mais numerosa bancada, permanece no Brasil, aguardando um melhor momento político. A bancada de Mato Grosso e a bancada de São Pedro do Rio Grande do Sul deixam também de comparecer às Cortes, em Lisboa.
          {'\n\n'}
          Inicia-se o primeiro capítulo de uma das mais belas páginas parlamentares na construção da democracia brasileira. A partir daí começam a chegar e a tomar posse os demais constituintes das outras províncias do Brasil. O que deveria ser um entrave aos propósitos brasileiros, devido à difícil travessia do Atlântico; às incertezas da terra desconhecida; aos conflitos de interesses, materiais e políticos, entre Brasil e Portugal; e a uma assembléia com ampla maioria portuguesa com propósitos recolonizadores, serve de estímulo aos representantes das províncias. A tudo isso soma-se a defesa veemente e altiva dos interesses do Reino Americano, com arrebatados pronunciamentos que tocam, por vezes, o extremo da audácia. Destaca-se nestes embates, sobranceira, a figura do constituinte Antônio Carlos Ribeiro de Andrada Machado e Silva (SP). Este, na sessão do dia 22 de maio de 1822, diante do pronunciamento insolente das galerias e assediado de apartes querendo abafar sua voz, que defendia os mais legítimos direitos de sua Pátria, afirma impavidamente, em tom solene que faz emudecer, desde logo, a gritaria: Silêncio! Aqui desta tribuna até os reis têm que me ouvir.
          {'\n\n'}
          Com o regresso do rei D. João VI às terras lusitanas e com as atitudes e medidas recolonizadoras visadas pela maioria portuguesa nas Cortes Gerais, Extraordinárias e Constituintes reunidas em Lisboa, as relações políticas entre Brasil e Portugal se deterioram rapidamente. Em decorrência da irritação das Cortes com os atos do Príncipe Regente D. Pedro de Alcântara, este recebe ordens para regressar à Europa, às quais responde com o "Fico", em 9 de janeiro de 1822. Com isso, a separação do Brasil de Portugal está informalmente realizada. No dia 16 de janeiro, José Bonifácio de Andrada e Silva encabeça um novo ministério formado por brasileiros. Assume a chefia política do movimento para a consolidação da regência de D. Pedro de Alcântara, opondo-se às medidas recolonizadoras das Cortes de Lisboa. No dia 3 de junho é expedido decreto que manda convocar uma “Assembléia Geral, Constituinte e Legislativa” composta de deputados das províncias do Brasil, e já no dia 19 é expedida Decisão de Governo que estabelece as instruções sobre o processo eleitoral. Reinando com autonomia, em 3 de agosto de 1822, o Príncipe Regente D. Pedro de Alcântara manda publicar decreto contendo as instruções para as eleições de deputados à Assembléia Geral, Constituinte e Legislativa do Reino do Brasil, convocada para o ano seguinte.
          {'\n\n'}
          Declarada a Independência do Brasil, no dia 7 de setembro de 1822, e sob forte influência da guerra da independência dos Estados Unidos, da Revolução Francesa e da Revolução Constitucionalista da Espanha, e das guerras de libertação na América espanhola, são convocadas eleições para a Assembléia Geral, Constituinte e Legislativa do Império do Brasil, que se reúne pela primeira vez, em sessão preparatória, no dia 17 de abril de 1823.
          {'\n\n'}
          A História da Câmara dos Deputados corresponde aos grandes momentos da História do Brasil em que se ampliam os direitos de cidadania e a construção da democracia.
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
  HistoriaCamaraScreen,
  HistoriaCamaraScreen.__name__
)

export default ScreenWithParallax
