
import Link from "next/link";
import { useRouter } from "next/router";
import Cookie from "universal-cookie";
import Layout from "../components/Layout";

const cookie = new Cookie();

export default function MainPage() {
    const router = useRouter();

    const logout = () => {
        cookie.remove("access_token");
        router.push("/");
    };

    return (
        <Layout title="Main page">
            <div className="mb-10 flex">
                
                <Link href="/blog-page">
                    <p className="bg-indigo-500 mr-8 hover:bg-indigo-600 text-white px-4 py-12 rounded">Visit BLOG BY SSG + ISR</p>
                </Link>
                
                <Link href="/task-page">
                    <p className="bg-gray-500 mr-8 hover:bg-indigo-600 text-white px-4 py-12 rounded">Visit Task BY SSG + ISR</p>
                </Link>
            </div>


            <svg 
            onClick={logout}
            className="mt-10 cursor-pointer w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1">

                </path>
            </svg>

        </Layout>
    )
}


