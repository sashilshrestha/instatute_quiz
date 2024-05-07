
export default function Skill(props) {
    
    const colors = [
        {
            main: 'text-[#ff5757]',
            background: 'bg-[#ff5757]/5'
        },
        {
            main: 'text-[#ffb01f]',
            background: 'bg-[#ffb01f]/5'
        },
        {
            main: 'text-[#00bd91]',
            background: 'bg-[#00bd91]/5'
        },
        {
            main: 'text-[#1125d4]',
            background: 'bg-[#1125d4]/5'
        },
    ];
    return (
        <div className={`flex justify-between ${colors[props.colorIndex].background} items-center p-4 rounded-xl shadow`}>
            <div className="flex space-x-3">
                <img src={props.source} alt="icon" />
                <span className={`${colors[props.colorIndex].main} font-hankengrotesk text-lg sm:text-base`}>{props.category}</span>
            </div>
            <div>
                <span className="font-hankengrotesk text-lg sm:text-base font-bold">{props.score}</span>
                <span className="font-hankengrotesk text-lg sm:text-base text-[#868593]"> / 100</span>
            </div>
            
        </div>
    );
}   