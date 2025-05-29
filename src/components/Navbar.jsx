import { Link, } from "react-router-dom"
import { logout } from '../store/authSlice'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Navbar() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    function handleLogout() {
        dispatch(logout());
        localStorage.removeItem('user');
        navigate('/');
    }
    return (
        <>
            <nav class="font-bold sticky text-amber-900 w-full px-4 py-2 sm:px-6 md:px-8 flex flex-col sm:flex-row items-center sm:justify-between">
                <div className="flex flex-col">
                    <h2 className="text-xl transition duration-300 hover:scale-130" >  <Link to='/' >ReactRoute</Link> </h2>
                    {isLoggedIn && <h2 className=" transition duration-300 hover:scale-130 mt-2 hover:cursor-pointer" >  {user?.name} </h2>}
                </div>

                <div className="flex  items-center gap-4">
                    {isLoggedIn ? <button className=' hover:cursor-pointer transition duration-300 hover:scale-130' onClick={handleLogout}>Logout</button> :
                        <Link to='/login' className="transition duration-300 hover:scale-130">  Login</Link>}
                    <Link to='/home' className="transition duration-300 hover:scale-130">Home</Link>
                    {isLoggedIn && <Link to='/dashboard' className="transition duration-300 hover:scale-130" >Dashboard</Link>}
                    {isLoggedIn && <Link to='/form' className="transition duration-200 hover:scale-130">Form</Link>}

                </div>
            </nav>
        </>
    )
}