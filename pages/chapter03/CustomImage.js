import Image from "next/image";

const loader = ({src, width, quality}) => {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
}

function CustomImage() {
    return (
        <Image 
            loader={loader}
            src="../image/child-8297551_1280.webp"
            alt="My image alt text"
            width={350}
            height={540}
        />
    )
}

export default CustomImage;