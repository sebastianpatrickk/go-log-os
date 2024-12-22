import Link from "next/link";

import {
  Breadcrumb as ShadcnBreadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function Breadcrumb() {
  return (
    <ShadcnBreadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Go Log OS</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>Sebastian Klen&apos;s teams</BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          Random Team
          {/* TODO: Implement team selector */}
          {/* <Select>
            <SelectTrigger className="border-none">
              <SelectValue placeholder="Select team" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="random-project">Random Project</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select> */}
        </BreadcrumbItem>
      </BreadcrumbList>
    </ShadcnBreadcrumb>
  );
}
