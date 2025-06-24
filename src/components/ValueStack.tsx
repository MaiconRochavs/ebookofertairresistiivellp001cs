import React from 'react';

const ValueStack = () => {
  const comparisonData = [
    {
      method: 'Curso de Copy Avançada',
      time: '3 meses',
      cost: 'R$1.497+',
    },
    {
      method: 'Consultoria 1:1',
      time: '1 hora (se tiver sorte)',
      cost: 'R$500 – R$2.000',
    },
    {
      method: 'Livro Oferta Irresistível',
      time: 'Aplicação imediata',
      cost: 'R$27',
      highlight: true,
    },
  ];

  return (
    <section id="value-stack" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          
          <div className="mb-12 space-y-4 text-lg text-secondary-700">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 leading-tight">
              Vamos falar sério por um minuto.
            </h2>
            <p>Você pode gastar R$1.497 em um curso de copy e passar 3 meses tentando entender o que fazer...</p>
            <p>Pode pagar R$2.000 em uma consultoria e torcer pra sair de lá com algo aplicável…</p>
            <p className="text-xl font-semibold text-secondary-800">Ou pode investir R$27 hoje e aprender exatamente o que faz as pessoas olharem pra sua oferta e dizerem: <span className="gradient-text">“Me dá isso agora.”</span></p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 text-sm font-semibold text-gray-600 uppercase">Caminho</th>
                  <th className="p-4 text-sm font-semibold text-gray-600 uppercase">Tempo</th>
                  <th className="p-4 text-sm font-semibold text-gray-600 uppercase text-right">Custo</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <tr 
                    key={index} 
                    className={`border-t border-gray-200 ${item.highlight ? 'bg-primary-50/50' : ''}`}
                  >
                    <td className={`p-4 font-medium ${item.highlight ? 'text-primary-700' : 'text-gray-800'}`}>{item.method}</td>
                    <td className="p-4 text-gray-600">{item.time}</td>
                    <td className={`p-4 text-gray-800 font-bold text-right ${item.highlight ? 'text-primary-600' : ''}`}>{item.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-12 space-y-8 text-lg text-secondary-700 text-left">
            <p className="p-4 bg-gray-100 rounded-lg inline-block">
              <span className="mr-2">💡</span> Não é que os outros caminhos não funcionam. Eles só <span className="font-bold">demoram mais, custam mais… e exigem mais</span>.
            </p>
            <p>
              Esse livro vai te mostrar como empacotar o valor do que você já vende — de um jeito tão claro e convincente que o "sim" se torna automático.
            </p>

            <div className="p-6 border-l-4 border-yellow-400 bg-yellow-50/70 rounded-r-lg">
              <p>Enquanto isso, seus concorrentes estão vendendo.</p>
              <p className="mt-4">Você pode continuar apostando em mais tráfego, mais posts, mais anúncios…</p>
              <p className="mt-2 font-semibold text-secondary-800">Ou pode resolver a raiz do problema com o que realmente muda o jogo: uma oferta que faz qualquer pessoa pensar "eu preciso disso agora."</p>
            </div>

            <div className="space-y-3 pt-2">
              <p><span className="font-bold mr-1.5">📌 Não é sobre fazer mais.</span> É sobre fazer certo — com menos esforço e mais lucro.</p>
              <p><span className="font-bold mr-1.5">👉 Esse livro entrega a base que destrava vendas…</span> pelo preço de uma pizza.</p>
            </div>
            
            <div className="pt-6 text-center">
              <p className="text-2xl md:text-3xl font-bold text-secondary-800 leading-tight">
                E a única pergunta agora é: <br className="hidden sm:block" /> Você vai continuar caro e ignorado… ou vai se tornar irresistível por <span className="text-primary-600">R$27</span>?
              </p>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default ValueStack; 