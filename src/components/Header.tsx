import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsOpen(false)
    }
  }

  const navItems = [
    { id: 'hero', label: 'Início' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'areas', label: 'Áreas de Atuação' },
    { id: 'contato', label: 'Contato' },
  ]

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f1126] text-cold-pink shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button
            type="button"
            onClick={() => handleScrollTo('hero')}
            className="text-2xl font-signature tracking-wide hover:opacity-80 transition-opacity"
            aria-label="Ir para início"
            tabIndex={0}
          >
            R. Magalhães.
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleScrollTo(item.id)}
                className="text-sm font-medium hover:opacity-80 transition-opacity uppercase tracking-wide"
                aria-label={`Ir para ${item.label}`}
                tabIndex={0}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 hover:opacity-80 transition-opacity"
            aria-label="Abrir menu"
            tabIndex={0}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      <aside
        className={`fixed top-0 left-0 h-full w-80 bg-[#0f1126] text-cold-pink shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-cold-pink/20">
          <h2 className="text-xl font-bold">Menu</h2>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="p-2 hover:opacity-80 rounded-lg transition-opacity"
            aria-label="Fechar menu"
            tabIndex={0}
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 p-4 overflow-y-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleScrollTo(item.id)}
              className="w-full text-left flex items-center gap-3 p-3 rounded-lg hover:bg-cold-pink/10 transition-colors mb-2 uppercase tracking-wide font-medium"
              aria-label={`Ir para ${item.label}`}
              tabIndex={0}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>
    </>
  )
}
