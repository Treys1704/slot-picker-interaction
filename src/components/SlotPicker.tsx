import { useState } from "react"
import { DayScheduleComponent } from "./DaySchedule"
import type { WeekSchedule, DaySchedule } from "../types"

const initialSchedule: WeekSchedule = {
    Monday: { isEnabled: false, slots: [] },
    Tuesday: { isEnabled: false, slots: [] },
    Wednesday: { isEnabled: false, slots: [] },
    Thursday: { isEnabled: false, slots: [] },
    Friday: { isEnabled: false, slots: [] }
};

export default function SlotPicker() {
    const [schedule, setSchedule] = useState<WeekSchedule>(initialSchedule);

    const updateDaySchedule = (day: keyof WeekSchedule, newSchedule: DaySchedule) => {
        setSchedule(prev => ({
            ...prev,
            [day]: newSchedule
        }));
    };

    return (
        <div className="max-w-2xl mx-auto p-4">
            {(Object.entries(schedule) as [keyof WeekSchedule, DaySchedule][]).map(([day, daySchedule]) => (
                <DayScheduleComponent
                    key={day}
                    day={day}
                    schedule={daySchedule}
                    onUpdate={(newSchedule) => updateDaySchedule(day, newSchedule)}
                />
            ))}
        </div>
    );
}

