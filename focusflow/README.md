# FocusFlow 🎯

A comprehensive procrastination tool that helps you stay focused and productive with a Chrome extension and web application.

## Features

- **Pomodoro Timer**: Customizable work/break cycles
- **Website Blocker**: Block distracting websites during focus sessions
- **Task Management**: Organize and track your tasks
- **Analytics Dashboard**: Monitor your productivity patterns
- **Cross-Platform**: Chrome extension + web application
- **Real-time Sync**: Data syncs across all platforms

## Quick Start

### Prerequisites

- Node.js 18+ 
- npm 9+
- Chrome browser (for extension)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/focusflow.git
cd focusflow
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```

4. Start development servers:
```bash
npm run dev
```

This will start:
- Web application on `http://localhost:3000`
- Extension development server
- Backend server on `http://localhost:8000`

## Project Structure

```
focusflow/
├── src/
│   ├── shared/          # Shared code between platforms
│   ├── extension/       # Chrome extension
│   ├── web/            # Web application
│   └── components/     # Shared UI components
├── server/             # Backend API
├── docs/              # Documentation
└── tests/             # Test files
```

## Development

### Available Scripts

- `npm run dev` - Start all development servers
- `npm run build` - Build for production
- `npm run test` - Run tests
- `npm run lint` - Check code quality
- `npm run format` - Format code

### Extension Development

The Chrome extension is located in `src/extension/`. To load it in Chrome:

1. Build the extension: `npm run build:extension`
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode"
4. Click "Load unpacked" and select `src/extension/dist/`

### Web Application

The web app is built with React + TypeScript + Vite. It's located in `src/web/`.

### Backend API

The backend is built with Node.js + Express + TypeScript. It's located in `server/`.

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## Deployment

### Web Application

```bash
npm run build:web
# Deploy the dist/ folder to your hosting provider
```

### Chrome Extension

```bash
npm run build:extension
# Upload the extension to Chrome Web Store
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

- 📧 Email: support@focusflow.com
- 🐛 Issues: [GitHub Issues](https://github.com/your-username/focusflow/issues)
- 📖 Documentation: [docs/](docs/)

## Roadmap

- [ ] Mobile app (iOS/Android)
- [ ] Team collaboration features
- [ ] Advanced analytics
- [ ] Integration with calendar apps
- [ ] AI-powered productivity insights

