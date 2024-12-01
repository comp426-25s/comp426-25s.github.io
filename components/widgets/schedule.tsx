// @ts-ignore
import schedule from '../../course/schedule.yaml';

import { ScheduleItem } from '@/course/models/models';
import ScheduleListing from "./schedule-listing";

export default function Schedule() {
    return (
        <>
        {(schedule as unknown as ScheduleItem[]).map(item => (
            <ScheduleListing key={item.code} item={item} />
        ))}
        </>
    );
}