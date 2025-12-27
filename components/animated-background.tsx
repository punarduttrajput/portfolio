"use client"

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Subtle gradient motion */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 animate-gradient-shift motion-reduce:animate-none" />

      {/* Floating shapes with reduced motion support */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-slow motion-reduce:animate-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float-slower motion-reduce:animate-none" />
      <div className="absolute top-2/3 left-1/3 w-72 h-72 bg-primary/3 rounded-full blur-3xl animate-float motion-reduce:animate-none" />

      {/* Minimal grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: "4rem 4rem",
        }}
      />
    </div>
  )
}
