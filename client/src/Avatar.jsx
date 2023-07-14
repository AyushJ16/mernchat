export default function Avatar({userId,username,online}){
    const colors=['bg-red-200','bg-green-200','bg-purple-200',
                    'bg-blue-200','bg-yellow-200','bg-teal-200'];
const userIdBase10=parseInt(userId,16);
// console.log(colors[userIdBase10 % colors.length]);
const color=colors[userIdBase10 % colors.length];

    return (
        <div className={"w-8 h-8 rounded-full relative flex items-center justify-center op-70 "+color}>
            <div className=" text-red-500 font-bold">
            {username[0]}
            </div>
            {online && (
                <div className="w-2 h-2 rounded-full bg-green-500 absolute bottom-0 right-0"></div>
            )}
            {!online &&
                <div className="w-2 h-2 rounded-full bg-gray-500 absolute bottom-0 right-0"></div>
            }
        </div>
    )
}