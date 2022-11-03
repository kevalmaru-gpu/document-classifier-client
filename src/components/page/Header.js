import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="md:p-3 bg-slate-100 w-full p-2 m-1 flex flex-row  justify-between items-center">
            <h1 className="md:text-2xl font-cursive text-xl ">Get Organised.</h1>
            <Link to='/' className="md:text-sm md:p-2 mx-2 p-1 px-2 rounded-md bg-slate-300 hover:bg-slate-100">Home</Link>
        </div>
    )
}

export default Header