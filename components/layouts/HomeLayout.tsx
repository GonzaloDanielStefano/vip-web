import Head from "next/head"
import { FC, ReactNode } from "react"
import Navbar from "../Navbar"

interface Props {
    title: string,
    pageDescription: string,
    children: ReactNode
}
export const HomeLayout:FC<Props> = ({children,title,pageDescription}) => {
    return(
        <>
            <Head>
                <title>{title}</title>
            </Head>

            <nav>
                <Navbar/>
            </nav>

            <main style={{
               
            }}>
                {children}
            </main>

            <footer>

            </footer>
        </>
    )
}