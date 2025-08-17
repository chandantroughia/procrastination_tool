# FocusFlow - Procrastination Buster Tool

> A comprehensive productivity suite that helps users overcome procrastination through smart time management, intelligent notifications, and behavioral insights.

## 🎯 Project Overview

FocusFlow is designed to tackle procrastination at its core by combining proven productivity techniques with modern technology. Whether you're a student, professional, or anyone struggling to stay focused, our tool provides the structure and motivation you need to get things done.

## ✨ Key Features

### 🕐 Time Management
- **Pomodoro Timer**: Customizable work/break intervals with smart suggestions
- **Time Tracking**: Monitor time spent on different websites and applications
- **Focus Sessions**: Distraction-free work periods with website blocking
- **Smart Scheduling**: AI-powered optimal work time recommendations

### 📋 Task Management
- **Intelligent Task Lists**: Priority-based organization with deadline tracking
- **Goal Setting**: Break down large projects into manageable milestones
- **Quick Capture**: Instantly save ideas without breaking focus
- **Progress Visualization**: Visual progress tracking and completion rates

### 🔔 Smart Notifications
- **Context-Aware Reminders**: Notifications based on your work patterns
- **Deadline Alerts**: Proactive deadline and task reminders
- **Focus Nudges**: Gentle redirects when procrastination is detected
- **Achievement Celebrations**: Positive reinforcement for completed goals

### 📊 Analytics & Insights
- **Productivity Reports**: Daily, weekly, and monthly productivity analysis
- **Pattern Recognition**: Identify when and why procrastination occurs
- **Streak Tracking**: Maintain momentum with consecutive productive days
- **Behavioral Insights**: Data-driven recommendations for improvement

### 🎮 Gamification
- **Achievement System**: Unlock badges and rewards for consistent productivity
- **Productivity Streaks**: Build momentum with daily goal completion
- **Challenge Mode**: Time-based challenges to boost motivation
- **Social Accountability**: Share progress with accountability partners

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Chrome browser (for extension development)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/focusflow.git
   cd focusflow
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

### Chrome Extension Setup

1. **Build the extension**
   ```bash
   npm run build:extension
   ```

2. **Load in Chrome**
   - Open `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked"
   - Select the `dist/extension` folder

## 🏗️ Tech Stack

### Frontend
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS + Styled Components
- **State Management**: Zustand
- **Charts/Visualization**: Recharts
- **Notifications**: React Hot Toast

### Backend
- **Runtime**: Node.js with Express
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Real-time**: Socket.io
- **Hosting**: Vercel (frontend) + Railway (backend)

### Chrome Extension
- **Manifest**: V3
- **Content Scripts**: Vanilla JS/TypeScript
- **Storage**: Chrome Storage API
- **Permissions**: ActiveTab, Storage, Notifications

### Development Tools
- **Build Tool**: Vite
- **Testing**: Jest + React Testing Library
- **Linting**: ESLint + Prettier
- **Type Checking**: TypeScript
- **Git Hooks**: Husky + lint-staged

## 📁 Project Structure

```
├── src/
│   ├── extension/          # Chrome extension specific code
│   ├── web/               # Web application code
│   ├── shared/            # Shared utilities and types
│   └── components/        # Reusable UI components
├── docs/                  # Documentation
├── tests/                 # Test files
└── scripts/               # Build and deployment scripts
```

## 🔧 Development

### Available Scripts

```bash
npm run dev              # Start development server
npm run build           # Build for production
npm run build:extension # Build Chrome extension
npm run test           # Run tests
npm run lint           # Run linter
npm run type-check     # TypeScript type checking
```

### Development Workflow

1. **Feature Development**
   - Create feature branch: `git checkout -b feature/your-feature-name`
   - Develop and test locally
   - Write tests for new functionality
   - Submit pull request

2. **Testing**
   - Unit tests for utilities and components
   - Integration tests for user workflows
   - Manual testing for Chrome extension features

3. **Code Quality**
   - Pre-commit hooks ensure code quality
   - Continuous integration runs tests and linting
   - Code review required for all pull requests

## 🎨 Design System

### Color Palette
- **Primary**: #4F46E5 (Indigo)
- **Secondary**: #10B981 (Emerald)
- **Accent**: #F59E0B (Amber)
- **Neutral**: #6B7280 (Gray)

### Typography
- **Headers**: Inter Bold
- **Body**: Inter Regular
- **Code**: Fira Code

### Components
- Consistent spacing using 8px grid system
- Rounded corners (4px, 8px, 12px)
- Subtle shadows and transitions
- Accessibility-first design

## 🚀 Deployment

### Web Application
```bash
npm run build
npm run deploy
```

### Chrome Extension
1. Build extension: `npm run build:extension`
2. Create ZIP file of `dist/extension`
3. Upload to Chrome Web Store

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Guidelines
- Follow existing code style and patterns
- Write tests for new features
- Update documentation for API changes
- Use conventional commit messages

### Reporting Issues
- Use GitHub Issues for bug reports and feature requests
- Provide detailed reproduction steps
- Include browser/OS information for extension issues

## 📋 Roadmap

### Phase 1 (Current) - MVP
- [x] Basic Pomodoro timer
- [x] Simple task management
- [x] Website blocking
- [x] Basic notifications
- [ ] Initial Chrome extension

### Phase 2 - Enhanced Features
- [ ] Advanced analytics dashboard
- [ ] Smart notification timing
- [ ] Habit tracking
- [ ] Mobile app companion

### Phase 3 - AI & Social
- [ ] AI-powered productivity insights
- [ ] Team collaboration features
- [ ] Integration marketplace
- [ ] Advanced gamification

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Project Lead**: [Your Name]
- **Frontend Developer**: [Team Member]
- **Backend Developer**: [Team Member]
- **UI/UX Designer**: [Team Member]

## 🙏 Acknowledgments

- Inspired by proven productivity methodologies
- Built with modern web technologies
- Community-driven feature development

## 📞 Support

- **Documentation**: [docs.focusflow.app](https://docs.focusflow.app)
- **Email**: support@focusflow.app
- **Discord**: [FocusFlow Community](https://discord.gg/focusflow)
- **GitHub Issues**: For bug reports and feature requests

---

**Built with ❤️ by the FocusFlow Team**


## Repo Structure
# FocusFlow Repository Structure

```
focusflow/
├── 📁 .github/                          # GitHub specific files
│   ├── workflows/                       # CI/CD workflows
│   │   ├── ci.yml                      # Continuous integration
│   │   ├── deploy-web.yml              # Web app deployment
│   │   └── deploy-extension.yml        # Extension deployment
│   ├── ISSUE_TEMPLATE/                 # Issue templates
│   │   ├── bug_report.md
│   │   ├── feature_request.md
│   │   └── support.md
│   ├── PULL_REQUEST_TEMPLATE.md
│   └── CONTRIBUTING.md
│
├── 📁 docs/                             # Project documentation
│   ├── api/                            # API documentation
│   │   ├── endpoints.md
│   │   ├── authentication.md
│   │   └── rate-limits.md
│   ├── development/                    # Development guides
│   │   ├── setup.md
│   │   ├── architecture.md
│   │   ├── testing.md
│   │   └── deployment.md
│   ├── user-guide/                     # User documentation
│   │   ├── getting-started.md
│   │   ├── features.md
│   │   └── troubleshooting.md
│   └── design/                         # Design system docs
│       ├── components.md
│       ├── color-palette.md
│       └── typography.md
│
├── 📁 src/                              # Source code
│   ├── 📁 shared/                       # Shared code between platforms
│   │   ├── types/                      # TypeScript type definitions
│   │   │   ├── index.ts
│   │   │   ├── api.ts
│   │   │   ├── user.ts
│   │   │   └── task.ts
│   │   ├── utils/                      # Utility functions
│   │   │   ├── time.ts
│   │   │   ├── storage.ts
│   │   │   ├── notifications.ts
│   │   │   └── analytics.ts
│   │   ├── constants/                  # App constants
│   │   │   ├── config.ts
│   │   │   ├── urls.ts
│   │   │   └── messages.ts
│   │   └── api/                        # API client
│   │       ├── client.ts
│   │       ├── tasks.ts
│   │       ├── analytics.ts
│   │       └── auth.ts
│   │
│   ├── 📁 extension/                    # Chrome extension code
│   │   ├── manifest.json               # Extension manifest
│   │   ├── background/                 # Background scripts
│   │   │   ├── service-worker.ts
│   │   │   ├── notifications.ts
│   │   │   ├── storage.ts
│   │   │   └── analytics.ts
│   │   ├── content/                    # Content scripts
│   │   │   ├── main.ts
│   │   │   ├── website-blocker.ts
│   │   │   ├── time-tracker.ts
│   │   │   └── focus-overlay.ts
│   │   ├── popup/                      # Extension popup
│   │   │   ├── index.html
│   │   │   ├── popup.tsx
│   │   │   ├── components/
│   │   │   │   ├── Timer.tsx
│   │   │   │   ├── TaskList.tsx
│   │   │   │   ├── QuickActions.tsx
│   │   │   │   └── Stats.tsx
│   │   │   └── styles/
│   │   │       ├── popup.css
│   │   │       └── components.css
│   │   ├── options/                    # Extension options page
│   │   │   ├── index.html
│   │   │   ├── options.tsx
│   │   │   ├── components/
│   │   │   │   ├── Settings.tsx
│   │   │   │   ├── BlockedSites.tsx
│   │   │   │   ├── NotificationSettings.tsx
│   │   │   │   └── DataExport.tsx
│   │   │   └── styles/
│   │   │       └── options.css
│   │   └── assets/                     # Extension assets
│   │       ├── icons/
│   │       │   ├── icon16.png
│   │       │   ├── icon48.png
│   │       │   └── icon128.png
│   │       ├── sounds/
│   │       │   ├── notification.mp3
│   │       │   ├── timer-end.mp3
│   │       │   └── focus-start.mp3
│   │       └── images/
│   │           ├── logo.png
│   │           └── focus-mode.svg
│   │
│   ├── 📁 web/                          # Web application code
│   │   ├── public/                     # Static assets
│   │   │   ├── index.html
│   │   │   ├── favicon.ico
│   │   │   ├── manifest.json
│   │   │   └── robots.txt
│   │   ├── src/
│   │   │   ├── main.tsx                # App entry point
│   │   │   ├── App.tsx                 # Main app component
│   │   │   ├── pages/                  # Page components
│   │   │   │   ├── Dashboard.tsx
│   │   │   │   ├── Analytics.tsx
│   │   │   │   ├── Tasks.tsx
│   │   │   │   ├── Settings.tsx
│   │   │   │   ├── Profile.tsx
│   │   │   │   └── Login.tsx
│   │   │   ├── components/             # Reusable components
│   │   │   │   ├── ui/                 # Basic UI components
│   │   │   │   │   ├── Button.tsx
│   │   │   │   │   ├── Input.tsx
│   │   │   │   │   ├── Modal.tsx
│   │   │   │   │   ├── Card.tsx
│   │   │   │   │   └── Badge.tsx
│   │   │   │   ├── layout/             # Layout components
│   │   │   │   │   ├── Header.tsx
│   │   │   │   │   ├── Sidebar.tsx
│   │   │   │   │   ├── Footer.tsx
│   │   │   │   │   └── Navigation.tsx
│   │   │   │   ├── features/           # Feature components
│   │   │   │   │   ├── PomodoroTimer.tsx
│   │   │   │   │   ├── TaskManager.tsx
│   │   │   │   │   ├── FocusSession.tsx
│   │   │   │   │   ├── ProgressChart.tsx
│   │   │   │   │   └── NotificationCenter.tsx
│   │   │   │   └── forms/              # Form components
│   │   │   │       ├── TaskForm.tsx
│   │   │   │       ├── GoalForm.tsx
│   │   │   │       └── SettingsForm.tsx
│   │   │   ├── hooks/                  # Custom React hooks
│   │   │   │   ├── useTimer.ts
│   │   │   │   ├── useTasks.ts
│   │   │   │   ├── useAnalytics.ts
│   │   │   │   ├── useNotifications.ts
│   │   │   │   └── useAuth.ts
│   │   │   ├── store/                  # State management
│   │   │   │   ├── index.ts
│   │   │   │   ├── authStore.ts
│   │   │   │   ├── taskStore.ts
│   │   │   │   ├── timerStore.ts
│   │   │   │   └── settingsStore.ts
│   │   │   ├── styles/                 # Global styles
│   │   │   │   ├── globals.css
│   │   │   │   ├── variables.css
│   │   │   │   └── components.css
│   │   │   └── lib/                    # Web-specific utilities
│   │   │       ├── auth.ts
│   │   │       ├── api.ts
│   │   │       └── router.ts
│   │   └── vite.config.ts              # Vite configuration
│   │
│   └── 📁 components/                   # Shared UI components
│       ├── Button/
│       │   ├── Button.tsx
│       │   ├── Button.test.tsx
│       │   ├── Button.stories.tsx
│       │   └── index.ts
│       ├── Timer/
│       │   ├── Timer.tsx
│       │   ├── Timer.test.tsx
│       │   ├── Timer.stories.tsx
│       │   └── index.ts
│       └── TaskItem/
│           ├── TaskItem.tsx
│           ├── TaskItem.test.tsx
│           ├── TaskItem.stories.tsx
│           └── index.ts
│
├── 📁 server/                           # Backend server (optional)
│   ├── src/
│   │   ├── index.ts                    # Server entry point
│   │   ├── routes/                     # API routes
│   │   │   ├── auth.ts
│   │   │   ├── tasks.ts
│   │   │   ├── analytics.ts
│   │   │   └── notifications.ts
│   │   ├── middleware/                 # Express middleware
│   │   │   ├── auth.ts
│   │   │   ├── cors.ts
│   │   │   └── validation.ts
│   │   ├── models/                     # Database models
│   │   │   ├── User.ts
│   │   │   ├── Task.ts
│   │   │   └── Session.ts
│   │   ├── services/                   # Business logic
│   │   │   ├── authService.ts
│   │   │   ├── taskService.ts
│   │   │   └── analyticsService.ts
│   │   └── utils/                      # Server utilities
│   │       ├── database.ts
│   │       ├── email.ts
│   │       └── validation.ts
│   ├── prisma/                         # Database schema
│   │   ├── schema.prisma
│   │   └── migrations/
│   └── package.json
│
├── 📁 tests/                            # Test files
│   ├── unit/                           # Unit tests
│   │   ├── utils/
│   │   ├── components/
│   │   └── hooks/
│   ├── integration/                    # Integration tests
│   │   ├── api/
│   │   ├── extension/
│   │   └── web/
│   ├── e2e/                           # End-to-end tests
│   │   ├── extension.spec.ts
│   │   ├── web-app.spec.ts
│   │   └── user-flows.spec.ts
│   ├── __mocks__/                     # Test mocks
│   │   ├── chrome.ts
│   │   ├── localStorage.ts
│   │   └── api.ts
│   └── setup/                         # Test configuration
│       ├── jest.config.js
│       ├── test-utils.tsx
│       └── setupTests.ts
│
├── 📁 scripts/                          # Build and utility scripts
│   ├── build-extension.js              # Extension build script
│   ├── build-web.js                   # Web app build script
│   ├── dev-server.js                  # Development server
│   ├── release.js                     # Release management
│   └── migrate-data.js                # Data migration
│
├── 📁 config/                          # Configuration files
│   ├── webpack.config.js              # Webpack configuration
│   ├── tailwind.config.js             # Tailwind CSS config
│   ├── tsconfig.json                  # TypeScript config
│   ├── eslint.config.js               # ESLint configuration
│   ├── prettier.config.js             # Prettier configuration
│   └── jest.config.js                 # Jest configuration
│
├── 📁 assets/                          # Global assets
│   ├── images/
│   │   ├── logo.svg
│   │   ├── hero-image.png
│   │   └── screenshots/
│   ├── fonts/
│   │   ├── Inter-Regular.woff2
│   │   └── Inter-Bold.woff2
│   └── icons/
│       ├── app-icon.svg
│       └── feature-icons/
│
├── 📄 .env.example                      # Environment variables template
├── 📄 .env.local                       # Local environment variables
├── 📄 .gitignore                       # Git ignore rules
├── 📄 .npmrc                           # NPM configuration
├── 📄 package.json                     # Project dependencies
├── 📄 package-lock.json               # Locked dependencies
├── 📄 README.md                       # Project documentation
├── 📄 LICENSE                         # Project license
├── 📄 CHANGELOG.md                    # Version history
└── 📄 SECURITY.md                     # Security policy
```

## Key Structure Principles

### 🎯 **Separation of Concerns**
- `src/shared/` - Common code used across platforms
- `src/extension/` - Chrome extension specific implementation
- `src/web/` - Web application specific implementation
- `src/components/` - Platform-agnostic UI components

### 🔧 **Development Workflow**
- `scripts/` - Build and development automation
- `config/` - All configuration files in one place
- `tests/` - Comprehensive testing structure
- `.github/` - CI/CD and GitHub templates

### 📦 **Scalability**
- Modular component structure with tests and stories
- Clear API layer separation
- Environment-specific configurations
- Comprehensive documentation structure

### 🚀 **Deployment Ready**
- Separate build processes for extension and web app
- Environment variable management
- CI/CD pipeline configuration
- Release management scripts

## Getting Started Commands

```bash
# Initial setup
git clone <repository-url>
cd focusflow
npm install

# Development
npm run dev                    # Start web app development
npm run dev:extension         # Build extension for development
npm run dev:server           # Start backend server

# Building
npm run build                # Build everything
npm run build:web           # Build web app only
npm run build:extension     # Build extension only

# Testing
npm test                    # Run all tests
npm run test:unit          # Unit tests only
npm run test:e2e           # End-to-end tests
npm run test:extension     # Extension specific tests

# Quality
npm run lint               # Run linter
npm run format             # Format code
npm run type-check         # TypeScript checking
```