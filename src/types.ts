export interface TimeSlot {
    from: string;
    to: string;
    id: string;
}

export interface DaySchedule {
    isEnabled: boolean;
    slots: TimeSlot[];
}

export type WeekSchedule = {
    [key in 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday']: DaySchedule;
};
