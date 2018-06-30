import React, { Component } from 'react'
import './Chart.css'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
// import '../../../node_modules/react-vis/dist/style.css'
// import { XYPlot, LineSeries, makeVisFlexible, HorizontalGridLines, VerticalGridLines, XAxis, YAxis } from 'react-vis'

const MyPopupMarker = ({ nom_estab, position }) => (
  <Marker position={position}>
    <Popup>TEST</Popup>
  </Marker>
)

const MyMarkersList = ({ markers }) => {
  const items = markers.map(({ key, ...props }) => (
    <MyPopupMarker key={key} {...props} />
  ))
  return <div style={{ display: 'none' }}>{items}</div>
}

class Chart extends Component {
  state = {
    lat: -15.7835191,
    lng: -47.8993999,
    zoom: 10,
  }
  
  // componentDidMount() {}

  render() {
 
    // console.log(data)
    // const data = [
    //   { x: 0, y: Math.random() * 100 },
    //   { x: 1, y: Math.random() * 100 }
    // ]
    
    // const FlexibleVis = makeVisFlexible(XYPlot)

    const center = [this.state.lat, this.state.lng]

    const markers = [{
      "vlr_latitude": "-16.0115647315974",
      "vlr_longitude": "-48.0734467506395",
      "cod_munic": "530010",
      "nom_estab": "CSG 01 GAMA",
      "dsc_endereco": "QUADRA",
      "dsc_bairro": "GAMA SUL",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6134843540"
    }, {
      "vlr_latitude": "-15.8906614780421",
      "vlr_longitude": "-48.1121778488145",
      "cod_munic": "530010",
      "nom_estab": "PSU SAMAMBAIA QUADRA 317",
      "dsc_endereco": "QN 317 CJ 01 LT 01 AE",
      "dsc_bairro": "SAMAMBAIA",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6134597151"
    }, {
      "vlr_latitude": "-15.6358623504634",
      "vlr_longitude": "-47.8468751907335",
      "cod_munic": "530010",
      "nom_estab": "UBS SERRA AZUL",
      "dsc_endereco": "DF 420 KM 01 QUADRA 03 AE 01",
      "dsc_bairro": "SOBRADINHO",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6134854898"
    }, {
      "vlr_latitude": "-15.6698405742641",
      "vlr_longitude": "-48.200690746306",
      "cod_munic": "530010",
      "nom_estab": "PSU BRAZLANDIA 01",
      "dsc_endereco": "QUADRA 03 LOTE 06",
      "dsc_bairro": "BRAZLANDIA",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6133917848"
    }, {
      "vlr_latitude": "-15.7706701755519",
      "vlr_longitude": "-47.7785968780504",
      "cod_munic": "530010",
      "nom_estab": "PSU QUADRA 18",
      "dsc_endereco": "QUADRA",
      "dsc_bairro": "PARANOA",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6133694979"
    }, {
      "vlr_latitude": "-15.8309447765346",
      "vlr_longitude": "-48.0963635444627",
      "cod_munic": "530010",
      "nom_estab": "CSC 03 CEILANDIA",
      "dsc_endereco": "AREA ESPECIAL LOTE D",
      "dsc_bairro": "CEILANDIA SUL",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6133711106"
    }, {
      "vlr_latitude": "-15.7956469058986",
      "vlr_longitude": "-48.1309747695909",
      "cod_munic": "530010",
      "nom_estab": "CSC 07 CEILANDIA",
      "dsc_endereco": "AREA ESPECIAL DE",
      "dsc_bairro": "SETOR O",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6135852088"
    }, {
      "vlr_latitude": "-16.0073912143703",
      "vlr_longitude": "-47.9895901679979",
      "cod_munic": "530010",
      "nom_estab": "PSU SANTA MARIA 02",
      "dsc_endereco": "QUADRA 212313",
      "dsc_bairro": "SANTA MARIA",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6133945616"
    }, {
      "vlr_latitude": "-15.6149840354915",
      "vlr_longitude": "-47.6578116416917",
      "cod_munic": "530010",
      "nom_estab": "CSP 03 PLANALTINA",
      "dsc_endereco": "RUA ALEXANDRE SALGADO QUADRA 20 LOTE",
      "dsc_bairro": "SETOR TRADICIONAL",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6133891520"
    }, {
      "vlr_latitude": "-16.0253727436061",
      "vlr_longitude": "-48.0566239356981",
      "cod_munic": "530010",
      "nom_estab": "CSG 04 GAMA",
      "dsc_endereco": "ENTRE QUADRA",
      "dsc_bairro": "GAMA DF",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6135566878"
    }, {
      "vlr_latitude": "-15.8595371246333",
      "vlr_longitude": "-48.0239868164049",
      "cod_munic": "530010",
      "nom_estab": "PSU AREAL QS 08",
      "dsc_endereco": "QS 08 CJ 410 A LT 15",
      "dsc_bairro": "AREAL",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "33560436"
    }, {
      "vlr_latitude": "-15.8856081962581",
      "vlr_longitude": "-48.0239224433885",
      "cod_munic": "530010",
      "nom_estab": "CSRF 03 RIACHO FUNDO I",
      "dsc_endereco": "NA 07 POSTO DE SAUDE AREA ESPECIAL",
      "dsc_bairro": "RIACHO FUNDO",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6133998403"
    }, {
      "vlr_latitude": "-15.9051239490504",
      "vlr_longitude": "-47.7558517456041",
      "cod_munic": "530010",
      "nom_estab": "PSU POSTO URBANO N 01",
      "dsc_endereco": "RUA DA ESCOLA N 540",
      "dsc_bairro": "VILA NOVA",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "613355570"
    }, {
      "vlr_latitude": "-15.8955860137935",
      "vlr_longitude": "-47.7880382537828",
      "cod_munic": "530010",
      "nom_estab": "UBS MORRO AZUL",
      "dsc_endereco": "QD 11 CJ N CS 19",
      "dsc_bairro": "MORRO AZUL",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6133356115"
    }, {
      "vlr_latitude": "-15.8979463577266",
      "vlr_longitude": "-47.7611732482896",
      "cod_munic": "530010",
      "nom_estab": "UBS JOAO CANDIDO",
      "dsc_endereco": "RUA 14",
      "dsc_bairro": "JOAO CANDIDO",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6133390006"
    }, {
      "vlr_latitude": "-15.916571617126",
      "vlr_longitude": "-47.7717304229722",
      "cod_munic": "530010",
      "nom_estab": "UBS MORRO DA CRUZ",
      "dsc_endereco": "CHACARA 10",
      "dsc_bairro": "MORRO DA CRUZ",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "N\u00e3o se aplica"
    }, {
      "vlr_latitude": "-15.5236172676082",
      "vlr_longitude": "-47.618780136107",
      "cod_munic": "530010",
      "nom_estab": "UBS JARDIM MORUMBI",
      "dsc_endereco": "Q N LT 12",
      "dsc_bairro": "PLANALTINA",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "N\u00e3o se aplica"
    }, {
      "vlr_latitude": "-15.8069336414333",
      "vlr_longitude": "-48.1298375129686",
      "cod_munic": "530010",
      "nom_estab": "CSC 08 CEILANDIA",
      "dsc_endereco": "AREA ESPECIAL A B C D",
      "dsc_bairro": "CEILANDIA NORTE",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6135853654"
    }, {
      "vlr_latitude": "-15.6651949882503",
      "vlr_longitude": "-48.1980943679796",
      "cod_munic": "530010",
      "nom_estab": "UBS CHAPADINHA",
      "dsc_endereco": "GLEBA 02 RESERVA A",
      "dsc_bairro": "BRAZLANDIA",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "N\u00e3o se aplica"
    }, {
      "vlr_latitude": "-15.846877098083",
      "vlr_longitude": "-47.8549861907945",
      "cod_munic": "530010",
      "nom_estab": "CSB 05 BRASILIA",
      "dsc_endereco": "SHIS QI 2123",
      "dsc_bairro": "LAGO SUL",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6133662530"
    }, {
      "vlr_latitude": "-15.8008074760432",
      "vlr_longitude": "-47.9421901702867",
      "cod_munic": "530010",
      "nom_estab": "CSB 09 CRUZEIRO",
      "dsc_endereco": "SHICES",
      "dsc_bairro": "CRUZEIRO",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "(61)2330040"
    }, {
      "vlr_latitude": "-16.027153730392",
      "vlr_longitude": "-48.0263257026658",
      "cod_munic": "530010",
      "nom_estab": "CSSM 01 SANTA MARIA",
      "dsc_endereco": "QR 207307 AE SEM N",
      "dsc_bairro": "SANTA MARIA",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6133936473"
    }, {
      "vlr_latitude": "-15.890103578567",
      "vlr_longitude": "-48.142154216765",
      "cod_munic": "530010",
      "nom_estab": "CSSA 03 SAMAMBAIA",
      "dsc_endereco": "QN 429 CONJUNTO F",
      "dsc_bairro": "SAMAMBAIA NORTE",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6133595500"
    }, {
      "vlr_latitude": "-16.0134530067439",
      "vlr_longitude": "-48.0677175521837",
      "cod_munic": "530010",
      "nom_estab": "CSG 05 GAMA",
      "dsc_endereco": "QUADRA 38 AREA ESPECIAL LESTE SC",
      "dsc_bairro": "GAMA",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6135565111"
    }, {
      "vlr_latitude": "-15.9227192401881",
      "vlr_longitude": "-48.0437922477708",
      "cod_munic": "530010",
      "nom_estab": "CSF 04 RIACHO FUNDO II",
      "dsc_endereco": "QC 06 CJ 16 LOTE 01",
      "dsc_bairro": "RIACHO FUNDO II",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6134045299"
    }, {
      "vlr_latitude": "-15.9012722969051",
      "vlr_longitude": "-48.0437493324266",
      "cod_munic": "530010",
      "nom_estab": "UBS RIACHO FUNDO II QN 15 D",
      "dsc_endereco": "QN8C AE S N",
      "dsc_bairro": null,
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6133330109"
    }, {
      "vlr_latitude": "-15.8012902736659",
      "vlr_longitude": "-48.0939602851854",
      "cod_munic": "530010",
      "nom_estab": "CST 07 TAGUATINGA",
      "dsc_endereco": "QNM 36 AE N",
      "dsc_bairro": "TAGUATINGA",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6133712888"
    }, {
      "vlr_latitude": "-15.6446492671962",
      "vlr_longitude": "-47.8243660926805",
      "cod_munic": "530010",
      "nom_estab": "CSS 03 SOBRADINHO",
      "dsc_endereco": "AR 17 CHACARA",
      "dsc_bairro": "SOBRADINHO",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6134856775"
    }, {
      "vlr_latitude": "-15.6548202037807",
      "vlr_longitude": "-47.8094744682298",
      "cod_munic": "530010",
      "nom_estab": "CSS 02 SOBRADINHO",
      "dsc_endereco": "QUADRA 3 AREA ESPECIAL CONJUNTOS",
      "dsc_bairro": "SOBRADINHO",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6134872196"
    }, {
      "vlr_latitude": "-15.9094369411464",
      "vlr_longitude": "-48.049221038817",
      "cod_munic": "530010",
      "nom_estab": "PSU 2 RIACHO FUNDO II",
      "dsc_endereco": "AREA ESPECIAL QC",
      "dsc_bairro": "RIACHO FUNDO II",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6134043931"
    }, {
      "vlr_latitude": "-15.967179536819",
      "vlr_longitude": "-48.1253743171678",
      "cod_munic": "530010",
      "nom_estab": "UBS PONTE ALTA",
      "dsc_endereco": "DF 180 KM 65",
      "dsc_bairro": "GAMA",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6199999999"
    }, {
      "vlr_latitude": "-16.0436546802516",
      "vlr_longitude": "-48.2544851303087",
      "cod_munic": "530010",
      "nom_estab": "PSR ENGENHO DAS LAGES",
      "dsc_endereco": "RUA LIBANIO",
      "dsc_bairro": "GAMA",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6133594180"
    }, {
      "vlr_latitude": "-15.7951962947841",
      "vlr_longitude": "-47.8480339050279",
      "cod_munic": "530010",
      "nom_estab": "CSB 15 ASA NORTE",
      "dsc_endereco": "RUA",
      "dsc_bairro": "VILA PLANALTO",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6133061198"
    }, {
      "vlr_latitude": "-15.8229839801784",
      "vlr_longitude": "-48.0675458908067",
      "cod_munic": "530010",
      "nom_estab": "CST 04 TAGUATINGA",
      "dsc_endereco": "SETOR C NORTE",
      "dsc_bairro": "BRASILIA",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6135611310"
    }, {
      "vlr_latitude": "-15.8703088760371",
      "vlr_longitude": "-47.9656219482408",
      "cod_munic": "530010",
      "nom_estab": "CSNB 02 NUCLEO BANDEIRANTE",
      "dsc_endereco": "TERCEIRA AVENIDA CENTRO DE SAUDE AREA ESPECIAL",
      "dsc_bairro": "NUCLEO BANDEIRANTE",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6135520544"
    }, {
      "vlr_latitude": "-15.980322360992",
      "vlr_longitude": "-48.0721378326402",
      "cod_munic": "530010",
      "nom_estab": "UBS PONTE ALTA NORTE",
      "dsc_endereco": "DF 457",
      "dsc_bairro": "GAMA",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "N\u00e3o se aplica"
    }, {
      "vlr_latitude": "-15.5390453338619",
      "vlr_longitude": "-48.1686115264879",
      "cod_munic": "530010",
      "nom_estab": "PSR ALMECEGAS",
      "dsc_endereco": "PSR ALMECEGAS",
      "dsc_bairro": "BRAZLANDIA",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "(61) 3515865"
    }, {
      "vlr_latitude": "-15.7851541042323",
      "vlr_longitude": "-48.1365966796861",
      "cod_munic": "530010",
      "nom_estab": "PSU CONDOMINIO PRIVE",
      "dsc_endereco": "AE 01 ENTRE RUAS 13 E 15",
      "dsc_bairro": "PRIVE",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6133740979"
    }, {
      "vlr_latitude": "-15.6333196163173",
      "vlr_longitude": "-47.5213623046861",
      "cod_munic": "530010",
      "nom_estab": "PSR TAQUARA",
      "dsc_endereco": "NUCLEO RURAL TAQUARA 201",
      "dsc_bairro": "PLANALTINA",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6134858973"
    }, {
      "vlr_latitude": "-15.905767679214",
      "vlr_longitude": "-48.0458307266221",
      "cod_munic": "530010",
      "nom_estab": "PSU RIACHO FUNDO II",
      "dsc_endereco": "QN 07 A B AREA ESPECIAL LOTES 1 E 2",
      "dsc_bairro": "RIACHO FUNDO II",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6134341125"
    }, {
      "vlr_latitude": "-15.7087004184718",
      "vlr_longitude": "-47.9135441780076",
      "cod_munic": "530010",
      "nom_estab": "CANTINHO DA SAUDE GRANJA DO TORTO",
      "dsc_endereco": "AREA ESPECIAL VILA WESLIAN RORIZ",
      "dsc_bairro": "GRANJA TORTO",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "34687323"
    }, {
      "vlr_latitude": "-15.876585245132",
      "vlr_longitude": "-47.793123722075",
      "cod_munic": "530010",
      "nom_estab": "UBS VILA BOA",
      "dsc_endereco": "RUA 07",
      "dsc_bairro": "SAO SEBASTIAO",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6133352482"
    }, {
      "vlr_latitude": "-15.6201660633083",
      "vlr_longitude": "-47.6802349090562",
      "cod_munic": "530010",
      "nom_estab": "CSP 04 ESTANCIA DE PLANALTINA",
      "dsc_endereco": "ESTANCIA NOVA PLANALTINA QD 02 R A AREA ESPECIAL",
      "dsc_bairro": "ESTANCIA",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6134885853"
    }, {
      "vlr_latitude": "-15.9475350379939",
      "vlr_longitude": "-48.0149316787706",
      "cod_munic": "530010",
      "nom_estab": "PSR CAUB I",
      "dsc_endereco": "CAUB I AREA ESPECIAL",
      "dsc_bairro": "RIACHO FUNDO II",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6133387810"
    }, {
      "vlr_latitude": "-15.6247580051418",
      "vlr_longitude": "-47.6515674591051",
      "cod_munic": "530010",
      "nom_estab": "CERPIS",
      "dsc_endereco": "AV WL 04 SETOR HOSPITALAR OESTE",
      "dsc_bairro": "PLANALTINA",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6133889678"
    }, {
      "vlr_latitude": "-15.9931969642635",
      "vlr_longitude": "-47.9881095886217",
      "cod_munic": "530010",
      "nom_estab": "UBS SITIO DO GAMA",
      "dsc_endereco": "PRACA ESQUADRAO OLIMPIAS",
      "dsc_bairro": "SANTA MARIA",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6133945650"
    }, {
      "vlr_latitude": "-15.6459367275233",
      "vlr_longitude": "-47.8892111778245",
      "cod_munic": "530010",
      "nom_estab": "UBS BASEVI",
      "dsc_endereco": "AR 01",
      "dsc_bairro": "VILA BASEVI",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6130343792"
    }, {
      "vlr_latitude": "-15.8183705806728",
      "vlr_longitude": "-47.9864573478685",
      "cod_munic": "530010",
      "nom_estab": "CSGU 01 GUARA",
      "dsc_endereco": "QI 06 AREA ESPECIAL LT A",
      "dsc_bairro": "GUARA I",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6135683296"
    }, {
      "vlr_latitude": "-15.795539617538",
      "vlr_longitude": "-48.059670925139",
      "cod_munic": "530010",
      "nom_estab": "CST 01 TAGUATINGA",
      "dsc_endereco": "QNG AREA ESPECIAL",
      "dsc_bairro": "TAGUATINGA",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "33541441"
    }, {
      "vlr_latitude": "-15.8364593982692",
      "vlr_longitude": "-48.0630397796617",
      "cod_munic": "530010",
      "nom_estab": "CST 06 TAGUATINGA",
      "dsc_endereco": "QSC 01 AREA ESP",
      "dsc_bairro": "TAGUATINGA",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6133515043"
    }, {
      "vlr_latitude": "-15.7834482192989",
      "vlr_longitude": "-47.9972720146165",
      "cod_munic": "530010",
      "nom_estab": "CENTRO DE SAUDE DA ESTRUTURAL",
      "dsc_endereco": "AREA ESPECIAL 02 AVENIDA CENTRAL CENTRO DE SAUDE",
      "dsc_bairro": "ESTRUTURAL",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6134657846"
    }, {
      "vlr_latitude": "-16.016532182693",
      "vlr_longitude": "-47.3805141448961",
      "cod_munic": "530010",
      "nom_estab": "PSR JARDIM II",
      "dsc_endereco": "NUCLEO RURAL DE JARDIM",
      "dsc_bairro": "PARANOA",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "N\u00e3o se aplica"
    }, {
      "vlr_latitude": "-16.0085391998286",
      "vlr_longitude": "-47.5556516647325",
      "cod_munic": "530010",
      "nom_estab": "PSF EQUIPE 01 PSR PADDF",
      "dsc_endereco": "BR 251",
      "dsc_bairro": "PARANOA",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "N\u00e3o se aplica"
    }, {
      "vlr_latitude": "-16.0103952884669",
      "vlr_longitude": "-48.0024218559251",
      "cod_munic": "530010",
      "nom_estab": "PSU SANTA MARIA 01",
      "dsc_endereco": "ENTRE Q 212 E 213",
      "dsc_bairro": "SANTA MARIA",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6133943988"
    }, {
      "vlr_latitude": "-15.9644651412959",
      "vlr_longitude": "-48.0997538566575",
      "cod_munic": "530010",
      "nom_estab": "UBS CASA GRANDE",
      "dsc_endereco": "NUCLEO RURAL CASA GRANDE 12 MA",
      "dsc_bairro": "RECANTO DAS EMAS",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6134043846"
    }, {
      "vlr_latitude": "-15.88415980339",
      "vlr_longitude": "-48.0870294570909",
      "cod_munic": "530010",
      "nom_estab": "UBS SAMAMBAIA QUADRA 501",
      "dsc_endereco": "QR 501 CONJUNTO 07 LOTE",
      "dsc_bairro": "SAMAMBAIA SUL",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6133570465"
    }, {
      "vlr_latitude": "-15.6028389930721",
      "vlr_longitude": "-47.6482844352708",
      "cod_munic": "530010",
      "nom_estab": "POSTO DE SAUDE N 01 JARDIM RORIZ",
      "dsc_endereco": "AREA ESPECIAL ENTREEEQUADRAS 03 04",
      "dsc_bairro": "PLNALTINADF",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6133880448"
    }, {
      "vlr_latitude": "-16.0116505622859",
      "vlr_longitude": "-48.0741977691636",
      "cod_munic": "530010",
      "nom_estab": "CSG 06 GAMA",
      "dsc_endereco": "ENTRE QUADRA",
      "dsc_bairro": "SETOR OESTE",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "(61)5560980"
    }, {
      "vlr_latitude": "-15.8326828479762",
      "vlr_longitude": "-47.9096817970262",
      "cod_munic": "530010",
      "nom_estab": "CSB 07 BRASILIA",
      "dsc_endereco": "SGAS Q 612",
      "dsc_bairro": "ASA SUL",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "(61) 33452873"
    }, {
      "vlr_latitude": "-15.6504642963405",
      "vlr_longitude": "-47.7819657325731",
      "cod_munic": "530010",
      "nom_estab": "CSS 01 SOBRADINHO",
      "dsc_endereco": "SOBRADINHO",
      "dsc_bairro": "SOBRADINHO",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6135912779"
    }, {
      "vlr_latitude": "-15.9336304664607",
      "vlr_longitude": "-47.9396367073045",
      "cod_munic": "530010",
      "nom_estab": "PSR VARGEM BONITA",
      "dsc_endereco": "AREA RURAL VARGEM BONITA",
      "dsc_bairro": "NUCLEO BANDEIRANTES",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6133801095"
    }, {
      "vlr_latitude": "-15.8500099182124",
      "vlr_longitude": "-47.9514169692979",
      "cod_munic": "530010",
      "nom_estab": "CSCA 01 CANDANGOLANDIA",
      "dsc_endereco": "E Q 5 7 CENTRO DE SAUDE AREA ESPECIAL",
      "dsc_bairro": "CANDANGOLANDIA",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6133015444"
    }, {
      "vlr_latitude": "-15.6003499031062",
      "vlr_longitude": "-47.8716588020311",
      "cod_munic": "530010",
      "nom_estab": "UBS ENGENHO VELHO",
      "dsc_endereco": "LOTE 01 RUA 01",
      "dsc_bairro": "SOBRADINHO",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "N\u00e3o se aplica"
    }, {
      "vlr_latitude": "-16.0136997699733",
      "vlr_longitude": "-48.067417144774",
      "cod_munic": "530010",
      "nom_estab": "CSG 08 GAMA",
      "dsc_endereco": "AEREA ESPECIAL N",
      "dsc_bairro": "GAMADF",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6135561032"
    }, {
      "vlr_latitude": "-15.78",
      "vlr_longitude": "-47.93",
      "cod_munic": "530010",
      "nom_estab": "CSSM 02 SANTA MARIA",
      "dsc_endereco": "EQ 217218 E 317318 DE SANTA MARIA",
      "dsc_bairro": "SANTA MARIA",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6133945616"
    }, {
      "vlr_latitude": "-15.7402324676509",
      "vlr_longitude": "-47.7632975578294",
      "cod_munic": "530010",
      "nom_estab": "CSPA 02 ITAPOA",
      "dsc_endereco": "QD 378 AREA ESPECIAL",
      "dsc_bairro": "ITAPOA",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6134674723"
    }, {
      "vlr_latitude": "-15.7040226459499",
      "vlr_longitude": "-47.3735404014574",
      "cod_munic": "530010",
      "nom_estab": "PSR SAO JOSE",
      "dsc_endereco": "NUCLEO RURAL RIO PRETO DF",
      "dsc_bairro": "COLONIA SAO JOSE",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "(61)3883264"
    }, {
      "vlr_latitude": "-15.8210635185237",
      "vlr_longitude": "-48.0925440788255",
      "cod_munic": "530010",
      "nom_estab": "CST 08 TAGUATINGA",
      "dsc_endereco": "EQNL 24 AREA ESP NORTE",
      "dsc_bairro": "TAGUATINGA",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6134752912"
    }, {
      "vlr_latitude": "-15.9196507930751",
      "vlr_longitude": "-48.1016635894761",
      "cod_munic": "530010",
      "nom_estab": "CSRE 01 RECANTO DAS EMAS",
      "dsc_endereco": "QUADRA 307 AREA ESPECIAL N 01",
      "dsc_bairro": "RECANTO DAS EMAS",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6133314773"
    }, {
      "vlr_latitude": "-15.783298015594",
      "vlr_longitude": "-47.9358386993394",
      "cod_munic": "530010",
      "nom_estab": "CSB 14 ASA NORTE",
      "dsc_endereco": "AREA ESPECIAL SETOR ESCOLAR LOTE",
      "dsc_bairro": "CRUZEIRO VELHO",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "(61)2341666"
    }, {
      "vlr_latitude": "-15.9908902645106",
      "vlr_longitude": "-47.8134870529161",
      "cod_munic": "530010",
      "nom_estab": "PSR NOVA BETANIA",
      "dsc_endereco": "DF 140 KM 75",
      "dsc_bairro": "SAO SEBASTIAO",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "N\u00e3o se aplica"
    }, {
      "vlr_latitude": "-15.8254301548",
      "vlr_longitude": "-47.9240155220018",
      "cod_munic": "530010",
      "nom_estab": "CSB 08 BRASILIA",
      "dsc_endereco": "AV W3 SUL EQS",
      "dsc_bairro": "ASA SUL",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "61324521775"
    }, {
      "vlr_latitude": "-16.0458755493159",
      "vlr_longitude": "-48.0442428588853",
      "cod_munic": "530010",
      "nom_estab": "PSR DVO",
      "dsc_endereco": "RUA DAS AVENCAS LOTE 01",
      "dsc_bairro": "GAMA",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6133921572"
    }, {
      "vlr_latitude": "-15.9301865100856",
      "vlr_longitude": "-48.1056547164903",
      "cod_munic": "530010",
      "nom_estab": "PSU RECANTO DAS EMAS 01",
      "dsc_endereco": "AVENIDA MONJOLO QUADRA 311 CJ",
      "dsc_bairro": "RECANTO DAS EMAS",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "N\u00e3o se aplica"
    }, {
      "vlr_latitude": "-15.914597511291",
      "vlr_longitude": "-47.7606368064867",
      "cod_munic": "530010",
      "nom_estab": "UBS SAO FRANCISCO SS",
      "dsc_endereco": "CJ 05 CS 01",
      "dsc_bairro": "SAO FRANCISCO",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6133398836"
    }, {
      "vlr_latitude": "-15.7465732097621",
      "vlr_longitude": "-47.6625108718858",
      "cod_munic": "530010",
      "nom_estab": "UBS RAJADINHA",
      "dsc_endereco": "RAJADINHA 2 KM 11 BR 130 CH 3 COQUEIRO",
      "dsc_bairro": "PLANALTINA",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "N\u00e3o se aplica"
    }, {
      "vlr_latitude": "-15.6693577766414",
      "vlr_longitude": "-48.199081420897",
      "cod_munic": "530010",
      "nom_estab": "UBS VEREDAS II QD 04",
      "dsc_endereco": "QD 04 LT 06 LJS 1 E 2",
      "dsc_bairro": "BRAZLANDIA",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6134795787"
    }, {
      "vlr_latitude": "-15.8327364921565",
      "vlr_longitude": "-47.9731106758104",
      "cod_munic": "530010",
      "nom_estab": "CSGU 02 GUARA",
      "dsc_endereco": "QE 23 AREA ESPECIAL",
      "dsc_bairro": "GUARA II",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6135673055"
    }, {
      "vlr_latitude": "-15.8400750160213",
      "vlr_longitude": "-48.1144094467149",
      "cod_munic": "530010",
      "nom_estab": "CSC 06 CEILANDIA",
      "dsc_endereco": "EQNP",
      "dsc_bairro": "CEILANDIA",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6133761335"
    }, {
      "vlr_latitude": "-15.621024370193",
      "vlr_longitude": "-47.8215980529771",
      "cod_munic": "530010",
      "nom_estab": "UBS VALE DOS PINHEIROS",
      "dsc_endereco": "QD 45 A CONJUNTO A",
      "dsc_bairro": "COND VALE DOS PINHE",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6134854292"
    }, {
      "vlr_latitude": "-15.8047878742213",
      "vlr_longitude": "-48.1435489654527",
      "cod_munic": "530010",
      "nom_estab": "CSC 12 CEILANDIA",
      "dsc_endereco": "AREA ESPECIAL SN",
      "dsc_bairro": "CEILANDIA NORTE",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6133746556"
    }, {
      "vlr_latitude": "-15.78",
      "vlr_longitude": "-47.93",
      "cod_munic": "530010",
      "nom_estab": "PSU SANTA MARIA 03",
      "dsc_endereco": "QR 202 E 303",
      "dsc_bairro": "SANTA MARIA",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6133932901"
    }, {
      "vlr_latitude": "-16.0057604312892",
      "vlr_longitude": "-48.0526328086839",
      "cod_munic": "530010",
      "nom_estab": "CSG 03 GAMA",
      "dsc_endereco": "AREA ESPECIAL",
      "dsc_bairro": "GAMA",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6135566689"
    }, {
      "vlr_latitude": "-15.8079314231868",
      "vlr_longitude": "-48.1206536293016",
      "cod_munic": "530010",
      "nom_estab": "CSC 10 CEILANDIA",
      "dsc_endereco": "QNN",
      "dsc_bairro": "CEILANDIA SUL",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "(61)3713040"
    }, {
      "vlr_latitude": "-15.879642963409",
      "vlr_longitude": "-48.0010056495653",
      "cod_munic": "530010",
      "nom_estab": "PSU RIACHO FUNDO I QN 01",
      "dsc_endereco": "QN 01 CONJUNTO 20 CASA",
      "dsc_bairro": "RIACHO FUNDO I",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6133990491"
    }, {
      "vlr_latitude": "-15.8105170726772",
      "vlr_longitude": "-48.0632328987108",
      "cod_munic": "530010",
      "nom_estab": "CST 02 TAGUATINGA",
      "dsc_endereco": "CND 02 AREA ESPECIAL",
      "dsc_bairro": "TAGUATINGA",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6133543020"
    }, {
      "vlr_latitude": "-15.78",
      "vlr_longitude": "-47.93",
      "cod_munic": "530010",
      "nom_estab": "CST 03 TAGUATINGA",
      "dsc_endereco": "EQNL",
      "dsc_bairro": "TAGUATINGA",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6133363028"
    }, {
      "vlr_latitude": "-15.6407654285426",
      "vlr_longitude": "-47.6402807235704",
      "cod_munic": "530010",
      "nom_estab": "PSU ARAPOANGA",
      "dsc_endereco": "QUADRA 08 CONJUNTO I",
      "dsc_bairro": "ARAPOANGA",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6134891557"
    }, {
      "vlr_latitude": "-16.036520004272",
      "vlr_longitude": "-48.06130170822",
      "cod_munic": "530010",
      "nom_estab": "CSG 02 GAMA",
      "dsc_endereco": "QUADRA",
      "dsc_bairro": "SETOR SUL",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6134847220"
    }, {
      "vlr_latitude": "-15.8784091472621",
      "vlr_longitude": "-48.0685973167405",
      "cod_munic": "530010",
      "nom_estab": "CSSA 04 SAMAMBAIA",
      "dsc_endereco": "QN 512 CONJUNTO 2 LOTE",
      "dsc_bairro": "SUL",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6133581335"
    }, {
      "vlr_latitude": "-15.8078455924983",
      "vlr_longitude": "-48.1206536293016",
      "cod_munic": "530010",
      "nom_estab": "CSC 02 CEILANDIA",
      "dsc_endereco": "AREA ESPECIAL SN",
      "dsc_bairro": "CEILANDIA NORTE",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6135852288"
    }, {
      "vlr_latitude": "-15.8289062976833",
      "vlr_longitude": "-48.2464814186082",
      "cod_munic": "530010",
      "nom_estab": "PSR BOA ESPERANCA",
      "dsc_endereco": "NUCLEO RURAL BOA ESPERANCA",
      "dsc_bairro": "N R B ESPERANCA",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6135062082"
    }, {
      "vlr_latitude": "-15.9021520614619",
      "vlr_longitude": "-48.0599713325486",
      "cod_munic": "530010",
      "nom_estab": "ESF 402 EQUIPE DE SAUDE DA FAMILIA",
      "dsc_endereco": "AV RECANTO DAS EMAS QD 102 AREA ESPECIAL",
      "dsc_bairro": null,
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6134346904"
    }, {
      "vlr_latitude": "-15.6190824508662",
      "vlr_longitude": "-47.9482841491685",
      "cod_munic": "530010",
      "nom_estab": "UBS LAGO OESTE",
      "dsc_endereco": "ROD DF 01 KM 13 RUA 08",
      "dsc_bairro": "SOBRADINHO",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6133021017"
    }, {
      "vlr_latitude": "-15.7429790496822",
      "vlr_longitude": "-48.1703066825853",
      "cod_munic": "530010",
      "nom_estab": "PSR INCRA 8",
      "dsc_endereco": "QUADRA 16 LOTE",
      "dsc_bairro": "BRAZLANDIA",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6135401282"
    }, {
      "vlr_latitude": "-15.9093296527858",
      "vlr_longitude": "-47.7532553672777",
      "cod_munic": "530010",
      "nom_estab": "UBS BOSQUE 02",
      "dsc_endereco": "RUA 20 CJ A CS 24",
      "dsc_bairro": "BOSQUE",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6133395219"
    }, {
      "vlr_latitude": "-15.7696187496181",
      "vlr_longitude": "-47.7799057960496",
      "cod_munic": "530010",
      "nom_estab": "CSPA 01 PARANOA",
      "dsc_endereco": "QD 21 AREA ESPECIAL SN",
      "dsc_bairro": "PARANOA",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "(61)3691467"
    }, {
      "vlr_latitude": "-15.8205592632289",
      "vlr_longitude": "-47.5693845748888",
      "cod_munic": "530010",
      "nom_estab": "PSR TABATINGA",
      "dsc_endereco": "NUCLEO RURAL DE TABATINGA SN",
      "dsc_bairro": "PLANALTINA",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "N\u00e3o se aplica"
    }, {
      "vlr_latitude": "-15.7430434226985",
      "vlr_longitude": "-47.8914213180528",
      "cod_munic": "530010",
      "nom_estab": "CSB 13 ASA NORTE",
      "dsc_endereco": "EQN 114 115",
      "dsc_bairro": "ASA NORTE",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6132722948"
    }, {
      "vlr_latitude": "-15.9091258049007",
      "vlr_longitude": "-47.7532982826219",
      "cod_munic": "530010",
      "nom_estab": "UBS VILA NOVA I",
      "dsc_endereco": "RUA 53 CS 81",
      "dsc_bairro": "BOSQUE",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "N\u00e3o se aplica"
    }, {
      "vlr_latitude": "-15.7454466819759",
      "vlr_longitude": "-47.7696919441209",
      "cod_munic": "530010",
      "nom_estab": "PSU ITAPUA",
      "dsc_endereco": "AREA ESPECIAL ENTRE QUADRA 61 318",
      "dsc_bairro": "ITAPUA",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "N\u00e3o se aplica"
    }, {
      "vlr_latitude": "-15.6774258613582",
      "vlr_longitude": "-47.6525330543504",
      "cod_munic": "530010",
      "nom_estab": "POSTO DE SAUDE DO VALE",
      "dsc_endereco": "CR 71 CASA 177",
      "dsc_bairro": "VALE DO AMANHECER",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "61338831142"
    }, {
      "vlr_latitude": "-15.761497020721",
      "vlr_longitude": "-47.8804993629442",
      "cod_munic": "530010",
      "nom_estab": "CSB 12 ASA NORTE",
      "dsc_endereco": "EQN 208408",
      "dsc_bairro": "ASA NORTE",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6132743455"
    }, {
      "vlr_latitude": "-15.6793248653407",
      "vlr_longitude": "-47.6483917236314",
      "cod_munic": "530010",
      "nom_estab": "PSR SANTOS DUMONT",
      "dsc_endereco": "NUCLEO RURAL DE SANTOS DUMONT",
      "dsc_bairro": "PLANALTINA",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6134890488"
    }, {
      "vlr_latitude": "-15.8031249046321",
      "vlr_longitude": "-48.1117057800279",
      "cod_munic": "530010",
      "nom_estab": "CSC 05 CEILANDIA",
      "dsc_endereco": "QNM",
      "dsc_bairro": "CEILANDIA NORTE",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6133711672"
    }, {
      "vlr_latitude": "-15.8900606632228",
      "vlr_longitude": "-47.7776527404771",
      "cod_munic": "530010",
      "nom_estab": "UBS SETOR TRADICIONAL",
      "dsc_endereco": "RUA 06",
      "dsc_bairro": "SAO SEBASTIAO",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6133358778"
    }, {
      "vlr_latitude": "-15.9419775009151",
      "vlr_longitude": "-48.2359457015977",
      "cod_munic": "530010",
      "nom_estab": "UBS SAO FRANCISCO 01",
      "dsc_endereco": "QUADRA 03 LOTE 07 DF 280 KM",
      "dsc_bairro": "RECANTO DAS EMAS",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6133597003"
    }, {
      "vlr_latitude": "-15.6770718097682",
      "vlr_longitude": "-48.1948328018174",
      "cod_munic": "530010",
      "nom_estab": "CSBZ 01 BRAZLANDIA",
      "dsc_endereco": "QUADRA NORTE",
      "dsc_bairro": "BRAZLANDIA",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6133911533"
    }, {
      "vlr_latitude": "-15.7983720302577",
      "vlr_longitude": "-48.1335496902452",
      "cod_munic": "530010",
      "nom_estab": "CSC 11 CEILANDIA",
      "dsc_endereco": "EQN0 1718",
      "dsc_bairro": "EXPSANSAO SETOR O",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6135852288"
    }, {
      "vlr_latitude": "-15.9630489349361",
      "vlr_longitude": "-47.557003498076",
      "cod_munic": "530010",
      "nom_estab": "PSR CAPAO SECO",
      "dsc_endereco": "NUCLEO RURAL DE CAPAO SECO",
      "dsc_bairro": "PARANOA",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6135064000"
    }, {
      "vlr_latitude": "-15.6744217872615",
      "vlr_longitude": "-48.1990170478807",
      "cod_munic": "530010",
      "nom_estab": "CSBZ 02 BRAZLANDIA",
      "dsc_endereco": "QUADRA 45 AREA ESPECIAL",
      "dsc_bairro": "BRAZLANDIA",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6133911771"
    }, {
      "vlr_latitude": "-15.9040081501002",
      "vlr_longitude": "-47.7722668647752",
      "cod_munic": "530010",
      "nom_estab": "CSSB 01 SAO SEBASTIAO",
      "dsc_endereco": "CENTRO DE MULTIPLAS FUNCOES",
      "dsc_bairro": "CENTRO",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6133356221"
    }, {
      "vlr_latitude": "-15.8104312419887",
      "vlr_longitude": "-47.9887318611131",
      "cod_munic": "530010",
      "nom_estab": "PSU LUCIO COSTA GUARA",
      "dsc_endereco": "QE23 AREA ESPECIAL",
      "dsc_bairro": "GUARA I",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "(61)3823555"
    }, {
      "vlr_latitude": "-15.710706710815",
      "vlr_longitude": "-47.8762292861925",
      "cod_munic": "530010",
      "nom_estab": "CENTRO DE SAUDE DO VARJAO",
      "dsc_endereco": "Q",
      "dsc_bairro": "VARJAO",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "(61)04682420"
    }, {
      "vlr_latitude": "-15.8626055717464",
      "vlr_longitude": "-48.0791759490953",
      "cod_munic": "530010",
      "nom_estab": "CSSA 01 SAMAMBAIA",
      "dsc_endereco": "QDA SERVICO 408 AREA ESPECIAL",
      "dsc_bairro": "NORTE",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "613582811"
    }, {
      "vlr_latitude": "-15.563560724258",
      "vlr_longitude": "-47.9352378845201",
      "cod_munic": "530010",
      "nom_estab": "PSR CATINGUEIRO",
      "dsc_endereco": "ROD DF 205 OESTE KM 13",
      "dsc_bairro": "SOBRADINHO",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "N\u00e3o se aplica"
    }, {
      "vlr_latitude": "-15.8758127689357",
      "vlr_longitude": "-48.1102466583238",
      "cod_munic": "530010",
      "nom_estab": "CSSA 02 SAMAMBAIA",
      "dsc_endereco": "QS 611 AREA ESPECIAL",
      "dsc_bairro": "NORTE",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6134599316"
    }, {
      "vlr_latitude": "-15.7802188396449",
      "vlr_longitude": "-47.9998683929429",
      "cod_munic": "530010",
      "nom_estab": "UBS VILA ESTRUTURAL QUADRA 15",
      "dsc_endereco": "QD 15 CONJUNTO L CASA",
      "dsc_bairro": "ESTRUTURAL",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6134655811"
    }, {
      "vlr_latitude": "-15.6340706348415",
      "vlr_longitude": "-47.8378629684434",
      "cod_munic": "530010",
      "nom_estab": "UBS MINI CHACARAS",
      "dsc_endereco": "QMS 30 A AREA ESPECIAL",
      "dsc_bairro": "COND MINI CHACARA",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6135951883"
    }, {
      "vlr_latitude": "-15.6353259086604",
      "vlr_longitude": "-47.670278549193",
      "cod_munic": "530010",
      "nom_estab": "UBS BICA DO DER",
      "dsc_endereco": "CONDOMINIO CACHOEIRA LOTE",
      "dsc_bairro": "PLANALTINA",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "N\u00e3o se aplica"
    }, {
      "vlr_latitude": "-15.5343568325038",
      "vlr_longitude": "-47.5109553337083",
      "cod_munic": "530010",
      "nom_estab": "PSR PIPIRIPAU",
      "dsc_endereco": "NUCLEO RURAL DO PIPIRIPAU",
      "dsc_bairro": "PLANALTINA",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "N\u00e3o se aplica"
    }, {
      "vlr_latitude": "-15.7626235485072",
      "vlr_longitude": "-47.493059635161",
      "cod_munic": "530010",
      "nom_estab": "PSR RIO PRETO",
      "dsc_endereco": "NUCLEO RURAL RIO PRETO",
      "dsc_bairro": "PLANALTINA",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "(61)3883264"
    }, {
      "vlr_latitude": "-15.8489906787868",
      "vlr_longitude": "-47.9703211784349",
      "cod_munic": "530010",
      "nom_estab": "CSGU 03 GUARA",
      "dsc_endereco": "QE 38 AREA ESPECIAL",
      "dsc_bairro": "GUARA II",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6133011187"
    }, {
      "vlr_latitude": "-15.9070014953609",
      "vlr_longitude": "-47.5177145004259",
      "cod_munic": "530010",
      "nom_estab": "PSR CARIRU",
      "dsc_endereco": "NUCLEO RURAL DE CARIRU",
      "dsc_bairro": "PARANOA",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "N\u00e3o se aplica"
    }, {
      "vlr_latitude": "-15.9076666831966",
      "vlr_longitude": "-47.7775454521165",
      "cod_munic": "530010",
      "nom_estab": "PSU POSTO URBANO N 02",
      "dsc_endereco": "QD 301 CJ 06 LT 01",
      "dsc_bairro": "RESIDENCIAL OESTE",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6133358173"
    }, {
      "vlr_latitude": "-15.8512651920314",
      "vlr_longitude": "-48.0473542213426",
      "cod_munic": "530010",
      "nom_estab": "CST 05 TAGUATINGA",
      "dsc_endereco": "SETOR D SUL AREA ESP N",
      "dsc_bairro": "TAGUATINGA",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6135612072"
    }, {
      "vlr_latitude": "-15.7734704017635",
      "vlr_longitude": "-47.892365455626",
      "cod_munic": "530010",
      "nom_estab": "CSB 11 ASA NORTE",
      "dsc_endereco": "SGAN",
      "dsc_bairro": "ASA NORTE",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6132748118"
    }, {
      "vlr_latitude": "-15.7255876064296",
      "vlr_longitude": "-47.8740835189805",
      "cod_munic": "530010",
      "nom_estab": "CSB 10 ASA NORTE",
      "dsc_endereco": "SHIN QI",
      "dsc_bairro": "LAGO NORTE",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6135772092"
    }, {
      "vlr_latitude": "-15.8355689048762",
      "vlr_longitude": "-48.1050109863267",
      "cod_munic": "530010",
      "nom_estab": "CSC 04 CEILANDIA",
      "dsc_endereco": "AREA ESPECIAL SN",
      "dsc_bairro": "CEILANDIA SUL",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6133761946"
    }, {
      "vlr_latitude": "-15.6122589111324",
      "vlr_longitude": "-47.6433491706834",
      "cod_munic": "530010",
      "nom_estab": "CSP 02 PLANALTINA",
      "dsc_endereco": "ENTRE QUADRAS 110 AREA ESPECIAL",
      "dsc_bairro": "PLANALTINA",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6133891866"
    }, {
      "vlr_latitude": "-15.9021949768062",
      "vlr_longitude": "-48.0602717399583",
      "cod_munic": "530010",
      "nom_estab": "CSRE 02 RECANTO DAS EMAS",
      "dsc_endereco": "QUADRA 102 AREA ESPECIAL N",
      "dsc_bairro": "RECANTO DAS EMAS",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6133336326"
    }, {
      "vlr_latitude": "-15.6389522552486",
      "vlr_longitude": "-47.6473617553697",
      "cod_munic": "530010",
      "nom_estab": "CSP 05 ARAPOANGA PLANALTINA",
      "dsc_endereco": "QUADRA 12 CONJ A AREA ESPECIAL C E FUTEBOL",
      "dsc_bairro": "ARAPOANGA",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6134891472"
    }]

    const testJson = [{
      "vlr_latitude": "-16.0115647315974",
      "vlr_longitude": "-48.0734467506395",
      "cod_munic": "530010",
      "nom_estab": "CSG 01 GAMA",
      "dsc_endereco": "QUADRA",
      "dsc_bairro": "GAMA SUL",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6134843540"
    }, {
      "vlr_latitude": "-15.8906614780421",
      "vlr_longitude": "-48.1121778488145",
      "cod_munic": "530010",
      "nom_estab": "PSU SAMAMBAIA QUADRA 317",
      "dsc_endereco": "QN 317 CJ 01 LT 01 AE",
      "dsc_bairro": "SAMAMBAIA",
      "dsc_cidade": "Bras\u00edlia",
      "dsc_telefone": "6134597151"
    }]

    testJson.forEach(function(obj, key) {
      obj.key = key
      obj.position = [Number(obj.vlr_latitude), Number(obj.vlr_longitude)]
      delete obj.vlr_latitude
      delete obj.vlr_longitude
    })
    console.log(testJson)

    return (
      <Map className="Chart" center={center} zoom={this.state.zoom}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MyMarkersList markers={testJson} />
        {/* <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
      </Map>
      // <div className="Chart">
      //   <FlexibleVis>
      //     <VerticalGridLines/>
      //     <HorizontalGridLines/>
      //     <XAxis/>
      //     <YAxis/>
      //     <LineSeries data={this.state.data}/>
      //   </FlexibleVis>
      // </div>
    )
  }
}

export default Chart
