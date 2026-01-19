import { createFileRoute, Link } from '@tanstack/react-router'
import { Mail, MapPin, MoveDownIcon, Phone, Scale, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/')({
  component: App,
})

const handleScrollTo = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

function App() {
  return (
    <div className="min-h-screen">
      <section
        id="hero"
        className="h-screen flex flex-col items-center justify-center bg-linear-to-b from-dark-blue via-dark-blue to-[#1a1f3a] text-cold-pink px-4 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 bg-beige rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-cold-pink rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-cold-pink rounded-full blur-2xl opacity-20 animate-float"></div>
        </div>
        
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 6 }, (_, i) => (
            <div
              key={`particle-${Math.random()}`}
              className="absolute w-2 h-2 bg-cold-pink rounded-full opacity-30 animate-float"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${4 + i}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto text-center max-w-4xl relative z-10 animate-fade-in-up">
          <div className="mb-6 animate-scale-in">
            <Sparkles className="w-8 h-8 text-cold-pink/50 mx-auto mb-4 animate-pulse" />
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-signature mb-5 text-cold-pink drop-shadow-2xl animate-fade-in-up">
            Rúbia Magalhães
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 md:mb-10 text-beige animate-fade-in-delayed">
            Advogada Criminalista
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-8 md:mb-12 text-cold-pink/80 max-w-2xl mx-auto leading-relaxed animate-fade-in-delayed">
            Atendimento em Umuarama e região
          </p>
          <div className="animate-fade-in-delayed">
            <Button
              onClick={() => handleScrollTo('contato')}
              aria-label="Ir para contato"
              variant="underline"
              className="group inline-flex items-center text-lg md:text-xl"
            >
              Entre em Contato
              <MoveDownIcon className="w-5 h-5 group-hover:animate-bounce inline-block ml-2 transition-transform" />
            </Button>
          </div>
        </div>
        
        {/* Indicador de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <MoveDownIcon className="w-6 h-6 text-cold-pink/60" />
        </div>
      </section>

      <section
        id="sobre"
        className="h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 bg-beige text-dark-blue relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-cold-pink/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-dark-blue/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 font-signature md:mb-12 text-center text-dark-blue animate-fade-in-up">
            Sobre
          </h2>
          <div className="space-y-4 sm:space-y-6 text-base sm:text-lg md:text-xl leading-relaxed">
            <p className="animate-fade-in-delayed">
              Nascida e criada em Umuarama, Paraná, Rúbia Magalhães é uma
              advogada criminalista que ingressa no mercado de trabalho em 2026,
              trazendo consigo uma trajetória marcada por dedicação e
              superação.
            </p>
            <p className="animate-fade-in-delayed">
              De origem humilde, Rúbia teve a oportunidade de se dedicar aos
              estudos e transformar sua paixão pelo direito em uma carreira
              promissora. Sua formação sólida e compromisso com a excelência
              refletem-se em cada atendimento.
            </p>
            <p className="animate-fade-in-delayed">
              Apaixonada por moda e com gostos ímpares que refletem seu amor
              pelo maximalismo, Rúbia traz uma perspectiva única e atenciosa
              para a advocacia criminal. Sua personalidade marcante se traduz
              em um atendimento humanizado, onde cada cliente recebe atenção
              personalizada e disponibilidade em todos os momentos.
            </p>
            <div className="mt-6 md:mt-8 animate-scale-in">
              <blockquote className="font-semibold text-lg sm:text-xl md:text-2xl text-dark-blue bg-cold-pink/20 px-4 sm:px-6 md:px-8 py-4 sm:py-6 rounded-lg border-l-4 border-cold-pink shadow-sm italic">
                <p className="mb-2">
                  "A defesa é o mais sagrado dos deveres; e o advogado, o sacerdote da justiça."
                </p>
                <footer className="text-base sm:text-lg md:text-xl not-italic font-normal text-dark-blue/70 mt-2">
                  — Rui Barbosa
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Atuação Section */}
      <section
        id="areas"
        className="h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 bg-dark-blue text-cold-pink relative overflow-hidden"
      >
        {/* Elementos decorativos */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-cold-pink/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-beige/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 font-signature md:mb-12 text-center animate-fade-in-up">
            Áreas de Atuação
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 md:mb-12">
            {[
              {
                title: 'Direito Criminal',
                description: 'Atuação especializada em direito criminal, oferecendo defesa criminal completa e consultoria jurídica especializada.',
              },
              {
                title: 'Atendimento Criminalista',
                description: 'Atendimento dedicado e personalizado, com foco em estratégias de defesa e acompanhamento processual completo.',
              },
              {
                title: 'Redução de Penas',
                description: 'Trabalho focado em buscar alternativas e possibilidades dentro do sistema jurídico, sempre com máxima atenção aos detalhes de cada caso.',
              },
              {
                title: 'Consultoria Jurídica',
                description: 'Orientação jurídica especializada, com disponibilidade para esclarecer dúvidas e fornecer suporte em questões criminais.',
              },
            ].map((service, index) => (
              <div
                key={service.title}
                className="bg-beige/30 p-6 sm:p-8 rounded-lg border border-cold-pink/30 backdrop-blur-sm hover:bg-beige/40 hover:border-cold-pink/50 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fade-in-delayed"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-3 bg-cold-pink/20 rounded-lg w-fit mb-4 group-hover:bg-cold-pink/30 transition-colors">
                  <Scale className="w-6 h-6 sm:w-8 sm:h-8 text-cold-pink" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-cold-pink/90 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-beige/40 p-4 sm:p-6 rounded-lg border border-cold-pink/30 text-center backdrop-blur-sm animate-scale-in">
            <p className="text-sm sm:text-base text-cold-pink italic">
              <strong className="text-cold-pink">Importante:</strong> Comprometemo-nos com atendimento
              dedicado, máxima atenção e trabalho diligente em cada caso. A
              advocacia não permite promessas de resultados, mas garantimos
              dedicação integral e esforço máximo em busca das melhores
              soluções jurídicas.
            </p>
          </div>
          <div className="mt-6 md:mt-8 text-center animate-fade-in-delayed">
            <p className="text-base sm:text-lg text-cold-pink/80 flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Atendimento em Umuarama, Paraná (conforme disponibilidade)</span>
            </p>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section
        id="contato"
        className="h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 bg-beige text-dark-blue relative overflow-hidden"
      >
        {/* Elementos decorativos */}
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-cold-pink/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-dark-blue/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 font-signature md:mb-12 text-center text-dark-blue animate-fade-in-up">
            Contato
          </h2>
          <div className="space-y-6 md:space-y-8">
            <div className="bg-white/80 p-6 sm:p-8 rounded-lg border border-dark-blue/20 shadow-xl hover:shadow-2xl transition-all duration-300 animate-scale-in">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-dark-blue">
                Entre em Contato
              </h3>
              <p className="text-base sm:text-lg mb-6 leading-relaxed">
                Estou disponível para atender você com máxima atenção e
                dedicação. Entre em contato através dos canais abaixo:
              </p>
              <div className="space-y-3 sm:space-y-4">
                <a 
                  href="https://api.whatsapp.com/send?phone=5544984254142&text=Olá, gostaria de agendar um horário para conversar sobre meu caso."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 sm:gap-4 p-3 rounded-lg hover:bg-cold-pink/10 transition-colors group"
                >
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-dark-blue" />
                  <span className="text-base sm:text-lg">(44) 98425-4142</span>
                </a>
                <a
                  href="mailto:rubia.gabriely.souza.magalhaes@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 sm:gap-4 p-3 rounded-lg hover:bg-cold-pink/10 transition-colors group"
                >
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-dark-blue" />
                  <span className="text-base sm:text-lg">rubia.gabriely.souza.magalhaes@gmail.com</span>
                </a>
                <a
                  href="https://maps.app.goo.gl/HWv6hUmtKvUALynJ6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 sm:gap-4 p-3 rounded-lg hover:bg-cold-pink/10 transition-colors group"
                >
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-dark-blue" />
                  <span className="text-base sm:text-lg">Umuarama, Paraná</span>
                </a>
              </div>
            </div>
            <div className="text-center text-base sm:text-lg text-dark-blue/70 animate-fade-in-delayed">
              <p>
                Disponibilidade para atendimento conforme agenda. Estou pronta
                para ouvir seu caso e oferecer o melhor suporte jurídico
                possível.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-blue text-cold-pink py-8 px-4 text-center">
        <p className="text-sm opacity-80">
          © 2026 Rúbia Magalhães - Advogada Criminalista. Todos os direitos
          reservados.
        </p>
        <p className="text-xs mt-2 opacity-60">
          Umuarama, Paraná
        </p>
      </footer>
    </div>
  )
}
