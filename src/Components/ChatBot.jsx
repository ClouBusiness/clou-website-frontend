import { useState } from "react";
import iconechat from "../assets/iconechat.png";

const ChatBot = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState("welcome");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text:
        "Olá, seja bem-vindo(a) à Clou Business, sua parceira estratégica em marketing digital!\n\nComo podemos ajudar você hoje?\n\n1️⃣ Quero melhorar o marketing da minha empresa\n2️⃣ Desejo saber mais sobre a inteligência artificial\n3️⃣ Preciso de um site profissional\n4️⃣ Falar com um especialista\n5️⃣ Agendar uma consultoria gratuita",
    },
  ]);
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState({});

  const openChat = () => {
    setIsVisible(true);
    setTimeout(() => setIsOpen(true), 10);
  };

  const closeChat = () => {
    setIsOpen(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { from: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    processInput(input.trim().toLowerCase());
    setInput("");
  };

  const processInput = (input) => {
    const contains = (keywords) => keywords.some((kw) => input.includes(kw));

    if (step === "orcamentoMarketing") {
      const perguntas = [
        "1. Qual o ramo da sua empresa?",
        "2. Você tem redes sociais ativas? (Sim / Não)",
        "3. Qual é o seu principal objetivo com o marketing?",
        "4. Você busca mais clientes, mais visibilidade ou melhorar a imagem da marca?",
      ];

      const respostas = ["ramo", "redes", "objetivo", "meta"];
      const chave = respostas[formStep];
      setFormData((prev) => ({ ...prev, [chave]: input }));

      if (formStep < perguntas.length - 1) {
        setTimeout(() => {
          sendBotMessage(perguntas[formStep + 1]);
          setFormStep(formStep + 1);
        }, 300);
      } else {
        sendBotMessage(
          "Obrigado! Em instantes, um dos nossos especialistas entrará em contato com uma proposta personalizada."
        );
        setStep("finalizado");
        setFormStep(0);
        setFormData({});
      }
      return;
    }

    if (contains(["preço", "valores", "planos"])) {
      sendBotMessage(
        "Nossos serviços são personalizados, mas temos planos a partir de:\n• Gestão de redes: 150.000 Kz/mês\n• Sites: 550.000 Kz\n• BrAIn IA: desde 1.200.000 Kz (licença + setup)\n\nDeseja receber um orçamento?"
      );
      return;
    }

    if (contains(["portfólio", "exemplos", "cases"])) {
      sendBotMessage("Veja alguns dos nossos trabalhos: [🔗 Link do portfólio]");
      return;
    }

    if (contains(["humano", "atendimento", "consultor"])) {
      sendBotMessage("👤 Sem problemas! Estamos te transferindo para um atendente humano.");
      return;
    }

    switch (step) {
      case "welcome":
        if (input === "1") {
          sendBotMessage(
            "Ótimo! Nós ajudamos empresas como a sua com:\n• Gestão de redes sociais\n• Tráfego pago (Facebook e Google Ads)\n• Identidade visual e branding\n\nDeseja:\n1️⃣ Conversar com consultor\n2️⃣ Receber orçamento rápido"
          );
          setStep("marketing");
        } else if (input === "2") {
          sendBotMessage(
            "Perfeito! Desenvolvemos o BrAIn, nossa IA que:\n• Atende clientes 24h/dia\n• Gera relatórios inteligentes\n• Organiza leads e vendas\n\nQuer:\n1️⃣ Testar gratuitamente por 30 dias\n2️⃣ Saber mais sobre o sistema"
          );
          setStep("ia");
        } else if (input === "3") {
          sendBotMessage(
            "Excelente! Criamos sites modernos e otimizados:\n\nQual tipo de site você precisa?\n1️⃣ Loja online\n2️⃣ Site institucional\n3️⃣ Página de vendas"
          );
          setStep("site");
        } else if (input === "4") {
          sendBotMessage(
            "Claro! Por favor, informe:\n1. Seu nome\n2. Nome da empresa\n3. Qual o serviço desejado?"
          );
          setStep("especialista");
        } else if (input === "5") {
          sendBotMessage(
            "Perfeito! Nossa consultoria gratuita dura 20 minutos via Zoom ou WhatsApp.\nEscolha o melhor dia e horário: [📅 Link Calendly ou formulário]"
          );
          setStep("consultoria");
        } else {
          fallback();
        }
        break;
      case "marketing":
        if (input === "1") {
          sendBotMessage("✅ Encaminhando você para um consultor especializado...");
        } else if (input === "2") {
          sendBotMessage("Vamos iniciar um orçamento!");
          setTimeout(() => sendBotMessage("1. Qual o ramo da sua empresa?"), 300);
          setStep("orcamentoMarketing");
        } else {
          fallback();
        }
        break;
      case "ia":
        if (input === "1") {
          sendBotMessage("Por favor, informe:\n• Nome completo\n• E-mail\n• WhatsApp\n• Nome da empresa");
        } else if (input === "2") {
          sendBotMessage("Nossa IA integra CRM, funis e automações personalizadas. Quer marcar uma demo?");
        } else {
          fallback();
        }
        break;
      case "site":
        if (["1", "2", "3"].includes(input)) {
          sendBotMessage("Temos planos a partir de 550.000 Kz.\nDeseja:\n1️⃣ Ver portfólio\n2️⃣ Falar com consultor");
          setStep("siteOrcamento");
        } else {
          fallback();
        }
        break;
      case "siteOrcamento":
        if (input === "1") {
          sendBotMessage("🔗 Acesse nosso portfólio aqui: [link]");
        } else if (input === "2") {
          sendBotMessage("👤 Encaminhando você para um consultor especializado em sites...");
        } else {
          fallback();
        }
        break;
      default:
        fallback();
        break;
    }
  };

  const fallback = () => {
    sendBotMessage(
      "Desculpe, ainda estou aprendendo a lidar com esse tipo de pergunta.\nVocê pode tentar:\n1️⃣ Marketing\n2️⃣ IA\n3️⃣ Sites\n4️⃣ Falar com especialista\n5️⃣ Consultoria gratuita"
    );
    setStep("welcome");
  };

  const sendBotMessage = (text) => {
    setMessages((prev) => [...prev, { from: "bot", text }]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isVisible && (
        <img
          src={iconechat}
          alt="Ícone do Chat"
          className="w-[100px] h-[100px] cursor-pointer"
          onClick={openChat}
        />
      )}

      {isVisible && (
        <div
          className={`w-[350px] bg-white rounded-[20px] shadow-lg border border-gray-200 overflow-hidden
          transform transition-all duration-300 ease-in-out
          ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
        >
          <div className="bg-gradient-to-r from-[#FF7700] to-white text-white flex items-center p-3 gap-2">
            <img src={iconechat} alt="Ícone" className="w-10 h-10" />
            <span className="font-bold">BrAIn-</span>
            <span className="text-sm">Chat Bot</span>
            <button
              className="ml-auto text-black font-bold"
              onClick={closeChat}
            >
              X
            </button>
          </div>

          <div className="p-4 text-sm space-y-5 max-h-[400px] overflow-y-auto">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`px-4 py-3 rounded-xl leading-relaxed whitespace-pre-line ${
                  msg.from === "bot"
                    ? "bg-gray-100 text-left"
                    : "bg-blue-200 text-right self-end"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="p-3 border-t flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 border rounded-full px-3 py-2 text-sm"
              placeholder="Digite sua mensagem..."
            />
            <button
              onClick={handleSend}
              className="bg-orange-500 text-white px-4 py-2 rounded-full"
            >
              Enviar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
