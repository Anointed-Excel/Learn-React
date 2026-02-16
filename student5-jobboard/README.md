# Student 5: JobBoard - Freelance Job Platform

**Complexity:** High
**Student:** [Your Name Here]

## About
A freelance marketplace connecting clients who post jobs with freelancers who apply.

## Routes
- `/login` - Login page
- `/jobs` - Browse all jobs
- `/job/:id` - Individual job details
- `/post-job` - Post new job (Client)
- `/applications` - View applications
- `/messages` - In-app messaging
- `/portfolio` - Freelancer portfolio
- `/profile` - User profile
- `/saved` - Saved jobs
- `/proposals/:id` - Proposal details

## Contexts
- **AuthContext** - User authentication (Freelancer/Client)
- **JobContext** - Job CRUD operations
- **MessageContext** - In-app messaging
- **ApplicationContext** - Proposal management

## Dependencies

```bash
npx create-react-app .
npm install react-router-dom tailwindcss postcss autoprefixer
npm install react-icons react-toastify uuid
npm install react-dropzone lodash.debounce axios
npx tailwindcss init -p
```

## How to Run

```bash
npm start
```

Then open: http://localhost:3000

## Key Features
- Dual authentication (Freelancer/Client)
- Post jobs with file attachments
- Browse jobs with advanced filters
- Apply to jobs (resume + cover letter)
- Proposal management system
- In-app messaging
- Portfolio section with work samples
- Two-way review & rating system
- Payment calculator
- Saved jobs & application tracking
- Currency conversion API integration

## Color Theme
Violet (#7C3AED)

## Checklist

- [ ] React app created and running
- [ ] Tailwind CSS configured
- [ ] React Router set up with all routes
- [ ] AuthContext with dual roles
- [ ] JobContext with CRUD
- [ ] MessageContext with conversations
- [ ] ApplicationContext with proposals
- [ ] Job listing page with filters
- [ ] Job detail page
- [ ] Job posting (Client)
- [ ] Application flow (Freelancer)
- [ ] Proposal management
- [ ] Messaging system
- [ ] Portfolio section
- [ ] Review & rating system
- [ ] Payment calculator
- [ ] Saved jobs feature
- [ ] Currency API integration
- [ ] Responsive design
- [ ] Loading states & error handling
- [ ] Code committed to GitHub

## Testing

1. Test signup as Freelancer and Client
2. Test posting a job (as Client)
3. Test browsing and searching jobs
4. Test applying to a job (as Freelancer)
5. Test proposal management
6. Test messaging system
7. Test portfolio upload
8. Test review and rating
9. Test payment calculator
10. Test saved jobs
11. Test on mobile viewport
12. Test page refresh (localStorage persistence)

## Notes

Add any additional notes, challenges faced, or extra features implemented here.
