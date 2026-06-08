# RAM Tuition Center - Online Learning Platform

A modern web application for managing study materials and tracking learning progress.

## Features

- 📚 Browse and download study materials
- 📤 Upload study materials
- 📊 Track learning progress with dashboard
- 🎨 Modern, responsive UI with Tailwind CSS
- 📱 Mobile-friendly design
- 🔐 Secure file upload with validation

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **State Management**: Zustand
- **Charts**: Recharts

## Getting Started

### Prerequisites

- Node.js 16+ and pnpm or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/ramprasadray2026/ram-tuition-center.git
cd ram-tuition-center

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

## Project Structure

```
src/
├── components/      # Reusable components
├── pages/          # Page components
├── utils/          # Utility functions
├── types/          # TypeScript types
├── App.tsx         # Main App component
├── main.tsx        # Entry point
└── index.css       # Global styles
```

## Features in Development

### Fixed Issues

✅ **Study Material Upload**
- Fixed file size validation (max 50MB)
- Added file type validation (PDF, DOC, DOCX, JPG, PNG)
- Improved error handling and user feedback
- Better UI/UX for upload form
- Real-time file selection feedback

### Planned Features

- [ ] User authentication and authorization
- [ ] Backend API integration
- [ ] Database setup
- [ ] Advanced search and filtering
- [ ] User reviews and ratings
- [ ] Bookmarking/favorites
- [ ] Android APK distribution
- [ ] Offline download capability

## Android APK Build

```bash
# Build Android APK
pnpm android:build

# Output: android/app/build/outputs/apk/release/app-release.apk
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint
- `pnpm android:build` - Build Android APK

## Environment Variables

Create a `.env.local` file:

```env
VITE_API_URL=http://localhost:3000/api
```

## License

MIT License - feel free to use this project for your own purposes.

## Support

For issues and questions, please open an issue on GitHub.
