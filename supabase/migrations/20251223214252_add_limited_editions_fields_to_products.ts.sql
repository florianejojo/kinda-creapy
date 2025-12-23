alter table if exists public.products
    add height_limited_mm int4,
    add width_limited_mm int4,
    add price_limited int4 default 0,
    add sold_limited boolean default false;
