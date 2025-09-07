interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { title: string, className?: string, type?: "button" | "submit"; }

function PrimaryButton({ title, className, type = "button", ...props }: PrimaryButtonProps) {
    return (
        <button type={type} className={`bg-black text-white rounded-md py-2 px-4 text-xs cursor-pointer hover:bg-black/80 duration-200 ${className}`} {...props}>
            {title}
        </button>
    )
}

export default PrimaryButton