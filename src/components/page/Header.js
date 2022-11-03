import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="md:p-1 w-full p-2 m-1 flex flex-row  justify-between items-center shadow">
            <h1 className="md:text-3xl font-cursive text-xl ">Get Organised.</h1>
            <Link to='/' className="md:text-sm mx-2 p-1 px-2 rounded-md bg-slate-200 hover:bg-slate-100">Home</Link>
        </div>
    )
}

export default Header