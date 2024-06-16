import landingimage from '../assets/landing.png';
import downloadimage from '../assets/appDownload.png';

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
        <div className="bg-white rounded-1g shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
            <h1 className="text-5xl font-bold tracking-tight text-blue-600">
                Welcome to Foodie.com
            </h1>
            <span className="text-xl">Food is just a click away!</span>

        </div>
        <div className="grid md:grid-cols-2 gap-5">
            <img src={landingimage}/>
            <div className='flex flex-col items-center justify-center gap-4 text-center'>
                <span className='font-bold text-3xl tracking-tigher'>Order Takeaway Even Faster!</span>
                <span>The quickest way to your favourite food</span>
            <img src={downloadimage}/>
            </div>

        </div>
    </div>
  )
}

export default HomePage;