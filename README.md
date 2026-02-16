# React Portfolio Projects

A collaborative GitHub project where 5 students each build a full-stack React application with authentication, routing, state management, and API integration.

## Project Overview

This project teaches:
- **React** component architecture and hooks
- **React Router** for multi-page navigation
- **Context API** for global state management
- **Tailwind CSS** for responsive design
- **File Uploads** with react-dropzone
- **Third-party API Integration**
- **localStorage** for data persistence
- **Git Collaboration** workflows

---

## Student Assignments

| Student | Project | Complexity | Routes | Contexts |
|---------|---------|------------|--------|----------|
| **Student 1** | EduShare - Study Resource Platform | Medium | 7 | 3 |
| **Student 2** | ShopLocal - Marketplace App | High | 9 | 4 |
| **Student 3** | FitTrack - Fitness Tracker | Medium | 8 | 3 |
| **Student 4** | EventHub - Event Platform | High | 9 | 4 |
| **Student 5** | JobBoard - Freelance Platform | High | 10 | 4 |

---

## Quick Start

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd react-projects
```

### 2. Students: Set Up Your Project
Navigate to your assigned folder:
```bash
cd student1-edushare  # Your assigned folder
npx create-react-app .
npm install react-router-dom tailwindcss postcss autoprefixer react-icons react-toastify uuid
npx tailwindcss init -p
npm start
```

### 3. Access Your App
Open `http://localhost:3000` in your browser.

---

## Project Structure

```
react-projects/
│
├── student1-edushare/           (Student 1's workspace)
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/          (Navbar, Footer, Loader, ProtectedRoute)
│   │   │   ├── auth/            (LoginForm, SignupForm)
│   │   │   └── resources/       (ResourceCard, UploadForm, etc.)
│   │   ├── pages/               (Home, Login, Signup, Upload, Profile, etc.)
│   │   ├── contexts/            (AuthContext, ResourceContext, NotificationContext)
│   │   ├── hooks/               (useLocalStorage, useDebounce, etc.)
│   │   ├── utils/               (helpers, validators, api calls)
│   │   ├── assets/
│   │   ├── App.jsx
│   │   └── index.js
│   ├── package.json
│   ├── tailwind.config.js
│   └── README.md
│
├── student2-shoplocal/          (Student 2's workspace)
│   └── ... (similar structure)
│
├── student3-fittrack/           (Student 3's workspace)
│   └── ... (similar structure)
│
├── student4-eventhub/           (Student 4's workspace)
│   └── ... (similar structure)
│
├── student5-jobboard/           (Student 5's workspace)
│   └── ... (similar structure)
│
├── landing-page/                (Project showcase hub)
│   └── index.html
│
├── INSTRUCTIONS.md              (Detailed student guide)
├── README.md                    (This file)
├── QUICK-START.md               (Quick reference)
└── .gitignore
```

---

## Technology Stack

### Frontend:
- React 18+
- React Router v6
- Context API
- Tailwind CSS
- React Icons
- React Toastify

### Per-Project Libraries:

**Student 1 (EduShare):**
- `react-dropzone` - File uploads
- `react-star-ratings` - Rating system

**Student 2 (ShopLocal):**
- `react-dropzone` - Image uploads
- `lodash.debounce` - Search debouncing
- `recharts` - Sales analytics charts
- ExchangeRate API

**Student 3 (FitTrack):**
- `recharts` - Progress charts
- `react-dropzone` - Photo uploads
- `axios` - Nutrition API calls
- Nutritionix/CalorieNinjas API

**Student 4 (EventHub):**
- `qrcode.react` - QR ticket generation
- `react-calendar` - Calendar view
- `axios` - Weather API calls
- OpenWeatherMap API

**Student 5 (JobBoard):**
- `react-dropzone` - Resume/portfolio uploads
- `lodash.debounce` - Search debouncing
- `axios` - Currency API calls
- ExchangeRate API

---

## Environment Setup

Students using external APIs need to create `.env` files:

```env
REACT_APP_API_KEY=your_key_here
```

### Get API Keys:
- **Nutritionix**: https://www.nutritionix.com/business/api
- **CalorieNinjas**: https://calorieninjas.com/api
- **OpenWeatherMap**: https://openweathermap.org/api
- **ExchangeRate API**: https://www.exchangerate-api.com/

**Never commit `.env` files!** They're in `.gitignore`.

---

## Common Features (All Projects)

- Authentication (login/signup with localStorage)
- React Router (6-10 routes each)
- Context API (2-4 contexts)
- File upload (profile pics, documents, images)
- Forms with validation
- Search & filter functionality
- CRUD operations
- Third-party API integration
- localStorage for data persistence
- Protected routes
- Responsive design (Tailwind CSS)
- Loading states & error handling
- Toast notifications

---

## Design Guidelines

### Color Palette (Per Student):
- **Student 1 (EduShare)**: Indigo (#4F46E5)
- **Student 2 (ShopLocal)**: Emerald (#059669)
- **Student 3 (FitTrack)**: Orange (#EA580C)
- **Student 4 (EventHub)**: Rose (#E11D48)
- **Student 5 (JobBoard)**: Violet (#7C3AED)

### UI Requirements:
- Tailwind CSS for all styling
- Mobile-first responsive design
- Loading states during operations
- Error handling with user-friendly messages
- Toast notifications for actions
- Empty states with helpful messages

---

## Git Workflow

### Student Workflow:
```bash
# Pull latest changes
git pull origin main

# Work on your project
# ... code, code, code ...

# Add your changes (ONLY your folder!)
git add student1-edushare/

# Commit with clear message
git commit -m "Add Student 1: EduShare - Study Resource Platform"

# Push to GitHub
git push origin main
```

### Best Practices:
- Commit often with clear messages
- Only add your own folder
- Never commit `node_modules/` or `.env`
- Pull before you push to avoid conflicts
- Test before committing

---

## Completion Checklist

### For Students:
- [ ] App runs without errors
- [ ] All routes functional
- [ ] Authentication working
- [ ] All CRUD operations working
- [ ] File uploads working
- [ ] API integration working
- [ ] Responsive design
- [ ] Error handling implemented
- [ ] Code well-organized
- [ ] README.md in your folder
- [ ] All dependencies in package.json
- [ ] .env not committed

### For Teacher:
- [ ] Landing page created
- [ ] Instructions document complete
- [ ] Folder structure set up
- [ ] GitHub repo initialized
- [ ] Students added as collaborators
- [ ] API keys/accounts created (if providing)

---

## Grading Rubric

| Criteria | Weight | Description |
|----------|--------|-------------|
| **Functionality** | 35% | All features work as specified |
| **Code Quality** | 20% | Clean, organized, well-commented React code |
| **UI/UX Design** | 20% | Responsive, polished interface |
| **State Management** | 10% | Proper Context API and hooks usage |
| **Error Handling** | 10% | Validation, loading states, error messages |
| **Git Usage** | 5% | Proper commits, clean repo |

**Total:** 100 points

---

## Useful Resources

### React:
- [React Docs](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)

### Tailwind CSS:
- [Tailwind Docs](https://tailwindcss.com/docs)

### Libraries:
- [React Dropzone](https://react-dropzone.js.org/)
- [Recharts](https://recharts.org/)
- [React Icons](https://react-icons.github.io/react-icons/)

---

## License

This project is for educational purposes. Students retain ownership of their code.

---

**Happy Coding!**

Built with love by the TechMasters team
