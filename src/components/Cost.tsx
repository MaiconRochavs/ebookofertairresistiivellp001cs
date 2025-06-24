import React from 'react';

const Cost = () => {
  return (
    <section id="cost" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 leading-tight mb-6">
            O que pode estar custando continuar vendendo do jeito que você vende hoje?
          </h2>
          <div className="space-y-6 text-lg text-secondary-700">
            <p>
              Talvez você nem perceba, mas cada vez que apresenta sua oferta do mesmo jeito…
              <br />
              ...pode estar <span className="font-bold text-red-600">deixando de fazer 2x, 3x, até 5x mais vendas</span> — com o mesmo produto, mesmo público, mesmo esforço.
            </p>
            <p>
              Pode estar sendo julgado como <span className="font-bold">"caro demais"…</span>
              <br />
              …não porque seu preço está alto, mas porque o <span className="font-bold">valor não está claro o suficiente</span> para parecer barato.
            </p>
            <p>
              Pode estar achando que o problema é falta de tráfego, audiência ou atenção…
              <br />
              Mas o que está faltando mesmo é uma <span className="font-bold">forma diferente de mostrar</span> o que você já tem nas mãos.
            </p>
            <p className="p-6 bg-yellow-50/70 border-l-4 border-yellow-400 rounded-lg text-left">
              Enquanto isso, outros com menos conteúdo, menos entrega e menos experiência estão vendendo mais… só porque aprenderam a <span className="font-bold">empacotar melhor o valor</span> que oferecem.
            </p>
            <p className="pt-4 text-xl font-semibold text-secondary-800">
              E você? Vai continuar vendendo como sempre — ou vai aprender a vender de um jeito que finalmente faz as pessoas dizerem "é isso!" sem pensar duas vezes?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cost; 