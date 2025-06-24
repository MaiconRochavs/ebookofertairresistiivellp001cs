import type { Metadata, Viewport } from 'next'
import { inter, justMeAgainDownHere } from './fonts'
import './globals.css'
import WarningBanner from '@/components/WarningBanner'

export const metadata: Metadata = {
  title: 'Oferta Irresistível - O Livro que Transforma Propostas em Vendas',
  description: 'Descubra como estruturar ofertas que vendem sozinhas. O livro prático para empreendedores, freelancers e profissionais que desejam transformar o valor do seu trabalho em resultados financeiros.',
  keywords: 'oferta irresistível, copywriting, vendas, marketing, persuasão, proposta de valor, maicon rocha',
  authors: [{ name: 'Maicon Rocha' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${justMeAgainDownHere.variable} font-sans antialiased`}>
        <WarningBanner />
        {children}
      </body>
    </html>
  )
} 