import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom"
import { saveFiles } from "../../features/files_manager/files_manager_slice"
import { Button } from "../component/BasicComponents"
import Header from "./Header"

const ResultPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const files = useSelector(state => state.filesManager.files)

    useEffect(() => {
        if(files.length <= 0){
            navigate('/')
        }
    })

    return(
        <div className="w-full h-full flex flex-col justify-center items-center font-playfair">
            <Header/>
            <h1 className="mt-10 text-lg">Click here to download categorized files </h1>
            <Button text='Download' callback={() => dispatch(saveFiles())}></Button>

        </div>
    )
}

export default ResultPage
