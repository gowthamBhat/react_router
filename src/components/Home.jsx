import React from 'react'


function Home(props) {
    function redirector() {
        props.history.push('/products')
        //history.push will direct the page to new page
        //history.replace will wont let user to visit back the old page
    }
    return (
        <div>
            <h5>Home</h5>
            <button onClick={redirector}> router redirect</button>
        </div>
    )
}

export default Home
