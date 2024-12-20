import { ScheduleItem } from '@/course/models/models';
import { Button } from '../ui/button';
import { Youtube } from 'lucide-react';

export default function ScheduleListing(props: {item: ScheduleItem}) {
    return (
        <div className="flex flex-row w-full items-center">
            {/* Identity Section */}
            <div className="flex flex-row items-center">
                {/* Date Section */}
                <div className="flex flex-row w-[116px]">
                    <p className="text-sm">{ props.item.date }</p>
                    <div className=' bg-slate-200 ml-auto pt-[2px] pb-[2px] pl-1 pr-1 rounded-lg'>
                        <p className="text-slate-600 text-sm">{ props.item.code }</p>
                    </div>
                    {/* <p className="text-sm ml-auto">{ props.item.code }</p> */}
                </div>
                <p className="font-semibold ml-3 text-[14px]">{ props.item.title }</p>
            </div>
            {/* Buttons Section */}
            <div className="flex flex-row items-center ml-auto">
                <Button variant="ghost">Recording</Button>
                <Button variant="ghost">Slides</Button>
            </div>
        </div>
    );
}