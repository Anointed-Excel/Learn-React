# React Portfolio Projects - Student Instructions

## Project Overview

Welcome to the React Portfolio Projects! This is a collaborative GitHub project where **5 students** will each build a **full-stack React application**. Each student will build a complete app using React, React Router, Context API, Tailwind CSS, and integrate with third-party APIs.

### Your Mission
Build a fully functional React web application with authentication, routing, state management, file uploads, and API integration. Push your completed project to the shared GitHub repo.

---

## Student Assignments

| Student | Project | Complexity | Contexts |
|---------|---------|------------|----------|
| **Student 1** | EduShare - Study Resource Platform | Medium | AuthContext, ResourceContext, NotificationContext |
| **Student 2** | ShopLocal - Marketplace App | High | AuthContext, CartContext, ProductContext, OrderContext |
| **Student 3** | FitTrack - Fitness & Workout Tracker | Medium | AuthContext, WorkoutContext, MealContext |
| **Student 4** | EventHub - Event Management Platform | High | AuthContext, EventContext, ChatContext, NotificationContext |
| **Student 5** | JobBoard - Freelance Job Platform | High | AuthContext, JobContext, MessageContext, ApplicationContext |

---

## Project Structure (Standard for All)

```
studentX-projectname/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── common/         (Navbar, Footer, Loader, ProtectedRoute, Toast)
│   │   ├── auth/           (LoginForm, SignupForm)
│   │   └── feature/        (Feature-specific components)
│   ├── pages/              (Route-level page components)
│   ├── contexts/           (Context providers)
│   ├── hooks/              (Custom hooks)
│   ├── utils/              (Helper functions, API calls, validators)
│   ├── assets/             (Images, icons)
│   ├── styles/             (Custom CSS if needed beyond Tailwind)
│   ├── App.jsx             (Main app with Router & Context providers)
│   ├── index.js            (Entry point)
│   └── index.css           (Tailwind imports)
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── .env
└── README.md
```

---

## Getting Started

### Step 1: Create Your React App
Navigate to your assigned folder and create the React project:

```bash
cd react-projects/student1-edushare  # Replace with your folder
npx create-react-app .
```

### Step 2: Install Dependencies

#### For ALL Students:
```bash
npm install react-router-dom tailwindcss @tailwindcss/vite postcss autoprefixer
npm install react-icons react-toastify uuid
npx tailwindcss init -p
```

#### Student 1 (EduShare):
```bash
npm install react-dropzone react-star-ratings
```

#### Student 2 (ShopLocal):
```bash
npm install react-dropzone lodash.debounce recharts
```

#### Student 3 (FitTrack):
```bash
npm install recharts react-dropzone axios
```

#### Student 4 (EventHub):
```bash
npm install qrcode.react react-calendar axios
```

#### Student 5 (JobBoard):
```bash
npm install react-dropzone lodash.debounce axios
```

### Step 3: Configure Tailwind CSS

Update `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Add to `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Step 4: Set Up React Router

In `src/App.jsx`:

```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
// Import your pages...

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            {/* Your routes here */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Home />} />
            {/* Add more routes... */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
```

### Step 5: Set Up Context API

Create a context file (e.g., `src/contexts/AuthContext.jsx`):

```jsx
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check localStorage for existing user
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
```

### Step 6: Create Protected Routes

```jsx
// src/components/common/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/login" />;

  return children;
}

export default ProtectedRoute;
```

---

## Detailed Project Requirements

### Student 1: EduShare - Study Resource Platform (Medium Complexity)

**Description:** A platform where students and tutors can share, browse, and rate study resources.

**Routes:** `/login`, `/signup`, `/home`, `/upload`, `/profile`, `/resource/:id`, `/messages`

**Contexts:** AuthContext, ResourceContext, NotificationContext

#### Features:

**Authentication:**
- Login/Signup forms with validation (email, password, name)
- Role selection during signup: Student or Tutor
- User data stored in localStorage
- Protected routes (redirect to login if not authenticated)
- Logout functionality

**Resource Management:**
- Upload study materials with file preview (use react-dropzone)
- Resource fields: title, description, subject, grade level, file attachment
- Browse all resources on home page
- Search resources by title or description
- Filter by subject and grade level
- View individual resource details (resource/:id)

**User Interactions:**
- Bookmark/favorite resources (saved to localStorage)
- Rating & review system (1-5 stars + text review)
- Contact tutor via message form (messages stored in localStorage)
- View sent/received messages on messages page

**Profile:**
- User profile page showing uploaded resources
- Edit profile (name, bio, avatar URL)
- Dashboard with stats (total uploads, total bookmarks, average rating)

**UI Requirements:**
- Responsive design with Tailwind CSS
- Loading spinners during data operations
- Toast notifications for actions (upload success, bookmark added, etc.)
- Empty states (no resources found, no messages, etc.)

---

### Student 2: ShopLocal - Marketplace App (High Complexity)

**Description:** A full-featured e-commerce marketplace where vendors list products and customers shop.

**Routes:** `/login`, `/products`, `/product/:id`, `/cart`, `/checkout`, `/orders`, `/dashboard`, `/wishlist`, `/profile`

**Contexts:** AuthContext, CartContext, ProductContext, OrderContext

#### Features:

**Authentication:**
- Dual authentication: Vendor & Customer roles
- Login/Signup with form validation
- Role-based UI (vendors see dashboard, customers see shop)
- localStorage persistence

**Product System:**
- Vendor: Create product listings with multiple images (react-dropzone)
- Product fields: name, description, price, category, stock quantity, images
- Browse all products with grid/list view toggle
- Live search with debouncing (lodash.debounce)
- Filter by category, price range, rating
- Sort by price, date, popularity
- Individual product page with image gallery

**Shopping Cart:**
- Add/remove items from cart
- Quantity management (+/- buttons)
- Cart total calculation
- Persist cart in localStorage
- Cart badge showing item count in navbar

**Checkout:**
- Multi-step checkout form (Shipping > Payment > Review > Confirm)
- Form validation at each step
- Order summary before confirmation
- Generate order ID on completion

**Orders & Tracking:**
- Order history page for customers
- Order status tracking (Pending > Processing > Shipped > Delivered)
- Vendor: View and update order statuses

**Extra Features:**
- Wishlist (save products for later)
- Product reviews & ratings
- Seller dashboard with sales analytics (use recharts)
- Currency conversion using API (ExchangeRate API)

**UI Requirements:**
- Responsive grid layout for products
- Image carousel on product pages
- Step indicator for checkout process
- Toast notifications for cart actions
- Loading skeletons while data loads

---

### Student 3: FitTrack - Fitness & Workout Tracker (Medium Complexity)

**Description:** A personal fitness companion for logging workouts, planning meals, and tracking progress.

**Routes:** `/login`, `/dashboard`, `/workouts`, `/meals`, `/progress`, `/library`, `/profile`, `/calculator`

**Contexts:** AuthContext, WorkoutContext, MealContext

#### Features:

**Authentication:**
- Login/Signup with fitness goal setup (weight goal, activity level)
- Profile stored in localStorage
- Protected routes

**Workout Logging:**
- Log workouts: exercise name, sets, reps, weight, duration
- Upload progress photos (react-dropzone)
- View workout history (list view with date filters)
- Edit/delete logged workouts
- Workout streak counter

**Meal Planner:**
- Add meals with food items and quantities
- Calorie counter using Nutritionix API or CalorieNinjas API
- Daily meal plan view (breakfast, lunch, dinner, snacks)
- Daily calorie total vs. goal display
- Meal history

**Progress Dashboard:**
- Charts showing workout frequency over time (recharts)
- Weight tracking chart
- Calorie intake vs. goal chart
- Weekly/monthly summary cards
- Personal records (heaviest lift, longest workout, etc.)

**Workout Library:**
- Browse exercises by category (Chest, Back, Legs, Arms, Core, Cardio)
- Exercise details: name, description, target muscles, difficulty
- Pre-built workout routines (Beginner, Intermediate, Advanced)
- Save custom routines

**Extra Features:**
- BMI calculator page
- Fitness tips section
- Achievement badges (7-day streak, 100 workouts, etc.)
- Dark mode toggle

**UI Requirements:**
- Dashboard with summary cards and charts
- Calendar-style workout log view
- Responsive design for mobile use during workouts
- Toast notifications for completed workouts
- Animated progress bars

---

### Student 4: EventHub - Event Management Platform (High Complexity)

**Description:** A platform for creating, discovering, and managing events with ticketing and discussion features.

**Routes:** `/login`, `/events`, `/event/:id`, `/create-event`, `/my-events`, `/tickets`, `/chat/:eventId`, `/calendar`, `/dashboard`

**Contexts:** AuthContext, EventContext, ChatContext, NotificationContext

#### Features:

**Authentication:**
- Dual roles: Organizer & Attendee
- Login/Signup with form validation
- Role-based navigation and features
- localStorage persistence

**Event Management:**
- Organizers: Create events with banner upload (react-dropzone)
- Event fields: title, description, date, time, location, category, capacity, ticket price
- Browse events with category tabs
- Search events by name or location
- Filter by category, date range, price (free/paid)
- Individual event page with full details

**Ticketing:**
- Register for events (select ticket type: General, VIP)
- QR code generation for tickets (qrcode.react)
- View all purchased tickets
- Ticket details page with QR code

**Discussion:**
- Event-specific chat/discussion board
- Post messages, reply to threads
- Simulated real-time (poll localStorage every few seconds)
- Message timestamps and user avatars

**Calendar & Notifications:**
- Calendar view of registered events (react-calendar)
- Notification system for new events and reminders
- Notification bell with unread count in navbar
- Mark notifications as read

**Organizer Dashboard:**
- View created events with attendee counts
- Attendee list per event
- Event analytics (registrations over time using recharts)
- Edit/cancel events

**Extra Features:**
- Weather integration for event dates (OpenWeatherMap API)
- Share event (copy link)
- Event categories with icons

**UI Requirements:**
- Event cards with banner images
- Calendar component with event dots
- QR code display with download option
- Chat interface with message bubbles
- Notification dropdown in navbar
- Toast notifications for actions

---

### Student 5: JobBoard - Freelance Job Platform (High Complexity)

**Description:** A freelance marketplace connecting clients who post jobs with freelancers who apply.

**Routes:** `/login`, `/jobs`, `/job/:id`, `/post-job`, `/applications`, `/messages`, `/portfolio`, `/profile`, `/saved`, `/proposals/:id`

**Contexts:** AuthContext, JobContext, MessageContext, ApplicationContext

#### Features:

**Authentication:**
- Dual authentication: Freelancer & Client roles
- Login/Signup with role selection
- Role-based UI and navigation
- localStorage persistence

**Job System:**
- Clients: Post jobs with file attachments (project briefs via react-dropzone)
- Job fields: title, description, category, budget, duration, skills required, attachments
- Browse jobs with advanced filters (category, budget range, duration)
- Search with debouncing (lodash.debounce)
- Sort by date, budget, number of proposals
- Individual job detail page

**Applications & Proposals:**
- Freelancers: Apply to jobs (upload resume, write cover letter)
- Proposal management: view sent proposals and their status
- Clients: View received proposals, accept/reject
- Proposal status tracking (Pending > Reviewed > Accepted/Rejected)

**Messaging:**
- In-app messaging between clients and freelancers
- Conversation list sidebar
- Message thread view
- Message notifications
- Simulated real-time (localStorage polling)

**Portfolio:**
- Freelancers: Create portfolio section
- Upload work samples with descriptions (react-dropzone)
- Portfolio gallery view
- Link portfolio to profile

**Reviews & Ratings:**
- Two-way review system (client reviews freelancer and vice versa)
- Star ratings + text reviews
- Reviews displayed on profiles
- Average rating calculation

**Extra Features:**
- Payment calculator (estimate earnings after platform fee percentage)
- Saved jobs list for freelancers
- Application tracking dashboard
- Currency conversion using ExchangeRate API
- Skills tags system

**UI Requirements:**
- Job listing cards with key info (budget, duration, proposals count)
- Messaging interface with conversation sidebar
- Portfolio grid with image previews
- Multi-step application form
- Dashboard with stats cards
- Toast notifications
- Loading states everywhere

---

## Common Features Required in ALL Projects

- **Authentication** (login/signup with localStorage)
- **React Router** (6-10 routes each)
- **Context API** (2-4 contexts per project)
- **File Upload** (profile pics, documents, images using react-dropzone)
- **Forms with Validation** (required fields, email format, password strength)
- **Search & Filter** functionality
- **CRUD Operations** (Create, Read, Update, Delete)
- **Third-party API Integration** (at least 1 external API)
- **localStorage** for data persistence
- **Protected Routes** (redirect to login if not authenticated)
- **Responsive Design** (Tailwind CSS - mobile, tablet, desktop)
- **Loading States** (spinners/skeletons during operations)
- **Error Handling** (try/catch, user-friendly error messages)
- **Toast Notifications** (react-toastify for feedback)

---

## Design Requirements

### Color Scheme (Per Student):
- **Student 1 (EduShare):** Indigo (#4F46E5)
- **Student 2 (ShopLocal):** Emerald (#059669)
- **Student 3 (FitTrack):** Orange (#EA580C)
- **Student 4 (EventHub):** Rose (#E11D48)
- **Student 5 (JobBoard):** Violet (#7C3AED)

### Tailwind CSS Guidelines:
- Use Tailwind utility classes (no inline styles)
- Extend theme in `tailwind.config.js` for custom colors
- Use responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`)
- Use dark mode classes if implementing dark mode

### UI/UX Standards:
- Consistent spacing and typography
- Hover and focus states on interactive elements
- Smooth transitions and animations
- Empty states with helpful messages
- Mobile-first design approach

---

## Environment Variables

For students using external APIs, create a `.env` file:

```env
# Student 2 (ShopLocal)
REACT_APP_EXCHANGE_API_KEY=your_key_here

# Student 3 (FitTrack)
REACT_APP_NUTRITION_API_KEY=your_key_here

# Student 4 (EventHub)
REACT_APP_OPENWEATHER_API_KEY=your_key_here

# Student 5 (JobBoard)
REACT_APP_EXCHANGE_API_KEY=your_key_here
```

**IMPORTANT:** Add `.env` to `.gitignore`! Never commit API keys.

---

## Testing Your App

1. Start your development server:
```bash
npm start
```

2. Open browser at `http://localhost:3000`

3. Test all features:
   - Happy path (correct inputs, normal flow)
   - Error cases (invalid inputs, missing fields)
   - Edge cases (empty data, long text, large files)
   - Responsive design (resize browser, use DevTools mobile view)
   - Navigation (all routes work, back button works)
   - Persistence (refresh page, data should persist from localStorage)

---

## Git Workflow

### Initial Setup:
```bash
cd react-projects
git init
echo "node_modules/
.env
*.log
build/
dist/" > .gitignore
```

### Your Workflow:
```bash
# Add your files
git add student1-edushare/  # Replace with your folder

# Commit with descriptive message
git commit -m "Add Student 1: EduShare - Study Resource Platform"

# Push to GitHub
git push origin main
```

---

## Checklist Before Submission

- [ ] App runs without errors (`npm start`)
- [ ] All routes work correctly
- [ ] Authentication works (login, signup, logout)
- [ ] Protected routes redirect properly
- [ ] All CRUD operations functional
- [ ] File upload works
- [ ] Search and filter functional
- [ ] API integration working
- [ ] Data persists after page refresh (localStorage)
- [ ] Responsive design (mobile, tablet, desktop)
- [ ] Loading states displayed
- [ ] Error handling implemented
- [ ] Toast notifications working
- [ ] Code is well-organized and commented
- [ ] `.env` file not committed
- [ ] `package.json` includes all dependencies
- [ ] README.md created in your folder

---

## Troubleshooting

**React won't start?**
```bash
rm -rf node_modules package-lock.json
npm install
npm start
```

**Tailwind CSS not working?**
- Check `tailwind.config.js` content paths
- Make sure `@tailwind` directives are in `index.css`
- Restart the dev server after config changes

**React Router not working?**
- Make sure `BrowserRouter` wraps your entire App
- Check route paths match your `<Link>` and `<NavLink>` paths
- Use `useNavigate()` hook for programmatic navigation

**localStorage not persisting?**
- Check that you're using `JSON.stringify()` when saving
- Check that you're using `JSON.parse()` when reading
- Open DevTools > Application > Local Storage to inspect

**API calls failing?**
- Check `.env` file has correct key names (must start with `REACT_APP_`)
- Restart dev server after changing `.env`
- Check API documentation for correct endpoints
- Check browser console for CORS errors

---

## Grading Criteria

| Category | Points | Description |
|----------|--------|-------------|
| **Functionality** | 35% | All features work as specified |
| **Code Quality** | 20% | Clean, organized, well-commented React code |
| **UI/UX Design** | 20% | Responsive, user-friendly, polished interface |
| **State Management** | 10% | Proper use of Context API and hooks |
| **Error Handling** | 10% | Proper validation, loading states, error messages |
| **Git** | 5% | Proper commits, no `.env` in repo |

---

## Useful Resources

### React:
- [React Docs](https://react.dev/)
- [React Router Docs](https://reactrouter.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)

### Tailwind CSS:
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Tailwind UI Components](https://tailwindui.com/)

### APIs:
- [Nutritionix API](https://www.nutritionix.com/business/api)
- [CalorieNinjas API](https://calorieninjas.com/api)
- [OpenWeatherMap API](https://openweathermap.org/api)
- [ExchangeRate API](https://www.exchangerate-api.com/)

### Libraries:
- [React Dropzone](https://react-dropzone.js.org/)
- [Recharts](https://recharts.org/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [QRCode.react](https://github.com/zpao/qrcode.react)

---

## Good Luck!

Remember:
- **Start early** - Don't wait until the last minute
- **Build incrementally** - Start with routing, then auth, then features
- **Test often** - Test each feature as you build it
- **Commit frequently** - Small, meaningful commits
- **Ask for help** - Don't struggle alone
- **Have fun** - This is your chance to build something impressive!

---

**Questions?** Contact your instructor or check the project discussion board.

**Happy Coding!**
