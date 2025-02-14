import { SupplementItem } from '@/course/models/models';
import { Button } from '../ui/button';
import { Youtube } from 'lucide-react';
import Link from 'next/link';

export default function AssignmentListing(props: {item: SupplementItem}) {
    return (
        <Button variant="ghost" className="flex flex-row w-full items-center h-16 pl-0 sm:h-9">
            <Link href={props.item.url ?? ''} className="flex flex-col sm:flex-row w-full items-start sm:items-center">
                {/* Identity Section */}
                <div className="flex flex-row items-center">
                    
                    {props.item.code.startsWith("S") ? (
                        <div className=' bg-[#dfdcec] pt-1 sm:pt-[2px] pb-[2px] pl-1 pr-1 rounded-lg'>
                            <p className="text-[#2c3036] text-sm">{ props.item.code }</p>
                        </div>
                    ) : (
                        <div className=' bg-[#F1E1E9] pt-1 sm:pt-[2px] pb-[2px] pl-1 pr-1 rounded-lg'>
                            <p className="text-[#4F2E3E] text-sm">{ props.item.code }</p>
                        </div>
                    )}
                    
                    <p className="font-semibold ml-3 text-ellipsis min-w-0 overflow-hidden whitespace-nowrap">{ props.item.title }</p>
                </div>
                {/* Buttons Section */}
                <div className="flex flex-row sm:items-center ml-12 sm:ml-auto">
                    <p className="text-sm italic text-slate-400">Posted: {props.item.posted}</p>
                </div>
            </Link>
        </Button>
    );
}