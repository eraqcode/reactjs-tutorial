import React from 'react'

export const Pagination = ( {elementsPerPage, totalElements, paginate} ) => {

    const numberOfPages = []
    
    for (let i = 0; i < Math.ceil( totalElements / elementsPerPage ); i++) {
        
        numberOfPages.push(i)
        
    }

    
    return (
        <nav>
            <ul className='pagination'>
                {numberOfPages.map(number => (
                    <li key={number} className='page-item'>
                        <a 
                            onClick={() => paginate(number)} 
                            href='!#' 
                            className='page-link'
                        >
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
    </nav>
        
    )
}
