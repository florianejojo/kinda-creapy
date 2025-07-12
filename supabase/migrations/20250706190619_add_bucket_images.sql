
-- Create bucket
insert into storage.buckets (id, name, public)
values ('images', 'images', true);

-- Insert policies for the bucket
create policy "Allow insert images for everyone in images bucket"
on storage.objects
for insert
with check (bucket_id = 'images')
