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
                <meta name="description" content="content"/>
                <meta name="og:title" content="content" />

            </Head>

            <nav>
                <Navbar/>
            </nav>

            <main className="layout-main" style={{margin:'50px auto'}}>
                {children}
            </main>

            <footer>

            </footer>
        </>
    )
}