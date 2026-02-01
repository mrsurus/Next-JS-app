import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="text-red-600 flex flex-col gap-4">

        <Link href='/' className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-200 text-center">Home</Link>
        <Link href='/dashboard' className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-200 text-center">dashboard</Link>
        <Link href='/service' className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-200 text-center">service</Link>
        <Link href='/contact' className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-colors duration-200 text-center">Go to Contact Page</Link>
        <h1>Contact page</h1>
        This is my first practice app with Next.js 13!
        <button className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-200">Submit</button>
      </div>
    </div>
  );
}
