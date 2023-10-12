import Link from "next/link";

function Navbar() {
    return(
        <div>
            <Link href='/' preload={false}>Home</Link>
            <Link href='/about' preload={false}>About</Link>
            <Link href='/contact' preload={false}>Contacts</Link>
        </div>
    );
}

export default Navbar;