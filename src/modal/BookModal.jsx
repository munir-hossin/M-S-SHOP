
import { GoHeart, GoHeartFill } from "react-icons/go";
import { useState } from "react";

function BookModal({ isBookModalOpen, selectedBook, handleAddToCart, selectItems, setIsBookModalOpen, handleHeartClick, cartItems }) {
    const isAlreadyAdded = selectedBook && cartItems.some((item) => item.id === selectedBook.id);
    const [isZoomed, setIsZoomed] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleOverlayClick = () => {
        setIsBookModalOpen(false);
    };

    const handleMouseEnter = () => {
        setIsZoomed(true);
    };

    const handleMouseLeave = () => {
        setIsZoomed(false);
        setPosition({ x: 0, y: 0 }); // Reset position
    };

    const handleMouseMove = (e) => {
        if (!isZoomed) return;

        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const offsetX = e.clientX - left;
        const offsetY = e.clientY - top;

        // Calculate position based on cursor movement
        const x = ((offsetX / width) * 100) - 50; // Center it (-50 for panning range)
        const y = ((offsetY / height) * 100) - 50; // Center it (-50 for panning range)

        setPosition({ x, y });
    };

    return (
        <>
            {isBookModalOpen && selectedBook ? (
                <div className="fixed inset-0 bg-gray-700 bg-opacity-25 flex items-center justify-center z-50" onClick={handleOverlayClick}>
                    <dialog
                        onClick={(e) => e.stopPropagation()}
                        id="my_modal_4"
                        className="modal"
                        open
                    >
                        <div className="w-full max-w-4xl px-2 md:px-5">
                            <div className="flex flex-col md:flex-row text-gray-300 bg-[#1e293b] lg:h-[400px] rounded-2xl items-center">
                                {/* Book Image with Zoom and Panning */}
                                <div
                                    className="order-1 lg:order-12 pt-5 md:p-0 w-full md:w-1/2 lg:w-1/3 lg:h-[400px] relative overflow-hidden"
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    onMouseMove={handleMouseMove}
                                >
                                    <img
                                        src={selectedBook.image || ''}
                                        alt={selectedBook.name || 'Book'}
                                        className={`rounded-xl h-64 md:h-full lg:w-full object-cover text-center mx-auto justify-center transition-transform duration-300 ease-in-out ${isZoomed ? 'scale-150 cursor-move' : 'scale-100'}`}
                                        style={{
                                            transform: `translate(${position.x}%, ${position.y}%)`,
                                        }}
                                    />
                                </div>

                                {/* Book Details */}
                                <div className="w-full lg:w-[67%] px-3 py-4 md:py-6 md:space-y-4 order-2 lg:order-1 text-center md:text-start">
                                    <h2 className="text-2xl md:text-3xl font-bold mb-2">{selectedBook.name || 'Unknown Title'}</h2>
                                    <span className="block mb-2">{selectedBook.author}</span>
                    
                                    <p className="text-sm md:text-base mb-4">{selectedBook.description || 'No description available.'}</p>

                                    {/* Button Area */}
                                    <div className="flex flex-col sm:flex-row justify-center sm:justify-start mt-2 space-y-2 sm:space-y-0 sm:space-x-2">
                                        <button
                                            onClick={() => handleAddToCart(selectedBook)}
                                            disabled={isAlreadyAdded}
                                            className="w-full sm:w-auto px-4 py-2 bg-green-400 hover:bg-green-500 text-black rounded font-medium"
                                        >
                                            {isAlreadyAdded ? "Already Added" : `$${selectedBook.price || '0'} | Add to cart`}
                                        </button>

                                        {/* Heart Button */}
                                        <div
                                            className={`w-full sm:w-auto border py-2 px-4 ${selectItems.includes(selectedBook?.id) ? "text-green-400" : "text-green"
                                                } hover:bg-green-400 hover:bg-opacity-25 border-green-400 font-medium rounded-md cursor-pointer flex justify-center items-center`}
                                            onClick={() => handleHeartClick(selectedBook?.id)}
                                        >
                                            {selectItems.includes(selectedBook?.id) ? <GoHeartFill className="text-2xl" /> : <GoHeart className="text-2xl text-green-400" />}
                                        </div>

                                        {/* Close Button */}
                                        <button
                                            className="w-full sm:w-auto bg-white py-2 px-4 text-black rounded"
                                            onClick={() => setIsBookModalOpen(false)}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </dialog>
                </div>
            ) : null}
        </>
    );
}

export default BookModal;



























































// import { GoHeart, GoHeartFill } from "react-icons/go";

// function BookModal({ isBookModalOpen, selectedBook, handleAddToCart, selectItems, setIsBookModalOpen, handleHeartClick, cartItems }) {
    
//     const isAlreadyAdded = selectedBook && cartItems.some((item) => item.id === selectedBook.id);

//     const handleOverlayClick = () => {
//         setIsBookModalOpen(false);
//     };

//     return (
//         <>
//             {isBookModalOpen && selectedBook ? (
//                 <div className="fixed inset-0 bg-gray-700 bg-opacity-25 flex items-center justify-center z-50" onClick={handleOverlayClick}>
//                     <dialog
//                         onClick={(e) => e.stopPropagation()}
//                         id="my_modal_4"
//                         className="modal"
//                         open
//                     >
//                         <div className="w-full max-w-4xl px-2 md:px-5">
//                             <div className="flex flex-col md:flex-row text-gray-300 bg-[#1e293b] lg:h-[400px] rounded-2xl items-center">
//                                 {/* Book Image */}
//                                 <div className="order-1 lg:order-12 pt-5 md:p-0 w-full md:w-1/2 lg:w-1/3 lg:h-[400px] ">
//                                     <img
//                                         src={selectedBook.image || ''}
//                                         alt={selectedBook.name || 'Book'}
//                                         className="rounded-xl h-64 md:h-full lg:w-full  object-cover text-center mx-auto justify-center"
//                                     />
//                                 </div>

//                                 {/* Book Details */}
//                                 <div className="w-full lg:w-[67%] px-3 py-4 md:py-6 md:space-y-4 order-2 lg:order-1 text-center md:text-start">
//                                     <h2 className="text-2xl md:text-3xl font-bold mb-2">{selectedBook.name || 'Unknown Title'}</h2>
//                                     <span className="block mb-2">{selectedBook.author}</span>
                    
//                                     <p className="text-sm md:text-base mb-4">{selectedBook.description || 'No description available.'}</p>

//                                     {/* Button Area */}
//                                     <div className="flex flex-col sm:flex-row justify-center sm:justify-start mt-2 space-y-2 sm:space-y-0 sm:space-x-2">
//                                         <button
//                                             onClick={() => handleAddToCart(selectedBook)}
//                                             disabled={isAlreadyAdded}
//                                             className="w-full sm:w-auto px-4 py-2 bg-green-400 hover:bg-green-500 text-black rounded font-medium"
//                                         >
//                                             {isAlreadyAdded ? "Already Added" : `$${selectedBook.price || '0'} | Add to cart`}
//                                         </button>

//                                         {/* Heart Button */}
//                                         <div
//                                             className={`w-full sm:w-auto border py-2 px-4 ${selectItems.includes(selectedBook?.id) ? "text-green-400" : "text-green"
//                                                 } hover:bg-green-400 hover:bg-opacity-25 border-green-400 font-medium rounded-md cursor-pointer flex justify-center items-center`}
//                                             onClick={() => handleHeartClick(selectedBook?.id)}
//                                         >
//                                             {selectItems.includes(selectedBook?.id) ? <GoHeartFill className="text-2xl" /> : <GoHeart className="text-2xl text-green-400" />}
//                                         </div>

//                                         {/* Close Button */}
//                                         <button
//                                             className="w-full sm:w-auto bg-white py-2 px-4 text-black rounded"
//                                             onClick={() => setIsBookModalOpen(false)}
//                                         >
//                                             Close
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </dialog>
//                 </div>
//             ) : null}

    // this is my code with responsive &&&&&&&&&&&&&&&&&&&&&
//         </>
//     );
// }

// export default BookModal;














