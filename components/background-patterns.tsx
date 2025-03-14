"use client"

export function BackgroundPattern() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-black/95 to-black/90">
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f60_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f60_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_60%,transparent_100%)] opacity-50"
        />
      </div>
    </div>
  )
}