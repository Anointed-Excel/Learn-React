# Student 2: ShopLocal - Marketplace App

**Complexity:** High
**Student:** [Your Name Here]

## About
A full-featured e-commerce marketplace where vendors list products and customers shop.

## Routes
- `/login` - Login page
- `/products` - Browse all products
- `/product/:id` - Individual product details
- `/cart` - Shopping cart
- `/checkout` - Multi-step checkout
- `/orders` - Order history & tracking
- `/dashboard` - Seller analytics dashboard
- `/wishlist` - Saved products
- `/profile` - User profile

## Contexts
- **AuthContext** - User authentication (Vendor/Customer)
- **CartContext** - Shopping cart state
- **ProductContext** - Product CRUD operations
- **OrderContext** - Order management

## Dependencies

```bash
npx create-react-app .
npm install react-router-dom tailwindcss postcss autoprefixer
npm install react-icons react-toastify uuid
npm install react-dropzone lodash.debounce recharts
npx tailwindcss init -p
```

## How to Run

```bash
npm start
```

Then open: http://localhost:3000

## Key Features
- Vendor & Customer authentication
- Product listings with multiple images
- Shopping cart with quantity management
- Multi-step checkout process
- Order history & tracking status
- Live search with debouncing
- Product reviews & ratings
- Wishlist feature
- Seller dashboard with analytics
- Currency conversion API integration

## Color Theme
Emerald (#059669)

## Checklist

- [ ] React app created and running
- [ ] Tailwind CSS configured
- [ ] React Router set up with all routes
- [ ] AuthContext with dual roles (Vendor/Customer)
- [ ] CartContext with add/remove/quantity
- [ ] ProductContext with CRUD
- [ ] OrderContext with status tracking
- [ ] Product listing page with grid/list view
- [ ] Search with debouncing
- [ ] Filter by category, price, rating
- [ ] Product detail page with image gallery
- [ ] Shopping cart functional
- [ ] Multi-step checkout
- [ ] Order history page
- [ ] Seller dashboard with charts
- [ ] Wishlist feature
- [ ] Review & rating system
- [ ] Currency conversion API
- [ ] Responsive design
- [ ] Loading states & error handling
- [ ] Code committed to GitHub

## Testing

1. Test signup as Vendor and Customer
2. Test creating a product listing (as Vendor)
3. Test browsing and searching products
4. Test adding items to cart
5. Test quantity management in cart
6. Test full checkout flow
7. Test order history and status
8. Test wishlist add/remove
9. Test product reviews
10. Test seller dashboard
11. Test on mobile viewport
12. Test page refresh (localStorage persistence)

## Notes

Add any additional notes, challenges faced, or extra features implemented here.
