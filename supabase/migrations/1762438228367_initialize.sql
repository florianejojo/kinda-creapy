create table public.products (
  id text primary key,
  title text not null,
  description text,
  images text[] not null default '{}',
  price numeric not null,
  sold boolean default false
);

alter table products enable row level security;
create policy "Public can read products" on products for select to public using (true);

insert into storage.buckets (id, name, public)
values ('products', 'products', true);
