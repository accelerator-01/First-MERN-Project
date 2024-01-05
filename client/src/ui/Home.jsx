import Card from "./Card";

function Home() {
  return (
    <div className="bg-white relative flex items-center justify-center overflow-hidden z-50 ">
      <div className="relative mx-auto h-full px-4  pb-20   md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
        <div className="flex flex-col items-center justify-between lg:flex-row py-16">
          <div className="relative">
            <div className="lg:max-w-xl lg:pr-5 relative z-40">
              <p className="flex text-sm uppercase text-g1  ">About Us</p>
              <h2 className="mb-6 max-w-lg text-5xl font-light leading-snug tracking-tight text-g1 sm:text-7xl sm:leading-snug">
                Toko pupuk sawit
                <span className="my-1 inline-block border-b-8 border-g4 bg-white px-4 font-bold text-g4 animate__animated animate__flash">
                  Daerah Riau
                </span>
              </h2>
              <p className="text-base text-gray-700">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque it.
              </p>
              <div className="mt-10 flex flex-col items-center md:flex-row">
                <a
                  href="/"
                  className="mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-green-600 px-6 font-medium tracking-wide text-white shadow-md transition hover:bg-blue-800 focus:outline-none md:mr-4 md:mb-0 md:w-auto"
                >
                  View More
                </a>
                <a
                  href="/"
                  aria-label=""
                  className="group inline-flex items-center font-semibold text-g1"
                >
                  Watch how it works
                </a>
              </div>
            </div>
          </div>
          <div className="relative hidden lg:ml-32 lg:block lg:w-1/2">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
