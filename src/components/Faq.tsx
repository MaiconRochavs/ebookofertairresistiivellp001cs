import React from 'react';

const Faq = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12">Perguntas Frequentes (FAQ)</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-2">E se eu não for bom em vendas?</h3>
            <div className="p-5 bg-primary-50/40 border-l-4 border-primary-200 rounded-r-lg">
              <p className="text-lg text-secondary-800 font-semibold mb-3">
                🧠 Talvez você pense que precisa ser bom em vendas, ter muita autoridade ou um produto perfeito pra isso funcionar.
              </p>
              <p className="text-lg text-secondary-700">
                A verdade? O que falta pode não ser esforço ou tráfego…<br/>
                Mas simplesmente <span className="font-bold">uma forma melhor de apresentar o valor que você já entrega.</span>
              </p>
              <p className="mt-4 text-lg text-secondary-700">
                Você não precisa ser um vendedor.<br/>
                <span className="text-xl font-bold text-secondary-800">Precisa ser claro.</span>
              </p>
              <p className="mt-4 text-lg text-secondary-700">
                E esse livro vai te mostrar exatamente como fazer isso — <span className="italic">sem scripts, sem pressão e sem enrolação.</span>
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Esse livro serve para quem está começando agora?</h3>
            <p className="text-lg text-gray-700">Sim! Mesmo que você esteja começando do zero, o conteúdo do livro é direto, fácil de aplicar e feito para dar resultado mesmo para quem nunca vendeu nada online antes.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">É só mais um livro de copywriting?</h3>
            <p className="text-lg text-gray-700">Não. Esse livro vai além da copy. Ele mostra como pensar estrategicamente sobre valor, posicionamento e construção de uma oferta que o cliente sinta vontade de comprar — antes mesmo de você vender.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Em quanto tempo posso aplicar o conteúdo?</h3>
            <p className="text-lg text-gray-700">Você pode começar a aplicar no mesmo dia. O livro é estruturado com modelos práticos, perguntas-chave e orientações diretas para colocar sua oferta no ar rapidamente.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">O livro é só teoria ou tem passo a passo?</h3>
            <p className="text-lg text-gray-700">Tem os dois. Você vai entender o "porquê" das ofertas irresistíveis funcionarem — e também como montar a sua do zero, com estrutura clara e validação prática.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">E se eu não gostar do conteúdo?</h3>
            <p className="text-lg text-gray-700">Sem problema. Você tem 30 dias de Garantia Incondicional. Se não sentir que o conteúdo te ajudou, é só mandar um e-mail e devolvemos 100% do seu dinheiro. Sem perguntas.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Já tenho um produto ou serviço pronto. Esse livro ainda ajuda?</h3>
            <p className="text-lg text-gray-700">Com certeza. Muitos leitores aumentaram seus resultados apenas reposicionando o que já vendem com o método do livro. Não é sobre mudar o produto, e sim como você o apresenta.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">O livro é impresso ou digital?</h3>
            <p className="text-lg text-gray-700">É digital. Você recebe acesso imediato após a compra e pode ler no celular, tablet ou computador — sem precisar esperar nada chegar.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">O autor realmente usa o que ensina?</h3>
            <p className="text-lg text-gray-700">Sim. Maicon Rocha é autor de 12 livros (10 best-sellers) e já ajudou mais de 10.000 alunos e leitores a venderem mais aplicando exatamente o que compartilha no livro. É prática, não teoria.</p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 italic">Se ainda tem dúvidas, a melhor forma de saber se funciona é experimentar. Você está coberto por uma garantia de 30 dias — sem risco e com todos os bônus inclusos.</p>
        </div>
      </div>
    </section>
  );
};

export default Faq; 