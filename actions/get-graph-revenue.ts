import prismadb from "@/lib/prismadb"

interface GraphData{
    name: string;
    total: number
}

export const getGraphRevenue = async (storeId: string)=>{
    const paidOrders= await prismadb.order.findMany({
       where:{
        storeId,
        isPaid: true
       },
       include:{
        orderItems:{
            include:{
                product: true
            }
        }
       }
    })
   
    const monthlyRevenue: {[key:number]:number}={};

    for (const order of paidOrders){
        const month = order.createdAt.getMonth();
        let revenueForOrder = 0;
        for(const item of order.orderItems){
            revenueForOrder += item.product.price.toNumber()
        }
        monthlyRevenue[month] = (monthlyRevenue[month] || 0) + revenueForOrder
    }

    const graphData: GraphData[] =[
        {name: "Tháng 1",total: 0},
        {name: "Tháng 2",total: 0},
        {name: "Tháng 3",total: 0},
        {name: "Tháng 4",total: 0},
        {name: "Tháng 5",total: 0},
        {name: "Tháng 6",total: 0},
        {name: "Tháng 7",total: 0},
        {name: "Tháng 8",total: 0},
        {name: "Tháng 9",total: 0},
        {name: "Tháng 10",total: 0},
        {name: "Tháng 11",total: 0},
        {name: "Tháng 12",total: 0},
    ]

    for(const month in monthlyRevenue){
        graphData[parseInt(month)].total = monthlyRevenue[parseInt(month)]
    }
    return graphData
}