import Nav from "./Nav"
import Background from "./Background"
const Layout = ({ children }) => {
    return (
        <div>
            <Nav/>
            <main>
                {children}
            <Background/>
            </main>
        </div>
    )
}

export default Layout