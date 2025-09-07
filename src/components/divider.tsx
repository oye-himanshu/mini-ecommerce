interface DividerProps { className?: string }

const Divider: React.FC<DividerProps> = ({ className }) => {
    return (
        <div className={`h-0.5 w-full bg-gray-200 ${className}`} />
    )
}

export default Divider