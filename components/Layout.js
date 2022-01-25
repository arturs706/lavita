import Nav from "./Nav"

export default function Layout({ children }) {
    return (
        <div className="bg-gradient-to-b from-orange-50	... w-full h-screen" id="main-cont">
            <Nav/>
                <main>
                    {children}
                </main>
        </div>
    )
}