export default function Footer(){
    return (
        <>
        <footer className=" text-amber-900 text-sm  px-4 py-4 mt-10 ">
             <p className="mb-3 flex justify-center">&copy; {new Date().getFullYear()} Student Portal. All rights reserved</p>
            <div className="flex mt-2 justify-center gap-4">
                <a href="#" className="hover:underline">Privacy Policy</a>
                <a href="#" className="hover:underline">Terms and Conditions</a>
            </div>
        </footer>
        </>
    )
}