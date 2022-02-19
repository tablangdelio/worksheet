import Navbar from './Navbar';
import Footer from './Footer';


const Layout = ({ children }) => {
    return(
        <>
            <Navbar />
            <div className=' relative
                        flex
                        flex-wrap 
                        justify-center
                        items-center
                        min-h-screen'>
                    { children }
            </div>
        </>
    );
}

export default Layout;