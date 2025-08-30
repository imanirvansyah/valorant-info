import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/atoms/breadcrumb";
import { cn } from "@/lib/utils";

export interface IBreadcrumb {
  label: string;
  href: string;
}

const HeaderPage: React.FC<{
  title: string;
  breadcrumbs: IBreadcrumb[];
  centered?: boolean;
}> = ({ title, breadcrumbs, centered }) => {


  return (
    <div className={cn("flex flex-col", centered ? "items-center text-center" : "items-start text-left")}>
      <h1 className="text-[#FF4655] text-5xl md:text-8xl uppercase title">{title}</h1>
      <Breadcrumb className="uppercase mt-4 mb-48 breadcrumb">
        <BreadcrumbList>
          {breadcrumbs.map((breadcrumb, index) => {
            return (
              <>
                <BreadcrumbItem key={index}>
                  {breadcrumb.href === "#" ? (
                    <BreadcrumbPage>{breadcrumb.label}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink href={breadcrumb.href}>{breadcrumb.label}</BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
              </>
            )
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}

export default HeaderPage;
