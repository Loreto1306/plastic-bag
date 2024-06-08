import Typewriter from "../hooks/Typewriter";

export default function Home(){
    return (
      <>
        <div className="div_container ">
          <h1 className="tw-size-20 tw-text-teal-100 tw-text-6xl tw-pl-20 tw-pt-20 sm:tw-size-3/12 sm:tw-max-w-30 tw-font-bold">
            <Typewriter className="w-6"  text={"Você sabe qual o siginificado de Economia Azul ? "} delay={50} /> <br />
          </h1>
        </div>
        <br/>
        <h1 className="title1 text-2xl">
          Quais aspectos da ecnomia azul ?
        </h1>
        <div className=" tw-text-gray-700 first_text tw-text-left">
          <h4 className="tw-text-2xl tw-text-gray-700">
            A economia azul visa promover um novo sistema econômico longe do
            conceito de usar e jogar fora continuamente os recursos que a
            natureza nos oferece. É, portanto, o principal motor para a
            recuperação dos ecossistemas e para a sensibilização sobre a
            importância dos recursos dos oceanos e costas para além da pesca e
            do turismo.</h4>

            <h5 className="tw-text-gray-700 tw-text-2xl">
              
              <br />
              “A vida nos oceanos está diminuindo em todo o mundo devido à pesca
              excessiva, destruição de habitats e mudanças climáticas. No
              entanto, apenas 7% do oceano está atualmente sob algum tipo de
              proteção”. 
              <br /><small className="tw-text-sm tw-font-semibold">(ENRIC SALA, 2021)</small>.
            </h5>
            <h5 className="tw-text-gray-700 tw-text-xl">
              <br />
              Considerar os espaços aquáticos como motores de inovação e
              crescimento para um desenvolvimento económico sustentável e
              rentável é o eixo da chamada economia azul. Trata-se de um
              conceito baseado na imitação do funcionamento da natureza,
              seguindo o princípio da economia circular, para reconverter
              resíduos em materiais eficientes.
            </h5>
            <br />
            <hr />
        </div>
        <div>
          <h2 className="title1 text-2xl ">Quando nasceu a economia azul ?</h2>
          <div className="second-text">
            <h4 className="eco_nasce tw-py-3 tw-text-gray-700 tw-text-2xl">
              O conceito teve sua origem no economista belga Gunter Pauli, que
              escreveu pela primeira vez sobre essa ideia em 1994, em seu livro
              intitulado The Blue Economy, para incentivar um modelo econômico
              que tivesse o respeito ao meio ambiente em seu centro.
              </h4>
              <h5 className="tw-text-gray-700 tw-py-3 tw-text-xl">
                Em suas páginas, o economista explica cerca de 100 inovações que
                introduzem formas sustentáveis ​​de produzir produtos ecológicos
                ou sistemas naturais para que possam ser utilizados pelos
                animais que habitam os ecossistemas. Além disso, esse modelo de
                economia geraria, segundo Pauli em seu trabalho, mais de 100
                milhões de empregos.
                </h5>
                <br />
            <hr />
          </div>
        </div>
        <div>
          <h2 className="title1 text-2xl">Quais sāo os princípios da economia azul</h2>
          
          <div className="third-text tw-py-5 tw-text-gray-700 tw-text-2xl">
            <h4>
              Entre seus princípios básicos, a economia azul adota uma abordagem
              diferente para o desenvolvimento econômico, empreendedorismo
              sustentável e inovação. Alguns destes fundamentos baseiam-se nas
              leis da física, na ideia de fazer mais com menos, de combinar
              riqueza com diversidade, de ver os resíduos como recursos e, em
              última análise, a simbiose de todo o sistema a nível global.
            </h4>
            <h4 className="tw-py-3 tw-text-gray-700 tw-text-xl">
              Portanto, em um mundo regido pela economia linear, que nos
              aproxima de um ponto sem volta na degradação do planeta devido à
              exploração massiva dos recursos naturais e a geração de resíduos,
              o equilíbrio ecológico torna-se a única forma possível de reverter
              a mudança climática.
            </h4>
            <br />
          </div>
        </div>
      </>
    );
}