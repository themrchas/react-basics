import { useEffect, useState } from "react";

export default function EffectREST() {

    const url = "https://jsonplaceholder.typicode.com/users/1/todos/";

    const [fetchedCount,setFetchedCount] = useState(0);

     useEffect( () => {

        const fetchData = async _ => {

        let response  = await fetch(url);
        let data = await response.json();

        console.log(data)

        setFetchedCount( _ => data.length );

        }

        fetchData()



    }, []) //fetchData





    return (

        <div>

            <h2>Example useEffect fetching asynchronously upon component render.</h2>
            <h3>Number of items fetched is {fetchedCount}</h3>

        </div>

    )





}