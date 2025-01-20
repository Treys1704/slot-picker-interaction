import {TimeSlot} from "./types.ts";

export function generateTimeSlot(lastSlot?: TimeSlot): TimeSlot {
    if (!lastSlot) {
        return {
            from: '7:00 AM',
            to: '8:00 AM',
            id: crypto.randomUUID()
        };
    }

    // Parse the last end time and add one hour for the new slot
    const [hours, minutes, period] = lastSlot.to.match(/(\d+):(\d+)\s*(AM|PM)/)?.slice(1) || [];
    let hour = parseInt(hours);

    if (period === 'PM' && hour !== 12) hour += 12;
    hour += 1;

    const newFromTime = `${hour % 12 || 12}:${minutes} ${hour >= 12 ? 'PM' : 'AM'}`;
    const newToTime = `${(hour + 1) % 12 || 12}:${minutes} ${(hour + 1) >= 12 ? 'PM' : 'AM'}`;

    return {
        from: newFromTime,
        to: newToTime,
        id: crypto.randomUUID()
    };
}

