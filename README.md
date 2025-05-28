# Countries

A modern countries explorer application built with Next.js, TypeScript, and Tailwind CSS. Browse, search, and filter countries with detailed information and interactive features.

🌐 **Live Demo:** [https://countries-client-sigma.vercel.app](https://countries-client-sigma.vercel.app)

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) - React framework for production
- **Language:** [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) - High-quality, accessible component library
- **Data Fetching:** [SWR](https://swr.vercel.app/) - Data fetching with caching, revalidation, and error handling
- **Backend:** [Countries API](https://github.com/Mav-Ivan/Countries-BackEnd) - Custom REST API for countries data

## 📁 Project Structure

```
├── app/                    # Next.js 13+ App Router
│   ├── [id]/              # Dynamic routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   ├── loading.tsx        # Loading UI component
│   └── page.tsx           # Home page component
├── components/            # Reusable UI components
│   ├── ui/               # Shadcn components
│   ├── Card.tsx          # Card component
│   ├── CardsContainer.tsx # Cards container layout
│   ├── FilterBlock.tsx   # Filtering functionality
│   ├── Header.tsx        # Header component
│   ├── Pagination.tsx    # Pagination component
│   ├── SearchInput.tsx   # Search input component
│   ├── Select.tsx        # Select dropdown component
│   └── Toggle.tsx        # Toggle switch component
├── contexts/             # React Context providers
│   └── theme-provider.tsx # Theme management
├── hooks/                # Custom React hooks
│   └── useDebounce.ts    # Debounce hook for search
├── lib/                  # Utility functions
│   └── utils.ts          # Common utilities
└── types/                # TypeScript type definitions
    ├── Country.interface.ts # Country data types
    └── Regions.interface.ts # Regions data types
```

## 🎯 Features

- **Interactive Country Explorer:** Browse through detailed country information
- **Advanced Search:** Real-time search with debounced input
- **Regional Filtering:** Filter countries by geographical regions
- **Responsive Design:** Mobile-first approach with Tailwind CSS
- **Type Safety:** Full TypeScript integration for better development experience
- **shadcn/ui Components:** Beautiful, accessible UI components
- **Pagination:** Efficient data pagination for large datasets
- **Theme Support:** Dark/light theme switching
- **Performance Optimized:** Next.js optimizations and debounced search

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/Countries-Client.git
cd countries-app
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
# Create .env file and add your backend API URL
NEXT_PUBLIC_API_URL=https://your-backend-api-url.com
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler check

## 🎨 Styling

This project uses Tailwind CSS and shadcn/ui for styling. The configuration includes:

- shadcn/ui component library for consistent, accessible UI
- Custom color palette and theme variables
- Responsive design utilities
- Component-specific styles in `globals.css`
- Dark/light theme support with CSS variables

## 🧩 Components

- **Card**: Display country information in organized cards
- **Button**: Interactive buttons with various styles
- **Input**: Form input components for search functionality
- **Select**: Dropdown components for filtering
- **Toggle**: Theme switching and other toggle controls
- **Header**: Main navigation and branding
- **SearchInput**: Debounced search with real-time filtering
- **FilterBlock**: Regional filtering and sorting options
- **Pagination**: Navigate through country datasets
- **CardsContainer**: Grid layout for country cards

## 🔧 Custom Hooks

- **useDebounce**: Debounces search input to improve performance

## 📊 Data Management

The application handles:

- Country data fetched from custom backend API
- Regional information and filtering capabilities
- Client-side data processing and pagination
- Real-time search across country names and properties

## 🎨 Theme System

Built-in theme provider supports:

- Light and dark modes
- Consistent color schemes
- System preference detection

## 🚀 Deployment

The project is deployed on [Vercel](https://vercel.com) and optimized for production.

**Live Application:** [https://countries-client-sigma.vercel.app](https://countries-client-sigma.vercel.app)
