import { PrismaClient } from "@prisma/client";

declare global{
    var prisma: PrismaClient | undefined;
}

const prismadb = globalThis.prisma || new PrismaClient()
/* Dòng `if(process.env.NODE_ENV !== "production")globalThis.prisma =prismadb;` đang kiểm tra
giá trị của biến môi trường `NODE_ENV`. Nếu giá trị không bằng "sản xuất", nó sẽ đặt giá trị
`prismadb` của `PrismaClient` với biến `globalThis.prisma`. */
if(process.env.NODE_ENV !== "production")globalThis.prisma =prismadb;

export default prismadb;