'use client'

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { usePathname } from 'next/navigation'

export default function Header() {

    const path = usePathname();
    const pathComponents = path.split('/').splice(1).filter((s) => s !== '');
    console.log(pathComponents);
    return (
        <div className="flex h-16 items-center">
        <Breadcrumb>
        <BreadcrumbList className="!list-none">
            <BreadcrumbItem>
                <BreadcrumbLink href="/">COMP 426</BreadcrumbLink>
            </BreadcrumbItem>
            {pathComponents.length > 0 && pathComponents.map((component, index) => (
                <div key={index} >
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink className="capitalize">{ component }</BreadcrumbLink>
                </BreadcrumbItem>
                </div>
            ))}
        </BreadcrumbList>
        </Breadcrumb>
        </div>
    );
}
