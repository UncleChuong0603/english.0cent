import Nav from '../components/nav';
import Account from '../components/account';
import Image from 'next/image';
import Link from 'next/link';
import "./globals.css";

export const metadata = {
    title: 'English 0 cent',
    description: 'Visit and learn some English 0 cent',	
};

export default function RootLayout({
    children,
    }) {
    return (
        <html lang="en">
        <body>
            <div className='flex w-screen h-screen'>
                <div className='w-1/5 h-full px-5 py-5'>
                    <div className='head_text text-center transform transition duration-500 hover:scale-105'>
                        <Link href="/" className='orange_gradient'>English 0 cent</Link>
                    </div>
                   <div className='px-5 py-5'>
                        <Nav /> 
                    </div>
                   <div className='fixed bottom-10'>
                        <Account />
                    </div>
                </div>
                
                <div className='w-4/5 h-full bg-gray-300 overflow-auto'>
                    <main>
                        { children }
                    </main>
                </div>
            </div>

        </body>
    </html>
    );
}