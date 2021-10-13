import React, {useState, useEffect} from 'react';
import CurrencyList from '../components/CurrencyList';
import Spinner from 'react-bootstrap/Spinner';
import Navbar from  "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";


const CurrecyContainer = () => {
    
    

    const[currencyItem, setCurrencyItem] = useState(null);



    const GetCurrency = async () =>
    await fetch("api/CurrencyApi")
    .then(response => response.json())
    .then(jsonItems =>{
        console.log(jsonItems);
        setCurrencyItem(jsonItems)
    });

    
    

    useEffect(() => {
        
        GetCurrency();
               
        

    },[]);

    if(currencyItem !== null)
        {
        
            return(
                <>
                <div><Container>
                <Navbar expand="lg" variant="light" bg="light">
                    <Container>
                        <Navbar.Brand href="#">FakeCoin</Navbar.Brand>
                    </Container>
                </Navbar>
            
                </Container></div>
                <div><CurrencyList item = {currencyItem}/></div>
                </>
            );
        }
    else return(<><Spinner></Spinner></>);
   
}

export default CurrecyContainer;