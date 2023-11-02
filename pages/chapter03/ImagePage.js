import Image from "next/image";

export default function ImagePage() {
    return (
        <>
            <div style={{
                width: 500,
                height: 200,
                position: 'relative'
            }}
            >
                <Image 
                    src='https://cdn.pixabay.com/photo/2023/10/06/06/42/child-8297551_1280.png'
                    layout="fill"
                    objectFit='cover'
                    alt="test image"
                />
            </div>
        </>
    )
}