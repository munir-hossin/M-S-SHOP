import { FaChevronRight } from "react-icons/fa6";
import { useEffect, useRef } from "react";

function RightSideModal({ handleSortByName, sortByPrice, sortByRating, toggleModal }) {
    const modalRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                toggleModal();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [toggleModal]);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
            {/* Modal content */}
            <div
                ref={modalRef}
                className="w-2/3 rounded-l-lg rounded-br-md h-[320px] bg-white dark:bg-gray-900 dark:border-none p-4 shadow-lg overflow-y-auto relative"
                role="dialog"
                aria-modal="true"
            >
                <button
                    className="mb-4 absolute  top-8 bg-gray-100 dark:bg-opacity-15 rounded-full px-2 py-1 text-xs right-4"
                    onClick={toggleModal}
                    autoFocus
                >
                    Close
                </button>
                <h2 className="text-xl font-bold mb-3 mt-3">Filter On Page</h2>
                <div className="space-y-2">
                    <div
                        className="flex cursor-pointer items-center py-1 px-4 rounded border-r-2 dark:border-none border-transparent hover:text-red-400 hover:border-gray-300 dark:hover:bg-green-400"
                        onClick={() => {
                            handleSortByName();
                            toggleModal();
                        }}
                        tabIndex={0}
                    >
                        <div className="mr-1">
                            <FaChevronRight className="text-xs" />
                        </div>
                        <div>
                            <span className="text-base">By Name</span>
                        </div>
                    </div>

                    <div
                        className="flex cursor-pointer items-center py-1 px-4 rounded border-r-2 dark:border-none border-transparent hover:text-red-400 hover:border-gray-300 dark:hover:bg-green-400"
                        onClick={() => {
                            sortByPrice();
                            toggleModal();
                        }}
                        tabIndex={0}
                    >
                        <div className="mr-1">
                            <FaChevronRight className="text-xs" />
                        </div>
                        <div>
                            <span className="text-base">By Price</span>
                        </div>
                    </div>

                    <div
                        className="flex cursor-pointer items-center py-1 px-4 rounded border-r-2 dark:border-none border-transparent hover:text-red-400 hover:border-gray-300 dark:hover:bg-green-400"
                        onClick={() => {
                            sortByRating();
                            toggleModal();
                        }}
                        tabIndex={0}
                    >
                        <div className="mr-1">
                            <FaChevronRight className="text-xs" />
                        </div>
                        <div>
                            <span className="text-base">By Ratings</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RightSideModal;













