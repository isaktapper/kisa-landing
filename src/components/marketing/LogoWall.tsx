import React from "react";

type Logo = { name: string; src?: string };

const DEFAULT_LOGOS: Logo[] = Array.from({ length: 20 }, (_, i) => ({
  name: `App ${String(i + 1).padStart(2, "0")}`,
}));

export default function LogoWall({
  title = "Fungerar med dina verktyg",
  logos = DEFAULT_LOGOS,
}: {
  title?: string;
  logos?: Logo[];
}) {
  return (
    <section className="w-full">
      <h2 className="mb-6 text-center text-lg font-medium">{title}</h2>

      <div className="relative overflow-hidden">
        {/* Wrap med mask för fade */}
        <div className="logo-mask">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-10 gap-y-8 items-center justify-items-center">
            {logos.map((logo) => (
              <div key={logo.name} className="flex h-12 items-center justify-center">
                {logo.src ? (
                  // När riktiga loggor finns
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-12 w-auto opacity-60 filter grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-200"
                  />
                ) : (
                  // Placeholder SVG
                  <svg
                    role="img"
                    aria-label={logo.name}
                    className="h-12 w-28 max-w-full"
                    viewBox="0 0 112 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="0" y="0" width="112" height="48" rx="8" fill="#E5E7EB" />
                    <text
                      x="50%"
                      y="50%"
                      dominantBaseline="middle"
                      textAnchor="middle"
                      fontSize="10"
                      fill="#6B7280"
                      fontFamily="Inter, ui-sans-serif, system-ui"
                    >
                      {logo.name}
                    </text>
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Fallback overlay-gradient om mask inte stöds */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-kisa-bg"
          aria-hidden="true"
        />
      </div>

      <p className="mt-4 text-center text-sm text-muted-foreground">…och mycket mer</p>
    </section>
  );
}