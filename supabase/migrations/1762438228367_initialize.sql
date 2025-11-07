create table public.products (
  id text primary key,
  title text not null,
  description text,
  images text[] not null default '{}',
  price numeric not null,
  sold boolean default false
);

insert into storage.buckets (id, name, public)
values ('products', 'products', true);
