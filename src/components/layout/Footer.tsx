import { content } from "@/src/lib/content"

export function Footer() {
  return (
    <footer className="py-12 border-t border-border" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-serif text-lg font-medium text-kisa-text">{content.header.logo}</div>

          <div className="flex items-center gap-6">
            <a
              href={`mailto:${content.footer.contact}`}
              className="text-sm text-muted-foreground hover:text-kisa-text hover:underline focus:outline-none focus:underline transition-colors"
            >
              Kontakt
            </a>
            {content.footer.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-kisa-text hover:underline focus:outline-none focus:underline transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
