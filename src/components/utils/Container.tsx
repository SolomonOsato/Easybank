import { ReactNode } from "react"

type Props = {
	children: ReactNode;
}

export default function Container({ children }: Props) {
	return <div className="max-w-screen-md mx-auto px-4">{children}</div>
}
