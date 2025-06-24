import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { justMeAgainDownHere } from '../app/fonts';

const PS = () => {
  return (
    <div className="mt-24 max-w-3xl mx-auto">
      <h3 className="text-3xl font-bold text-secondary-800 text-center">Comece agora mesmo...</h3>
      
      <p className="mt-6 text-lg text-gray-600 text-center">
        Não importa se são 2h da manhã… Você terá acesso imediato ao livro Oferta Irresistível, além dos bônus incríveis — e vai descobrir como transformar qualquer produto ou serviço em algo impossível de ignorar, ainda hoje.
      </p>
      
      <div className="mt-10 grid md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-2">
          <p className="text-lg text-gray-700">Para o seu crescimento e autoridade,</p>
          <p className={`${justMeAgainDownHere.className} text-3xl text-gray-800 my-2`}>Maicon Rocha</p>
          <p className="text-sm text-gray-500">
            
          </p>
        </div>
        <div className="md:col-span-1 flex justify-center md:justify-end">
          <Image 
            src="/avatars/maicon-rocha.jpg" 
            alt="Foto de Maicon Rocha"
            width={150}
            height={150}
            className="rounded-full aspect-square object-cover shadow-lg"
          />
        </div>
      </div>

      <div className="mt-10 pt-10 border-t border-gray-200 text-left text-gray-600 text-base space-y-5">
        <p>
          <span className="font-bold text-secondary-700">PS —</span> Este livro digital já foi avaliado em <b>R$97</b>, mas hoje você pode garantir por <b>uma fração disso</b> — como parte de uma campanha especial para leitores que querem aplicar rápido. <u>Aproveite enquanto está no ar.</u>
        </p>
        <p>
          <span className="font-bold text-secondary-700">PPS —</span> Vamos ser sinceros: você pode continuar ajustando o preço, gravando mais vídeos ou esperando "o momento certo"... Ou pode aprender agora mesmo a criar uma <b>oferta tão clara e estratégica que o cliente peça para comprar.</b>
        </p>
        <p className="italic">
          <b>Você já tem o que precisa. Só falta apresentar do jeito certo.</b> Esse livro vai te mostrar como.
        </p>
      </div>

      <div className="mt-10">
        <a href="#buy" className="btn-primary inline-flex items-center justify-center text-lg py-4 px-12 w-full">
          Adquira agora. Aplique hoje. Sinta a diferença ainda esta semana.
          <ArrowRight className="w-6 h-6 ml-3" />
        </a>
      </div>
    </div>
  );
};

export default PS; 