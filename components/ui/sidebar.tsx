"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const sidebarVariants = cva(
  "fixed inset-y-0 z-30 flex flex-col bg-background border-r border-border transition-all duration-300 ease-in-out",
  {
    variants: {
      side: {
        left: "left-0",
        right: "right-0",
      },
      open: {
        true: "translate-x-0",
        false: "",
      },
    },
    defaultVariants: {
      side: "left",
      open: true,
    },
  },
)

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof sidebarVariants> {
  open?: boolean
  side?: "left" | "right"
}

const SidebarContext = React.createContext<{
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  side: "left" | "right"
}>({
  open: true,
  setOpen: () => undefined,
  side: "left",
})

const SidebarProvider = ({
  children,
  defaultOpen = true,
  side = "left",
}: {
  children: React.ReactNode
  defaultOpen?: boolean
  side?: "left" | "right"
}) => {
  const [open, setOpen] = React.useState(defaultOpen)

  return <SidebarContext.Provider value={{ open, setOpen, side }}>{children}</SidebarContext.Provider>
}

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  ({ className, children, open, side = "left", ...props }, ref) => {
    const context = React.useContext(SidebarContext)
    const isOpen = open !== undefined ? open : context.open
    const sideValue = side || context.side

    return (
      <div
        ref={ref}
        className={cn(
          sidebarVariants({
            open: isOpen,
            side: sideValue,
          }),
          sideValue === "left" && !isOpen && "-translate-x-full",
          sideValue === "right" && !isOpen && "translate-x-full",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    )
  },
)
Sidebar.displayName = "Sidebar"

const SidebarTrigger = ({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { open, setOpen } = React.useContext(SidebarContext)

  return (
    <button
      onClick={() => setOpen(!open)}
      className={cn("inline-flex items-center justify-center rounded-md p-2 text-foreground", className)}
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
        <path d="M9 3v18" />
      </svg>
      <span className="sr-only">Toggle Sidebar</span>
    </button>
  )
}

const SidebarContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-1 flex-col overflow-hidden", className)} {...props} />
  ),
)
SidebarContent.displayName = "SidebarContent"

const SidebarHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("border-b border-border px-4 py-2", className)} {...props} />
  ),
)
SidebarHeader.displayName = "SidebarHeader"

const SidebarFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("border-t border-border px-4 py-2", className)} {...props} />
  ),
)
SidebarFooter.displayName = "SidebarFooter"

const SidebarGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("px-2 py-2", className)} {...props} />,
)
SidebarGroup.displayName = "SidebarGroup"

const SidebarGroupLabel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("px-2 py-1.5 text-xs font-medium text-muted-foreground", className)} {...props} />
  ),
)
SidebarGroupLabel.displayName = "SidebarGroupLabel"

const SidebarGroupContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("space-y-1", className)} {...props} />,
)
SidebarGroupContent.displayName = "SidebarGroupContent"

const SidebarMenu = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("min-h-0 flex-1 overflow-y-auto", className)} {...props} />
  ),
)
SidebarMenu.displayName = "SidebarMenu"

const SidebarMenuItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("flex flex-col", className)} {...props} />,
)
SidebarMenuItem.displayName = "SidebarMenuItem"

interface SidebarMenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean
  asChild?: boolean
}

const SidebarMenuButton = React.forwardRef<HTMLButtonElement, SidebarMenuButtonProps>(
  ({ className, isActive, asChild = false, ...props }, ref) => {
    const Comp = asChild ? React.Fragment : "button"
    const componentProps = asChild ? { className: "" } : { ref, className: "", ...props }

    return (
      <Comp {...componentProps}>
        <div
          className={cn(
            "group flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium",
            isActive
              ? "bg-accent text-accent-foreground"
              : "text-foreground/70 hover:bg-accent hover:text-accent-foreground",
            className,
          )}
          data-active={isActive}
        >
          {asChild ? props.children : null}
        </div>
      </Comp>
    )
  },
)
SidebarMenuButton.displayName = "SidebarMenuButton"

const SidebarMenuBadge = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("ml-auto flex h-6 items-center justify-center rounded-full px-2 text-xs font-medium", className)}
      {...props}
    />
  ),
)
SidebarMenuBadge.displayName = "SidebarMenuBadge"

const SidebarMenuSub = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("pl-4 pt-1", className)} {...props} />,
)
SidebarMenuSub.displayName = "SidebarMenuSub"

const SidebarMenuSubItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("flex", className)} {...props} />,
)
SidebarMenuSubItem.displayName = "SidebarMenuSubItem"

interface SidebarMenuSubButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean
  asChild?: boolean
}

const SidebarMenuSubButton = React.forwardRef<HTMLButtonElement, SidebarMenuSubButtonProps>(
  ({ className, isActive, asChild = false, ...props }, ref) => {
    const Comp = asChild ? React.Fragment : "button"
    const componentProps = asChild ? { className: "" } : { ref, className: "", ...props }

    return (
      <Comp {...componentProps}>
        <div
          className={cn(
            "group flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-xs font-medium",
            isActive
              ? "bg-accent text-accent-foreground"
              : "text-foreground/70 hover:bg-accent hover:text-accent-foreground",
            className,
          )}
          data-active={isActive}
        >
          {asChild ? props.children : null}
        </div>
      </Comp>
    )
  },
)
SidebarMenuSubButton.displayName = "SidebarMenuSubButton"

const SidebarRail = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { side } = React.useContext(SidebarContext)

    return (
      <div
        ref={ref}
        className={cn("absolute inset-y-0 w-[1px] bg-border", side === "left" ? "right-0" : "left-0", className)}
        {...props}
      />
    )
  },
)
SidebarRail.displayName = "SidebarRail"

const SidebarInset = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { open, side } = React.useContext(SidebarContext)
    const [width, setWidth] = React.useState(0)
    const sidebarRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
      if (sidebarRef.current) {
        const resizeObserver = new ResizeObserver((entries) => {
          setWidth(entries[0].contentRect.width)
        })
        resizeObserver.observe(sidebarRef.current)
        return () => resizeObserver.disconnect()
      }
    }, [])

    return (
      <>
        <div
          ref={sidebarRef}
          className="fixed inset-0 top-0 z-20 w-[var(--sidebar-width)] opacity-0 pointer-events-none"
          style={{
            [side === "left" ? "left" : "right"]: 0,
            "--sidebar-width": "240px",
          }}
        />
        <div
          ref={ref}
          className={cn(
            "flex flex-col transition-[margin] duration-300 ease-in-out",
            side === "left" && open && "lg:ml-[var(--sidebar-width)]",
            side === "right" && open && "lg:mr-[var(--sidebar-width)]",
            className,
          )}
          style={{
            "--sidebar-width": `${width}px`,
          }}
          {...props}
        />
      </>
    )
  },
)
SidebarInset.displayName = "SidebarInset"

export {
  Sidebar,
  SidebarProvider,
  SidebarTrigger,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuBadge,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarRail,
  SidebarInset,
}
