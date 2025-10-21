import Image from "next/image";
import { Instagram, Youtube } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <nav className="hidden md:flex items-center gap-8">
              <a href="https://www.evenintheday.com" className="text-sm font-medium hover:text-gray-600 transition-colors">
                HOME
              </a>
              <a href="https://www.evenintheday.com/shop" className="text-sm font-medium hover:text-gray-600 transition-colors">
                SHOP
              </a>
              <a href="https://www.evenintheday.com/about" className="text-sm font-medium hover:text-gray-600 transition-colors">
                ABOUT
              </a>
              <a href="https://www.evenintheday.com/danceeko" className="text-sm font-medium hover:text-gray-600 transition-colors">
                DANCE EKO
              </a>
            </nav>
            
            <a href="https://www.evenintheday.com" className="absolute left-1/2 transform -translate-x-1/2">
              <Image
                src="/logo-white.png"
                alt="Even in the Day"
                width={126}
                height={50}
                className="h-12 w-auto"
              />
            </a>

            <div className="flex items-center gap-3">
              <a 
                href="https://www.instagram.com/evenintheday?igsh=OHd4MHV6dWJ5bmk1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://x.com/evenintheday?s=21" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://www.youtube.com/@evenintheday" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href="https://www.tiktok.com/@evenintheday?_t=ZM-8wO9VyyZxyg&_r=1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-20">
        <section 
          className="relative min-h-[70vh] flex items-center justify-center"
          style={{
            backgroundImage: 'url(/hero-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-black/30" />
          
          <div className="relative z-10 text-center px-6 py-20">
            <Image
              src="/eko-logo.png"
              alt="Dance EKO"
              width={577}
              height={161}
              className="mx-auto mb-8 w-full max-w-2xl"
            />
            <p className="text-white text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              A vibrant two-day festival dedicated to dance, music, and culture, featuring some of West Africa's biggest DJ acts and showcasing the power of rhythm, and the beauty of diverse traditions.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                SIGN UP FOR UPDATES & EARLY ACCESS TO TICKETS
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold mb-12">
                Join our waiting list
              </h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-left">
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First name*
                    </label>
                    <Input 
                      id="firstName" 
                      type="text" 
                      required 
                      className="w-full"
                    />
                  </div>
                  <div className="text-left">
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last name*
                    </label>
                    <Input 
                      id="lastName" 
                      type="text" 
                      required 
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="text-left">
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone*
                  </label>
                  <div className="flex gap-2">
                    <div className="flex items-center gap-2 px-3 py-2 border rounded-md bg-gray-50">
                      <span className="text-2xl">🇳🇬</span>
                    </div>
                    <Input 
                      id="phone" 
                      type="tel" 
                      required 
                      className="flex-1"
                    />
                  </div>
                </div>

                <div className="text-left">
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email*
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    required 
                    className="w-full"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full md:w-auto px-12 py-6 text-base font-semibold bg-black text-white hover:bg-gray-800"
                >
                  Sign Up
                </Button>
              </form>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <Image
                src="/bottom-image.png"
                alt="Dance Eko Festival"
                width={600}
                height={418}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-center gap-8">
            <div className="flex items-center gap-6">
              <a 
                href="https://www.instagram.com/dance.eko?igsh=MWtzcGhheng0ZXh3OQ==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://www.youtube.com/@evenintheday" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>

            <Image
              src="/kvlt-logo.png"
              alt="KVLT"
              width={134}
              height={39}
              className="h-10 w-auto"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
