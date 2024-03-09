function App() {
  return (
    <>
      <nav className="flex flex-row justify-center text-black font-semibold relative  p-2">
        <h1 className="absolute start-10 font-serif max-md:hidden">
          🍥 Lovebites
        </h1>
        <ul className="flex flex-row gap-5 justify-center items-center absolute font-light ">
          <li className="font-bold">
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Our Services</a>
          </li>
          <li>
            <a href="#">Our Clients</a>
          </li>
          <li>
            <a href="#">Our Works</a>
          </li>
        </ul>
        <a href="https://www.instagram.com/lovebites_official2023/">
          <button
            className="border-pink-600 border-2 text-white rounded-3xl p-2 absolute end-10 max-md:hidden"
            style={{ backgroundColor: "#F86D31" }}
          >
            InstaPage
          </button>
        </a>
      </nav>
      <div className="flex flex-row max-md:flex-col h-screen items-center justify-evenly">
        <div className="flex flex-col items-center pt-28 pb-5">
          <div className="flex justify-center items-center m-10">
            <a
              href="https://www.instagram.com/lovebites_official2023/"
              target="_blank"
            >
              <img
                src="./../public/lovebites.jpg"
                alt="An Image is Here"
                className="h-56 rounded-2xl "
              />
            </a>
          </div>
          <h1 className="font-bold text-3xl">Welcome the Love Bites</h1>
          <h1 className="font-semibold">Choclate,Waffles,Donuts and More...</h1>
          <a href="https://www.instagram.com/lovebites_official2023/">
            <button
              className="border-pink-600 border-2 text-white rounded-3xl p-2 mt-5"
              style={{ backgroundColor: "#F86D31" }}
            >
              InstaPage
            </button>
          </a>
        </div>
        <div className="">
          <div className="grid gap-5 grid-cols-2 p-5">
            <a
              href="https://www.instagram.com/lovebites_official2023/"
              target="_blank"
            >
              <img
                src="./..//public/bear.jpg"
                alt="An Image is Here"
                className="h-56 rounded-3xl"
              />
            </a>
            <a
              href="https://www.instagram.com/lovebites_official2023/"
              target="_blank"
            >
              <img
                src="./..//public/donuts.jpg"
                alt="An Image is Here"
                className="h-56 rounded-3xl"
              />
            </a>
            <a
              href="https://www.instagram.com/lovebites_official2023/"
              target="_blank"
            >
              <img
                src="./..//public/choclate2.jpg"
                alt="An Image is Here"
                className="h-56 rounded-3xl"
              />
            </a>
            <a
              href="https://www.instagram.com/lovebites_official2023/"
              target="_blank"
            >
              <img
                src="./..//public/choclate.jpg"
                alt="An Image is Here"
                className="h-56 rounded-3xl"
              />
            </a>
          </div>
        </div>
      </div>
      {/* <footer className="">
            <div className="flex flex-row relative">
              <div className="absolute top-0">
                <p>Address: 79,Picnic Garden Road</p>
                <p>Kolkata:700039</p>
              </div>
              <div className="absolute end-0">
                <a href="https://www.instagram.com/lovebites_official2023/">
                  lovebites_official2023
                </a>
                <p>9984586083/7890571905</p>
              </div>
            </div>
          </footer> */}
    </>
  );
}

export default App;
