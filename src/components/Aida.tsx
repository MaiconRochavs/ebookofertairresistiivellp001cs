import { CheckCircle } from 'lucide-react';
import React from 'react';

const Aida = () => {
  const desireBullets = [
    <>Como transformar o seu produto atual em uma <strong className="font-semibold text-secondary-800">proposta impossível de ignorar</strong> — mesmo que ele pareça comum hoje</>,
    <>Como usar o princípio do "valor empacotado" para fazer qualquer produto <strong className="font-semibold text-secondary-800">parecer valer 10x mais</strong> do que custa</>,
    <>As <strong className="font-semibold text-secondary-800">4 perguntas invisíveis</strong> que todo comprador responde antes de dizer "sim" — e como moldar sua oferta para antecipá-las</>,
    <>Como montar bônus que não apenas adicionam valor, mas <strong className="font-semibold text-secondary-800">justificam o preço com lógica irresistível</strong></>,
    <>Como empacotar sua proposta de forma estratégica — fazendo o cliente <strong className="font-semibold text-secondary-800">enxergar R$ 10.000 de valor</strong> em algo de R$ 297</>,
    <>Como criar uma oferta que <strong className="font-semibold text-secondary-800">transforma desejo em decisão</strong>, combinando escassez, urgência e lógica real</>,
    <>Como posicionar sua oferta como <strong className="font-semibold text-secondary-800">uma decisão inteligente</strong> — que o cliente sente orgulho de tomar</>,
    <>Como fazer o cliente enxergar que o <strong className="font-semibold text-secondary-800">custo de não comprar é maior</strong> do que o preço da sua solução</>,
    <>Como <strong className="font-semibold text-secondary-800">eliminar o "vou pensar"</strong> com um modelo mental que derrete dúvidas e ativa decisão imediata</>,
    <>Como criar bônus que <strong className="font-semibold text-secondary-800">quebram objeções antes mesmo delas aparecerem</strong> — de forma natural e estratégica</>,
    <>Como usar gatilhos de autoridade e clareza sem soar vendedor — e ainda assim <strong className="font-semibold text-secondary-800">converter em alta escala</strong></>,
    <>Como aplicar um framework que <strong className="font-semibold text-secondary-800">transforma curiosos em compradores conscientes</strong>, mesmo que você tenha pouca audiência ou não goste de vender</>,
  ];

  return (
    <section id="aida" className="bg-white">
      <div className="container-custom section-padding">
        <div className="max-w-5xl mx-auto">
          {/* Atenção */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-secondary-800 leading-tight">
              Você Não Precisa de Mais Tráfego. <span className="block mt-2">Precisa de Uma <span className="gradient-text">Oferta Que Ninguém Consiga Ignorar.</span></span>
            </h2>
          </div>

          {/* Interesse */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <p className="text-xl text-gray-600 leading-relaxed">
              Você pode ter o melhor produto do mundo. Mas se a sua oferta não fizer o cliente sentir que está perdendo algo valioso, ele vai simplesmente... ignorar.
            </p>
            <p className="text-xl text-gray-700 font-medium">
              A maioria dos negócios não falha por falta de entrega. Eles falham porque as pessoas não conseguem entender o valor antes de clicar em 'comprar'.
            </p>
          </div>

          {/* Desejo */}
          <div className="mb-16 max-w-3xl mx-auto">
            <ul className="space-y-6">
              {desireBullets.map((bullet, index) => (
                <li key={index} className="flex items-start space-x-4">
                  <CheckCircle className="w-7 h-7 text-green-600 shrink-0 mt-1" />
                  <span className="text-xl text-secondary-700">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ação */}
          <div className="text-center bg-secondary-50 p-8 md:p-12 rounded-xl shadow-inner border border-gray-200">
            <blockquote className="text-2xl md:text-3xl font-bold text-secondary-800 leading-snug">
              "Este livro não ensina a vender. <br />
              Ele ensina a fazer o cliente <span className="gradient-text">pedir para comprar.</span> <br />
              Se você quer parar de convencer e começar a atrair decisões espontâneas, esse livro precisa estar nas suas mãos hoje."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aida; 