# XplowizSolutions

Official website for Xplowiz Solutions built with React + TypeScript + Vite

## Setup & Installation

### Prerequisites
- Node.js (v16 or higher)
- npm (v7 or higher)

### Getting Started

1. Clone the repository
```bash
git clone https://github.com/jonam007/XplowizSolutions.git
cd XplowizSolutions
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run tests

## Project Structure

```
XplowizSolutions/
├── public/
│   └── images/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Technology Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM

## Development

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=your_api_url_here
```

### Vite Configuration

The project uses Vite's default configuration with additional optimizations. Check `vite.config.ts` for detailed settings.

## Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## License

[MIT License](LICENSE)