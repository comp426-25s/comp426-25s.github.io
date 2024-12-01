// @ts-ignore
import schedule from '../../course/schedule.yaml';

import { ScheduleItem } from '@/course/models/models';
import ScheduleListing from "./schedule-listing";

export default function Schedule() {
    return (
        <div className="mt-2">
        {(schedule as unknown as ScheduleItem[]).map(item => (
            <ScheduleListing key={item.code} item={item} />
        ))}
        </div>
    );
}