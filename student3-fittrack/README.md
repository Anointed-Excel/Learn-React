# Student 3: FitTrack - Fitness & Workout Tracker

**Complexity:** Medium
**Student:** [Your Name Here]

## About
A personal fitness companion for logging workouts, planning meals, and tracking progress.

## Routes
- `/login` - Login page
- `/dashboard` - Progress dashboard with charts
- `/workouts` - Log and view workouts
- `/meals` - Meal planner with calorie counter
- `/progress` - Detailed progress tracking
- `/library` - Browse exercise library
- `/profile` - User profile with goals
- `/calculator` - BMI calculator & fitness tips

## Contexts
- **AuthContext** - User authentication & fitness goals
- **WorkoutContext** - Workout CRUD operations
- **MealContext** - Meal planning & calorie tracking

## Dependencies

```bash
npx create-react-app .
npm install react-router-dom tailwindcss postcss autoprefixer
npm install react-icons react-toastify uuid
npm install recharts react-dropzone axios
npx tailwindcss init -p
```

## How to Run

```bash
npm start
```

Then open: http://localhost:3000

## Key Features
- Authentication with fitness goals setup
- Log workouts (exercise, sets, reps, weight)
- Upload progress photos
- Meal planner with calorie counter (Nutrition API)
- Progress dashboard with charts
- Exercise library by category
- Custom workout routines builder
- BMI calculator & fitness tips
- Achievement badges system

## Color Theme
Orange (#EA580C)

## Checklist

- [ ] React app created and running
- [ ] Tailwind CSS configured
- [ ] React Router set up with all routes
- [ ] AuthContext with fitness goals
- [ ] WorkoutContext with CRUD
- [ ] MealContext with calorie tracking
- [ ] Login/Signup with goals setup
- [ ] Dashboard with summary charts
- [ ] Workout logging functional
- [ ] Progress photo upload
- [ ] Meal planner working
- [ ] Nutrition API integration
- [ ] Exercise library page
- [ ] Custom routines builder
- [ ] BMI calculator
- [ ] Achievement badges
- [ ] Responsive design
- [ ] Loading states & error handling
- [ ] Code committed to GitHub

## Testing

1. Test signup with fitness goals
2. Test logging a workout
3. Test editing/deleting workouts
4. Test uploading progress photos
5. Test adding meals and calorie calculation
6. Test dashboard charts display
7. Test exercise library browsing
8. Test BMI calculator
9. Test on mobile viewport
10. Test page refresh (localStorage persistence)

## Notes

Add any additional notes, challenges faced, or extra features implemented here.
