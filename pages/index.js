import Fade from '../Components/Fade'
import Lavitamain from '../Components/Lavitamain'

function Home() {

  return (
    
    <div>
    <div className="h-screen ">
    {/* <div className="h-screen flex justify-center items-center	">
      <h1 className="text-7xl sm:text-8xl lg:text-12xl">LAVITA</h1>
    </div> */}
      <Lavitamain/>
      <Fade/>
      
      <div><h1>Hello world</h1></div>
    </div>
    </div>

  )
}

export default Home
