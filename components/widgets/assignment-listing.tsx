import { AssignmentItem } from '@/course/models/models';
import { Button } from '../ui/button';
import { Youtube } from 'lucide-react';

export default function AssignmentListing(props: {item: AssignmentItem}) {
    return (
        <Button variant="ghost" className="flex flex-row w-full items-center">
            {/* Identity Section */}
            <div className="flex flex-row items-center">
                
                {props.item.code.startsWith("R") ? (
                    <div className=' bg-[#DEECDC] pt-[2px] pb-[2px] pl-1 pr-1 rounded-lg'>
                        <p className="text-[#374A3D] text-sm">{ props.item.code }</p>
                    </div>
                ) : (
                    <div className=' bg-[#F1E1E9] pt-[2px] pb-[2px] pl-1 pr-1 rounded-lg'>
                        <p className="text-[#4F2E3E] text-sm">{ props.item.code }</p>
                    </div>
                )}
                
                <p className="font-semibold ml-3">{ props.item.title }</p>
                {/* Date Section
                <div className="flex flex-row w-[110px]">
                    <p className="text-sm">{ props.item.date }</p>
                    <p className="text-sm ml-auto">{ props.item.code }</p>
                </div>
                <p className="font-semibold ml-2">{ props.item.title }</p> */}
            </div>
            {/* Buttons Section */}
            <div className="flex flex-row items-center ml-auto">
                <p className="text-sm">Due: {props.item.due}</p>
            </div>
        </Button>
    );
}