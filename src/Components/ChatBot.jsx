import { useState } from "react";

import iconeChat from "../assets/iconeChat.png";

const ChatBot = () => {
  const [isVisible, setIsVisible] = useState(false); // controla a montagem do chat
  const [isOpen, setIsOpen] = useState(false); // controla animação
  const [step, setStep] = useState("welcome");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: `Olá! 👋 Sou o BrAIn, o assistente inteligente da Clou Business.\nPosso te ajudar com:\n1️⃣ Conhecer nossos serviços\n2️⃣ Agendar uma mentoria gratuita\n3️⃣ Falar com um consultor\n4️⃣ Suporte técnico ou dúvidas\n\nDigite o número da opção ou escreva sua pergunta 💬`,
    },
  ]);

  // Função para abrir com animação suave
  const openChat = () => {
    setIsVisible(true);
    setTimeout(() => setIsOpen(true), 10); // atraso para iniciar transição
  };

  // Função para fechar suavemente
  const closeChat = () => {
    setIsOpen(false);
    setTimeout(() => setIsVisible(false), 300); // espera a animação antes de desmontar
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { from: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    processInput(input.trim());
    setInput("");
  };

  const processInput = (input) => {
    const lower = input.toLowerCase();

    switch (step) {
      case "welcome":
        if (["1", "serviços", "servico", "conhecer"].includes(lower)) {
          sendBotMessage(
            `Nós ajudamos empresas a crescer com estratégias inteligentes e soluções digitais completas.\nOferecemos:\n• Gestão de Redes Sociais\n• Tráfego Pago (Google, Meta)\n• Desenvolvimento de Website e Lojas Virtuais\n• Identidade Visual & Branding\n• IA & Automação (Projeto BrAIn)\n\nDeseja saber mais sobre algum serviço específico?\nDigite o nome ou número da opção.`
          );
          setStep("servicos");
        } else if (["2", "mentoria"].includes(lower)) {
          sendBotMessage(
            `✨ Que bom! A mentoria gratuita é um benefício exclusivo para quem deseja clareza estratégica antes de investir no digital.\n\n💡 Para agendar sua sessão, preciso de algumas informações rápidas:\n- Qual é o seu nome completo?\n- E-mail corporativo:\n- WhatsApp:\n- Nome da empresa:\n- Qual seu maior desafio hoje?\n- Deseja agendar para esta semana ou próxima?\n\nAssim que concluir, nossa equipe enviará o link de confirmação no seu WhatsApp ou email. 📱`
          );
          setStep("mentoria");
        } else if (["3", "consultor"].includes(lower)) {
          sendBotMessage(
            `🤝 Sem problema! Um dos nossos especialistas vai te atender em instantes.\nEnquanto isso, você gostaria de adiantar alguma informação?\n- Nome\n- Empresa\n- Serviço de interesse\n\n⚡ Se for urgente, clique aqui para atendimento imediato via WhatsApp:\n[Falar com consultor agora: wa.me/244976196461]`
          );
          setStep("consultor");
        } else if (["4", "suporte"].includes(lower)) {
          sendBotMessage(
            `🛠️ Você precisa de ajuda com algum serviço ativo?\n1️⃣ Acesso à área do cliente\n2️⃣ Status de projeto\n3️⃣ Relatórios ou entregas\n4️⃣ Outro\n\nDigite a opção ou escreva sua dúvida e eu tentarei te ajudar ou encaminhar ao responsável.\n\n© 2025 Clou Business – Todos os direitos reservados`
          );
          setStep("suporte");
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
      `Desculpa, ainda estou aprendendo a lidar com esse tipo de pergunta.\nMas posso te ajudar com:\n1️⃣ Conhecer serviços\n2️⃣ Agendar mentoria\n3️⃣ Falar com consultor\n4️⃣ Suporte técnico\n\nOu, se preferir, fale direto com nossa equipe aqui:\n[WhatsApp: wa.me/244976196461]`
    );
    setStep("welcome");
  };

  const sendBotMessage = (text) => {
    setMessages((prev) => [...prev, { from: "bot", text }]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Ícone de ativar o chat */}
      {!isVisible && (
        <img
          src={iconeChat}
          alt="Ícone do Chat"
          className="w-[100px] h-[100px] cursor-pointer"
          onClick={openChat}
        />
      )}

      {/* Chatbox com transição suave */}
      {isVisible && (
        <div
          className={`w-[350px] bg-white rounded-[20px] shadow-lg border border-gray-200 overflow-hidden
          transform transition-all duration-300 ease-in-out
          ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#FF7700] to-white text-white flex items-center p-3 gap-2">
            <img src={iconeChat} alt="Ícone" className="w-10 h-10" />
            <span className="font-bold">BrAIn-</span>
            <span className="text-sm">Chat Bot</span>
            <button
              className="ml-auto text-black font-bold"
              onClick={closeChat}
            >
              X
            </button>
          </div>

          {/* Mensagens */}
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

          {/* Input */}
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
