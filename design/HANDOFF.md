# Week 5 — Handoff notes (SIS 2 starter design)

Routes (from the prototype):
Posts page
Individual post page
404 page
Header navigation: Home, Contact, Posts
Exact route URLs should be verified in Prototype mode.

Components → React files:
PostCard → src/components/PostCard.tsx
Button → src/components/ui/Button.tsx
Tag → src/components/ui/Tag.tsx
Header → src/components/Header.tsx

Button variants → prop:
variant = 'primary' | 'secondary'

PostCard layout:
Direction: vertical
Gap: 12px
Padding: 16px
Radius: 8px
Width: 320px
Height: 386px (Hug)
Alignment: center

Breakpoint change:
Phone: 1 column, 390px screen width.
Desktop: 3 columns, 1440px screen width.
Header: stacked and centered on mobile, horizontal on desktop.
Mobile navigation: Home, Contact, Posts displayed vertically.
Desktop navigation: Home, Contact, Posts displayed horizontally.
Mobile frame: vertical auto layout, 16px gap, 16px padding.
Responsive breakpoint: 640px (specified in the assignment).


Tokens (all ten):
color/primary = #1D4ED8
color/on-primary = #FFFFFF
color/text = #1F2937
color/text-muted = #9CA3AF
color/surface = #FFFFFF
color/border = #D1D5DB
space/2 = 8px
space/4 = 16px
space/6 = 24px
radius/md = 8px