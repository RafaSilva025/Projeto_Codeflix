import Image from 'next/image';
import Header from './Header';

type MovieRowProps = {
  sectionTitle: string;
};
type MovieCardProps = {
  index: number; 
}
const MovieCard = ({
  index
}) => {

}

export default function MovieRow({ sectionTitle }: { sectionTitle: string }) {
  return (
    <div className='relative h-screen overflow-hidden bg-gradient-to-b bg-black lg:h-[140vh]'>
      <Header />
      <main className="relative pb-24 pl-4 lg:pl-16">
        <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
          <div className='absolute flex flex-col left-0 top-0 -z-10 h-[95vh] w-screen bg-black'>
            <Image
              src='/banner.png'
              alt='MAID'
              fill={true}
              className='h-[65vh] object-cover object-top lg:h-[95vh]' />
          </div>

          <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>The Witcher</h1>

          <p className='text-shadow-md max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl'>Geralf of Rivia, a Solitary monster hunter,
            struggies to find his place in a world where people often prove more wicked than beasts.</p>
        </div>

        <div className='flex space-x-3'>
          <button className='bg-white text-black md:text-xl; flex cursor-pointer items-center gap-x-2 rounded px-5 py-1.5 text-sm font-semibold transition hover:opacity-75 md:px-8 md:py-2.5'>Play</button>
          <button className='bg-gray-400 text-black md:text-xl; flex cursor-pointer items-center gap-x-2 rounded px-5 py-1.5 text-sm font-semibold transition hover:opacity-75 md:px-8 md:py-2.5'>More Info</button>
        </div>
        <MovieRow />
      </main>
    </div>
  );

  function MovieRow() {
    return <div className='flex-col space-y-4'>
      <div className='flex'>
        <h2 className='-ml-2 inline-flex items-center text-2xl font-bold'>{sectionTitle}</h2>
      </div>

      <div className='-ml-8 flex space-x-4 overflow-x-scroll p-6 scrollbar-hide'>
        {[1, 2, 3, 4, 5, 5, 5, 5].map((index) => (
          <div
            key={index}
            className="group relative h-28 min-w-[200px] transform bg-gradient-to-t from-transparent to-black transition duration-200 ease-in hover:z-50 hover:scale-110 md:h-40 md:min-w-[300px] lg:h-52 lg:min-w-[400px]"
          >
            <Image
              key={index}
              src={`/item_${index}.png`}
              fill={true}
              alt='MAID'
              className='rounded' />
          </div>
        ))}
      </div>
    </div>;
  }
}
