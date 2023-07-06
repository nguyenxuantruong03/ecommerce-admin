"use client"

import { useStoreModal } from "@/hooks/use-store-modal";

import { useEffect } from "react";

 const SetupPage = () => {
  const onOpen =useStoreModal((state) => state.onOpen);
  const isOpen =useStoreModal((state) => state.isOpen);

  useEffect(()=>{
    /* Mã này đang kiểm tra xem biến `isOpen` có phải là `false` hay không (có nghĩa là phương thức hiện không
     mở). Nếu nó là `false`, thì nó gọi hàm `onOpen`, hàm này có lẽ sẽ mở phương thức. Cái này
     đảm bảo rằng phương thức luôn mở khi thành phần `SetupPage` được hiển thị. */
    if(!isOpen){
      onOpen()
    }
  },[isOpen,onOpen])

  return null
}

export default SetupPage
