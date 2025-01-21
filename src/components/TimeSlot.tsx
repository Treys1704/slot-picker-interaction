import { motion } from "framer-motion"
import { X } from 'lucide-react'
import type { TimeSlot } from "../types"

interface TimeSlotProps {
    slot: TimeSlot;
    onDelete: () => void;
}

export function TimeSlotRow({ slot, onDelete }: TimeSlotProps) {
    return (
        <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
                duration: 0.3,
                ease: "easeOut"
            }}
            className="flex justify-between items-center overflow-hidden gap-4 mb-3"
        >
            <div className="flex items-center gap-4">
                <span className="text-gray-400 w-8">From</span>
                <motion.div className="px-4 py-1 bg-white rounded-lg border shadow-sm w-28 text-center">
                    {slot.from}
                </motion.div>
            </div>
            <div className="flex items-center">
                <span className="text-gray-400 w-8">To</span>
                <motion.div className="px-4 py-1 bg-white rounded-lg border shadow-sm w-28 text-center">
                    {slot.to}
                </motion.div>
            </div>
            <button
                onClick={onDelete}
                className="p-1.5 bg-gray-100/70 rounded-lg text-gray-400 hover:text-gray-600/70 transition-colors"
            >
                <X size={16} />
            </button>
        </motion.div>
    )
}

