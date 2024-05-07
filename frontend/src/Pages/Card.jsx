import Skill from "./Skill";
import data from "./data.json";

export default function Card() {
    return(
        <div className="flex flex-col sm:flex-row sm:w-[40rem] sm:h-[30rem] sm:rounded-3xl h-full w-full sm:shadow-lg bg-white">
            <div className="flex sm:basis-1/2 flex-col items-center justify-center bg-gradient-to-b to-[#7857ff] from-[#ffffff] sm:rounded-3xl rounded-b-3xl py-7 px-10">
                <h2 className="text-[#ebf1ff] font-hankengrotesk text-xl sm:text-lg font-bold">Your Result</h2>
                <div className="flex flex-col items-center justify-center w-44 h-44 rounded-full bg-gradient-to-b from-[#2421ca]/100 to-[#4e21ca]/0 my-6">
                    <h1 className="text-white font-hankengrotesk text-7xl sm:text-6xl font-extrabold">76</h1>
                    <p className="text-[#c8c7ff] text-lg sm:text-base font-hankengrotesk">of 100</p>
                </div>
                <h1 className="text-white font-hankengrotesk text-3xl sm:text-2xl mb-2 font-extrabold">Great</h1>
                <p className="text-center text-[#ebf1ff] text-lg sm:text-base font-hankengrotesk">You scored higher than 65% of the people who have taken these tests.</p>
            </div>
            <div className="flex sm:basis-1/2 flex-col min-h-auto justify-between space-y-5 p-8 sm:px-10">
                <h1 className="font-hankengrotesk text-xl sm:text-lg font-bold">Summary</h1>
                <div className="flex flex-col space-y-4">
                {data.map((skill, index) => (
                    <Skill
                        key={index}
                        source={skill.icon}
                        category={skill.category}
                        score={skill.score}
                        colorIndex={index}
                    />
                ))}
                </div>
                <button className="bg-[#303b5a] sm:hover:bg-gradient-to-b to-[#2e2be9] from-[#7857ff] active:bg-gradient-to-b text-white py-4 sm:py-3 rounded-full font-hankengrotesk text-xl sm:text-lg font-bold">Continue</button>
            </div>
        </div>
    );
}