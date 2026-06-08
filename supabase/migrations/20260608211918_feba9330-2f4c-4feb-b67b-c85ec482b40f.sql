
-- Roles
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

CREATE TABLE public.user_roles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role)
$$;

CREATE POLICY "users read own roles" ON public.user_roles FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "admins manage roles" ON public.user_roles FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- updated_at helper
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER LANGUAGE plpgsql SET search_path = public AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END; $$;

-- Listings
CREATE TYPE public.listing_status AS ENUM ('for_sale', 'pending', 'just_sold');

CREATE TABLE public.listings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  address TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  zip TEXT,
  price NUMERIC NOT NULL DEFAULT 0,
  beds INTEGER NOT NULL DEFAULT 0,
  baths NUMERIC NOT NULL DEFAULT 0,
  sqft INTEGER NOT NULL DEFAULT 0,
  status public.listing_status NOT NULL DEFAULT 'for_sale',
  description TEXT,
  cover_image_url TEXT,
  gallery JSONB NOT NULL DEFAULT '[]'::jsonb,
  featured BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.listings TO anon, authenticated;
GRANT ALL ON public.listings TO service_role;
ALTER TABLE public.listings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "public read listings" ON public.listings FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "admins write listings" ON public.listings FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE TRIGGER trg_listings_updated BEFORE UPDATE ON public.listings FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Contact messages
CREATE TABLE public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT INSERT ON public.contact_messages TO anon, authenticated;
GRANT ALL ON public.contact_messages TO service_role;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anyone can submit contact" ON public.contact_messages FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "admins read contact" ON public.contact_messages FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "admins delete contact" ON public.contact_messages FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

-- Seed dummy listings
INSERT INTO public.listings (title, address, city, state, zip, price, beds, baths, sqft, status, description, cover_image_url, gallery, featured) VALUES
('Modern Hillside Retreat', '1204 Travis Heights Blvd', 'Austin', 'TX', '78704', 1250000, 4, 3, 2850, 'for_sale', 'Architect-designed home with floor-to-ceiling windows and downtown skyline views.', 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&auto=format&fit=crop&q=80', '[]'::jsonb, true),
('Sunlit Bungalow in Clarksville', '908 W 12th St', 'Austin', 'TX', '78703', 879000, 3, 2, 1740, 'for_sale', 'Restored 1920s bungalow steps from Pease Park with a chef''s kitchen.', 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&auto=format&fit=crop&q=80', '[]'::jsonb, true),
('New-Build Townhome, East Side', '2310 E Cesar Chavez St', 'Austin', 'TX', '78702', 695000, 3, 2.5, 1980, 'for_sale', 'Three-story new construction with rooftop deck and two-car garage.', 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&auto=format&fit=crop&q=80', '[]'::jsonb, true),
('Ranch on 2 Acres', '550 Hamilton Pool Rd', 'Dripping Springs', 'TX', '78620', 1495000, 5, 4, 3620, 'pending', 'Single-story ranch with pool, casita, and Hill Country views.', 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&auto=format&fit=crop&q=80', '[]'::jsonb, false),
('Downtown High-Rise Condo', '301 W Ave #2204', 'Austin', 'TX', '78701', 845000, 2, 2, 1310, 'for_sale', '22nd-floor corner unit with panoramic Lady Bird Lake views.', 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&auto=format&fit=crop&q=80', '[]'::jsonb, false),
('Mueller Craftsman', '4501 Berkman Dr', 'Austin', 'TX', '78723', 925000, 4, 3, 2410, 'just_sold', 'Sold in 6 days, $40K over list. Walkable Mueller location.', 'https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?w=1200&auto=format&fit=crop&q=80', '[]'::jsonb, false);
