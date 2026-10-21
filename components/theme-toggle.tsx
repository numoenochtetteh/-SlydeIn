"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return <div className="h-9 w-[74px] rounded-full border border-border bg-background/70" aria-hidden="true" />
  }

  const isDark = theme === "dark"

  return (
    <div className="inline-flex items-center rounded-full border border-border bg-background/80 p-1 backdrop-blur">
      <button
        type="button"
        aria-label="Use light theme"
        onClick={() => setTheme("light")}
        className={`grid h-7 w-7 place-items-center rounded-full transition ${!isDark ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}
      >
        <Sun className="h-3.5 w-3.5" />
      </button>
      <button
        type="button"
        aria-label="Use dark theme"
        onClick={() => setTheme("dark")}
        className={`grid h-7 w-7 place-items-center rounded-full transition ${isDark ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}
      >
        <Moon className="h-3.5 w-3.5" />
      </button>
    </div>
  )
}

