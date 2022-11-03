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

            <div className="p-4 fixed left-0 bottom-0 w-full mt-20 flex flex-col justify-center items-center bg-footer">
                    <div className="md:w-1/3 w-full"><h1 className="text-2xl">Contact Me</h1></div>
                    <table  className='md:w-1/3 w-full mt-10 flex flex-col justify-between'>
                        <tr className="flex mt-2 justify-between">
                            <td className="text-xl">Email</td>
                            <td className="text">kevalmaru132@gmail.com</td>
                        </tr>
                        <tr className="flex mt-2 justify-between items-center">
                            <td className="text-xl">Linkedin</td>
                            <td><a href="https://www.linkedin.com/in/keval-maru-05b30721b/" className="text-blue-400">Keval Maru</a></td>
                        </tr>
                        <td>
                        </td>
                    </table>
            </div>

        </div>
    )
}

export default ResultPage