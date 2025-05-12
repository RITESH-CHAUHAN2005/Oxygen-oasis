
import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"
import { toast } from "@/hooks/use-toast"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      position="top-right"
      expand={false}
      richColors
      closeButton
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-white group-[.toaster]:text-gray-800 group-[.toaster]:border-gray-100 group-[.toaster]:shadow-lg group-[.toaster]:rounded-xl",
          description: "group-[.toast]:text-gray-600",
          actionButton:
            "group-[.toast]:bg-brand-600 group-[.toast]:text-white group-[.toast]:hover:bg-brand-700",
          cancelButton:
            "group-[.toast]:bg-gray-200 group-[.toast]:text-gray-600 group-[.toast]:hover:bg-gray-300",
          success: "group-[.toaster]:!bg-green-50 group-[.toaster]:!border-green-100 group-[.toaster]:!text-green-800",
          error: "group-[.toaster]:!bg-red-50 group-[.toaster]:!border-red-100 group-[.toaster]:!text-red-800",
          info: "group-[.toaster]:!bg-blue-50 group-[.toaster]:!border-blue-100 group-[.toaster]:!text-blue-800",
          warning: "group-[.toaster]:!bg-amber-50 group-[.toaster]:!border-amber-100 group-[.toaster]:!text-amber-800",
        },
        duration: 4000,
      }}
      {...props}
    />
  )
}

export { Toaster, toast }
