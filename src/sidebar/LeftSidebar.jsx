import { CiSearch } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { MdOutlineCreateNewFolder, MdOutlineUpcoming } from "react-icons/md";
import { initialBookData } from "../data/initialBookData";

function LeftSidebar({ setIsSearchModalOpen, sortByTrending, toggleLeftModal, filterByStatus, selectItems, setSortedBooks, isLeftModalOpen, handleSearchChange }) {
    return (
        <>
            {/* Left Sidebar */}
            <aside className="w-1/6 p-4 hidden lg:block">
                {/* Search Bar */}
                <div onClick={() => setIsSearchModalOpen(true)} className="cursor-pointer border overflow-hidden  border-gray-300 hover:border-red-300 dark:border-green-400 rounded-md flex dark:bg-gray-800 p-2 items-center mb-6 mt-4">
                    <div>
                        <CiSearch className="text-xl dark:text-white ml-[10px] " />
                    </div>

                    <div>
                        <input onClick={() => setIsSearchModalOpen(true)} onChange={setIsSearchModalOpen} className="cursor-pointer border-none dark:bg-gray-800 w-full lg:w-52 outline-none ml-2" type="text" placeholder="Quick search..." />
                    </div>
                </div>

                {/* Sidebar Buttons */}
                <div>
                    <div
                        onClick={() => {
                            sortByTrending();
                            toggleLeftModal();
                        }}
                        className="cursor-pointer dark:hover:text-black dark:border-none mb-4 flex items-center py-2 px-4 border-l-2 rounded border-transparent hover:text-red-400 hover:border-gray-300 dark:hover:bg-green-400"
                    >
                        <FaFire className="mr-3" />
                        <span>Trending</span>
                    </div>

                    <div
                        onClick={() => {
                            filterByStatus("new_releases");
                            toggleLeftModal();
                        }}
                        className="cursor-pointer dark:hover:text-black dark:border-none mb-4 flex items-center py-2 px-4 border-l-2 rounded border-transparent hover:text-red-400 hover:border-gray-300 dark:hover:bg-green-400"
                    >
                        <MdOutlineCreateNewFolder className="mr-3" />
                        <span>New Releases</span>
                    </div>

                    <div
                        onClick={() => {
                            filterByStatus("coming_soon");
                            toggleLeftModal();
                        }}
                        className="cursor-pointer dark:hover:text-black dark:border-none mb-4 flex items-center py-2 px-4 border-l-2 rounded border-transparent hover:text-red-400 hover:border-gray-300 dark:hover:bg-green-400"
                    >
                        <MdOutlineUpcoming className="mr-3" />
                        <span>Coming Soon</span>
                    </div>

                    {/* this is select item from leftSidebar */}
                    <div
                        onClick={() => {
                            if (selectItems.length === 0) {
                                alert("You did not select any favorite item");
                            } else {
                                setSortedBooks(initialBookData().filter((book) => selectItems.includes(book.id)));
                            }
                            toggleLeftModal(); // Close modal after selection
                        }}
                        className="cursor-pointer dark:hover:text-black dark:border-none mb-4 flex items-center py-2 px-4 border-l-2 rounded border-transparent hover:text-red-400 hover:border-gray-300 dark:hover:bg-green-400"
                    >
                        {selectItems.length ? <GoHeartFill className="mr-3 text-red-400 dark:text-green-400" /> : <GoHeart className="mr-3" />}
                        <span>Favorites</span>
                    </div>
                </div>
            </aside>

            {/* Left Sidebar Modal for Small Devices */}
            {isLeftModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-start lg:hidden"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) {
                            toggleLeftModal(); // Close modal when clicking outside
                        }
                    }}
                >
                    <div className="w-3/4 sm:w-1/2 md:w-1/3 bg-white dark:bg-gray-900 p-4 h-full relative">
                        {/* Close Button */}
                        <button className="text-2xl mb-4 absolute top-9 right-4" onClick={toggleLeftModal}>
                            ✕
                        </button>

                        {/* Modal Content (same as the sidebar) */}
                        <div className="cursor-pointer border border-gray-300 hover:border-red-300 dark:border-green-400 rounded-md flex dark:bg-gray-900 w-[50%] p-2 items-center mb-6 mt-4 ml-4">
                            <CiSearch className="text-xl" />
                            <i className="cursor-pointer fa-solid fa-magnifying-glass text-gray-500"></i>
                            <input onClick={() => setIsSearchModalOpen(true)} onChange={handleSearchChange} className="border-none dark:bg-gray-900 w-full outline-none ml-2" type="text" placeholder="Quick search..." />
                        </div>
                        <div>
                            {/* Reuse the same buttons from the main sidebar */}
                            <div
                                onClick={() => {
                                    sortByTrending();
                                    toggleLeftModal();
                                }}
                                className="cursor-pointer mb-4 flex items-center py-2 px-4 border-l-2 dark:border-none dark:hover:text-black rounded border-transparent hover:text-red-400 hover:border-gray-300 dark:hover:bg-green-400"
                            >
                                <FaFire className="mr-3" />
                                <span>Trending</span>
                            </div>
                            <div
                                onClick={() => {
                                    filterByStatus("new_releases");
                                    toggleLeftModal();
                                }}
                                className="cursor-pointer mb-4 flex items-center py-2 px-4 border-l-2 dark:border-none dark:hover:text-black rounded border-transparent hover:text-red-400 hover:border-gray-300 dark:hover:bg-green-400"
                            >
                                <MdOutlineCreateNewFolder className="mr-3" />
                                <span>New Releases</span>
                            </div>
                            <div
                                onClick={() => {
                                    filterByStatus("coming_soon");
                                    toggleLeftModal();
                                }}
                                className="cursor-pointer mb-4 flex items-center py-2 px-4 border-l-2 dark:border-none dark:hover:text-black rounded border-transparent hover:text-red-400 hover:border-gray-300 dark:hover:bg-green-400"
                            >
                                <MdOutlineUpcoming className="mr-3" />
                                <span>Coming Soon</span>
                            </div>
                            <div
                                onClick={() => {
                                    if (selectItems.length === 0) {
                                        alert("You did not select any favorite item");
                                    } else {
                                        setSortedBooks(initialBookData().filter((book) => selectItems.includes(book.id)));
                                    }
                                    toggleLeftModal(); // Close modal after selection
                                }}
                                className="cursor-pointer mb-4 flex items-center py-2 px-4 border-l-2 dark:border-none dark:hover:text-black rounded border-transparent hover:text-red-400 hover:border-gray-300 dark:hover:bg-green-400"
                            >
                                {selectItems.length ? <GoHeartFill className="mr-3 text-red-400" /> : <GoHeart className="mr-3" />}
                                <span>Favorites</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default LeftSidebar;
