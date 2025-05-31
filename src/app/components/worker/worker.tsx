import Image from "next/image";


export default function Worker() {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-gray-100 p-10 flex flex-col justify-between text-black">
        <div>
          <h1 className="text-3xl font-bold mb-6">Worker</h1>
          <p className="text-lg mb-2">Welcome you to the worker's section</p>
          <p className="text-lg mb-2">We are pleased to welcome you to our section specially dedicated to you.</p>
          <p className="text-lg mb-4">
            Our commitment is to offer you a professional, attentive and personalized service. If you have any questions
            or need assistance, please do not hesitate to contact us, we are here to help you!
          </p>
        </div>
        <div className="flex gap-4">
          <button className="bg-yellow-400 text-black px-6 py-2 rounded">About us</button>
          <button className="border border-gray-500 text-black px-6 py-2 rounded">Next</button>
        </div>
      </div>

      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="rounded-full bg-orange-100 p-6">
        </div>
      </div>
    </div>
  );
}
