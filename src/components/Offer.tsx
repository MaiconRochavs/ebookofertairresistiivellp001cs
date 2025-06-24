'use client';

import { Check, Gift } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import Warranty from './Warranty';
import PS from './PS';

const Offer = () => {
  const bonuses = [
    {
      name: 'Bônus 1 – Kit Pronto da Oferta Irresistível',
      description: `Você não precisa começar do zero. Esse kit entrega <b>tudo o que você precisa</b> para montar sua oferta em <b>menos de uma hora</b>.
Modelos de copy, estrutura de página, headline, script de vídeo e até o mapa de entrega. <b>Basta preencher os espaços</b>.
Use o que já funciona, adapte ao seu negócio e publique com confiança.
<b>Economiza tempo. Elimina o bloqueio. Gera clareza imediata.</b>
É literalmente o <b>atalho que eu gostaria de ter no início</b>.`,
      value: 197,
      image: '/bonus/kit.png' 
    },
    {
      name: 'Bônus 2 – Swipe de 7 Ofertas Que Funcionaram (e por quê)',
      description: `Nada ensina mais do que <b>exemplos reais</b>.
Aqui você vai acessar <b>7 ofertas que funcionaram de verdade</b> — com explicações sobre o que foi feito, por que funcionou e como aplicar a mesma lógica no seu produto.
Você vai entender a <b>estrutura interna de ofertas de alta conversão</b>.
Não é só inspiração.
É <b>engenharia reversa para usar imediatamente</b>.
<b>Evita erro. Acelera o acerto.</b>
Se você tem produto e quer referência rápida, <b>esse bônus vale ouro</b>.`,
      value: 97,
      image: '/bonus/swipe.png'
    },
    {
      name: 'Bônus 3 – Planilha de Valorização de Oferta',
      description: `Muita gente tem um bom produto, mas <b>cobra errado</b>.
Essa planilha resolve isso.
Ela <b>calcula o valor empacotado</b> da sua oferta, <b>define preço com clareza</b> e te ajuda a mostrar o "porquê" do que está cobrando.
Além disso, ela transforma o <b>valor percebido em algo lógico</b>, que o cliente entende — e aceita.
Você nunca mais vai "achar um preço".
Vai <b>precificar com argumento</b>.
<b>Simples, visual e direto: aumente valor, sem medo de cobrar mais.</b>`,
      value: 79,
      image: '/bonus/planilha.png'
    },
    {
      name: 'Bônus 4 – Checklist da Oferta Matadora',
      description: `Toda grande oferta tem uma <b>estrutura sólida</b>.
Esse checklist reúne os <b>12 elementos que fazem uma oferta se tornar irresistível</b>.
Você revisa antes de publicar, lançar ou apresentar — e garante que tudo esteja pronto para converter.
É como uma <b>"vistoria final" de alta performance</b>.
<b>Evita falhas, corrige detalhes invisíveis e aumenta sua taxa de acerto.</b>
Se você quer ter certeza de que está pronto para vender, <b>comece por aqui</b>.`,
      value: 49,
      image: '/bonus/checklist.png'
    },
    {
      name: 'Bônus 5 – Funil de Vendas Express',
      description: `Você só tem um produto? <b>Ótimo</b>.
Com esse bônus, você vai aprender a <b>extrair o máximo dele</b>.
Aqui está o <b>passo a passo para montar um funil enxuto, direto e eficiente</b>, mesmo que tenha só uma oferta.
Você vai entender <b>onde o cliente entra, o que ele precisa ouvir e como levá-lo até a decisão de compra</b>.
Sem complexidade. Sem fórmulas mágicas.
<b>Funil estratégico, simples e que vende</b>. Ideal para quem quer escalar sem se perder.`,
      value: 297,
      image: '/bonus/funil.png'
    },
  ];

  const mainProduct = {
    name: 'Oferta Irresistível: Como Fazer Ofertas Tão Boas Que as Pessoas se Sintam Estúpidas em Dizer Não... O Segredo e a Psicologia Por Trás Das Ofertas de Conversão Imediata!',
    description: 'Guia prático com o passo a passo para sobre como aumentar Massivamente as Vendas de Qualquer Produto ou Serviço de Forma Inteligente e Ser Pago Pela Sua Capacidade de Pensar em Termos Práticos… Não Mais Pela Quantidade de Horas Trabalhadas.',
    value: 97,
    image: '/bonus/livro-principal.png'
  };

  const allItems = [mainProduct, ...bonuses];
  const totalValue = allItems.reduce((acc, item) => acc + item.value, 0);
  const finalPrice = 27;

  return (
    <section id="offer" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-800 leading-tight">
            O Que Você Vai Receber ao Acessar Este Livro
          </h2>
          <p className="mt-6 text-xl text-gray-600">
            Você não está comprando apenas um livro. Está recebendo um pacote completo e prático para construir, valorizar e vender ofertas irresistíveis.
          </p>
        </div>

        {/* Bônus */}
        <div className="space-y-12 max-w-5xl mx-auto">
          {[mainProduct, ...bonuses].map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border-2 border-dashed border-red-300 grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <div className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center">
                  <Image src={item.image} alt={`Capa de ${item.name}`} width={250} height={250} className="rounded-md" />
                </div>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-secondary-800">
                  {index === 0 ? item.name : <><Gift className="inline-block w-6 h-6 mr-2 text-primary-500" />{item.name}</>}
                </h3>
                <div className="mt-3 text-lg text-gray-600 space-y-3">
                  {item.description.split('\n').map((paragraph, pIndex) => (
                    <p key={pIndex} dangerouslySetInnerHTML={{ __html: paragraph }} />
                  ))}
                </div>
                <p className="mt-4 text-xl font-bold text-primary-600">Valor: R${item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* --- INÍCIO DA NOVA SEÇÃO --- */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
          <p className="text-2xl text-secondary-800 font-medium leading-relaxed">
            Isso é tudo que você vai levar por apenas esse preço simbólico se agir agora.
          </p>
          <div className="mt-6 space-y-2">
            <p className="text-xl text-red-500">
              Valor Total: <span className="line-through">R$816</span>
            </p>
            <p className="text-xl text-secondary-800 font-medium">Seu preço se levar hoje:</p>
            <p className="text-5xl font-extrabold text-green-600">
              Apenas R$27
            </p>
          </div>
        </div>
        {/* --- FIM DA NOVA SEÇÃO --- */}

        {/* Garantia Incondicional */}
        <Warranty className="mt-20" />

        {/* The Stack */}
        <div className="mt-24 bg-yellow-50 border-2 border-dotted border-red-400 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary-900 mb-8">
            Aqui Está Tudo O Que Você Ganha HOJE
          </h2>
          
          <div className="mb-8 flex justify-center">
            <Image src="/bonus/pacote-completo.png" alt="Pacote completo de todos os bônus" width={500} height={500} className="rounded-lg" />
          </div>

          <div className="max-w-xl mx-auto">
            <ul className="space-y-3 mb-10 text-left">
              {allItems.map((item, index) => (
                <li key={index} className="flex items-center text-secondary-800 py-2 border-b border-red-400/20 last:border-b-0">
                  <Check className="w-6 h-6 text-green-600 mr-4 shrink-0" />
                  <span className="flex-grow font-semibold">{item.name}</span>
                  <span className="font-semibold ml-4 whitespace-nowrap">(Valor de R${item.value})</span>
                </li>
              ))}
              <li className="flex items-center text-secondary-800 py-2">
                <Check className="w-6 h-6 text-green-600 mr-4 shrink-0" />
                <span className="flex-grow font-semibold">Acesso Vitalício + Atualizações Futuras</span>
                <span className="font-semibold ml-4 whitespace-nowrap">(Incalculável)</span>
              </li>
            </ul>
          </div>
              
          <div className="space-y-4">
            <p className="text-2xl text-red-500">
              Valor Total: <span className="line-through">R${totalValue}</span>
            </p>
            <p className="text-xl text-secondary-800 font-medium">Seu preço se levar hoje:</p>
            <p className="text-5xl md:text-6xl font-extrabold text-green-600">
              Apenas R${finalPrice}
            </p>
            
            <a href="#buy" className="btn-primary block w-full py-4 text-xl mt-6">
              Aproveitar Oferta Exclusiva + Bônus Agora
            </a>
          </div>
        </div>

        <PS />

      </div>
    </section>
  );
};

export default Offer; 