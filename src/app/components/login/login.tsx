
import Image from 'next/image';

export default function Login() {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 relative hidden md:block">
        <Image
          src=""
          alt="Construction Worker"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>


      <div className="w-full md:w-1/2 flex items-center justify-center bg-white text-black">
        <div className="max-w-sm w-full space-y-6 p-8 shadow-md border rounded-xl">
          <h2 className="text-center text-2xl font-bold text-black">Login</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-black">
                E-mail or phone number
              </label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-black">
                Password
              </label>
              <input
                type="password"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              />
            </div>
            <div className="text-right text-sm text-black hover:underline cursor-pointer">
              Reset password
            </div>
            <button
              type="submit"
              className="w-full bg-[#A30214] text-white py-2 rounded font-semibold"
            >
              Continue
            </button>
          </form>
          <p className="text-xs text-black text-center">
            By continuing, you accept Jambo’s Terms of Use and Privacy Notice.
          </p>
          <div className="flex items-center justify-center">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-2 text-black text-sm">or</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>
          <button className="w-full bg-orange-400 text-white py-2 rounded font-semibold">
            Create account
          </button>
        </div>
      </div>
    </div>
  );
}
