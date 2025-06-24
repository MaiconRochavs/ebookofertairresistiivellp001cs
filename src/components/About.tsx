'use client'

import { BookOpen, Award, Users } from 'lucide-react'
import Image from 'next/image'

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          
          {/* Imagem do Autor */}
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative w-full max-w-sm">
              <Image
                src="/avatars/maicon-rocha.jpg"
                alt="Foto de Maicon Rocha"
                width={400}
                height={500}
                className="rounded-2xl object-cover shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary-500 text-white p-4 rounded-xl shadow-lg">
                <BookOpen className="w-10 h-10" />
              </div>
            </div>
          </div>

          {/* Conteúdo Sobre o Autor */}
          <div className="lg:col-span-3">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-800 leading-tight mb-8">
              <span className="mr-3"></span> Quem é <span className="gradient-text">Maicon Rocha?</span>
            </h2>
            
            <div className="space-y-6 text-lg text-secondary-700 leading-relaxed">
              <p className="text-xl font-medium text-secondary-800">
                Antes de descobrir o que fazia uma oferta realmente vender, eu escrevi 11 livros que quase ninguém leu.
              </p>
              <p>
                Eu tentava de tudo: estudava copy, ajustava a capa, reescrevia a descrição. Mas no fundo… sentia que ainda não estavam entendendo o valor do que eu oferecia.
              </p>
              <p>
                Foi só em 2021, depois de entrar na mentoria com o <span className="font-semibold">Jim Edwards</span> — um dos maiores especialistas em copy e best-sellers dos EUA — que tudo virou.
              </p>
              
              <div className="p-5 bg-gray-50 border-l-4 border-gray-200 rounded-r-lg">
                <p>Em menos de 60 dias, publiquei o <span className="font-semibold">Manual de Copywriting</span>.</p>
                <p>Em 90 dias, lancei o segundo — <span className="font-semibold">Gatilhos Mentais</span> — e ele já entrou nos mais vendidos ainda na pré-venda.</p>
              </div>

              <p>
                Nada no conteúdo era mirabolante. A diferença foi <span className="font-bold">aprender a apresentar a minha oferta da forma certa.</span>
              </p>
              <p>
                Desde então, publiquei 12 livros. 10 deles viraram best-sellers. Mais de 10.000 leitores e alunos já aplicaram esse mesmo método para transformar conhecimento em vendas — com clareza, posicionamento e autoridade.
              </p>
              <p className="text-xl font-semibold text-secondary-800">
                Eu não ensino truques. Eu ensino como transformar o que você já faz em algo que as pessoas sentem que precisam comprar.
              </p>
              <blockquote className="mt-6 p-6 bg-primary-50/60 border-l-4 border-primary-300 rounded-r-lg text-xl italic font-medium text-secondary-800">
                <span className="mr-2">📘</span> Esse livro — Oferta Irresistível — é exatamente o que eu gostaria de ter lido antes de pensar em desistir.
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 