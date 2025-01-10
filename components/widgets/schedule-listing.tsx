import { ScheduleItem } from '@/course/models/models';
import { Button } from '../ui/button';
import { Youtube } from 'lucide-react';
import Link from 'next/link';

export default function ScheduleListing(props: {item: ScheduleItem}) {
    return (
        <div className="flex flex-row w-full sm:items-center mb-3">
            {/* Identity Section */}
            <div className="flex flex-col sm:flex-row sm:items-center">
                {/* Date Section */}
                <div className="flex flex-row w-[116px] sm:ml-4">
                    <p className="text-sm leading-6">{ props.item.date }</p>
                    <div className=' bg-slate-200 ml-auto pt-[2px] pb-[2px] pl-1 pr-1 rounded-lg'>
                        <p className="text-slate-600 text-sm">{ props.item.code }</p>
                    </div>
                    {/* <p className="text-sm ml-auto">{ props.item.code }</p> */}
                </div>
                <p className="font-semibold mt-2 sm:mt-0 sm:ml-3 text-[14px]">{ props.item.title }</p>
            </div>
            {/* Buttons Section */}
            <div className="flex flex-col sm:flex-row items-end sm:items-center ml-auto">
                { props.item.youtubeUrl && <Button variant="ghost" className='pt-1 sm:pt-0 pb-0 h-6'><Link href={props.item.youtubeUrl}>Recording</Link></Button> }
                { props.item.slidesUrl && <Button variant="ghost" className='pt-2 sm:pt-0 pb-0 h-6'><Link href={props.item.slidesUrl}>Slides</Link></Button> }
            </div>
        </div>
    );
}