import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
  
  
export default function Header() {
return (
    <div className="flex h-16 items-center">
    <Breadcrumb>
    <BreadcrumbList>
        <BreadcrumbItem>
        <BreadcrumbLink href="/">COMP 426</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
        <BreadcrumbLink href="/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
    </BreadcrumbList>
    </Breadcrumb>
    </div>
);
}
