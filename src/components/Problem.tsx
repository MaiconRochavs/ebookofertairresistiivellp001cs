import React from 'react';

const Problem = () => {
  return (
    <section id="problem" className="bg-secondary-50">
      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-4 leading-tight">
            O Problema Não é Seu Produto. <span className="gradient-text">É a Sua Oferta.</span>
          </h2>
          <p className="text-xl md:text-2xl font-medium text-gray-600 mb-10">
            Você não tem problema de tráfego. Você tem um problema de oferta.
          </p>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Se as pessoas estão vendo o que você vende e não estão comprando, a verdade é simples:
              <strong className="block mt-1 text-secondary-700">Sua oferta não está boa o suficiente.</strong>
            </p>
            <p className="italic">
              Não é o seu Instagram. Não é o algoritmo. Não é a copy.
            </p>
            <p>
              É que o valor do que você oferece <strong className="text-secondary-700">não está claro o bastante.</strong>
            </p>
            <p>
              Se o seu produto é bom e ainda assim as vendas não acontecem, o problema está na forma como você apresenta esse valor.
            </p>
          </div>

          <div className="mt-10 bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <p className="font-semibold text-xl text-secondary-800 leading-relaxed">
              Este livro mostra exatamente como empacotar sua oferta de forma tão boa que o cliente se sinta estúpido em dizer "não".
              <span className="block mt-2 text-base font-normal text-gray-600">Sem depender de mágica. Sem precisar de milhões de seguidores.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem; 