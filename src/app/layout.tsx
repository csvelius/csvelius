import "./globals.css"
import Link from "next/link"
import { ThemeProvider } from "@/src/components/theme-provider"
import { ThemeToggle } from "@/src/components/ui/theme-toggle"

export const metadata = {
  title: "velius",
  description: "personal website",
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background antialiased">
        <ThemeProvider>
          <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
            <div className="max-w-2xl mx-auto px-6 py-12">
              <header className="mb-12">
                <Link href="/" className="text-2xl font-bold mb-8 block">
                  velius
                </Link>
                <nav className="flex space-x-6 text-lg">
                  <Link href="/" className="hover:text-gray-600 dark:hover:text-gray-400">home</Link>
                  <Link href="/recent_work" className="hover:text-gray-600 dark:hover:text-gray-400">recent work</Link>
                  <Link href="/books" className="hover:text-gray-600 dark:hover:text-gray-400">books</Link>
                  <ThemeToggle />
                </nav>
              </header>
              <main>
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

