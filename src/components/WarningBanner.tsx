import React from 'react';

const WarningBanner = () => {
  return (
    <div className="bg-red-600 text-white font-semibold p-3 text-center text-sm shadow-md">
      <div className="container-custom">
        <p>
          <span className="mr-2">📢</span>
          <strong>Aviso Importante:</strong> Esta página faz parte de uma campanha experimental — o acesso ao livro Oferta Irresistível + bônus pode sair do ar a qualquer momento.
        </p>
      </div>
    </div>
  );
};

export default WarningBanner; 