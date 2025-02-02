import { motion, AnimatePresence } from "framer-motion"
import { Switch } from "./Switch.tsx"
import { TimeSlotRow } from "./TimeSlot.tsx"
import type { DaySchedule } from "../types"
import { generateTimeSlot } from "../utils"

interface DayScheduleProps {
    day: string;
    schedule: DaySchedule;
    onUpdate: (schedule: DaySchedule) => void;
}

export function DayScheduleComponent({ day, schedule, onUpdate }: DayScheduleProps) {
    const addSlot = () => {
        const lastSlot = schedule.slots[schedule.slots.length - 1];
        const newSlot = generateTimeSlot(lastSlot);
        onUpdate({
            ...schedule,
            slots: [...schedule.slots, newSlot]
        });
    };

    const deleteSlot = (id: string) => {
        onUpdate({
            ...schedule,
            slots: schedule.slots.filter(slot => slot.id !== id)
        });
    };

    return (
        <motion.div
            className="border rounded-[20px] mb-2 w-[400px] max-w-3xl"
            layout
        >
            <div className={`${schedule.isEnabled ? 'bg-white' : 'bg-slate-100/50'} rounded-[20px] flex items-center justify-between p-4`}>
                <motion.span layout className="text-gray-600 font-medium">{day}</motion.span>
                <Switch
                    checked={schedule.isEnabled}
                    onChange={(checked) => onUpdate({ ...schedule, isEnabled: checked })}
                />
            </div>

            <AnimatePresence>
                {schedule.isEnabled && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                            height: "auto",
                            opacity: 1,
                            transition: {
                                height: {
                                    type: "spring",
                                    delay: 0.1
                                },
                                opacity: {
                                    duration: 0.2,
                                    delay: 0.2
                                }
                            }
                        }}
                        exit={{
                            height: 0,
                            opacity: 0,
                            transition: {
                                height: {
                                    duration: 0.2
                                },
                                opacity: {
                                    duration: 0.1
                                }
                            }
                        }}
                        className="overflow-hidden bg-white rounded-[20px]"
                    >
                        <div className="px-4 pb-4 pt-2">
                            {schedule.slots.map((slot) => (
                                <TimeSlotRow
                                    key={slot.id}
                                    slot={slot}
                                    onDelete={() => deleteSlot(slot.id)}
                                />
                            ))}
                            <motion.button
                                onClick={addSlot}
                                className="text-gray-500 bg-gray-100 py-3 rounded-xl flex justify-center items-center transition-colors hover:bg-gray-200/70 font-medium mt-4 w-full"
                            >
                                + Add More
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

