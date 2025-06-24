import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

const testimonialsData = [
  {
    author: "Camila V.",
    role: "Nutricionista Clínica",
    quote: "Eu achava que precisava explicar tudo sobre nutrição para o cliente entender meu valor. O livro me mostrou que clareza na oferta é mais poderosa que detalhes técnicos. Hoje, vendo pacotes completos com mais facilidade e menos resistência.",
    rating: 5
  },
  {
    author: "Rafael A.",
    role: "Corretor de Imóveis",
    quote: "Sempre ouvi que imóvel 'se vende sozinho', mas meus resultados diziam o contrário. Depois do livro, passei a apresentar os imóveis como soluções personalizadas, com foco emocional e estratégico. Resultado? Mais visitas e propostas fechadas com menos esforço.",
    rating: 5
  },
  {
    author: "Lorena S.",
    role: "Coach de Carreira",
    quote: "Eu oferecia sessões avulsas e vivia negociando preço. Com o que aprendi no Oferta Irresistível, reformulei minha entrega em um programa de transformação com início, meio e fim. As pessoas agora dizem sim com convicção — sem pechinchar.",
    rating: 4.5
  },
  {
    author: "Bruno D.",
    role: "Infoprodutor / Especialista em Finanças",
    quote: "Antes, meu produto era bom, mas ninguém comprava. Com o livro, percebi que o problema era a oferta mal construída. Ajustei a copy, reposicionei a promessa e transformei minha página de vendas. Resultado? Vendi em 2 dias o que antes levava um mês.",
    rating: 5
  },
  {
    author: "Tânia M.",
    role: "Psicóloga e Mentora de Mulheres",
    quote: "Eu sempre tive dificuldade em cobrar pelo que faço. O livro não só me deu argumentos de valor, mas me ajudou a entender que quando você apresenta sua transformação com clareza, o cliente sente segurança. Isso mudou tudo pra mim.",
    rating: 5
  },
  {
    author: "Eduardo C.",
    role: "Consultor Empresarial",
    quote: "Achava que eu precisava ser mais persuasivo. O livro me mostrou que não é sobre 'convencer', é sobre 'clarear' a proposta. Agora as pessoas entendem o valor antes mesmo da reunião começar — e me procuram com decisão.",
    rating: 4.5
  },
  {
    author: "Vanessa F.",
    role: "Personal Trainer e Criadora de Programa Online",
    quote: "Depois de aplicar a estrutura do livro, parei de vender treino avulso e passei a vender transformação. Minha comunicação mudou, meu posicionamento mudou… e minhas vendas também. Esse livro me fez enxergar o negócio com outros olhos.",
    rating: 5
  }
];

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

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">O Que Leitores Satisfeitos Estão Dizendo</h2>
        <div className="space-y-6">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center mb-3">
                {/* Placeholder for an avatar, adds to the realism */}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 