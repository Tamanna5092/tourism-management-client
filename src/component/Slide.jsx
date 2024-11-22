
const Slide = ({image, text}) => {
    return (
        <>
      <div
        className='w-full bg-center bg-cover h-[600px]'
        style={{
            backgroundImage: `url(${image})`
        }}
      >
        <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
          <div className=''>
          <h1 class="uppercase text-3xl font-semibold text-white lg:text-5xl px-2">{text}</h1>
          </div>
        </div>
      </div>
      </>
    );
};

export default Slide;