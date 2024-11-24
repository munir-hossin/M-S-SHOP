// import { useState } from "react";
// import { RiCloseLargeFill } from "react-icons/ri";

// function Modal({ isModalOpen, closeModal, selectedBook, addToCart }) {
//     const [quantity, setQuantity] = useState(1);

//     // Increment quantity
//     const increaseQuantity = () => setQuantity(quantity + 1);

//     // Decrement quantity
//     const decreaseQuantity = () => {
//         if (quantity > 1) setQuantity(quantity - 1);
//     };

//     return (
//         isModalOpen && selectedBook ? (
//             <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50">
//                 <dialog className="modal" open>
//                     <div className="w-8/12 max-w-5xl bg-gray-900 text-white rounded-xl p-4">
//                         <div className="modal-action">
//                             <RiCloseLargeFill className="text-white text-2xl cursor-pointer" onClick={closeModal} />
//                         </div>
//                         <h2 className="text-xl font-bold text-center mb-4">{selectedBook.name}</h2>
//                         <div className="flex items-center mb-4">
//                             <img src={selectedBook.image || image} alt={selectedBook.name} className="w-32 h-48 object-cover mr-4" />
//                             <div>
//                                 <p>{selectedBook.description}</p>
//                                 <p className="text-lg font-bold mt-2">${selectedBook.price}</p>
//                                 <div className="flex items-center mt-2">
//                                     <button className="px-2 bg-gray-700 rounded" onClick={decreaseQuantity}>−</button>
//                                     <span className="px-4">{quantity}</span>
//                                     <button className="px-2 bg-gray-700 rounded" onClick={increaseQuantity}>+</button>
//                                 </div>
//                                 <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded" onClick={() => addToCart(selectedBook, quantity)}>
//                                     Add to Cart
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </dialog>
//             </div>
//         ) : null
//     );
// }

// export default Modal;
