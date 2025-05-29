export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-amber-700 text-center">
          Learn By Coding
        </h2>
        <p className="font-semibold mt-2 text-amber-700 text-center text-base md:text-lg">
          Explore the things we have accomplished
        </p>

       
        <ul className="flex flex-wrap justify-center text-cyan-900 font-bold text-lg md:text-xl mt-10 gap-4">
          <li>
            <p className="transition duration-300 hover:scale-110">React Router</p>
          </li>
          <li>
            <p className="transition duration-300 hover:scale-110">React Link</p>
          </li>
          <li>
            <p className="transition duration-300 hover:scale-110">Form Handling</p>
          </li>
          <li>
            <p className="transition duration-300 hover:scale-110">CRUD Implementation</p>
          </li>
        </ul>

  
        <ul className="flex flex-wrap justify-center text-cyan-900 font-bold text-lg md:text-xl mt-10 gap-4">
          <li>
            <p className="transition duration-300 hover:scale-110">Tailwind</p>
          </li>
          <li>
            <p className="transition duration-300 hover:scale-110">Vite App</p>
          </li>
          <li>
            <p className="transition duration-300 hover:scale-110">Clean Coding</p>
          </li>
          <li>
            <p className="transition duration-300 hover:scale-110">Custom Styles</p>
          </li>
        </ul>

       
        <ul className="flex flex-wrap justify-center text-cyan-900 font-bold text-lg md:text-xl mt-10 gap-4">
          <li>
            <p className="transition duration-300 hover:scale-110">Axios</p>
          </li>
          <li>
            <p className="transition duration-300 hover:scale-110">HTTP Requests</p>
          </li>
          <li>
            <p className="transition duration-300 hover:scale-110">API</p>
          </li>
          <li>
            <p className="transition duration-300 hover:scale-110">Spinner</p>
          </li>
        </ul>
      </div>
    </>
  );
}
