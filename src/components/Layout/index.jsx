import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./style.scss";
import SingleCard from "../UI/Cards/SingleCard"

const index = () => {

  const [cards, setCards] = useState([]);


    async function fetchCards(){
        try{
            const response = await axios.get("https://fakestoreapi.com/products");
            setCards(response.data)
        }catch(err){
            console.log(err.message)
        }

    }
    useEffect(() => {
        fetchCards();
      }, []);


    return (
        <section className="mb-10">
            <h2 className="mt-[75px] mb-[24px] text-[#1C1C1C] text-[24px] font-semibold leading-8" >Recommended items</h2>
            <div className="cards grid grid-cols-5 w-full gap-[20px]  ">
            {cards.map((el, index) => {
                
                return (
               <SingleCard key={index} state={el}/>
                );
              })}
                </div>
        </section>
    );
};

export default index;
