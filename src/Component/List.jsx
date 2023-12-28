import React from 'react';
import Incomelist from './IncomeList';
import Expenselist from './ExpenseList';


function List(props) {
    return (
            <div
                className="mx-auto my-8 grid max-w-4xl grid-cols-1 gap-8 px-5 text-sm md:grid-cols-2"
            >
                <Incomelist></Incomelist>
                <Expenselist></Expenselist>
            </div>   
    
    );
}

export default List;