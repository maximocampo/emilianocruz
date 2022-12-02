import React, {useEffect, useState} from 'react';
import {url} from "../globals";

const withSheets = Component => props =>{
    const [data, setData] = useState({})
    
    const getSheet = async () => {
        const response = await fetch(url)
        const {values} = await response.json()
        
        const keys = values[0]
        const formattedValues = []
        
        values.forEach((row, i) => {
            if (i !== 0) {
                const entries = []
                
                keys.forEach((key, i) => {
                    entries.push([key, row[i]])
                })
                
                formattedValues.push(Object.fromEntries(entries))
            }
        })
        
        const page1 = formattedValues.filter(v => v.page === '1')
        
        setData({page1})
    }
    
    useEffect(() => {
        getSheet()
    }, [])
    
    
    return <Component {...props} data={data} />;
};

export default withSheets;
