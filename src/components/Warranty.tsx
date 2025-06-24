import Image from 'next/image';
import React from 'react';

const Warranty = ({ className }: { className?: string }) => {
  return (
    <div className={`bg-stone-100 rounded-2xl p-8 grid md:grid-cols-4 gap-8 items-center text-center md:text-left shadow-lg border border-gray-200 ${className}`}>
      <div className="md:col-span-1 flex justify-center">
        <Image src="/garantia-selo.png" alt="Selo de Garantia Incondicional de 30 dias" width={150} height={150} />
      </div>
      <div className="md:col-span-3">
        <h3 className="text-3xl font-extrabold text-secondary-900">
          Garantia Incondicional Oferta Sem Risco – 30 Dias
        </h3>
        <br/>
        <div className="text-lg text-gray-700 space-y-4">
          <p className="italic">
            Você tem <b>30 dias inteiros</b> para <b>ler, aplicar e sentir o impacto</b> do livro Oferta Irresistível. Se nesse tempo você não perceber <b>diferença na forma como as pessoas reagem</b> à sua oferta — se não sentir mais <b>clareza, confiança e resultados reais</b> — é só pedir o seu <b>dinheiro de volta</b>.<br/>
            <b>Sem perguntas. Sem burocracia. Sem ressentimentos.</b>
          </p>
          <p className="font-bold text-secondary-800">
            O risco é meu. Os bônus são seus.<br/>
            Você só decide depois de experimentar.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Warranty; 