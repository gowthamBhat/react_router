import React from 'react'

function Products(props) {
    console.log(props);

    return (
        <div>
            <h3>Products name</h3>
            <ul>
                <li>{props.name}</li>
            </ul>
        </div>
    )
}

export default Products
