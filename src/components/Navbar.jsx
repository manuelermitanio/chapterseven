import { Link } from 'react-router';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { HiOutlineMenu, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';


export default function Navbar() {
    const { user } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Fixed Navbar */}
            <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#000] via-gray-900 to-black border-b border-white/10 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto py-4 flex items-center justify-between">
                    {/* Brand */}
                    <div className="flex items-center">
                        <h1 className="text-2xl text-white font-bold">
                            chapter<span className="text-green-400">seven</span>
                        </h1>
                    </div>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex gap-6 text-sm text-white">
                        <Link to="/" className="hover-link">Home</Link>
                        <Link to="/aboutus" className="hover-link">About Us</Link>
                        <Link to="/" className="hover-link">Browse</Link>
                        <Link to="/books" className="hover-link">Contact Us</Link>
                        <Link
                            to={user.email == 'guest@chapterseven.dev' ?  '/login' : '/dashboard'}
                            className="border-b-2 border-transparent hover-link transition duration-200 text-green-400"
                        >
                            {user.email == 'guest@chapterseven.dev' ? 'Login' : user.username}
                        </Link>
                    </div>


                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-white" onClick={() => setIsOpen(true)}>
                        <HiOutlineMenu className="w-6 h-6 mr-5" />
                    </button>
                </div>
            </nav>

            {/* Mobile Drawer */}


            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed top-0 right-0 z-[60] h-screen w-100 bg-[#000] shadow-xl p-3"
                    >
                        <div className="flex justify-end">
                            <button className="text-white" onClick={() => setIsOpen(false)}>
                                <HiX className="w-6 h-6" />
                            </button>
                        </div>
                        <div className="flex flex-col text-white text-sm">
                            <div className="border-b border-gray-800 py-2">
                                <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                            </div>
                            <div className="border-b border-gray-800 py-2">
                                <Link to="/books" onClick={() => setIsOpen(false)}>Books</Link>
                            </div>
                            <div className="border-b border-gray-800 py-2">
                                <Link to="/login" onClick={() => setIsOpen(false)}>
                                    {user ? 'Dashboard' : 'Log In'}
                                </Link>
                            </div>
                        </div>

                    </motion.div>
                )}
            </AnimatePresence>



        </>
    );
}
