// import React,{useContext} from 'react'
// import { ProductContext } from "../contexts/ProductContext";
// import { SidebarContext } from "../contexts/SidebarContext";

// const Sidebar = ({setCategory}) => {
//     const { products } = useContext(ProductContext);
//     const { setIsOpen, isOpen } = useContext(SidebarContext);
//     const categories = [...new Set(products.map((product) => product.category))];
//     const handleCategory = (category) => {
//      setCategory(category)
//    };
//   return (
//     <div className={`${isOpen ? 'left-0':'-left-full'
//     } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[15vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]` } >
//       <ul>
//         <li>Home</li>
//         {categories.map((category) => (
//         <li
//           key={category}
//           className=""
//           onClick={() => handleCategory(category)}
//         >
//           {category}
//         </li>
//       ))}
      
//       </ul>
//     </div>
//   )
// }

// export default Sidebar
