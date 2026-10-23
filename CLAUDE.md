# Kinda Creapy

Site vitrine et boutique d'un collectif d'artistes. Next.js 16 (App Router), Supabase (Postgres + Storage), Stripe, Tailwind 4, Zustand.

## Commandes

```bash
supabase start        # base locale (Docker), applique les migrations
yarn dev              # http://localhost:3000
yarn typecheck        # tsc --noEmit
yarn lint             # eslint .
yarn build
yarn db:types         # régénère lib/database.types.ts depuis la base locale
```

## Architecture cible : feature-first

Le refactoring est en cours, piloté par `docs/plans/2026-10-23-cleanup-feature-first-design.md`.
Tout nouveau code suit la structure cible. On ne migre l'ancien code que dans le lot prévu pour lui.

```
app/                    routing Next uniquement : page.tsx, layout.tsx, route.ts — fins, sans logique métier
src/<domaine>/          products, pricing, artists, checkout, auth
  ui/                   composants et hooks du domaine ("use client" ici)
  server/               requêtes Supabase/Stripe, server actions, schémas zod ("server-only")
  types.ts              types du domaine
src/shared/             ui/ (composants génériques), lib/ (clients supabase, stripe, env)
supabase/migrations/    seule source de vérité du schéma
```

Règles :

- Supabase et Stripe ne s'appellent que depuis `src/*/server/`, jamais depuis un composant, un store ou une page client.
- Les mutations passent par une server action ou une route `app/api/*`. Toute route admin passe par `withAdminAuth`.
- La validation serveur (zod) est obligatoire. La validation client est un confort.
- Un domaine n'importe pas l'intérieur d'un autre domaine. Ce qui est partagé va dans `src/shared/`.
- Fichiers en kebab-case, exports nommés.
- Pas de code commenté ni de fichier bouchon : on supprime, git garde l'historique.

## Base de données : règles strictes

1. Tout changement de schéma = une **nouvelle** migration (`supabase migration new <nom>`). On ne modifie jamais une migration déjà mergée.
2. Après chaque migration : `supabase db reset` (rejoue tout sur la base locale) puis `yarn db:types`, et on commite les types.
3. Les clients Supabase sont typés avec `Database` : une table ou colonne absente des migrations ne compile pas. Ne jamais contourner avec `as any` ou `as unknown as`, sauf l'exception documentée dans `app/checkout/product.api.ts`.
4. Toute nouvelle table : RLS activée et policies explicites dans la même migration.
5. Un changement de données (et pas seulement de schéma) s'écrit en SQL dans la migration, jamais à la main en prod.
6. Merger sur `main` applique les migrations en prod (`.github/workflows/supabase-migrations.yml`). Ne jamais lancer `supabase db push` soi-même.

## Workflow

- Une branche et une PR par lot ou sous-lot, avec une seule intention par PR (déplacer **ou** changer le comportement, jamais les deux).
- Avant d'ouvrir la PR : `yarn typecheck && yarn lint && yarn build`, puis les agents `code-reviewer` et, si `supabase/` a changé, `migration-reviewer`.
- La CI (`.github/workflows/ci.yml`) doit être verte. Seule la propriétaire du repo merge.
- Commits au format conventional (`feat:`, `fix:`, `refactor:`, `chore:`), en français ou en anglais.
