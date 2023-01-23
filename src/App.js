import './App.css';
import ComponentDiv1 from './components/ComponentDiv1'
import ComponentDiv2 from './components/ComponentDiv2';
import ComponentDiv3 from './components/ComponentDiv3';
import ComponentDiv4 from './components/ComponentDiv4';
import ComponentDiv5 from './components/ComponentDiv5';
import ComponentDiv6 from './components/ComponentDiv6';
import Header from './components/Header';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <ComponentDiv1 frase ="Comece a investir agora e contribua com a evolução do Agronegócio"/>
      <ComponentDiv2 frase2="Na Bioma, além de ter retorno do seu investimento, você contribui com produtores
       rurais que alimentam famílias todos os dias."/>
      <ComponentDiv3 frase ="Com o BIOMA você encontra" frase2 ="Performance extra e rentabilidade"
       frase3 ="Seu capital investido em renda fixa." frase4 ="Crescimento econômico" frase5 ="
       O setor que deu destaque ao Brasil." frase6 ="Empreendedorismo no campo" frase7 =" 
       Ajudando na construção do Agro."/>
      <ComponentDiv4 frase = "Muito além do lucro, colabore para a evolução do Agronegócio!" frase2=
       "Assista o vídeo para conhecer melhor como você pode ajudar a BIOMA a melhorar o Agronegocio do nosso país."/>
      <ComponentDiv5 frase ="Fique por dentro de todos detalhes dos seus investimentos na plataforma." frase2 ="
       Tenha total transparência dos investimentos que sua carteira faz parte, setores de exposição, 
       índices de concentração e muito mais."/>
      <ComponentDiv6 frase="Conhecimento e oportunidades para você lucrar mais." frase2= "Aqui crédito vira queijo e se transforma em lucro, é soja se tornando parceria e carne gerando investimento."/>
       <Footer word="Institucional" word2="Inicio" word3="Contato" word4="Plataforma" word5="Preciso de ajuda"/>
    </div>

  );
}

export default App;
