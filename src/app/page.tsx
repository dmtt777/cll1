'use client'

import { useState } from 'react'
import { Check, X, Star, Users, TrendingUp, Clock, Zap, Shield, ChevronDown, ChevronUp, Menu, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const benefits = [
    { icon: Zap, title: "Resultados Rápidos", description: "Comece a ver resultados nas primeiras semanas" },
    { icon: Clock, title: "Flexibilidade Total", description: "Trabalhe quando e onde quiser" },
    { icon: Users, title: "Sem Apresentações", description: "Não precisa vender para amigos ou familiares" },
    { icon: TrendingUp, title: "Escalável", description: "Seu potencial de renda só depende de você" }
  ]

  const testimonials = [
    {
      name: "Ana Silva",
      age: 28,
      result: "R$ 2.400 no primeiro mês",
      text: "Comecei sem experiência e já consigo pagar minhas contas extras com o celular."
    },
    {
      name: "Carlos Mendes",
      age: 35,
      result: "R$ 4.800 em 60 dias",
      text: "A metodologia é simples e funciona. Faço isso no meu tempo livre."
    },
    {
      name: "Mariana Santos",
      age: 24,
      result: "R$ 1.900 na primeira semana",
      text: "Nunca ganhei dinheiro tão rápido. O passo a passo é claro e objetivo."
    }
  ]

  const whatYouGet = [
    "Método completo em vídeo (aulas gravadas)",
    "Passo a passo para iniciantes",
    "Estratégias atualizadas para 2026",
    "Templates e exemplos práticos",
    "Acesso vitalício ao conteúdo",
    "Suporte por e-mail",
    "Bônus exclusivo: Lista de ferramentas gratuitas"
  ]

  const faqs = [
    {
      question: "Preciso ter experiência prévia?",
      answer: "Não! O método foi criado especialmente para quem está começando do zero. Todas as etapas são explicadas detalhadamente."
    },
    {
      question: "Quanto tempo preciso dedicar por dia?",
      answer: "Recomendamos de 1 a 2 horas por dia para melhores resultados, mas você pode adaptar à sua rotina."
    },
    {
      question: "Funciona em qualquer celular?",
      answer: "Sim, o método funciona em qualquer smartphone moderno (Android ou iOS) com conexão à internet."
    },
    {
      question: "Quando começo a ter resultados?",
      answer: "Alguns alunos relatam resultados na primeira semana, mas o mais comum é começar a ver renda entre 15-30 dias."
    },
    {
      question: "É preciso aparecer ou gravar vídeos?",
      answer: "Não! Uma das grandes vantagens é que você pode trabalhar anonimamente, sem precisar mostrar o rosto."
    },
    {
      question: "Existe algum custo adicional?",
      answer: "Além do investimento no método, não há custos obrigatórios. Mostramos opções gratuitas e pagas."
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/20 to-black" />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 via-transparent to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-purple-900/30 border border-purple-800/50 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">Método Validado para 2026</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              Ganhe Renda Extra
            </span>
            <br />
            <span className="text-3xl md:text-5xl text-purple-400">
              Usando Apenas o Celular
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Método comprovado para quem quer começar do zero e transformar o smartphone em uma máquina de renda extra em 2026
          </p>

          {/* CTA Button */}
          <div className="mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white text-lg px-12 py-6 rounded-full font-semibold shadow-2xl shadow-purple-600/25 transition-all duration-300 hover:scale-105"
              onClick={() => {
                const element = document.getElementById('oferta');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              QUERO COMEÇAR AGORA
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <p className="text-gray-400 mt-4 text-sm">
              Últimas vagas com desconto de lançamento
            </p>
          </div>

          {/* Proof Elements */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-500" />
              <span>Garantia de 7 dias</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-purple-400" />
              <span>2.847+ alunos satisfeitos</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500" />
              <span>4.9/5 avaliação média</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pain & Desire Section */}
      <section className="py-20 px-4 border-t border-gray-900">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">
                Você se identifica com isso?
              </h2>
              <div className="space-y-4">
                {[
                  "Salário não cobre todas as despesas",
                  "Falta de tempo para um segundo emprego",
                  "Desejo de mais liberdade financeira",
                  "Medo de não ter uma reserva de emergência",
                  "Quer mais qualidade de vida para sua família"
                ].map((pain, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{pain}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/20 to-purple-950/30 rounded-2xl p-8 border border-purple-800/30">
              <h3 className="text-2xl font-bold mb-6 text-purple-300">
                Imagine isso...
              </h3>
              <div className="space-y-4">
                {[
                  "Renda extra de R$ 2.000 a R$ 8.000 por mês",
                  "Trabalhar de qualquer lugar, a qualquer hora",
                  "Não depender mais apenas do salário fixo",
                  "Ter mais tempo livre para você e sua família",
                  "Construir uma fonte de renda escalável"
                ].map((desire, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-200">{desire}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-purple-950/10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Apresentando o Método
            </span>
            <br />
            <span className="text-white">Renda Extra com Celular</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Um sistema passo a passo que ensina você a monetizar seu smartphone usando estratégias validadas para 2026
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gray-900/50 border-gray-800 text-white">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Aprenda o Método</h3>
                <p className="text-gray-400">
                  Acesso imediato a todas as aulas em vídeo com passo a passo detalhado
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 text-white">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Aplique no Celular</h3>
                <p className="text-gray-400">
                  Siga as estratégias usando apenas seu smartphone, sem precisar de computador
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 text-white">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Ganhe Renda Extra</h3>
                <p className="text-gray-400">
                  Comece a ver resultados reais e construa sua fonte de renda escalável
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Vantagens que fazem a diferença
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-900 to-gray-900/50 border-gray-800 text-white hover:border-purple-700 transition-colors">
                <CardContent className="p-6 text-center">
                  <benefit.icon className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-purple-950/5">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Resultados que nossos alunos estão obtendo
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 border-gray-800 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">{testimonial.age} anos</p>
                    </div>
                    <div className="text-right">
                      <p className="text-purple-400 font-bold">{testimonial.result}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">
              O que você vai receber
            </h2>
            
            <Card className="bg-gradient-to-br from-purple-900/20 to-purple-950/30 border-purple-800/30">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {whatYouGet.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-lg text-gray-200">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* For Who Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-purple-950/10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-green-500">
                Para quem é este método:
              </h3>
              <div className="space-y-3">
                {[
                  "Quem está começando do zero",
                  "Pessoas com pouco tempo livre",
                  "Quem busca renda extra realista",
                  "Estudantes, mães, aposentados",
                  "Quem não tem experiência com internet"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-red-500">
                Para quem NÃO é:
              </h3>
              <div className="space-y-3">
                {[
                  "Quem busca enriquecimento rápido",
                  "Pessoas que não querem trabalhar",
                  "Quem procura métodos milagrosos",
                  "Pessoas sem comprometimento",
                  "Quem não segue instruções"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="oferta" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Oferta Especial de Lançamento
            </h2>
            
            <div className="mb-12">
              <div className="inline-flex items-center gap-4 mb-4">
                <span className="text-gray-500 text-2xl line-through">De: R$ 497,00</span>
                <span className="bg-red-600 text-white px-4 py-2 rounded-full font-semibold">80% OFF</span>
              </div>
              <p className="text-6xl font-bold text-purple-400 mb-4">
                Por apenas: <span className="text-7xl">R$ 97</span>
              </p>
              <p className="text-gray-400 text-lg">
                Pagamento único com acesso vitalício
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-purple-950/30 rounded-2xl p-8 border border-purple-800/30 mb-12">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Clock className="w-6 h-6 text-yellow-500" />
                <span className="text-xl text-yellow-500 font-semibold">
                  Oferta por tempo limitado!
                </span>
              </div>
              <p className="text-gray-300 mb-8">
                Esta é uma oferta especial de lançamento. Em breve o preço voltará ao normal de R$ 497,00.
                Aproveite agora para garantir o método com o maior desconto já oferecido.
              </p>
              
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white text-xl px-16 py-8 rounded-full font-bold shadow-2xl shadow-purple-600/25 transition-all duration-300 hover:scale-105"
                onClick={() => {
                  window.open('https://ambienteseguro.org.ua/c/7e2facef6b', '_blank');
                }}
              >
                SIM! QUERO APROVEITAR ESTA OFERTA
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
              
              <div className="flex items-center justify-center gap-6 mt-8 text-gray-400">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span>Garantia de 7 dias</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-purple-400" />
                  <span>Acesso imediato</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-purple-950/5">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <Shield className="w-20 h-20 text-green-500 mx-auto mb-8" />
            <h2 className="text-4xl font-bold mb-6 text-white">
              Garantia Blindada de 7 Dias
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Experimente o método sem risco algum. Se por qualquer motivo você não ficar satisfeito, 
              basta enviar um e-mail em até 7 dias e reembolsamos 100% do seu investimento.
            </p>
            <div className="bg-green-900/20 border border-green-800/30 rounded-xl p-6">
              <p className="text-green-400 font-semibold text-lg">
                "Zero risco para você. Ou você ama o método ou recebe seu dinheiro de volta!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">
              Dúvidas Frequentes
            </h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="bg-gray-900/50 border-gray-800 text-white">
                  <CardContent className="p-0">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors"
                    >
                      <span className="text-lg font-medium">{faq.question}</span>
                      {expandedFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-purple-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-purple-400" />
                      )}
                    </button>
                    {expandedFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-300">{faq.answer}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-purple-950/20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            Está pronto para transformar seu celular
            <br />
            <span className="text-purple-400">em uma fonte de renda extra?</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Junte-se a mais de 2.847 alunos que já estão mudando suas vidas financeiras
          </p>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white text-xl px-16 py-8 rounded-full font-bold shadow-2xl shadow-purple-600/25 transition-all duration-300 hover:scale-105"
            onClick={() => {
              const element = document.getElementById('oferta');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            SIM! QUERO COMEÇAR AGORA
            <ArrowRight className="ml-3 w-6 h-6" />
          </Button>
          
          <p className="text-gray-400 mt-6">
            Últimas vagas disponíveis • Oferta termina em breve
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-900">
        <div className="container mx-auto text-center">
          <p className="text-gray-400 mb-4">
            © 2026 Renda Extra com Celular. Todos os direitos reservados.
          </p>
          <div className="flex items-center justify-center gap-6 text-gray-500 text-sm">
            <span>Termos de Uso</span>
            <span>•</span>
            <span>Política de Privacidade</span>
            <span>•</span>
            <span>contato@rendaextracomcelular.com</span>
          </div>
          <p className="text-gray-600 text-xs mt-6">
            Resultados não garantidos e podem variar. Sucesso requer dedicação e aplicação do método.
          </p>
        </div>
      </footer>
    </div>
  )
}