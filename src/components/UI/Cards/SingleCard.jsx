const SingleCard = ({state:{image,price,title }}) => {
  return (
  
        <div className="card  items-center flex flex-col hover:shadow-lg p-4 border rounded-md  w-[220px]">
       
        <img  className="w-[150px] mb-[29px] h-[170px] flex items-center" src={image} alt="phot" /> 
      <div className="dddcvd">  
        <h2 className="mb-1 text-[16px] font-medium heyyou">{price}</h2>
          <p className="leading-6 font-normal">{title}</p></div>
        </div>
      
  );
};

export default SingleCard;
// {cards.map((el, index) => {
                
//     return (
//    <Card key={index} state={el}/>
//     );
//   })}