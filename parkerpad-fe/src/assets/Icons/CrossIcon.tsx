interface CrossIconProps {
    size?: "sm" | "md" | "lg"
}

const sizeVariants = {
    "sm": "size-2",
    "md": "size-4",
    "lg": "size-6"
}

export function CrossIcon(props: CrossIconProps) {
    return (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={sizeVariants[props.size || "sm"]}>
    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>

    )
}


