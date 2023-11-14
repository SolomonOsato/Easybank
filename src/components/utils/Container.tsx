import { ReactNode } from "react"
import { cn } from "@/lib/utils"

type Props = {
	className?: string;
	children: ReactNode;
}

export default function Container({ className, children }: Props) {
	return <div className={cn("max-w-screen-md mx-auto px-4", className)}>{children}</div>
}
