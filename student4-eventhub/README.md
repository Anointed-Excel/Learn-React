# Student 4: EventHub - Event Management Platform

**Complexity:** High
**Student:** [Your Name Here]

## About
A platform for creating, discovering, and managing events with ticketing and discussion features.

## Routes
- `/login` - Login page
- `/events` - Browse all events
- `/event/:id` - Individual event details
- `/create-event` - Create new event (Organizer)
- `/my-events` - User's events
- `/tickets` - View purchased tickets
- `/chat/:eventId` - Event discussion board
- `/calendar` - Calendar view of events
- `/dashboard` - Organizer analytics dashboard

## Contexts
- **AuthContext** - User authentication (Organizer/Attendee)
- **EventContext** - Event CRUD operations
- **ChatContext** - Discussion board messages
- **NotificationContext** - Event notifications & reminders

## Dependencies

```bash
npx create-react-app .
npm install react-router-dom tailwindcss postcss autoprefixer
npm install react-icons react-toastify uuid
npm install qrcode.react react-calendar axios
npx tailwindcss init -p
```

## How to Run

```bash
npm start
```

Then open: http://localhost:3000

## Key Features
- Organizer & Attendee authentication
- Create events with banner upload
- Browse events by category, date, location
- Event registration with ticket selection
- QR code generation for tickets
- Event discussion board
- Calendar view of registered events
- Notification system
- Organizer dashboard with analytics
- Weather API integration for event dates

## Color Theme
Rose (#E11D48)

## Checklist

- [ ] React app created and running
- [ ] Tailwind CSS configured
- [ ] React Router set up with all routes
- [ ] AuthContext with dual roles
- [ ] EventContext with CRUD
- [ ] ChatContext with messaging
- [ ] NotificationContext with alerts
- [ ] Event browsing with filters
- [ ] Event creation with banner upload
- [ ] Event registration flow
- [ ] QR code ticket generation
- [ ] Discussion board functional
- [ ] Calendar view working
- [ ] Notification system
- [ ] Organizer dashboard with charts
- [ ] Weather API integration
- [ ] Responsive design
- [ ] Loading states & error handling
- [ ] Code committed to GitHub

## Testing

1. Test signup as Organizer and Attendee
2. Test creating an event with banner
3. Test browsing and searching events
4. Test registering for an event
5. Test QR code ticket generation
6. Test event discussion board
7. Test calendar view
8. Test notification system
9. Test organizer dashboard
10. Test weather display for events
11. Test on mobile viewport
12. Test page refresh (localStorage persistence)

## Notes

Add any additional notes, challenges faced, or extra features implemented here.
