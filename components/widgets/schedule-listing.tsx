import { ScheduleItem } from '@/course/models/models';

export default function ScheduleListing(props: {item: ScheduleItem}) {
    return (
        <div className="flex flex-row w-full items-center py-2">
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
                <p>Button</p>
                <p>Button</p>
            </div>
        </div>
    );
}