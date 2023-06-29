import { useState } from "react"
import { imagensDescription, imagensInfos } from "../../../resources/mocks/imagesMocks"

const useImageHistoryScreen = () => {
const [data, useData] = useState(imagensInfos)
const [openClosed, setOpenClosed] = useState<boolean>(false);
const [text, setText] = useState<String>(imagensDescription.texto)

const modalFuction = (data: boolean) =>{
    if(data == true){
        setOpenClosed(true);
    }
    else{
        setOpenClosed(false);
    }
}

    return {
        data,
        openClosed,
        text,
        modalFuction
    }
}
export default useImageHistoryScreen;