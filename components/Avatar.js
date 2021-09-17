import Image from "next/image";

function Avatar({url, className}) {
    return (
        <Image 
            height={35}
            width={40}
            loading="lazy"
            className={`h-10 rounded-full
            cursor-pointer transition duration-150 
            transform hover:scale-110 ${className}`}
            src={url}
            alt="profile-pic"
        />    
    );
}

export default Avatar
