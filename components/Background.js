export default function Background() {
    return (
        <div className="flex justify-center  z-auto">
            <div className="absolute h-full w-1/3 top-10 left-0 mix-blend-multiply bg-yellow-600  opacity-40 filter blur-2xl"></div>
            <div className="absolute h-full w-1/3 top-14 right-0 mix-blend-multiply bg-green-500 opacity-40 filter blur-2xl"></div>
            <div className="absolute h-full w-1/3 top-20 mix-blend-multiply bg-blue-700 opacity-20 filter blur-2xl"></div>
        </div>
    )
}
