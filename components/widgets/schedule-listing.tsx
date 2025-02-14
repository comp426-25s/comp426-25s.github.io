import { ScheduleItem } from '@/course/models/models';
import { Button } from '../ui/button';
import { Youtube } from 'lucide-react';
import Link from 'next/link';

export default function ScheduleListing(props: {item: ScheduleItem}) {

    const moduleColor = (module: string) => {
        if (module === '1') return 'bg-slate-200 text-[#2c3036]';
        if (module === '2') return 'bg-[#c9daf8] text-[#2c3036]';
        if (module === '3') return 'bg-[#dfdcec] text-[#2c3036]';
        if (module === 'M') return 'bg-slate-600 text-slate-100';

        return 'bg-slate-200 text-slate-600'
    }

    return (
        <div className="flex flex-row w-full sm:items-center mb-3">
            {/* Identity Section */}
            <div className="flex flex-col sm:flex-row sm:items-center">
                {/* Date Section */}
                <div className="flex flex-row w-[116px]">
                    <p className="text-sm leading-6">{ props.item.date }</p>
                    <div className={`${moduleColor(props.item.module)} ml-auto pt-[2px] pb-[2px] pl-1 pr-1 rounded-lg`}>
                        <p className="text-sm">{ props.item.code }</p>
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