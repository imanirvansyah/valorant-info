import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/atoms/breadcrumb";
import { IBreadcrumb } from "../header";

interface IHeaderDetailProps {
  title: string;
  imgUrl: string;
  breadcrumbs: IBreadcrumb[];
  roleImg?: string;
}

export const HeaderDetail = ({ title, imgUrl, breadcrumbs, roleImg }: IHeaderDetailProps) => {
  return (
    <div className="px-4  md:p-12 mx-auto relative h-72 xl:h-[1200px]">
      <div className="absolute top-0 left-0 w-screen h-72 xl:h-[400px] -z-10" style={{ backgroundImage: `url('${imgUrl}')`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
      <h1 className="text-[#FF4655] text-5xl md:text-8xl uppercase">{title}</h1>
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
      {!!roleImg && (
        <div className=" absolute bottom-3 w-12 h-12 bg-red-500 mt-10 p-2">
          <img src={roleImg} alt="Duelist Class Symbol" />
        </div>
      )}
    </div>
  )
}