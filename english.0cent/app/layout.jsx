import '@styles/globals.css';
import Nav from '@components/general/nav';
import Account from '@components/general/account';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: 'English 0 cent',
    description: 'Visit and learn some English 0 cent',	
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
        <body>
            <div className='flex w-screen h-screen'>
                <div className='w-1/5 h-full justify-start px-4 py-4'>
                    <div className='head_text text-center '>
                        <Link href="/" className='orange_gradient'>English 0 cent</Link>
                    </div>
                   <div className='mx-4 my-4'>
                        <Nav /> 
                    </div>
                   <div className='fixed bottom-3 px-4 py-2'>
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
)
}

export default RootLayout;