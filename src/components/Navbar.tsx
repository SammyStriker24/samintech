import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
const links = [{ label: "About", href: "#about" }, { label: "Skills", href: "#skills" }, { label: "Services", href: "#services" }, { label: "Projects", href: "#projects" }];
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return <nav className="fixed inset-x-0 top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border"><div className="container px-6 flex justify-between items-center h-20">
    <a href="#home" className="font-heading text-xl font-bold flex items-center gap-2"><span className="text-accent text-3xl" aria-hidden="true">✳</span> Md. Irtiza<span className="text-primary">.</span></a>
    <div className="hidden md:flex gap-7">{links.map(link => <a key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{link.label}</a>)}</div>
    <Button asChild variant="outline" className="hidden md:inline-flex rounded-full"><a href="#contact">Let’s talk <ArrowUpRight /></a></Button>
    <Button variant="ghost" size="icon" onClick={() => setOpen(!open)} className="md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>{open ? <X /> : <Menu />}</Button>
  </div>{open && <div className="md:hidden border-t border-border px-6 py-4">{[...links, { label: "Contact", href: "#contact" }].map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="block py-3 text-sm">{link.label}</a>)}</div>}</nav>;
};
export default Navbar;
