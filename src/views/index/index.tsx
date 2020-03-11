import React, { useState, useEffect } from "react";
import apiJson from "../../services/apiJson";

interface State {
    id: number
    slug: string
    name: string
    background_image: string
}

function DataLoader() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetch(apiJson.url)
                    .then(response => response.json())
                    .then(json => {
                        setData(json.results);

                        console.log("data", data)
                    });

                return result

            }catch (err) {
                console.log("ERROR", err)
            }
        };

        // fetchData();
    },[data]);

    return (
        <div>
            <h1>teste</h1>
        </div>
    );
}

export default DataLoader