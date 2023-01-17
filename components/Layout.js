import Head from "next/head";

export default function Layout({ children, title= "Default title"}){
    return(
        <div className="flex justify-center items-center flex-col min-h-screen text-white font-mono bg-gray-800">
            <Head>
                <title>{title}</title>
            </Head>
            <main className=" ">
                
                {children}
            </main>

            <footer className="w-full h-6 flex justify-center items-center text-gray-500 text-sm">
                @udemy 2021
            </footer>

        </div>
    )
}