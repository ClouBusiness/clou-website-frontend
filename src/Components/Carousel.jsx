import "swiper/css";
import "swiper/css/effect-cards";
import { Autoplay, EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import brandingIcon from "../assets/branding.png";
import devIcon from "../assets/dev.png";
import iaIcon from "../assets/ia.png";
import redes from "../assets/redessociais1.png";
import trafego from "../assets/trafego.png";

const Carousel = () => {
  const cards = [
    {
      id: 1,
      image: redes,
      title: "Gestão de redes sociais",
      subtitle:
        "Posicionamos sua marca com conteúdo  estratégico, visual atrativo",
    },
    {
      id: 2,
      image: trafego,
      title: "Tráfego pago",
      subtitle:
        "Campanhas que não desperdiçam cliques. Alcançamos quem está pronto para comprar",
    },
    {
      id: 3,
      image: devIcon,
      title: "Desenvolvimento web",
      subtitle:
        "Desenvolvemos websites e lojas virtuais que  comunicam, vendem e posicionam",
    },
    {
      id: 4,
      image: iaIcon,
      title: "IA & Automação empresarial",
      subtitle:
        "Automatize atendimento, geração de leads,  criação de conteúdo e muito mais.",
    },
    {
      id: 5,
      image: brandingIcon,
      title: "Identidade Visual & Branding",
      subtitle:
        "Criamos identidades visuais memoráveis que  expressam a alma da sua marca",
    },
  ];
  return (
    <>
      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards, Autoplay]}
        autoplay={{ delay: 3000 }}
        className="w-[322px] h-[343] rounded-[74px]"
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id} className="rounded-3xl ">
            <div className="bg-white text-center p-3 rounded-3xl h-full flex flex-col items-center justify-center">
              <img src={card.image} alt="" className="w-[100px]" />
              <p className="text-[#FF7700] font-extrabold text-[20px]">
                {card.title}
              </p>
              <p className="text-center pt-2  text-black text-[18px]">
                {card.subtitle}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
