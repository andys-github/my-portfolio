import Head from 'next/head'
import ProfileIntro from './profile-intro';
import Resume from './resume';
import { ProfileData } from '../data/profile-v1';

export default function Layout({ children }) {
    return (
        <div className='bg-purple-300 h-screen'>
            <Head>
                <title>Anindya Dey | Full Stack Developer</title>
            </Head>
            <div className='sm:w-11/12 xl:w-9/12 mx-auto sm:py-20 sm:grid grid-cols-12 grid-rows-3 gap-3'>
                <div className='
                    bg-white col-span-3 
                    sm:p-8 p-2 sm:p-0 flex sm:block sm:rounded-lg 
                    shadow-lg transition duration-500 ease-in-out sm:transform
                    hover:scale-110'>
                    <ProfileIntro profileIntro={ProfileData.intro} />
                </div>
                <div className='bg-white col-span-9 row-span-3 p-8 rounded-lg shadow-lg'>
                {children}
                </div>
                <div className='bg-white col-span-3 row-span-2 rounded-lg divide-y divide-fuchsia-300 shadow-lg'>
                {
                    ProfileData.resumeItems.map(resumeItem => 
                    <Resume key={resumeItem.name} resumeItem={resumeItem} />
                    )
                }
                </div>
            </div>
        </div>
    )
}