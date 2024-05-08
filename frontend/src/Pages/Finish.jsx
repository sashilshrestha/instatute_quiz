export default function Finish() {
  return (
    <div className="flex sm:basis-1/2 flex-col items-center justify-center bg-gradient-to-b to-blue-500 from-primary sm:rounded-3xl rounded-b-3xl py-7 px-10">
      <h2 className="text-[#ebf1ff] font-hankengrotesk text-xl sm:text-lg font-bold">
        Your Result
      </h2>
      <div className="flex flex-col items-center justify-center w-44 h-44 rounded-full bg-white my-6 text-gray-600">
        <h1 className=" font-hankengrotesk text-7xl sm:text-6xl font-extrabold">
          76
        </h1>
        <p className=" text-lg sm:text-base font-hankengrotesk">of 100</p>
      </div>
      <h1 className=" font-hankengrotesk text-3xl sm:text-2xl mb-2 font-extrabold text-sky-900">
        Great
      </h1>
      <p className="text-center text-[#ebf1ff] text-lg sm:text-base font-hankengrotesk">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
}
