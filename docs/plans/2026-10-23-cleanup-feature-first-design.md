# Nettoyage et passage en feature-first

Date : 2026-10-23

## Pourquoi

Le repo mélange trois architectures :

- des services OOP dans `services/`, `models/` et `stores/` ;
- du code « tout dans `app/` » ;
- un début de DDD hexagonal dans `src/pricing`, présent seulement sur `feat/add-prints-prices`.

Il contient aussi du code mort, des scripts liés à une autre machine, et du code qui interroge des tables absentes des migrations (`stocks`, `versions`, `images`, `prices`). On vise une structure feature-first simple, décrite dans `CLAUDE.md`, atteinte par petites PR vérifiées automatiquement.

## Principe

Ce qui doit être garanti est vérifié par des machines (CI, types, hooks). Ce qui demande du jugement est confié aux agents de review. Une PR = une intention. Seule la propriétaire du repo merge sur `main`, parce que merger applique les migrations en prod.

## Lots

### Lot 0 — Filets de sécurité (branche `chore/lot-0-safety-nets`)

- [x] CI sur PR : migrations rejouées sur base vide, types à jour, `tsc`, lint, build
- [x] Types Supabase générés (`lib/database.types.ts`) et clients typés
- [x] Lint réparé (Next 16 a supprimé `next lint`) en mode cliquet : les règles déjà enfreintes passent en warning
- [x] Version du CLI Supabase figée dans le workflow de prod
- [x] `CLAUDE.md`, agents `code-reviewer` et `migration-reviewer`, hook Stop `tsc`, permissions interdites
- [ ] Protection de branche `main` sur GitHub (manuel, voir ci-dessous)

### Lot 1 — Sécurité

- Une seule fonction de vérification admin (JWT + `role === "admin"`), utilisée par le middleware et `withAdminAuth`
- Toutes les routes `app/api/*` qui écrivent passent par `withAdminAuth`
- `lib/stripe.ts` : vrai `import "server-only"`
- `/api/stripe/checkout` : ne plus faire confiance à un `priceId` envoyé par le client

### Lot 2 — Suppression du code mort (suppressions uniquement)

`lib/stripe.js`, `imageImports.js`, `generateImagesImports.js`, `reduceImgQuality.js`, le script npm `images`, `create_product.tsx`, `product_category_form.tsx`, `product_artist_form.tsx`, `api/stripe/price`, `api/stripe/utils`, `specs.md`, `..bfg-report/`, les enums et types inutilisés de `shared.types.ts`, les fichiers fantômes dans `tsconfig.json`, le formulaire commenté de `contact`. On décide aussi du sort de `scripts/generateMaskCopyRights.js` (le corriger ou le supprimer).

### Lot 3 — Déplacements vers `src/<domaine>/` (aucun changement de comportement)

Une PR par domaine : `shared` → `auth` → `artists` → `products` → `checkout`. Fichiers renommés en kebab-case, exports nommés. Disparition de `services/`, `models/`, `utils/` et des classes `@CatchErrors`/`NavigationService`. Les règles de lint en warning repassent en error.

### Lot 4 — Bugs fonctionnels

Catégories (un seul enum, des produits de la base filtrables), suppression de l'œuvre codée en dur, prix des tirages codés en dur, gestion d'erreur du checkout, pages `return` et `shop/[productId]`.

### Lot 5 — Modèle de données `variants` (brainstorming dédié)

Reprend `feat/add-prints-prices`. Il faudra décider comment migrer les colonnes à plat (`price_limited`, `sold_limited`…) vers `variants`, avec une migration de données, et quoi faire du checkout (`stocks` n'existe pas).

## Questions ouvertes

1. **Dérive de la prod** : les tables `stocks`, `versions` et `images` existent-elles en prod (créées à la main) ? À vérifier dans le dashboard Supabase ou avec `supabase db diff --linked`. Si oui, il faut les rapatrier dans une migration avant le lot 4.
2. Le checkout est inaccessible depuis le site : le garder (lot 5) ou le supprimer (lot 2) ?
3. `app/_lexicon` n'est pas routé (préfixe `_`) : page à publier ou à supprimer ?

## Protection de `main` (à faire une fois, dans l'interface GitHub)

Settings → Branches → Add rule (`main`) : cocher _Require a pull request before merging_ et _Require status checks to pass_, puis sélectionner le check `checks` (il n'apparaît qu'après le premier passage de la CI).
