# HobbyHub 🎨

**Discover, Create, and Join Local Hobby Communities**

[![Live Site](http://img.shields.io/badge/Live%20Site-Visit%20Now-brightgreen)](https://hobby-hub-6jxx.vercel.app/)
[![GitHub](http://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/sumaiyaAfroza/Hobby-Hub)

HobbyHub is a comprehensive platform that connects people through shared interests and hobbies. Whether you're passionate about painting, hiking, reading, or cooking, HobbyHub helps you find like-minded individuals in your local area and build meaningful communities around your favorite activities.

## 🌟 Key Features

• **Smart Group Discovery**: Browse and filter local hobby groups by category, location, and availability with an intuitive search system

• **Seamless Group Creation**: Create and manage your own hobby groups with detailed descriptions, member limits, and scheduling capabilities

• **Real-time Community Management**: Join active groups instantly, view member details, and track group activities with live updates

• **Personalized Dashboard**: Access your created groups, joined communities, and manage all your hobby activities from one centralized location

• **Advanced Authentication System**: Secure login with email/password and social authentication (Google/GitHub) with complete profile management

• **Responsive Design Excellence**: Fully optimized experience across all devices - mobile, tablet, and desktop with modern UI/UX principles

## 🛠️ Technology Stack

**Frontend:**
- React.js with modern hooks and context API
- Tailwind CSS for responsive styling
- React Router DOM for navigation
- Firebase Authentication
- Axios for API calls
- React Hook Form for form handling
- Lottie React for animations
- React Simple Typewriter for dynamic text effects

**Backend:**
- Node.js with Express.js framework
- MongoDB with Mongoose ODM
- JWT for secure authentication
- CORS for cross-origin requests
- Environment variables for security

**Additional Libraries:**
- React Awesome Reveal for scroll animations
- React Tooltip for enhanced UX
- React Hot Toast for notifications
- SweetAlert2 for beautiful alerts

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- MongoDB database (local or Atlas)
- Firebase project for authentication

### Client Side Setup

```bash
# Clone the repository
git clone http://github.com/yourusername/hobbyhub-client.git

# Navigate to project directory
cd hobbyhub-client

# Install dependencies
npm install

# Create environment variables file
touch .env.local

# Add your environment variables
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
VITE_API_BASE_URL=http://localhost:5000

# Start development server
npm run dev
```

### Server Side Setup

```bash
# Clone the server repository
git clone http://github.com/yourusername/hobbyhub-server.git

# Navigate to server directory
cd hobbyhub-server

# Install dependencies
npm install

# Create environment variables file
touch .env

# Add your environment variables
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

# Start the server
npm run dev
```

## 📱 Usage Guide

### Getting Started
1. **Sign Up**: Create your account using email/password or social login
2. **Explore Groups**: Browse available hobby groups in your area
3. **Join Communities**: Click "Join Group" to become part of existing communities
4. **Create Groups**: Start your own hobby group and invite others
5. **Manage Activities**: Track your groups and manage memberships from your dashboard

### Group Management
- **Create**: Fill out the comprehensive group creation form with all necessary details
- **Update**: Modify group information, dates, and member limits as needed
- **Delete**: Remove groups with confirmation to prevent accidental deletions
- **Join**: Seamlessly join groups that match your interests and schedule

## 🔐 Environment Variables

### Client (.env.local)
```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_API_BASE_URL=
```

### Server (.env)
```env
PORT=
MONGODB_URI=
JWT_SECRET=
```

## 🌐 Deployment

### Client Deployment (Netlify/Vercel)
```bash
# Build for production
npm run build

# Deploy to Netlify
netlify deploy --prod --dir=dist

# Or deploy to Vercel
vercel --prod
```

### Server Deployment (Vercel/Railway)
```bash
# Deploy to Vercel
vercel --prod

# Or use Railway/Heroku for automatic deployment
```

## 📋 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile

### Groups
- `GET /api/groups` - Fetch all groups
- `GET /api/groups/:id` - Get single group details
- `POST /api/groups` - Create new group
- `PUT /api/groups/:id` - Update group
- `DELETE /api/groups/:id` - Delete group
- `POST /api/groups/:id/join` - Join a group

## 🎨 Theme Support

HobbyHub includes a sophisticated dark/light theme toggle system:
- Automatic system preference detection
- Manual theme switching
- Persistent theme selection across sessions
- Smooth transition animations


## 👨‍💻 Developer

**Your Name**
- LinkedIn: [Your LinkedIn](https://www.linkedin.com/in/sumaiya-afroza25/)
- Email: sumaiya.afroza.99@gmail.com

## 🙏 Acknowledgments

- Firebase for authentication services
- MongoDB for database solutions
- Tailwind CSS for styling framework
- React community for excellent documentation and support

---

⭐ **Star this repository if you find it helpful!**
