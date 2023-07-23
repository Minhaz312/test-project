import React from 'react'
import CategoryItem from './CategoryItem'

import categories from "./../../../categories.json"

export default function CategoryList() {

    

  return (
    <div>
        <ul className='border relative z-10'>
            {
                categories.map((category,i)=><li key={i} className='border-b transition-all main-cat'>
                <CategoryItem icon={category.icon} name={category.name} />
                <ul className='min-h-[100%] w-[100%] absolute -right-full top-0 border shadow bg-white sub-cat '>
                    {
                    category.subcategories.map((subCat,j)=><li key={j} className='border-b sub-item'>
                        <CategoryItem icon={false} name={subCat.name} />
                        <ul className='min-h-[100%] min-w-[100%] absolute -right-full shadow top-0 border-b bg-white sub2-cat '>
                            {
                                subCat.subcategories.map((sub2Cat,k)=><li key={k} className='border-b'>
                                    <CategoryItem icon={false} arrow={false} name={sub2Cat.name} />
                                </li>
                            )}
                        </ul>
                        </li>
                    )}                    
                </ul>
            </li>)
            }
        </ul>
    </div>
  )
}
