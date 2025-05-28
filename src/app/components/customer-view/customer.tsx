import Image from "next/image";

export default function Customer() {
  return(
    <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-md p-15 max-w-215 mx-auto mt-35">

      <div className="md:w-1/2 space-y-4">
        <h2 className="text-black font-bold">Customer</h2>
        <p className="text-gray-700" >
          Welcome to the customer section<br />
          We are pleased to welcome you to our section specially dedicated to you.<br />
          Our commitment is to offer you a professional, attentive and personalized service.
          If you have any questions or need assistance, please do not hesitate to contact us;
          we are here to help you!
        </p>
        <div className="flex space-x-4">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-4 py-2 rounded">
            About us
          </button>
          <button className="border border-gray-400 text-gray-800 px-4 py-2 rounded hover:bg-gray-100">
            Next
          </button>
        </div>
      </div>

      <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
        <Image
          src="/customer-illustration.png"
          alt="Customer Illustration"
          width={200}
          height={200}
        />
      </div>
    </div>


  );
}