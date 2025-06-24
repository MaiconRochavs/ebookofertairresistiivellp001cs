'use client'

import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-20 bg-gradient-to-br from-primary-50 via-white to-purple-50">
      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-secondary-800">
            Transforme Qualquer Produto em uma <span className="gradient-text">Máquina de Vendas</span> com 1 Único Ajuste: A Oferta.
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Aprenda a construir ofertas tão boas que o 'sim' se torna a única resposta lógica - Como Criar Ofertas Tão Boas que Deixam as Pessoas Sem Opção a Não Ser Comprar de Você.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="#offer" className="btn-primary inline-flex items-center justify-center text-lg py-4 px-12">
              Quero Minha Oferta Irresistível
              <ArrowRight className="w-6 h-6 ml-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 