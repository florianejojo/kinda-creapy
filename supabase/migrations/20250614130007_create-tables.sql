-- Table : categories
create table public.categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text
);

-- Table : versions
create table public.versions (
  id serial primary key,
  label text not null
);

-- Table : images_types
create table public.images_types (
  id serial primary key,
  name text not null
);

-- Table : products
create table public.products (
  id text primary key,
  title text not null,
  description text,
  is_featured boolean default false
);

-- Table : stocks
create table public.stocks (
  id bigserial primary key,
  product_id text not null references public.products(id) on delete cascade,
  quantity numeric not null default 0,
  version_id int8 not null references public.versions(id),
  stripe_price_id_test text,
  stripe_price_id_live text
);

-- Table : images
create table public.images (
  id uuid primary key default gen_random_uuid(),
  url text not null,
  alt text,
  product_id text not null references public.products(id) on delete cascade,
  name text,
  type int8 references public.images_types(id)
);
