"use client"

import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";

import { OrderColumn, columns } from "./columns";


interface OrderClientProps{
    data: OrderColumn[]
}

const OrderClient:React.FC<OrderClientProps> = ({data}) => {
    return ( 
        <>
            <Heading 
            title ={`Order (${data.length})`}
            description="Manage orders for your store"
            />
        <Separator />
        <DataTable searchKey="products" columns={columns} data={data} />
        </>
     );
}
 
export default OrderClient;