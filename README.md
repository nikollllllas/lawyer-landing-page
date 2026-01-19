# Landing Page - Rúbia Magalhães

Landing page profissional para a advogada criminalista Rúbia Magalhães, desenvolvida com React, TypeScript e Tailwind CSS v4. A página apresenta uma identidade visual única, combinando profissionalismo jurídico com design moderno e responsivo.

## 🎨 Características

- **Design Moderno**: Interface elegante com paleta de cores personalizada (azul escuro, rosa frio e bege)
- **Totalmente Responsivo**: Experiência otimizada para mobile, tablet e desktop
- **Animações Suaves**: Efeitos visuais e transições que melhoram a experiência do usuário
- **Performance Otimizada**: Construído com Vite para carregamento rápido
- **Acessibilidade**: Implementação de boas práticas de acessibilidade web
- **SEO Friendly**: Estrutura semântica e meta tags otimizadas

## 🛠️ Tecnologias

- **React 19** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **TanStack Router** - Roteamento moderno para React
- **Tailwind CSS v4** - Framework CSS utility-first
- **Vite** - Build tool e dev server
- **Lucide React** - Biblioteca de ícones
- **Shadcn UI** - Componentes UI baseados em Radix UI

## 📁 Estrutura do Projeto

```
rlawyer-web/
├── public/
│   ├── tan-mon-cheri.ttf    # Fonte customizada
│   └── ...
├── src/
│   ├── components/
│   │   ├── Header.tsx        # Cabeçalho com navegação
│   │   └── ui/               # Componentes Shadcn
│   ├── routes/
│   │   ├── __root.tsx        # Layout raiz
│   │   └── index.tsx         # Página principal
│   ├── styles.css            # Estilos globais e tema
│   └── lib/
│       └── utils.ts          # Utilitários
└── package.json
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+ 
- pnpm (gerenciador de pacotes)

### Instalação

```bash
# Instalar dependências
pnpm install

# Executar em modo desenvolvimento
pnpm dev

# O servidor estará disponível em http://localhost:3000
```

### Build para Produção

```bash
# Gerar build otimizado
pnpm build

# Preview do build
pnpm preview
```

## 📜 Scripts Disponíveis

- `pnpm dev` - Inicia servidor de desenvolvimento na porta 3000
- `pnpm build` - Gera build de produção otimizado
- `pnpm preview` - Preview do build de produção
- `pnpm format` - Formata código com Biome
- `pnpm lint` - Verifica problemas de lint
- `pnpm check` - Executa formatação e lint

## 🎨 Paleta de Cores

O projeto utiliza uma paleta de cores customizada definida no Tailwind:

- **Dark Blue** (`#0f1126`) - Cor principal, usada em fundos escuros
- **Cold Pink** (`#f2b3d2`) - Cor de destaque, usada em acentos e textos
- **Beige** (`#e8e3d6`) - Cor neutra, usada em fundos claros

As cores podem ser usadas diretamente nas classes Tailwind:
- `bg-dark-blue`, `text-dark-blue`
- `bg-cold-pink`, `text-cold-pink`
- `bg-beige`, `text-beige`

## ✨ Seções da Landing Page

1. **Hero** - Apresentação principal com nome e título profissional
2. **Sobre** - História pessoal e valores da advogada
3. **Áreas de Atuação** - Serviços oferecidos em direito criminal
4. **Contato** - Informações de contato e localização

## 🔤 Tipografia

O projeto utiliza a fonte customizada **TanMonCheri** para o nome da advogada, aplicada através da classe `.font-signature`.

## 📱 Responsividade

A landing page foi desenvolvida com abordagem mobile-first, garantindo excelente experiência em:

- **Mobile**: Layout otimizado para telas pequenas
- **Tablet**: Adaptações para telas médias
- **Desktop**: Aproveitamento completo de telas grandes

## 🎯 Funcionalidades

- Navegação suave entre seções
- Menu mobile responsivo
- Animações de entrada e hover effects
- Links diretos para WhatsApp, email e localização
- Scroll suave entre seções
- Indicadores visuais de navegação

## 📄 Licença

Este projeto é privado e de uso exclusivo da advogada Rúbia Magalhães.

## 👤 Desenvolvido para

**Rúbia Magalhães** - Advogada Criminalista  
Umuarama, Paraná

---

© 2026 Rúbia Magalhães - Todos os direitos reservados
