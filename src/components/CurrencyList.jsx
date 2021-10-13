import React from "react";
import {Line} from "react-chartjs-2";

const CurrencyList = ({item}) =>{

    console.log(item);
    let currency = item.CurrencyId;

    let spaces = [];

    let endDate = new Date(Date.now());
    let startDate = new Date(Date.now());

    endDate.setHours(endDate.getHours()-1);
    

    for(let i = 0; i<60;i++)
    {
        if(i === 59) spaces.push(startDate.toLocaleString().substring(0,16));
        else if(i === 0) spaces.push(endDate.toLocaleString().substring(0,16));
        else spaces.push(" ");
    }

    console.log(spaces);
    
    
    let list = item.Values.map(ValueItem => {
        
        return(parseInt(ValueItem))

    });


    

    return(
        <>
            <Line
                data={{
                    labels: spaces,
                    datasets:[{
                        label:currency,
                        data:list
                    },],
                }}
                height={400}
                width={600}
                options={{maintainAspectRatio: false}}
            />
        </>
    )

}
export default CurrencyList;