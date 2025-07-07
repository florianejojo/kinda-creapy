## Getting Started

First, run the development server:

```bash

yarn dev
supabase start

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

# Project

## Personal objectives

- Implement and find a good balance between clean archi and simple archi
- Implement well understandable, maintenable, scalable archi using known principles
  - SOLID
  - clean archi
  - software craftmanship
- Try stripe
- Try supabase
- Make a useful project for someone

## Branch

### v2-with-payments

- Buy products and get delivered
- Add products to sell
- See orders

#### New stack :

- Supabase
- Stripe
- Next js

#### Archi :

- app/\_src/domain/ui/Component
  - View only
- app/\_src/domain/ui/useComponentViewModel
  - Get data from store
  - Call product useCases
  - Gather view Logic
- app/\_src/domain/features/featureName

- app/page/page.tsx
  - Highest level of page
-
