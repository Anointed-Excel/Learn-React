# Student 1: EduShare - Study Resource Platform

**Complexity:** Medium
**Student:** [Your Name Here]

## About
A platform where students and tutors share, browse, and rate study resources.

## Routes
- `/login` - Login page
- `/signup` - Signup page
- `/home` - Browse all resources
- `/upload` - Upload new resource
- `/profile` - User profile & dashboard
- `/resource/:id` - Individual resource details
- `/messages` - View messages

## Contexts
- **AuthContext** - User authentication state
- **ResourceContext** - Resources CRUD operations
- **NotificationContext** - Toast/notification management

## Dependencies

```bash
npx create-react-app .
npm install react-router-dom tailwindcss postcss autoprefixer
npm install react-icons react-toastify uuid
npm install react-dropzone react-star-ratings
npx tailwindcss init -p
```

## How to Run

```bash
npm start
```

Then open: http://localhost:3000

## Key Features
- Login/Signup with role selection (Student/Tutor)
- Upload study materials with file preview
- Browse/search resources by subject & grade
- Bookmark/favorite resources
- Rating & review system
- Contact tutor via messages
- User profile with dashboard

## Color Theme
Indigo (#4F46E5)

## Checklist

- [ ] React app created and running
- [ ] Tailwind CSS configured
- [ ] React Router set up with all routes
- [ ] AuthContext with login/signup/logout
- [ ] ResourceContext with CRUD operations
- [ ] Login/Signup pages working
- [ ] Protected routes implemented
- [ ] Home page with resource listing
- [ ] Search and filter functional
- [ ] Upload page with file preview
- [ ] Individual resource page
- [ ] Rating & review system
- [ ] Bookmark feature
- [ ] Messages page
- [ ] Profile page with dashboard
- [ ] Responsive design
- [ ] Loading states & error handling
- [ ] Toast notifications
- [ ] Code committed to GitHub

## Testing

1. Test signup with Student and Tutor roles
2. Test login with valid/invalid credentials
3. Test uploading a resource
4. Test browsing and searching resources
5. Test bookmarking a resource
6. Test rating and reviewing
7. Test sending a message
8. Test profile editing
9. Test on mobile viewport
10. Test page refresh (localStorage persistence)

## Notes

Add any additional notes, challenges faced, or extra features implemented here.
