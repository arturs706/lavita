import Nav from "./Nav"

const Layout = ({ children }) => {
    return (
        <div className="bg-gradient-to-b from-orange-50	... w-full h-screen">
        {/* <div className="bg-slate-800"> */}
            <Nav/>
            <main>
                {children}

            </main>
        </div>
    )
}

export default Layout