import Image from "next/image";

export default function Preview() {
    return (
    <div className="min-h-screen flex flex-col">

    <header className="p-1.5 contain-style" >
        <Image
            src="/img/logo-removebg-preview (1).png"
            alt="Jambo"
            width={100}
            height={75}
            className=""
        
            />
    </header>


    <main className="flex-1 relative flex flex-col justify-end">

    <div className="absolute inset-0 grid grid-cols-3">
        <div className="relative">
        <Image
            src="/img/image (3).png" // Reemplaza con tu imagen
            alt="Person 1"
            layout="fill"
            objectFit="cover"
            className="brightness-85"
            />
        </div>
        <div className="relative">
        <Image
            src="/img/image (4).png"
            alt="Person 2"
            layout="fill"
            objectFit="cover"
            className="brightness-85"
            />
        </div>
        <div className="relative">
        <Image
            src="/img/image (5).png"
            alt="Person 3"
            layout="fill"
            objectFit="cover"
            className="brightness-85"
            />
        </div>
    </div>

    <div className="relative z-10 text-center py-auto px-1 bg-black bg-opacity-40">
        <h2 className="text-white text-3xl font-bold mb-4">
            Thanks for <span className="text-orange-400">creating</span> your account!
        </h2>
        <p className="text-white mb-6">
            Start exploring top-rated professionals in your area today.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded">
            Continue
        </button>
        </div>
    </main>
    </div>
);
}