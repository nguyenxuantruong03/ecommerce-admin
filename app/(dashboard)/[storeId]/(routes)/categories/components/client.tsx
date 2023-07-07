"use client"

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";

import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

import { Plus } from "lucide-react";

import { CategoryColumn, columns } from "./columns";

import { ApiList } from "@/components/ui/api-list";

interface CategoryClientProps{
    data: CategoryColumn[]
}

const CategoryClient:React.FC<CategoryClientProps> = ({data}) => {
    const router = useRouter()
    const params = useParams()
    return ( 
        <>
        <div className="flex items-center justify-between">
            <Heading 
            title ={`Category (${data.length})`}
            description="Manage categories for your store"
            />
            <Button onClick={() => router.push(`/${params.storeId}/categories/new`)}>
                <Plus className="mr-2 h-4 w-4" />
                Add New
            </Button>
        </div>
        <Separator />
        <DataTable searchKey="name" columns={columns} data={data} />
        <Heading title="Api" description="API calls for Categories" />
        <Separator />
        <ApiList 
        entityIdName="categoryId"
        entityName="categories"
        />
        </>
     );
}
 
export default CategoryClient;