

function App() {


  return (
    <>
      <h3 className='text-center'>React card</h3>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
        <div className="card card-side bg-gray-400 shadow-xl h-full">
          <figure  ><img className="w-[400px] border h-full" src="https://i.ibb.co/DWFSc5Y/1645543027415-1.jpg" alt="Movie" /></figure>
          <div className="card-body">
            <h2 className="card-title text-white">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <button className="btn">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              Button
            </button>
          </div>
        </div>
        <div className="card card-side bg-gray-400 shadow-xl">
          <figure><img className="w-[400px] border h-full" src="https://i.ibb.co/DWFSc5Y/1645543027415-1.jpg" alt="Movie" /></figure>
          <div className="card-body">
            <h2 className="card-title text-white">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <button className="btn">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              Button
            </button>
          </div>
        </div>
        <div className="card card-side bg-gray-400 shadow-xl">
          <figure><img className="w-[400px] border h-full" src="https://i.ibb.co/DWFSc5Y/1645543027415-1.jpg" alt="Movie" /></figure>
          <div className="card-body">
            <h2 className="card-title text-white">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <button className="btn">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              Button
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
