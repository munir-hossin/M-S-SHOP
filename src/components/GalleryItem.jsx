
import { TiStar } from "react-icons/ti";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { MdOutlineViewInAr } from "react-icons/md";

function GalleryItem({ onOpen, gallery, onAdd, selectItems, cartItems, handleHeartClick, }) {

    const isAlreadyAdded = cartItems.some((item) => item.id === gallery.id);

   


    return (
        <div className="w-[300px] cursor-pointer mx-auto sm:w-full hover:shadow hover:border-gray-200 border border-white dark:border-gray-600  p-3 rounded flex flex-col justify-between">
            <div onClick={() => onOpen(true)}>
                <div className="relative group">
                    <img src={gallery.image} alt="Book Cover" className="w-full object-cover rounded" />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300 rounded">
                    <MdOutlineViewInAr className="text-white text-5xl mx-auto mt-32" />
                    <span className="text-xl block mt-auto text-white text-center">View Details</span>
                    </div>
                </div>
                <div>
                    <p className="leading-7 mt-3">{gallery.name}</p>
                    <p className="text-xs leading-7 text-gray-500">{gallery.author}</p>
                    <div className="leading-7 text-2xl text-red-400 dark:text-green-400 flex">
                        {[...Array(gallery.rating)].map((_, index) => (
                            <TiStar key={index} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex mt-2">
                {/* Add to Cart button */}
                <div className="w-full text-center mr-2 py-2 dark:border-none dark:text-black dark:bg-green-400  hover:shadow hover:-translate-y-[1px] dark:hover:-translate-y-0 dark:hover:bg-green-500 border  rounded text-red-400 font-medium">
                    <button onClick={() => onAdd(gallery)} disabled={isAlreadyAdded}>
                        {isAlreadyAdded ? "Already Added" : `$${gallery.price} | Add to cart`}
                    </button>
                </div>
                    
                            {/* this is select item from gallery */}
                <div
                    className={` dark:hover:bg-green-400 dark:hover:bg-opacity-25 ml-auto dark:text-green-500 hover:shadow hover:-translate-y-[1px] dark:hover:-translate-y-0 border dark:border-green-400 text-red-400 font-medium px-3 flex items-center justify-center rounded-md cursor-pointer ${
                        selectItems.includes(gallery.id) ? "text-green-400" : "text-gray-500"
                    }`}
                    onClick={() => handleHeartClick(gallery.id)}
                >
                    {selectItems.includes(gallery.id) ? <GoHeartFill /> : <GoHeart />}
                </div>

            </div>
        </div>
    );
}

export default GalleryItem;

