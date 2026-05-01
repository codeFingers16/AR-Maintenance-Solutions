import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  Phone, Mail, MapPin, MessageCircle, Wrench, Home, Hammer, DoorOpen, Building2,
  ShieldCheck, BadgeDollarSign, HandshakeIcon, MapPinned, Star, FileCheck,
  PhoneCall, ClipboardList, Search, Cog, Smile, Menu, X, ArrowRight
} from "lucide-react";
import {FaFacebook as Facebook} from "react-icons/fa";
import {FaInstagram as Instagram } from "react-icons/fa";
import heroImg from "@/assets/hero-welding.jpg";
import aboutImg from "@/assets/team-roofing.jpg";
import galleryGateWhite from "@/assets/gallery-gate-white.jpg";
import galleryFenceGrey from "@/assets/gallery-fence-grey.jpg";
import galleryGateCharcoal from "@/assets/gallery-gate-charcoal.jpg";
import galleryGateWood from "@/assets/gallery-gate-wood.jpg";
import galleryFenceBeige from "@/assets/gallery-fence-beige.jpg";
import teamAssembly from "@/assets/team-assembly.jpg";
import teamWelding from "@/assets/team-welding.jpg";
import teamRoofing from "@/assets/team-roofing.jpg";

const galleryItems = [
  { src: galleryGateCharcoal, label: "Charcoal Sliding Gate" },
  { src: galleryGateWhite, label: "White Composite Gate" },
  { src: galleryGateWood, label: "Timber & Steel Gate" },
  { src: galleryFenceGrey, label: "Grey Privacy Fencing" },
  { src: galleryFenceBeige, label: "Beige Boundary Fence" },
  { src: teamAssembly, label: "Panel Assembly On-Site" },
  { src: teamWelding, label: "Custom Frame Welding" },
  { src: teamRoofing, label: "Roofing Installation" },
];

const PHONE = "0749983726";
const PHONE_DISPLAY = "074 998-3726";
const EMAIL = "ar.maintenance01@gmail.com";
const WHATSAPP = "27749983726";

const services = [
  { icon: Wrench, title: "Welding", desc: "Custom metalwork, gates, burglar bars and structural welding built to last." },
  { icon: Home, title: "Carports", desc: "Durable carport installations that protect your vehicle in all weather." },
  { icon: Hammer, title: "Roofing", desc: "Roof repairs, replacements and waterproofing done right the first time." },
  { icon: DoorOpen, title: "Sliding Gates", desc: "Manual and motorised sliding gate solutions for home and business." },
  { icon: Building2, title: "Property Maintenance", desc: "General repairs and upkeep to keep your property in top condition." },
];

const whyUs = [
  { icon: ShieldCheck, label: "Quality Workmanship" },
  { icon: BadgeDollarSign, label: "Fair & Competitive Pricing" },
  { icon: HandshakeIcon, label: "Honest Service" },
  { icon: MapPinned, label: "Local & Community Focused" },
  { icon: Star, label: "Customer Satisfaction Focused" },
  { icon: FileCheck, label: "Free Quotations" },
];

const badges = [
  "Family-Owned Business", "CIPC Registered", "Quality Workmanship Guaranteed",
  "Free Quotations", "Locally Trusted", "Customer Satisfaction Focused",
];

const steps = [
  { icon: PhoneCall, title: "Contact Us" },
  { icon: ClipboardList, title: "Free Quote" },
  { icon: Search, title: "Site Assessment" },
  { icon: Cog, title: "Work Completed" },
  { icon: Smile, title: "Customer Satisfaction" },
];

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#why", label: "Why Us" },
  { href: "#gallery", label: "Our Work" },
  { href: "#contact", label: "Contact" },
];

const Index = () => {
  const { toast } = useToast();
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      toast({ title: "Please fill in required fields", variant: "destructive" });
      return;
    }
    const subject = encodeURIComponent(`Quote Request — ${form.service || "General"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nService: ${form.service}\n\n${form.message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    toast({ title: "Opening your email…", description: "Thanks — we'll get back to you shortly." });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-primary/95 backdrop-blur border-b border-primary-glow/40">
        <div className="container mx-auto flex items-center justify-between py-4">
          <a href="#home" className="flex items-center gap-2 text-primary-foreground">
            <div className="h-10 w-10 rounded-md gradient-accent grid place-items-center font-black text-accent-foreground">AR</div>
            <div className="leading-tight">
              <div className="font-black text-lg tracking-wide" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>AR MAINTENANCE</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-accent">Solutions</div>
            </div>
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} className="text-primary-foreground/80 hover:text-accent transition-smooth text-sm font-medium uppercase tracking-wider">{l.label}</a>
            ))}
            <Button variant="accent" size="sm" asChild>
              <a href={`tel:${PHONE}`}><Phone className="mr-2 h-4 w-4" />{PHONE_DISPLAY}</a>
            </Button>
          </nav>
          <button className="lg:hidden text-primary-foreground" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <div className="lg:hidden bg-primary border-t border-primary-glow/40 px-4 py-4 space-y-3">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="block text-primary-foreground/90 py-2">{l.label}</a>
            ))}
            <Button variant="accent" className="w-full" asChild><a href={`tel:${PHONE}`}>Call {PHONE_DISPLAY}</a></Button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center pt-20">
        <img src={heroImg} alt="Professional welding workmanship" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-hero" />
        <div className="container mx-auto relative z-10 py-20">
          <div className="max-w-3xl animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-accent/15 backdrop-blur border border-accent/40 px-4 py-2 rounded-full mb-6">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-sm font-semibold uppercase tracking-wider">Family-Run · South Africa</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-primary-foreground uppercase leading-[0.95] mb-6 text-balance">
              Quality Workmanship<br />
              <span className="text-accent">You Can Trust</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 mb-10 max-w-2xl">
              Family-run property maintenance solutions — welding, carports, roofing, sliding gates and more.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="accent" size="xl" asChild>
                <a href="#contact">Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" /></a>
              </Button>
              <Button variant="outline-light" size="xl" asChild>
                <a href={`tel:${PHONE}`}><Phone className="mr-2 h-5 w-5" />Call Us Now</a>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-primary/80 backdrop-blur border-t border-accent/30 py-3 z-10">
          <div className="container mx-auto flex items-center justify-center gap-6 text-primary-foreground/90 text-sm flex-wrap">
            <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-accent" /> CIPC Registered</span>
            <span className="hidden sm:flex items-center gap-2"><Star className="h-4 w-4 text-accent" /> Quality Guaranteed</span>
            <span className="flex items-center gap-2"><FileCheck className="h-4 w-4 text-accent" /> Free Quotations</span>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-accent font-bold uppercase tracking-[0.25em] text-sm">What We Do</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase mt-3 mb-4 text-primary">Our Services</h2>
            <p className="text-muted-foreground text-lg">Hands-on expertise across every job — big or small.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={s.title} className="group relative bg-card border border-border rounded-xl p-8 shadow-card hover:shadow-strong hover:-translate-y-1 transition-smooth overflow-hidden">
                <div className="absolute top-0 right-0 h-24 w-24 bg-accent/5 rounded-bl-full group-hover:bg-accent/15 transition-smooth" />
                <div className="relative">
                  <div className="h-14 w-14 rounded-lg gradient-dark grid place-items-center mb-5 group-hover:gradient-accent transition-smooth">
                    <s.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div className="text-xs font-bold text-accent mb-2">0{i + 1}</div>
                  <h3 className="text-2xl font-bold text-primary mb-3 uppercase">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-secondary">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src={aboutImg} alt="AR Maintenance Solutions team at work" width={1200} height={900} loading="lazy" className="rounded-xl shadow-strong w-full" />
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-glow hidden md:block max-w-[200px]">
              <div className="text-4xl font-black" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>100%</div>
              <div className="text-sm font-semibold uppercase tracking-wider">Family Run & Operated</div>
            </div>
          </div>
          <div>
            <span className="text-accent font-bold uppercase tracking-[0.25em] text-sm">About Us</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase mt-3 mb-6 text-primary text-balance">A Family Business Built on Hard Work</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              AR Maintenance Solutions is a family-run business built on hard work, quality workmanship and dependable service. With hands-on experience across welding, carports, roofing, sliding gates and property maintenance, we take pride in delivering practical solutions and treating every project with care.
            </p>
            <Button variant="default" size="lg" asChild><a href="#contact">Work With Us <ArrowRight className="ml-2 h-4 w-4" /></a></Button>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why" className="py-24 gradient-dark text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="container mx-auto relative">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-accent font-bold uppercase tracking-[0.25em] text-sm">Why Choose Us</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase mt-3 mb-4">Built on Trust</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {whyUs.map(w => (
              <div key={w.label} className="bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur rounded-xl p-6 text-center hover:border-accent hover:bg-accent/10 transition-smooth">
                <div className="h-14 w-14 rounded-full gradient-accent grid place-items-center mx-auto mb-4 shadow-glow">
                  <w.icon className="h-7 w-7 text-accent-foreground" />
                </div>
                <div className="font-bold uppercase tracking-wide text-sm md:text-base">{w.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="py-10 bg-primary border-y-4 border-accent">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {badges.map(b => (
              <div key={b} className="flex items-center gap-2 text-primary-foreground">
                <ShieldCheck className="h-5 w-5 text-accent" />
                <span className="font-semibold text-sm uppercase tracking-wider">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent font-bold uppercase tracking-[0.25em] text-sm">The Process</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase mt-3 text-primary">How It Works</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 relative">
            {steps.map((s, i) => (
              <div key={s.title} className="relative text-center">
                <div className="relative mx-auto h-20 w-20 mb-4">
                  <div className="absolute inset-0 gradient-accent rounded-2xl rotate-6 opacity-30" />
                  <div className="relative h-full w-full bg-primary rounded-2xl grid place-items-center shadow-card">
                    <s.icon className="h-9 w-9 text-accent" />
                  </div>
                  <div className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-accent text-accent-foreground grid place-items-center font-black text-sm">{i + 1}</div>
                </div>
                <h3 className="font-bold uppercase text-primary text-sm md:text-base">{s.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIAL OFFER */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 gradient-accent" />
        <div className="container mx-auto relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <div className="text-accent-foreground">
            <div className="text-sm font-bold uppercase tracking-[0.3em] mb-2 opacity-90">Special Offer</div>
            <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight text-balance">Free Quotations on All Projects</h2>
            <p className="mt-3 text-lg opacity-95 max-w-2xl">Contact us for affordable solutions tailored to your needs.</p>
          </div>
          <Button variant="onAccent" size="xl" asChild>
            <a href="#contact">Request Your Free Quote <ArrowRight className="ml-2 h-5 w-5" /></a>
          </Button>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="text-accent font-bold uppercase tracking-[0.25em] text-sm">Our Work</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase mt-3 text-primary">Gallery</h2>
            <p className="text-muted-foreground mt-3">Finished projects and our team at work — real jobs, real results.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryItems.map((g, i) => (
              <div key={i} className="group relative aspect-square overflow-hidden rounded-xl shadow-card hover:shadow-strong transition-smooth">
                <img src={g.src} alt={g.label} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-smooth">
                  <div className="text-primary-foreground font-bold uppercase tracking-wide text-sm">{g.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute -top-20 -left-20 text-accent/10 font-black select-none" style={{ fontSize: "20rem", lineHeight: 1, fontFamily: "'Barlow Condensed', sans-serif" }}>"</div>
        <div className="container mx-auto relative max-w-4xl text-center">
          <span className="text-accent font-bold uppercase tracking-[0.25em] text-sm">Our Vision</span>
          <p className="text-2xl md:text-4xl font-bold mt-6 leading-snug text-balance" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            "Our vision is to deliver quality workmanship and dependable service while growing within our local community — creating opportunities and contributing to employment where it is needed."
          </p>
          <div className="mt-8 inline-block h-1 w-24 bg-accent rounded-full" />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 bg-background">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <span className="text-accent font-bold uppercase tracking-[0.25em] text-sm">Get in Touch</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase mt-3 mb-6 text-primary">Let's Talk</h2>
            <p className="text-muted-foreground text-lg mb-8">Ready to start your project? Reach out for your free, no-obligation quote.</p>
            <div className="space-y-4">
              <a href={`tel:${PHONE}`} className="flex items-center gap-4 p-5 bg-secondary rounded-xl hover:bg-primary hover:text-primary-foreground transition-smooth group">
                <div className="h-12 w-12 rounded-lg gradient-accent grid place-items-center"><Phone className="h-5 w-5 text-accent-foreground" /></div>
                <div>
                  <div className="text-xs uppercase tracking-wider opacity-70">Call Us</div>
                  <div className="font-bold text-lg">{PHONE_DISPLAY}</div>
                </div>
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 p-5 bg-secondary rounded-xl hover:bg-primary hover:text-primary-foreground transition-smooth">
                <div className="h-12 w-12 rounded-lg gradient-accent grid place-items-center"><Mail className="h-5 w-5 text-accent-foreground" /></div>
                <div>
                  <div className="text-xs uppercase tracking-wider opacity-70">Email Us</div>
                  <div className="font-bold break-all">{EMAIL}</div>
                </div>
              </a>
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 bg-secondary rounded-xl hover:bg-primary hover:text-primary-foreground transition-smooth">
                <div className="h-12 w-12 rounded-lg bg-green-500 grid place-items-center"><MessageCircle className="h-5 w-5 text-white" /></div>
                <div>
                  <div className="text-xs uppercase tracking-wider opacity-70">WhatsApp</div>
                  <div className="font-bold">Chat with us instantly</div>
                </div>
              </a>
              <div className="flex items-center gap-4 p-5 bg-secondary rounded-xl">
                <div className="h-12 w-12 rounded-lg gradient-dark grid place-items-center"><MapPin className="h-5 w-5 text-accent" /></div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Service Area</div>
                  <div className="font-bold text-primary">South Africa · Local Service</div>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 shadow-card space-y-5">
            <h3 className="text-2xl font-black uppercase text-primary">Request a Free Quote</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input id="name" required maxLength={100} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
              </div>
              <div>
                <Label htmlFor="phone">Phone *</Label>
                <Input id="phone" type="tel" required maxLength={20} value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
              </div>
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" maxLength={255} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
            </div>
            <div>
              <Label htmlFor="service">Service Needed</Label>
              <select id="service" value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                <option value="">Select a service…</option>
                {services.map(s => <option key={s.title}>{s.title}</option>)}
                <option>Other</option>
              </select>
            </div>
            <div>
              <Label htmlFor="message">Message *</Label>
              <Textarea id="message" required maxLength={1000} rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
            </div>
            <Button type="submit" variant="accent" size="lg" className="w-full">Send Quote Request <ArrowRight className="ml-2 h-4 w-4" /></Button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary text-primary-foreground pt-16 pb-6">
        <div className="container mx-auto grid md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-12 w-12 rounded-md gradient-accent grid place-items-center font-black text-accent-foreground text-lg">AR</div>
              <div>
                <div className="font-black text-xl" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>AR MAINTENANCE SOLUTIONS</div>
                <div className="text-xs uppercase tracking-[0.2em] text-accent">Quality · Honest · Dependable</div>
              </div>
            </div>
            <p className="text-primary-foreground/70 max-w-md">Quality Workmanship. Honest Service. Dependable Results. A family-run property maintenance business proudly serving local communities across South Africa.</p>
            <div className="flex gap-3 mt-6">
              <a href="#" aria-label="Facebook" className="h-10 w-10 rounded-lg bg-primary-foreground/10 hover:bg-accent grid place-items-center transition-smooth"><Facebook className="h-5 w-5" /></a>
              <a href="#" aria-label="Instagram" className="h-10 w-10 rounded-lg bg-primary-foreground/10 hover:bg-accent grid place-items-center transition-smooth"><Instagram className="h-5 w-5" /></a>
              <a href={`https://wa.me/${WHATSAPP}`} aria-label="WhatsApp" className="h-10 w-10 rounded-lg bg-primary-foreground/10 hover:bg-accent grid place-items-center transition-smooth"><MessageCircle className="h-5 w-5" /></a>
            </div>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-wider mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              {navLinks.map(l => <li key={l.href}><a href={l.href} className="hover:text-accent transition-smooth">{l.label}</a></li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-wider mb-4 text-accent">Contact</h4>
            <ul className="space-y-3 text-primary-foreground/70 text-sm">
              <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-1 text-accent shrink-0" /><a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a></li>
              <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-1 text-accent shrink-0" /><a href={`mailto:${EMAIL}`} className="break-all">{EMAIL}</a></li>
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-1 text-accent shrink-0" />South Africa</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/15 pt-6 text-center text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} AR Maintenance Solutions · CIPC Registered · All rights reserved.
        </div>
      </footer>

      {/* WHATSAPP FLOAT */}
      <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full bg-green-500 hover:bg-green-600 grid place-items-center shadow-strong transition-smooth hover:scale-110">
        <MessageCircle className="h-8 w-8 text-white" />
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />
      </a>
    </div>
  );
};

export default Index;