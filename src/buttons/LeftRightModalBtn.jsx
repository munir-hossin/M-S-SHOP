function LeftRightModalsBtn({ toggleLeftModal, toggleModal }) {
    return (
        <div>
            <div className="">
                <button className="cursor-pointer hover:bg-gray-100 dark:hover:bg-opacity-15 py-1 px-2 rounded-full block lg:hidden text-2xl absolute top-3 left-[10px]" onClick={toggleLeftModal}>
                    ☰
                </button>
            </div>

           
            <div className="lg:hidden p-4 ">
                <button className="hover:bg-gray-100 dark:hover:bg-opacity-15 py-1 px-4 cursor-pointer absolute top-3 right-[10px] rounded-full " onClick={toggleModal}>
                    <p className="text-2xl text-bold">⋮</p>
                </button>
            </div>
        </div>
    );
}

export default LeftRightModalsBtn;









// import { CiMenuKebab } from "react-icons/ci";


// function LeftRightModalBtn({toggleLeftModal, toggleModal}) {
//     return (
//         <>
//              <button className="block lg:hidden text-2xl absolute top-1 left-[10px]" onClick={toggleLeftModal}>
//                             ☰ {/* Replace with your icon if needed */}
//                         </button>

//                         {/* Right side bar icon 3 dod */}
//                         <div className="lg:hidden p-4 ">
//                             <CiMenuKebab className="text-2xl cursor-pointer absolute top-3 right-[3px]" onClick={toggleModal} />
//                         </div>
//         </>
//     );
// }

// export default LeftRightModalBtn;