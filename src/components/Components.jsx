import { useEffect, useState } from "react";
import GalleryItem from "./GalleryItem";
import Footer from "./Footer";
import { initialBookData } from "../data/initialBookData";
import LeftSidebar from "../sidebar/LeftSidebar";
import Header from "./Header";
import SearchModal from "../modal/SearchModal";
import RightSidebar from "../sidebar/RightSidebar";
import BookModal from "../modal/BookModal";
import LeftRightModalBtn from "../buttons/LeftRightModalBtn";

function Components() {
    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
    const [isBookModalOpen, setIsBookModalOpen] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);
    const [sortedBooks, setSortedBooks] = useState(initialBookData());
    const [searchResults, setSearchResults] = useState([]);
    const [selectItems, setselectItems] = useState([]);
    const [isLeftModalOpen, setIsLeftModalOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    useEffect(() => {
        if (isLeftModalOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [isLeftModalOpen]);

    // Function to toggle the modal
    const toggleLeftModal = () => {
        setIsLeftModalOpen(!isLeftModalOpen);
    };

    /**************  Function for Right side bar to toggle modal visibility */
    const [isRightModalOpen, setIsRightModalOpen] = useState(false);

    const toggleModal = () => {
        setIsRightModalOpen(!isRightModalOpen);
    };

    // Open book details modal
    const onOpenBookModal = (book) => {
        setSelectedBook(book);
        setIsBookModalOpen(true);
    };

    // Handle search input and open search modal if results are found
    const handleSearchChange = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        if (searchTerm) {
            const filteredBooks = initialBookData().filter((book) => book.name.toLowerCase().includes(searchTerm));
            setSearchResults(filteredBooks);
            setIsSearchModalOpen(true);
        }
    };

    //************ very impotent ******************//

    const handleHeartClick = (id) => {
        setselectItems((prevSelected) => (prevSelected.includes(id) ? prevSelected.filter((item) => item !== id) : [...prevSelected, id]));
    };

    //aa Handle by new Release coming soon and  State

    const filterByStatus = (status) => {
        const filtered = initialBookData().filter((book) => book.status === status);
        setSortedBooks(filtered);
    };

    // // Handle Sorting
    const handleSortByName = () => {
        const sorted = [...sortedBooks].sort((a, b) => a.name.localeCompare(b.name));
        setSortedBooks(sorted);
    };

    const sortByPrice = () => {
        const sortedByPrice = [...sortedBooks].sort((a, b) => a.price - b.price);
        setSortedBooks(sortedByPrice);
    };

    const sortByRating = () => {
        const sortedByRating = [...sortedBooks].sort((a, b) => a.rating - b.rating);
        setSortedBooks(sortedByRating);
    };

    const sortByTrending = () => {
        const sortedByRating = [...sortedBooks].sort((a, b) => b.rating - a.rating);
        setSortedBooks(sortedByRating);
    };

    // *************** this is for  Handling Cart in the Headers modal ********************

    const handleAddToCart = (gallery) => {
        const newData = {
            id: gallery.id,
            name: gallery.name,
            author: gallery.author,
            image: gallery.image,
            price: gallery.price,
            quantity: 1,
        };

        const itemExists = cartItems.find((item) => item.id === gallery.id);
        if (!itemExists) {
            setCartItems([...cartItems, newData]);
        }
    };

    const handleIncrement = (id) => {
        setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)));
    };

    const handleDecrement = (id) => {
        setCartItems(cartItems.map((item) => (item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item)));
    };

    const handleDelete = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
    };

    //********************** this is for  Handling Cart in the Headers modal End ********************

    return (
        <>
            <Header
                openModal={openModal}
                isModalOpen={isModalOpen}
                closeModal={closeModal}
                totalItems={totalItems}
                cartItems={cartItems}
                handleDecrement={handleDecrement}
                handleIncrement={handleIncrement}
                handleDelete={handleDelete}
                totalPrice={totalPrice}
            />

            <div>
                <div className="h-screen flex">
                    {/* **********************left ******************* */}
                    <LeftSidebar
                        setIsSearchModalOpen={setIsSearchModalOpen}
                        sortByTrending={sortByTrending}
                        toggleLeftModal={toggleLeftModal}
                        filterByStatus={filterByStatus}
                        selectItems={selectItems}
                        setSortedBooks={setSortedBooks}
                        isLeftModalOpen={isLeftModalOpen}
                        handleSearchChange={handleSearchChange}
                    />

                    {/* ********************   Main Gallery   ******************* */}
                    <main className="flex-1 px-2 pt-8 pb-5 overflow-y-scroll scrollbar-hide border dark:border-gray-600 relative">
                        <LeftRightModalBtn toggleLeftModal={toggleLeftModal} toggleModal={toggleModal} />

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {/* Search Modal */}
                            <SearchModal
                                isSearchModalOpen={isSearchModalOpen}
                                setIsSearchModalOpen={setIsSearchModalOpen}
                                handleSearchChange={handleSearchChange}
                                searchResults={searchResults}
                                setSelectedBook={setSelectedBook}
                                setIsBookModalOpen={setIsBookModalOpen}
                            />

                            <BookModal
                                isBookModalOpen={isBookModalOpen}
                                selectedBook={selectedBook}
                                selectItems={selectItems}
                                handleHeartClick={handleHeartClick}
                                setIsBookModalOpen={setIsBookModalOpen}
                                cartItems={cartItems}
                                handleAddToCart={handleAddToCart}
                            />

                            {sortedBooks.map((gallery) => (
                                <GalleryItem onOpen={() => onOpenBookModal(gallery)} onAdd={handleAddToCart} key={gallery.id} gallery={gallery} handleHeartClick={handleHeartClick} selectItems={selectItems} cartItems={cartItems} />
                            ))}
                        </div>
                    </main>

                    {/* RightSidebar */}
                    <RightSidebar handleSortByName={handleSortByName} sortByPrice={sortByPrice} sortByRating={sortByRating} isRightModalOpen={isRightModalOpen} toggleModal={toggleModal} />
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Components;

















