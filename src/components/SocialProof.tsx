'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle } from 'lucide-react';

// Componente para gerar avatares SVG minimalistas
const Avatar = ({ name, className }: { name: string, className?: string }) => {
  const initials = name.split(' ').map(n => n[0]).slice(0, 2).join('');
  const colors = ['#bfdbfe', '#dbeafe', '#eff6ff', '#93c5fd', '#60a5fa'];
  const color = colors[name.length % colors.length];

  return (
    <div className={`w-16 h-16 rounded-full flex items-center justify-center shrink-0 ${className}`} style={{ backgroundColor: color }}>
      <span className="text-2xl font-bold text-primary-800">{initials}</span>
    </div>
  );
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

const SocialProof = () => {
  const testimonials = [
    {
      name: 'Cristiane',
      role: 'Coach de Vida',
      quote: "Comecei a ler achando que seria mais uma promessa vazia. Mas o jeito que o livro explica a estrutura da oferta me fez perceber que eu nunca soube vender o que faço. Só de mudar o jeito que apresento minhas sessões, consegui 2 novas clientes esse mês. Isso já cobriu o investimento e me deu ânimo de continuar.",
      rating: 5,
    },
    {
      name: 'Marcelo',
      role: 'Consultor de TI para Pequenas Empresas',
      quote: "Li o livro sem compromisso. Fiquei na dúvida se funcionaria pra serviço técnico como o meu. Mas depois que ajustei minha proposta de apresentação com base em um dos capítulos, um cliente que estava 'pensando' decidiu fechar. Foi uma pequena vitória, mas real.",
      rating: 4,
    },
    {
      name: 'Débora',
      role: 'Nutricionista Funcional',
      quote: "Sempre tive dificuldade de fazer as pessoas entenderem o valor do meu acompanhamento. Depois do livro, reformulei minha proposta e comecei a oferecer pacotes em vez de consultas soltas. Não mudou minha vida da noite pro dia, mas pela primeira vez uma cliente falou 'faz total sentido'. Isso me deu confiança.",
      rating: 5,
    },
    {
      name: 'Henrique',
      role: 'Corretor de Imóveis',
      quote: "Achei que o livro era mais pra quem vende curso, mas algumas partes fizeram muito sentido. Usei as dicas pra descrever melhor um imóvel e consegui marcar mais visitas na última semana. Ainda estou aplicando aos poucos, mas já vi diferença.",
      rating: 3,
    },
    {
      name: 'Camila',
      role: 'Mentora de Carreira para Mulheres',
      quote: "Não vendi mais do que o normal, mas vendi com menos esforço. As pessoas chegaram mais prontas, dizendo 'quero isso que você falou'. Pra mim, só isso já valeu. Não mudou meus números ainda, mas mudou como eu comunico meu valor.",
      rating: 5,
    },
    {
      name: 'Rogério',
      role: 'Gestor de Tráfego',
      quote: "Tenho um serviço difícil de explicar e o livro me ajudou a criar uma proposta mais clara. Fechei um cliente que já me acompanhava há meses e nunca tinha dado sinal. Não foi milagre, foi clareza.",
      rating: 4,
    },
    {
      name: 'Isabela',
      role: 'Coach Financeira para Autônomos',
      quote: "Antes eu explicava demais e parecia confuso. Agora falo menos, mas com mais direção. Usei só um dos bônus e fechei duas sessões individuais em uma semana. Isso nunca tinha acontecido.",
      rating: 5,
    },
    {
      name: 'Victor',
      role: 'Designer Freelancer',
      quote: "Demorei pra aplicar porque achei complexo no início. Mas fui testando partes do jeito que dava. Só de mudar os títulos das minhas propostas no PDF já senti mais retorno. Ainda não ficou perfeito, mas melhorou.",
      rating: 3,
    },
  ];
  
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="social-proof" className="bg-secondary-50 py-20 sm:py-28 overflow-hidden">
      <div className="container-custom space-y-20">
        
        {/* Problema e Agitação */}
        <div className="max-w-4xl mx-auto text-center space-y-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-800">Você já tentou vender o que oferece de mil jeitos…</h2>
            <p className="mt-4 text-lg text-gray-600">Mudou o preço, mexeu na copy, fez stories, rodou anúncio… e mesmo assim:</p>
            <div className="mt-8 space-y-4 text-left max-w-md mx-auto text-lg">
              <p className="flex items-center"><span className="text-xl mr-3">📉</span> As vendas continuam tímidas.</p>
              <p className="flex items-center"><span className="text-xl mr-3">😩</span> As pessoas demonstram interesse, mas não compram.</p>
              <p className="flex items-center"><span className="text-xl mr-3">🧠</span> E você começa a duvidar do próprio valor.</p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <p className="text-2xl font-semibold text-secondary-800 leading-snug">
              O pior é ver gente com menos experiência e menos qualidade vendendo mais que você. A verdade é dura: não basta entregar transformação. Você precisa <span className="font-bold gradient-text">apresentar a transformação do jeito certo.</span>
            </p>
          </div>
        </div>

        {/* Solução (Prova Social com Carrossel) */}
        <div>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-secondary-800 leading-tight">
              Veja como pessoas comuns — <span className="gradient-text">como você</span> — mudaram o jogo:
            </h2>
            <p className="mt-4 text-lg md:text-xl text-gray-600">
              O livro <span className="font-semibold text-secondary-900">Oferta Irresistível</span> tem ajudado profissionais reais a corrigirem a rota.
            </p>
          </div>

          <div className="relative">
            <motion.div
              className="flex gap-8"
              animate={{ x: ['0%', '-100%'] }}
              transition={{ ease: 'linear', duration: 30, repeat: Infinity }}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm w-[380px] shrink-0">
                  <div className="flex items-center mb-3">
                    <Avatar name={testimonial.name} className="w-10 h-10" />
                    <div className="ml-3">
                      <p className="font-semibold text-gray-800">{testimonial.name}</p>
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
            </motion.div>
            <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-secondary-50 to-transparent"></div>
            <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-secondary-50 to-transparent"></div>
          </div>
        </div>

        {/* Fechamento com Ação */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
           <p className="text-xl text-secondary-700 font-medium">Essas pessoas não criaram um novo produto. Elas reformularam o valor do que já faziam — e começaram a colher resultados.</p>
           <p className="text-xl text-secondary-700 font-medium">Você pode continuar tentando consertar o que está fora, ou pode acertar onde realmente faz diferença na forma como apresenta sua oferta.</p>
           <p className="text-xl text-secondary-700 font-medium">O livro <span className="font-semibold text-secondary-900">Oferta Irresistível</span> te mostra como fazer isso. Passo a passo. Aplicável no mesmo dia.</p>
           <p className="mt-8 font-bold text-2xl tracking-wide">Leia. Aplique. Sinta a diferença.</p>
        </div>
      </div>
    </section>
  );
};

export default SocialProof; 