import React from 'react'
import queryStrings from 'query-string';

function QueryParams({ location }) {
    const parsed = queryStrings.parse(location.search);
    console.log(parsed);
    return (
        <div>
            Query Params page
        </div>
    )
}

export default QueryParams
//NPM query String will makes it easy to access the data thats been passed in query String
//it's in the paramater location.search

