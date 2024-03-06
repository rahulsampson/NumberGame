export default function Cards({className, image, name,rollNo}) {
  return (
    <div className={`relative h-[400px] w-[300px] rounded-md ${className}`}>
      <img
        src={image}
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{name}</h1>
        <div className='text-white'>{rollNo}</div>
        <p className="mt-2 text-sm text-gray-300">
          We have made this number gussing game using react. 
        </p>
        
      </div>
    </div>
  )
}
