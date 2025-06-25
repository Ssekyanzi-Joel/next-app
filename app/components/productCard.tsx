import React from 'react'
import AddToCart from './AddToCart';
// import styles from './productCard.module.css';

// const productCard = () => {
//   return (
//       <div className={styles.card}>
//        <AddToCart/>
      
//       </div>
//   )
// }


const productCard = () => {
    return (
        <div className='p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-500 rounded-lg shadow-lg'>
         <AddToCart/>
        
        </div>
    )
  }

export default productCard