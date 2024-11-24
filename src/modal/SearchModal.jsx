import { AiOutlineClose } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";


function SearchModal({isSearchModalOpen, setIsSearchModalOpen, handleSearchChange, searchResults, setSelectedBook, setIsBookModalOpen }) {
    return (
        <>
    
             {isSearchModalOpen && (
                                <div
                                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 "
                                    onClick={() => setIsSearchModalOpen(false)} // Close modal when clicking outside
                                >
                                    {/* Modal itself */}
                                    <dialog
                                        className="modal relative bg-gray-900 text-white max-w-2xl h-[67%] w-full overflow-y-scroll rounded-lg"
                                        open
                                        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside
                                    >
                                        {/* Close Button */}
                                        <button onClick={() => setIsSearchModalOpen(false)} className="absolute top-5 right-5 text-white text-2xl z-50">
                                            <AiOutlineClose />
                                        </button>

                                        {/* Search Input */}
                                        <div className="flex items-center w-full mb-2 bg-gray-900 rounded py-2 pl-7 absolute top-0 left-0">
                                            <IoSearch className="text-gray-500 mr-2" />
                                            <input
                                                type="text"
                                                className="w-full p-4 bg-gray-900 outline-none text-white"
                                                placeholder="Type your favorite book name here ..."
                                                onChange={handleSearchChange}
                                                autoFocus // Automatically focus when modal opens
                                            />
                                        </div>

                                        {/* Search Results */}

                                        {/* Add margin-top to push results below the input  constmazitioin */}
                                        {searchResults.length > 0 ? (
                                            searchResults.map((book) => (
                                                <div
                                                    key={book.id}
                                                    className="flex items-center w-full py-2 pl-7 hover:bg-[#00d991] cursor-pointer "
                                                    onClick={() => {
                                                        setSelectedBook(book);
                                                        setIsSearchModalOpen(false);
                                                        setIsBookModalOpen(true);
                                                    }}
                                                > 
                                                  <img className="w-12 h-16 mr-3" src={book.image} alt={book.name} />
                                                    {/* <img className="w-12 h-16 mr-3" src={book.image} /> */}
                                                    {/* <img className="w-12 h-16 mr-3" src={getImage(`../assets/book_images/${book.image}`)} alt={book.name} /> */}
                                                    <div className="flex-grow">
                                                        <p>{book.name}</p>
                                                        <p className="text-sm text-gray-400">Price: {book.price} TK</p>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <p className="text-center text-gray-400">No item found</p>
                                        )}
                                    </dialog>
                                </div>
                            )}   
        </>
    );
}

export default SearchModal;