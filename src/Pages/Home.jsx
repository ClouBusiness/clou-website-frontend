import brandingIcon from "../assets/branding.png";
import devIcon from "../assets/dev.png";
import elementoBranco from "../assets/elementobranco1.png";
import elipseCirco from "../assets/elipse1.png";
import elipse from "../assets/elipse4.png";
import frame14 from "../assets/frame14.png";
import gente from "../assets/gente.png";
import iaIcon from "../assets/ia.png";
import pessoaEstrela from "../assets/iconClientes.png";
import tesoura from "../assets/iconeAbertura.png";
import maoSubindo from "../assets/iconeResultados.png";
import prancheta from "../assets/iconProjetos.png";
import logo from "../assets/logo.png";
import logotipo from "../assets/logotipo.png";
import redes from "../assets/redessociais1.png";
import trafego from "../assets/trafego.png";
import banner from "../assets/Vector3.png";
import tecnologia from "../assets/Vector4.png";
import bgOrange from "../assets/Vector5.png";
import lateral from "../assets/Vector6.png";
import vetor9 from "../assets/vetor9.png";
import Cards from "../Components/Cards";
import Carousel from "../Components/Carousel";
import ChatBot from "../Components/ChatBot";
const Home = () => {
  const redesArr = [
    {
      id: 0,
      description: "Planejamento estratégico",
    },
    {
      id: 1,
      description: "Produção de conteúdo (design + copy)",
    },
    {
      id: 2,
      description: "Agendamento e interação estratégica",
    },
    {
      id: 3,
      description: "Relatórios com indicadores de desempenho",
    },
  ];

  const performance = [
    { id: 0, description: "Criação de campanhas de performance" },
    { id: 1, description: "Segmentação inteligente do público" },
    { id: 2, description: "Testes A/B e otimização contínua" },
    { id: 3, description: "Relatórios com foco em ROI" },
  ];
  const desenvolvimento = [
    { id: 0, description: "Websites institucionais e landing pages" },
    { id: 1, description: "Lojas online com gateways de pagamento" },
    { id: 2, description: "Design responsivo e otimizado para SEO" },
    { id: 3, description: "Integrações com WhatsApp, CRM e IA" },
  ];
  const automacao = [
    { id: 0, description: "Chatbot 24/7 com API OpenAI" },
    { id: 1, description: "Integração com WhatsApp, Website e E-mail" },
    { id: 2, description: "Geração automática de conteúdo e relatórios" },
    { id: 3, description: "Qualificação de leads e CRM inteligente" },
  ];
  const identidadeVisual = [
    { id: 0, description: "Criação de logotipo e manuais de marca" },
    { id: 1, description: "Paleta de cores, tipografia e linguagem visual" },
    { id: 2, description: "Materiais de apresentação institucional" },
    { id: 3, description: "Embalagens e aplicações personalizadas" },
  ];

  return (
    <>
      <header className="relative z-10 flex">
        <div className="pt-2 flex items-center justify-between w-full">
          {/* Logo à esquerda */}
          <div>
            <img src={logo} alt="Logo" />
          </div>

          {/* Âncoras à direita */}
          <div className="flex gap-4 pr-[20px] text-[16px] font-semibold items-center">
            <a href="#" className="">
              Página inicial
            </a>
            <a href="#">Sobre</a>
            <a href="#">Serviços</a>
            <a href="#">Portfólio</a>
            <button className="bg-[#F5961E] text-[11px] text-white rounded-2xl p-2 border-[1px] border-black">
              <a href="#">Agendar Mentoria</a>
            </button>
          </div>
        </div>
      </header>

      {/* Banner no fundo */}
      <div>
        <div className="absolute top-0 left-0 w-full z-0">
          <img
            src={banner}
            alt="Banner"
            className="w-2/3 h-screen relative mb-20"
          />
          <div className="absolute top-[8%]">
            <h2
              className="leading-[100%] text-white font-bold text-[42px]
            w-1/2 px-16"
            >
              Transformamos marcas com qualidade, inovação e excelência <br />
              <span className="text-[40px] font-normal italic">
                em cada estratégia digital
              </span>
            </h2>
            <h4 className="pt-[34px] px-16 text-2xl leading-[100%] text-white">
              Soluções digitais para marcas que <br /> querem crescer com
              estratégia
            </h4>

            <button className="bg-[#F5961E] border-b-[6px] border-[#FFFFFF99] rounded-3xl p-3 mx-16 mt-[35px]">
              <a href="#" className="text-white text-[20px] font-semibold">
                Agendar Mentoria
              </a>
            </button>
          </div>
          <div className="relative bg-white">
            <div className="absolute inset-0 bg-[url('../assets/noise.png')] opacity-10 pointer-events-none mix-blend-multiply"></div>
            <div className="relative z-10">
              <div className="text-center">
                <h2 className="text-4xl font-bold  text-[#FF7700]">
                  Por que confiar na Clou Business
                </h2>
              </div>
              <div className="flex justify-center items-center px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center py-16 max-w-6xl w-full">
                  <div className="flex justify-center">
                    <h5 className="flex flex-wrap items-center justify-center bg-[#f0f0f0]  font-bold rounded-3xl w-[320px] h-[100px]">
                      <img
                        src={pessoaEstrela}
                        alt=""
                        className="w-[100px] h-[100px] -ml-2"
                      />
                      <p>
                        <span className="text-[#FF7700]">+100 </span>
                        <span>Clientes atendidos</span>
                      </p>
                    </h5>
                  </div>

                  <div className="flex justify-center ">
                    <h5 className="flex items-center justify-center bg-[#f0f0f0]  font-bold rounded-3xl w-[320px] h-[100px] gap-2">
                      <img
                        src={prancheta}
                        alt=""
                        className="w-[100px] h-[100px] -ml-2 "
                      />
                      <p>
                        <span className="text-[#FF7700]">+200 </span>
                        <span>Projetos lançados</span>
                      </p>
                    </h5>
                  </div>

                  <div className="flex justify-center ">
                    <h5 className="flex items-center justify-center bg-[#f0f0f0]  font-bold rounded-3xl w-[320px] h-[100px] gap-2">
                      <img
                        src={tesoura}
                        alt=""
                        className="w-[100px] h-[100px] -ml-2"
                      />
                      <p className="">
                        <span className="text-[#FF7700]">+2 </span>
                        <span>Anos de experiência</span>
                      </p>
                    </h5>
                  </div>

                  <div className="flex justify-center ">
                    <h5 className="flex items-center justify-center bg-[#f0f0f0]  font-bold rounded-3xl w-[320px] h-[100px] gap-2">
                      <img
                        src={maoSubindo}
                        alt=""
                        className="w-[100px] h-[100px] ml-5 "
                      />
                      <p className="">
                        <span className="text-[#FF7700]">
                          +1.300.000.000 Kz{" "}
                        </span>
                        <span>em resultados gerados</span>
                      </p>
                    </h5>
                  </div>
                </div>
              </div>

              <div className="w-1/2 h-[8px] bg-[#FF7700] mt-10 mx-auto "></div>

              <div className="text-center">
                <h2 className="text-[32px] leading-[100%] py-10">
                  O que dizem sobre nós
                </h2>
              </div>

              <div className="relative w-full flex justify-center items-center mb-[160px]">
                <div className="absolute left-0 -bottom-[160px]">
                  <img src={lateral} alt="" />
                </div>
                <div
                  className="border border-[#FF7700] w-[800px] h-[400px] rounded-[91px]"
                  style={{ boxShadow: "0 30px 5px #FF7700" }}
                ></div>
              </div>

              <section className="h-fit w-full bg-[#FF7700] flex relative overflow-hidden">
                <div className="w-fit h-[1100px] flex items-center bg-white">
                  <img src={gente} alt="" className="w-[500px]" />
                  <img
                    src={elipse}
                    alt=""
                    className="absolute left-0 bottom-0 "
                  />
                </div>

                <div className=" w-full flex flex-col  text-white ">
                  <h2 className="text-[32px] mb-6 pt-10 pl-10">
                    <span className="font-bold border-b-4 border-white pb-1 ">
                      Nossa História
                    </span>
                    - O início de algo inovador
                  </h2>

                  <div className=" flex flex-col h-fit gap-20 space-x-40 w-full text-left pl-10 text-[22px] font-light">
                    <div className="leading-10">
                      <p>
                        Era uma vez dois jovens com sonhos grandes demais para
                        caberem nas salas de aula.{" "}
                        <span className="font-bold">Maurício Marketing</span> e{" "}
                        <span className="font-bold">Elmano Milionário</span>{" "}
                        cruzaram caminhos nos corredores da Universidade Óscar
                        Ribas — não como simples colegas de curso, mas como
                        inquietos observadores do mundo à sua volta. Enquanto
                        muitos viam marcas esquecidas nas redes sociais, eles
                        enxergavam{" "}
                        <span className="font-bold">
                          potenciais adormecidos
                        </span>
                        . Onde outros viam estagnação, eles viam oportunidade.
                      </p>
                    </div>

                    <div className="leading-10">
                      <p>
                        Foi ali, entre apresentações académicas, cafés rápidos e
                        discussões apaixonadas sobre branding e futuro digital,
                        que nasceu a semente da{" "}
                        <span className="font-bold">Clou Business</span>. Uma
                        agência que nunca quis ser só mais uma — mas sim,{" "}
                        <span className="font-bold">
                          a ponte entre marcas invisíveis e a sua presença
                          global
                        </span>
                        .
                      </p>
                    </div>
                    <div className="flex justify-between gap-5">
                      <Cards
                        title="Missão"
                        text="Ajudar marcas a se posicionarem, venderem mais e escalarem com
            inteligência, usando a criatividade como ponte e a tecnologia como
            motor."
                      />
                      <Cards
                        title="Visão"
                        text=" Mais do que vender serviços,
                                gerar  transformação.
                                Trabalhar com marcas que  
                                desejam crescer com consistência,
                                propósito  e inovação. Unindo 
                                qualidade, inovação e 
                                excelência em cada entrega."
                      />
                      <Cards
                        title="Valores"
                        text="Qualidade, Inovação e Excelência"
                      />
                    </div>

                    <div className="">
                      <img
                        src={elementoBranco}
                        alt=""
                        className="absolute -bottom-30 left-62  "
                      />
                      <img
                        src={frame14}
                        alt=""
                        className="absolute top-260 left-150"
                      />
                      <img
                        src={elipseCirco}
                        alt=""
                        className="absolute top-255 right-10"
                      />
                    </div>
                  </div>
                </div>
              </section>
              <section className="mb-[100px] relative">
                <div>
                  <img
                    src={vetor9}
                    alt=""
                    className="absolute bottom-0 right-0 z-[-1]"
                  />
                </div>
                <div className="pl-[126px] pt-20 pb-10">
                  <h2 className="font-bold text-[36px] text-[#FF7700]">
                    Transformamos ideias em resultados concretos. <br /> Confira
                    os nossos principais serviços
                  </h2>
                </div>

                <div className="flex gap-32">
                  <div
                    className="flex gap-10 ml-28  w-fit rounded-[70px] p-10 px-5 bg-[#FAFAFA]"
                    style={{ boxShadow: "0 0 5px #00000040" }}
                  >
                    <div className="flex flex-col items-center">
                      <img
                        src={redes}
                        alt=""
                        className="bg-[#FF770024] w-[130px] h-[130px] rounded-[50%] "
                      />
                      <h4 className="font-extrabold text-[14px] text-[#FF7700] py-[19px]">
                        Gestão de redes sociais
                      </h4>
                      <ul className="list-disc pl-5 ">
                        {redesArr.map((item) => (
                          <li key={item.id}>{item.description}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col items-center">
                      <img
                        src={trafego}
                        alt=""
                        className="bg-[#FF770024] w-[130px] h-[130px] rounded-[50%] pt-5"
                      />
                      <h4 className="font-extrabold text-[14px] text-[#FF7700] py-[19px]">
                        Tráfego Pago (Google & Meta Ads)
                      </h4>

                      <ul className="list-disc pl-5">
                        {performance.map((item) => (
                          <li key={item.id}>{item.description}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div
                      className="flex flex-col items-center rounded-[70px] p-10 bg-[#FAFAFA]"
                      style={{ boxShadow: "0 0 5px #00000040" }}
                    >
                      <img
                        src={devIcon}
                        alt=""
                        className="bg-[#FF770024] w-[130px] h-[130px] rounded-[50%] pt-5"
                      />
                      <h4 className="font-extrabold text-[14px] text-[#FF7700] py-[19px]">
                        Desenvolvimento Web & Loja Virtual
                      </h4>

                      <ul className="list-disc pl-5 space-y-2">
                        {desenvolvimento.map((item) => (
                          <li key={item.id}>{item.description}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex h-fit ">
                  <div className="w-[291px] h-full ml-28 pt-[27px]">
                    <div
                      className="flex flex-col items-center rounded-[70px] p-7 bg-[#FAFAFA]"
                      style={{ boxShadow: "0 0 5px #00000040" }}
                    >
                      <img
                        src={iaIcon}
                        alt=""
                        className="bg-[#FF770024] w-[130px] h-[130px] rounded-[50%] pt-5"
                      />
                      <h4 className="font-extrabold text-[14px] text-[#FF7700] py-[19px]">
                        IA & Automação <br />
                        Empresarial (Projeto BrAIn):
                      </h4>

                      <ul className="list-disc pl-5">
                        {automacao.map((item) => (
                          <li key={item.id}>{item.description}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="w-[300px] h-full ml-28 pt-[27px]">
                    <div
                      className="flex flex-col items-center rounded-[70px] p-10 bg-[#FAFAFA]"
                      style={{ boxShadow: "0 0 5px #00000040" }}
                    >
                      <img
                        src={brandingIcon}
                        alt=""
                        className="bg-[#FF770024] w-[130px] h-[130px] rounded-[50%] pt-5"
                      />
                      <h4 className="font-extrabold text-[14px] text-[#FF7700] py-[19px]">
                        Identidade Visual & Branding
                      </h4>

                      <ul className="list-disc pl-5">
                        {identidadeVisual.map((item) => (
                          <li key={item.id}>{item.description}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
              <section className="pb-16">
                <div>
                  <p className="text-center font-bold text-[48px] text-[#FF7700] pb-10">
                    Precisa de uma consultoria gratuita?
                  </p>
                </div>

                <div>
                  <form className="pl-20">
                    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-y-6 gap-x-8 items-center">
                      <label className="font-bold text-black">
                        Nome Completo
                      </label>
                      <input
                        type="text"
                        className="bg-[#FFE2C7] rounded-xl p-4 outline-none w-1/2"
                        placeholder="Digite seu nome"
                      />

                      <label className="font-bold text-black">E-mail</label>
                      <input
                        type="email"
                        className="bg-[#FFE2C7] rounded-xl p-4 outline-none w-1/2 "
                        placeholder="Digite seu e-mail"
                      />

                      <label className="font-bold text-black">Whatsapp</label>
                      <input
                        type="tel"
                        className="bg-[#FFE2C7] rounded-xl p-4 outline-none w-1/2 "
                        placeholder="(XX) XXXXX-XXXX"
                      />

                      <label className="font-bold text-black">
                        Nome da Empresa
                      </label>
                      <input
                        type="text"
                        className="bg-[#FFE2C7] rounded-xl p-4 outline-none w-1/2 "
                        placeholder="Digite o nome da empresa"
                      />

                      <label className="font-bold text-black leading-5">
                        Descreva a sua <br />
                        Maior Dificuldade
                      </label>
                      <textarea
                        rows="4"
                        className="bg-[#FFE2C7] rounded-xl p-4 outline-none w-1/2 "
                        placeholder="Escreva aqui..."
                      />
                    </div>
                  </form>
                </div>
              </section>
              <footer className="bg-[#FF7700]">
                <div className="flex items-center">
                  <div className="p-5">
                  <img
                    src={logotipo}
                    alt=""
                    className="w-[150px] h-[150px] bg-white rounded-[50px]"
                  />
                </div>
                <div className="flex w-full gap-100">
                  <div className=" w-[300px] h-[300px]">
                  <p className="text-[20px] font-bold leading-[100%] text-[#FFFFFF] py-20">
                    Clou Business - Prestação de Serviços, Lda <br />
                    📍Rua S8, Talatona - Luanda <br />
                     +244 976196461
                    comercial@cloubusiness.co.ao Atendimento: Segunda à Sexta,
                    das 08h00 às 18h00
                  </p>
                </div>
                <div className=" w-[300px] h-[300px]">
                  <p className="text-[20px] font-bold leading-[100%] text-[#FFFFFF] pt-20">
                    Navegação rápida
                  </p>
                  <ul className="list-disc pl-5 text-[#FFFFFF] ">
                    <li className="hover:text-black cursor-pointer pt-2"><a href="#">Sobre nós</a></li>
                    <li className="hover:text-black cursor-pointer"><a href=""></a>Serviços</li>
                    <li className="hover:text-black cursor-pointer"><a href=""></a>Mentoria Gratuita</li>
                    <li className="hover:text-black cursor-pointer"><a href=""></a>Fale Conosco(ChatBot)</li>
                  </ul>
                </div>
                </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-[148px] relative mr-20">
        <img
          src={bgOrange}
          alt=""
          className="absolute z-[-1] top-25 right-8 "
        />
        <img src={tecnologia} alt="" className=" absolute top-20" />
      </div>
      <div className="absolute right-120 bottom-5">
        <Carousel />
      </div>
      <div>
        <ChatBot/>
      </div>
    </>
  );
};

export default Home;
