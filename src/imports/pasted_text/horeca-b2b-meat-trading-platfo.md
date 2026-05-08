Horeca B2B Meat Trading Platform — v0 Prompt

Prompt (paste this into Figma Make)

Build a mobile-first B2B meat trading platform called "RME" (or use a similar professional name) for the Horeca (Hotel, Restaurant, Catering) industry. The app is always rendered in a mobile viewport — even on desktop, the layout is constrained to a max-width of 390px, centered on the page with a neutral background outside the phone frame.

Tech Stack & Setup
Framework: Next.js (App Router)
Styling: Tailwind CSS
UI components: shadcn/ui — initialised with the b0 preset
Icons: Hugeicons (as set by the preset) — import from hugeicons-react
State: React useState / useContext (no backend needed — use realistic hardcoded mock data)
Fonts: Inter for both heading and body (as set by the preset via next/font/google)
Project initialisation command (run this first before any other step):
pnpm dlx shadcn@latest init --preset b0 --template next

This applies the full preset automatically — do not manually configure components.json or globals.css after running it.

Preset b0 Configuration (do not override these)
The --preset b0 sets the following — respect all of these throughout the entire codebase:
Setting
Value
Style
Luma
Base Color
Taupe
Theme
Red
Chart Color
Taupe
Heading font
Inter
Body font
Inter
Icon library
Hugeicons
Border radius
Default
Menu style
Default / Solid
Menu accent
Subtle

Use shadcn's Luma style, Taupe base, and Red theme CSS variables as they come from the preset. Do not override --primary, --background, --card, --border, or any other CSS variable from globals.css — the preset values are intentional and must be preserved.
The preset's Red theme means --primary will be a red tone — use this as the main CTA and interactive color throughout the app (buttons, active nav tab, badges, links). Do not substitute green or amber as the primary color.

Global Layout Rules
The entire app must render inside a centered phone shell at max-width: 390px, min-height: 100dvh; on desktop this shell floats center with a dark taupe/charcoal background (#1C1917 or similar) filling the rest of the viewport
Bottom navigation bar is fixed at the bottom of the phone shell (not the browser viewport) with 5 tabs: Home, Catalog, Cart (with badge), Orders, Account
All pages scroll within the phone shell, not the full browser
Safe area padding applied at top and bottom (simulate notch/home bar)
Use Hugeicons throughout — never use Lucide React icons

Design Direction
Aesthetic: Lean on what the preset gives you — Luma style with Taupe base reads as clean, warm, and professional. The Red theme accent makes CTAs pop without feeling aggressive. Inter at all weights keeps it sharp and legible on a small screen. Let the preset do the heavy lifting; focus on layout quality, information hierarchy, and whitespace.
Color usage guidelines (all via CSS variables from the preset, no hardcoded hex):
Primary actions (buttons, active states, links): bg-primary / text-primary
Page backgrounds: bg-background
Cards and surfaces: bg-card
Borders: border-border
Muted text: text-muted-foreground
Destructive actions (delete, sign out): text-destructive
Success states (In Stock badge): use bg-green-100 text-green-800 (Tailwind, since preset doesn't define a success token)
Warning states (Low Stock): bg-amber-100 text-amber-800
Danger/Out of Stock: bg-destructive/10 text-destructive

Pages & Features
1. Login Page (/login)
Full-screen inside the phone shell
Logo/brand mark at top (text-based is fine)
"Welcome back" headline in display font
Two inputs: User ID or Email, Password
Primary CTA button: "Sign In" — use shadcn <Button> (variant default, which uses bg-primary from the preset Red theme)
Below the form: a subtle text link — "No account? Request access via Google Form →" — this opens an external link (use https://forms.google.com as placeholder href)
Small note below: "Credentials are issued by admin after form approval."
No social login, no "forgot password" flow needed for demo
2. Home / Dashboard (/)
Greeting header: "Good morning, [Company Name]" with today's date
Horizontal scrollable category chips: All · Beef · Chicken · Eggs · Other
Featured banner: a full-width card (image placeholder with brand color fill) promoting a featured product or weekly deal
Product grid: 2-column grid of product cards showing: product image placeholder, name, unit, price, stock badge (In Stock / Low Stock / Out of Stock), and an "Add" button
Pull-to-refresh feel (static is fine for demo)
3. Catalog Page (/catalog)
Search bar at top
Category filter chips (horizontal scroll): All · Beef · Chicken · Eggs · Other
Sort button (Price, Name — static for demo)
Full product list — use at least 12 mock products across all categories:
Beef: Wagyu Sirloin MS4+, Beef Tenderloin A4, Beef Rib Eye, Beef Brisket, Ground Beef Premium
Chicken: Chicken Breast IQF, Whole Chicken Fresh, Chicken Thigh Boneless, Chicken Wings
Eggs: Egg Omega-3, Egg Kampung, Egg Pasteurized
Other: Lamb Rack NZ, Duck Breast
Each product card: image placeholder, name, weight/unit, price in IDR (Rp format), stock badge, Add to Cart button
Tapping a product goes to Product Detail
4. Product Detail Page (/catalog/[id])
Large image placeholder at top (full-width, ~40% of screen height) with back button overlay
Product name (display font, large), category badge, stock status badge
Price in IDR — bold and prominent
Description: 2–3 lines of mock text about the product (grade, origin, storage)
Quantity selector: minus / number / plus with min order enforcement
Minimum order note (e.g. "Min. order: 5 kg")
Sticky bottom bar with total price and "Add to Cart" button
5. Cart Page (/cart)
Header: "My Cart" with item count
Delivery Address section (appears BEFORE the item list):
Shows selected default address in a card: label, street, contact person
"Change address" link that opens an address picker bottom sheet (modal) listing all saved addresses
If no address saved: prompt to add one
Cart items list: each item shows name, qty controls (−/qty/+), unit price, line total, and a delete button
Order notes: optional text input
Order summary: Subtotal, Delivery fee (flat Rp 150.000), Total
"Place Order" CTA button — use shadcn <Button> default variant (bg-primary)
Empty cart state: illustration placeholder + "Your cart is empty" + "Browse catalog" button
6. Order Confirmation Page (/orders/confirmation)
Full-screen success state inside the phone shell
Large checkmark icon in text-primary color (from Hugeicons, e.g. CheckmarkCircle02Icon)
"Order Placed!" heading
Invoice number (e.g. INV/2025/05/00231)
Summary: delivery address, item count, total amount
Note: "An invoice has been generated. Payment details will be communicated separately."
Two buttons: "View Invoice" and "Back to Home"
7. Orders & Invoice Page (/orders)
List of past orders with: invoice number, date, item count, total, status badge (Processing / Delivered / Cancelled)
Tapping an order goes to Invoice Detail
8. Invoice Detail Page (/orders/[id])
Clean invoice layout:
Platform name + logo top left
Invoice number + issue date top right
"Bill to:" section: company name, address
"Deliver to:" section: delivery address used for this order
Itemized table: product name, qty, unit price, line total
Subtotal, delivery fee, Total Due (prominent)
Status badge: Awaiting Payment / Paid
Dashed info box: "Payment is processed outside this platform. Bank transfer details sent via email."
"Download PDF" button (static, no real download needed for demo)
9. Saved Addresses Page (/account/addresses)
List of saved addresses, each in a card: label (e.g. "Main Warehouse"), full address, contact person + phone
Default address marked with a green "Default" badge
Each card has Edit and Delete actions (can be swipe actions or icon buttons)
"+ Add New Address" button at bottom
Add/Edit address bottom sheet or new page with fields: Label, Full Address, Postal Code, Contact Person Name, Phone Number, checkbox "Set as default"
10. Account Page (/account)
Company avatar (initials circle using bg-primary/10 text-primary)
Company name and email
Menu list items with icons:
Saved Addresses (/account/addresses)
Invoices & Orders (/orders)
Company Profile (static page with company info fields, read-only for demo)
Change Password (static form with current/new/confirm password inputs)
Sign Out (red text, navigates to /login)

Mock Data
Populate a lib/mockData.ts (or .js) file with:
1 user: { company: "PT Maju Bersama Kuliner", email: "maju@kuliner.co.id", userId: "MB-00123" }
2 saved addresses: Main Warehouse (default) and a restaurant branch
14 products across all categories with name, category, price (IDR), unit, minOrder, stock status, and a mock description
3 past orders with invoices (1 Processing, 2 Delivered) each containing 2–4 line items

Navigation & Routing
Bottom nav is always visible on authenticated pages, hidden on /login
Active tab highlighted using text-primary (the preset's Red theme primary)
Cart tab shows a numeric badge when items exist
Use Hugeicons for all nav tab icons (e.g. Home01Icon, ShoppingCart01Icon, PackageIcon, UserIcon, GridViewIcon or equivalents from hugeicons-react)
Page transitions: simple fade or slide-up (CSS transition is fine)

Additional Details
All prices formatted as Rp X.XXX.XXX (Indonesian Rupiah with dot separators)
Dates formatted as DD MMM YYYY (e.g. 06 Mei 2025) — Indonesian locale or English is fine
Stock badges: use shadcn <Badge> — green variant for In Stock, amber for Low Stock, destructive for Out of Stock
No real authentication — the login form can simply navigate to / on submit
No payment processing anywhere in the app — the platform ends at invoice generation
Image placeholders: use a bg-muted div with centered muted icon (Hugeicons), no external image URLs needed
All interactive icons must come from hugeicons-react — never import from lucide-react

Deliverables
All pages listed above, fully navigable
Realistic mock data throughout (no "Lorem Ipsum" for product names or prices)
Responsive only within the 390px phone shell — do not build a desktop layout
Production-quality code, clean component structure, reusable components where logical

