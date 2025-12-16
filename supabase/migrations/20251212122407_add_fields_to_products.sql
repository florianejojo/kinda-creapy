alter table if exists public.products
    add technique text default '',
    add artist text default '',
    add height_mm int4,
    add width_mm int4,
    add is_visible boolean default true,
    add category text default '';
