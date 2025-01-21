import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="flex flex-col items-center mb-8">
      <Image
        src="/static/my_image.JPG"
        alt="Aleksej"
        width={384}
        height={384} 
        className="w-96 h-96 rounded-full object-cover mb-6 border-4 border-gray-800"
        unoptimized
      />
        <h1 className="text-5xl font-extrabold text-gray-800">Hi, I&apos;m Aleksej</h1>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center max-w-2xl px-4">
        I&apos;m a software engineer currently working at Citigroup in Fixed Income eTrading
      </h3>

      <h3 className="text-xl text-gray-800 text-center max-w-2xl px-4 mb-8">
        So far I can confidently say I have brought down <em className="text-red-600 font-bold">0</em> prod databases.
      </h3>

      <h3 className="text-center text-xl text-gray-800 mb-8">
        Feel free to{' '}
        <a
          href="mailto:azabaijakin1@gmail.com"
          className="text-blue-600 hover:underline"
        >
          get in touch with me
        </a>{' '}
        if you want your prod databases to also stay stable.
      </h3>

      <div className="mt-8 text-center text-xl text-gray-800">
        <p>You can also email me directly at:</p>
        <a
          href="mailto:azabaijakin1@gmail.com"
          className="text-blue-600 hover:underline"
        >
          azabaijakin1@gmail.com
        </a>
      </div>
    </div>
  );
}
