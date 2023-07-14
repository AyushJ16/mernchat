import Avatar from "./Avatar";

export default function Contact({username,id, onClick,selected,online})
{
    return(
        <div key={id} onClick={()=>onClick(id)} 
                className={"border-b border-gray-100 cursor-pointer flex gap-2  items-center "+(selected ? 'bg-blue-200':'')}>
            {selected && (
                <div className="w-1 h-12 rounded-full  bg-blue-500"></div>
            ) }
            <div className="flex gap-2 py-2 pl-4">
                <Avatar userId={id} username={username} online={online}/>
                <div className="text-grey-800 ">{username}</div>
                </div>
        </div>
    )
}