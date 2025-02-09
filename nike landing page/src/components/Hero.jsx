


const Hero = () => {
  return (
    <main className="hero-sec flex justify-around m-20">

      <div className="left p-8 flex flex-col gap-8 max-w-[600px]">

        <h1 className="text-8xl font-extrabold">YOUR FEET DESERVE THE BEST</h1>
        <p className="text-[16px] font-semibold text-gray-500">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
          </p>

        <div className="buttons">
          <button className="btn mr-4">Shop Now</button>
          <button className="btn2">Category</button>
        </div>
      </div>

      <div className="right flex justify-center items-center pt-12">
        <img src="./shoe_image.png" alt="" />
      </div>

    </main>
  );
}

export default Hero;