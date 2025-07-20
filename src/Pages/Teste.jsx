import gente from "../assets/gente.png";
import pessoaEstrela from "../assets/iconClientes.png";
import tesoura from "../assets/iconeAbertura.png";
import maoSubindo from "../assets/iconeResultados.png";
import prancheta from "../assets/iconProjetos.png";
import logo from "../assets/logo.png";
import banner from "../assets/Vector3.png";
import tecnologia from "../assets/Vector4.png";
import bgOrange from "../assets/Vector5.png";
import lateral from "../assets/Vector6.png";
import Carousel from "../Components/Carousel";

const Teste = () => {
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
          <div className="absolute top-[10%]">
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

              <div className="h-screen bg-[#FF7700] w-full flex">
                {/* Coluna da imagem lateral */}
                <div className="w-[30%] flex items-center justify-center bg-white">
                  <img src={gente} alt="" className="w-[300px]" />
                </div>

                <div className=" w-full flex flex-col px-10 text-white">
                  <h2 className="text-[32px] mb-6 pt-10 pl-10">
                    <span className="font-bold border-b-4 border-white pb-1 ">
                      Nossa História
                    </span>{" "}
                    - O início de algo inovador
                  </h2>

                  <div className=" flex flex-col h-screen gap-20 space-x-40 w-full text-left pl-10 ">
                    <div>
                      <p>
                        Era uma vez dois jovens com sonhos grandes demais para
                        caberem nas salas de aula. Maurício Marketing e Elmano
                        Milionário cruzaram caminhos nos corredores da
                        Universidade Óscar Ribas — não como simples colegas de
                        curso, mas como inquietos observadores do mundo à sua
                        volta. Enquanto muitos viam marcas esquecidas nas redes
                        sociais, eles enxergavam potenciais adormecidos. Onde
                        outros viam estagnação, eles viam oportunidade.
                      </p>
                    </div>

                    <div>
                      <p>
                        Foi ali, entre apresentações académicas, cafés rápidos e
                        discussões apaixonadas sobre branding e futuro digital,
                        que nasceu a semente da Clou Business. Uma agência que
                        nunca quis ser só mais uma — mas sim, a ponte entre
                        marcas invisíveis e a sua presença global.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-[148px] relative mr-20">
        <img src={bgOrange} alt="" className="absolute z-[-1] top-25 right-8" />
        <img src={tecnologia} alt="" className=" absolute top-20" />
      </div>
      <div className="absolute right-120 bottom-5">
        <Carousel />
      </div>
    </>
  );
};

export default Teste;
