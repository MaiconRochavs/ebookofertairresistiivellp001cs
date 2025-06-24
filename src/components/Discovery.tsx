import { CheckCircle, Star } from 'lucide-react';
import React from 'react';

const Discovery = () => {
  const discoveries = [
    "A maneira <b>MAIS FÁCIL</b> de atrair uma multidão sedenta de pessoas prontas para comprar o que você tem a oferecer. (domine esses segredos e você nunca mais terá que correr atrás de novos clientes).",
    "Por que a <b>'Oferta Irresistível'</b> é capaz de gerar mais clientes do que você é capaz de atender (os segredos e a psicologia por trás de cada um dos elementos).",
    "O <b>Verdadeiro Segredo</b> por trás da 'Oferta Irresistível' que dá a você carta branca para cobrar valores muito mais altos com margens muito maiores do que qualquer um dos seus concorrentes.",
    "A <b>estratégia secreta número 1</b> de um dos maiores Copywriters de todos os tempos para tornar qualquer concorrente irrelevante. (Não importa o mercado).",
    "As <b>4 objeções mais explosivas</b> de todas, capazes de arruinar qualquer tentativa de venda antes mesmo que a primeira palavra seja dita (Descubra como identificar, classificar e eliminar cada uma delas ).",
    "Como Gary Halbert usou essas técnicas para <b>gerar mais clientes do que era capaz de atender</b>… a ponto de uma das empresas que o contratou pedir para suspender todos os anúncios. ( O verdadeiro segredo e a psicologia por trás da estratégia mais explosiva de todas).",
    "O <b>segredo de Alex Hormozi</b> para eliminar objeções e transformar obstáculos em desejo ardente. (o método que trabalha as objeções de forma tão consistente que o cliente ou potencial cliente não vê outra alternativa a não ser pedir para comprar de você).",
    "As <b>4 perguntas que toda 'Oferta Irresistível' precisa responder</b> imediatamente, não importa o tipo de negócio.",
    "A <b>única coisa que você precisa saber</b> sobre Persuasão, Influência e Psicologia de Massa para escalar o seu negócio e gerar uma avalanche de novos pedidos. (domine isso e você será praticamente pago para atrair novos clientes)",
  ];

  const testimonial = {
    quote: "Comecei a ler com ceticismo, achando que seria mais um livro de copy. Mas percebi que estava lendo um manual estratégico real de vendas, direto ao ponto. Mudei a estrutura da minha proposta e vendi 3x mais em 7 dias.",
    author: "Fernando M.",
    role: "Consultor de Negócios",
    rating: 5
  };

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill={i < rating ? 'currentColor' : 'none'}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="discovery" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-800 leading-tight">
            Aqui está um pouco mais do que você vai descobrir com o livro Oferta Irresistível
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {discoveries.map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <CheckCircle className="w-7 h-7 text-green-600 shrink-0 mt-1" />
              <p 
                className="text-xl text-secondary-700"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            </div>
          ))}
          <p className="text-center text-xl font-bold text-secondary-800 pt-6">
            … e muito, MUITO Mais!
          </p>
        </div>

        <div className="mt-24">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 mr-3 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.author}</p>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex items-center mb-4 space-x-3">
                <StarRating rating={testimonial.rating} />
                <span className="text-gray-900 font-bold">{testimonial.rating.toFixed(1)} de 5 estrelas</span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4 italic">
                "{testimonial.quote}"
              </p>
              <div className="text-xs text-orange-600 font-semibold flex items-center">
                <CheckCircle className="w-4 h-4 mr-1.5" />
                Compra Verificada
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discovery; 