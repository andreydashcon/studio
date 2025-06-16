'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { mainNavItems } from '@/data/navigation';
import type { NavItem } from '@/types';
import { cn } from '@/lib/utils';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openCollapsibles, setOpenCollapsibles] = useState<Record<string, boolean>>({});

  const toggleCollapsible = (label: string) => {
    setOpenCollapsibles(prev => ({ ...prev, [label]: !prev[label] }));
  };
  
  useEffect(() => {
    setIsMobileMenuOpen(false); // Close mobile menu on route change
    setOpenCollapsibles({}); // Close all collapsibles on route change
  }, [pathname]);


  const NavLinks: React.FC<{ items: NavItem[], isMobile?: boolean }> = ({ items, isMobile }) => (
    <>
      {items.map((item) => (
        item.subItems ? (
          <Collapsible key={item.label} open={openCollapsibles[item.label]} onOpenChange={() => toggleCollapsible(item.label)} className={isMobile ? "w-full" : ""}>
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className={cn(
                  "font-medium text-foreground/80 hover:text-primary transition-colors flex items-center justify-between w-full px-3 py-2 md:px-4 md:py-2",
                  isMobile ? "text-lg" : "text-sm",
                  pathname.startsWith(item.href) && "text-primary"
                )}
              >
                <div className="flex items-center">
                  {item.icon && <item.icon className={cn("mr-2 h-4 w-4", isMobile && "h-5 w-5")} />}
                  {item.label}
                </div>
                <ChevronDown className={cn("h-4 w-4 transition-transform", openCollapsibles[item.label] && "rotate-180")} />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className={cn("bg-background/50 rounded-md", isMobile ? "pl-6" : "absolute z-20 mt-1 w-56 origin-top-right rounded-md bg-background shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none py-1")}>
              {item.subItems.map((subItem) => (
                <Link
                  key={subItem.label}
                  href={subItem.href}
                  className={cn(
                    "block px-4 py-2 text-sm text-foreground/80 hover:bg-primary/10 hover:text-primary rounded-md transition-colors",
                    isMobile && "py-3 text-base",
                    pathname === subItem.href && "text-primary bg-primary/10"
                  )}
                  onClick={() => isMobile && setIsMobileMenuOpen(false)}
                >
                   <div className="flex items-center">
                    {subItem.icon && <subItem.icon className="mr-2 h-4 w-4" />}
                    {subItem.label}
                   </div>
                </Link>
              ))}
            </CollapsibleContent>
          </Collapsible>
        ) : (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              "font-medium text-foreground/80 hover:text-primary transition-colors px-3 py-2 md:px-4 md:py-2 rounded-md flex items-center",
              isMobile ? "text-lg" : "text-sm",
              pathname === item.href && "text-primary bg-primary/10"
            )}
            onClick={() => isMobile && setIsMobileMenuOpen(false)}
          >
            {item.icon && <item.icon className={cn("mr-2 h-4 w-4", isMobile && "h-5 w-5")} />}
            {item.label}
          </Link>
        )
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <Leaf className="h-8 w-8 text-primary" />
          <span className="font-headline text-2xl font-bold text-primary">AgroConnect SC</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-1">
          <NavLinks items={mainNavItems} />
        </nav>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                  <Link href="/" className="flex items-center space-x-2">
                     <Leaf className="h-7 w-7 text-primary" />
                    <span className="font-headline text-xl font-bold text-primary">AgroConnect SC</span>
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                    <X className="h-6 w-6" />
                    <span className="sr-only">Fechar menu</span>
                  </Button>
                </div>
                <nav className="flex-grow p-4 space-y-2 overflow-y-auto">
                  <NavLinks items={mainNavItems} isMobile />
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
