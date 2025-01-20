import { motion } from "framer-motion"

interface SwitchProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
}

export function Switch({ checked, onChange }: SwitchProps) {

    return (
        <motion.button
            className="w-12 h-7 flex items-center rounded-full p-1 cursor-pointer"
            style={{
                backgroundColor: checked ? "rgb(75, 85, 99)" : "rgb(229, 231, 235)",
            }}
            onClick={() => onChange(!checked)}
            layout
        >
            <motion.div
                className="w-5 h-5 bg-white rounded-full shadow-md"
                animate={{
                    x: checked ? "100%" : "0%",
                }}
            />
        </motion.button>
    )
}

