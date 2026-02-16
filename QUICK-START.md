# React Portfolio Projects - Quick Start Guide

## What You Have

- **Landing Page** - Beautiful hub showcasing all 5 React projects
- **5 Student Folders** - Ready for each student to build their app
- **Comprehensive Instructions** - Step-by-step guide for students
- **Documentation** - READMEs for every component

---

## For Teachers: How to Use This

### 1. **Show Students the Landing Page**
```bash
cd react-projects/landing-page
open index.html  # or just double-click it
```

### 2. **Share the Instructions**
Direct students to read: `INSTRUCTIONS.md`

### 3. **Assign Students**
Each student gets one folder:
- Student 1 -> `student1-edushare/`
- Student 2 -> `student2-shoplocal/`
- Student 3 -> `student3-fittrack/`
- Student 4 -> `student4-eventhub/`
- Student 5 -> `student5-jobboard/`

### 4. **Set Up GitHub Repo** (if not already done)
```bash
cd react-projects
git init
git add .
git commit -m "Initial React projects setup"
git remote add origin <your-github-repo-url>
git push -u origin main
```

### 5. **Add Students as Collaborators**
In GitHub: Settings -> Collaborators -> Add people

---

## For Students: Getting Started

### Step 1: Read the Instructions
Open `INSTRUCTIONS.md` and find your assigned project

### Step 2: Navigate to Your Folder
```bash
cd react-projects/student1-edushare  # Your assigned folder
```

### Step 3: Create React App
```bash
npx create-react-app .
```

### Step 4: Install Dependencies
```bash
# Core dependencies (ALL students)
npm install react-router-dom tailwindcss postcss autoprefixer
npm install react-icons react-toastify uuid

# Initialize Tailwind
npx tailwindcss init -p
```

See your section in `INSTRUCTIONS.md` for project-specific packages.

### Step 5: Configure Tailwind
Update `tailwind.config.js` and `src/index.css` as described in INSTRUCTIONS.md

### Step 6: Start Development
```bash
npm start
```

### Step 7: Build Your App
Follow the detailed requirements in INSTRUCTIONS.md for your project.

### Step 8: Test Everything
- All routes work
- Auth flow works
- CRUD operations work
- Responsive on mobile/tablet/desktop
- No console errors

### Step 9: Commit Your Work
```bash
git add student1-edushare/  # Your folder only!
git commit -m "Add Student 1: EduShare - Study Resource Platform"
git push origin main
```

---

## The 5 Projects at a Glance

| # | Project | Student | Complexity | Routes | Contexts |
|---|---------|---------|------------|--------|----------|
| 1 | EduShare - Study Resources | Student 1 | Medium | 7 | 3 |
| 2 | ShopLocal - Marketplace | Student 2 | High | 9 | 4 |
| 3 | FitTrack - Fitness Tracker | Student 3 | Medium | 8 | 3 |
| 4 | EventHub - Event Platform | Student 4 | High | 9 | 4 |
| 5 | JobBoard - Freelance Platform | Student 5 | High | 10 | 4 |

---

## Key Technologies

| Technology | Purpose |
|-----------|---------|
| React 18+ | Component-based UI |
| React Router v6 | Client-side routing |
| Context API | Global state management |
| Tailwind CSS | Utility-first styling |
| react-dropzone | File uploads |
| react-toastify | Toast notifications |
| localStorage | Data persistence |
| recharts | Data visualization |

---

## File Structure Explained

```
react-projects/
│
├── landing-page/           <- TEACHER CREATED THIS
│   └── index.html          <- Showcase hub page
│
├── student1-edushare/      <- STUDENTS BUILD THESE
├── student2-shoplocal/
├── student3-fittrack/
├── student4-eventhub/
├── student5-jobboard/
│
├── INSTRUCTIONS.md         <- Student guide
├── README.md               <- Project overview
├── QUICK-START.md          <- This file
└── .gitignore              <- Ignore node_modules, .env
```

---

## What Students Need to Do

For each student:
1. Read INSTRUCTIONS.md (their section)
2. Create React app in their folder
3. Install dependencies
4. Configure Tailwind CSS
5. Set up React Router
6. Set up Context API
7. Build all pages and components
8. Implement all features
9. Test thoroughly
10. Commit and push to GitHub
11. Fill out their README.md

---

## Recommended Build Order

Students should build their projects in this order:

1. **Setup** - Create React app, install deps, configure Tailwind
2. **Routing** - Set up React Router with all pages (empty placeholders)
3. **Auth** - Build AuthContext, Login, Signup, ProtectedRoute
4. **Layout** - Build Navbar, Footer, common components
5. **Core Feature** - Build the main feature (resources, products, workouts, etc.)
6. **CRUD** - Implement Create, Read, Update, Delete operations
7. **Search/Filter** - Add search and filter functionality
8. **API Integration** - Connect to external APIs
9. **File Upload** - Implement file upload features
10. **Polish** - Loading states, error handling, toasts, responsive design

---

## Learning Objectives

By completing this project, students will learn:
- **React** component architecture, hooks, and lifecycle
- **React Router** client-side navigation and dynamic routes
- **Context API** global state management pattern
- **Tailwind CSS** utility-first responsive design
- **File Handling** uploads and previews in React
- **API Integration** fetching and displaying external data
- **Data Persistence** with localStorage
- **Form Handling** validation and multi-step forms
- **Git Collaboration** branches, commits, pull requests

---

## Common Issues

### "React app won't start"
```bash
rm -rf node_modules package-lock.json
npm install
npm start
```

### "Tailwind classes not applying"
- Check `tailwind.config.js` content array
- Restart dev server after config changes
- Make sure `@tailwind` directives are in `index.css`

### "Routes not working"
- Wrap App in `<BrowserRouter>`
- Check `<Route path="">` matches `<Link to="">`

### "Context not available"
- Make sure Provider wraps the components that need it
- Check that Provider is above Router in the component tree

---

## Grading Checklist

For each student, check:
- [ ] App runs without errors
- [ ] All routes functional
- [ ] Auth flow works
- [ ] CRUD operations work
- [ ] File uploads work
- [ ] API integration works
- [ ] Responsive design
- [ ] Error handling
- [ ] Code is clean and commented
- [ ] Git commits are meaningful
- [ ] README.md filled out
- [ ] .env not committed

---

## You're All Set!

Everything is ready for your students to start building. Just:

1. Show them the landing page
2. Point them to INSTRUCTIONS.md
3. Assign their folders
4. Let them code!

**Happy Teaching!**

---

**Built by TechMasters Class 2026**
