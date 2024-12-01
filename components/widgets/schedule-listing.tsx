import { ScheduleItem } from '@/course/models/models';
import { Button } from '../ui/button';
import { Youtube } from 'lucide-react';

export default function ScheduleListing(props: {item: ScheduleItem}) {
    return (
        <div className="flex flex-row w-full items-center">
            {/* Identity Section */}
            <div className="flex flex-row items-center">
                {/* Date Section */}
                <div className="flex flex-row w-[110px]">
                    <p className="text-sm">{ props.item.date }</p>
                    <p className="text-sm ml-auto">{ props.item.code }</p>
                </div>
                <p className="font-semibold ml-2">{ props.item.title }</p>
            </div>
            {/* Buttons Section */}
            <div className="flex flex-row items-center ml-auto">
                <Button variant="link">Recording</Button>
                <Button variant="link">Slides</Button>
            </div>
        </div>
    );
}