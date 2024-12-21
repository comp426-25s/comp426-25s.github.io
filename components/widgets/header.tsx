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
import React from "react";

export default function Header() {

    const path = usePathname();
    const pathComponents = path.split('/').splice(1).filter((s) => s !== '');
    console.log(pathComponents);
    return (
        <div className="flex flex-row w-full h-16 items-center">
        <Breadcrumb className="w-full">
            <BreadcrumbList className="!list-none">
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">COMP 426</BreadcrumbLink>
                </BreadcrumbItem>
                {pathComponents.length > 0 && pathComponents.map((component, index) => {
                    const componentTitle = component.replaceAll("-", " ");
                    return (
                        <React.Fragment key={index} >
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink className="capitalize">{ componentTitle }</BreadcrumbLink>
                        </BreadcrumbItem>
                        </React.Fragment>
                    )
                })}
            </BreadcrumbList>
        </Breadcrumb>
        </div>
    );
}
