import React, { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";

import { useParams } from "react-router-dom";
import { getItems } from "../../redux/reducer/items/items.action";

import Card from "./card";
function CardCollection(props) {
  
  const dispatch=useDispatch();
  const { type } = useParams();
  // const [ShowData, setShowData] = useState([
  //   {
  //     image:
  //       "https://th.bing.com/th/id/R.0fe4502024003c2c50e84b5b288c8659?rik=ldMOKuk6qMVavw&riu=http%3a%2f%2fwww.miamiamine.com%2fwp-content%2fuploads%2f2015%2f12%2fLOFT-Sweater.jpg&ehk=1f6XVqNXnqbNr6CElHgvm0q67E%2bhP9YWQmhkojTkDtM%3d&risl=&pid=ImgRaw&r=0",
  //     price: 5000,
  //     Brand: "Levi's",
  //     title: "Red sweater",
  //     gender: "Men",
  //     category: "Shirt",
  //   },
  //   {
  //     image:
  //       "https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     price: 500,
  //     Brand: "Levi's",
  //     title: "Red sweater",
  //     gender: "Men",
  //     category: "Shoes",
  //   },
  //   {
  //     image:
  //       "https://i.pinimg.com/originals/d2/21/53/d22153974503105d752897d0118bd795.jpg",
  //     price: 500,
  //     Brand: "Levi's",
  //     title: "Red sweater",
  //     gender: "Men",
  //     category: "Shoes",
  //   },
  //   {
  //     image:
  //       "https://i.pinimg.com/originals/d2/21/53/d22153974503105d752897d0118bd795.jpg",
  //     price: 500,
  //     Brand: "Levi's",
  //     title: "Red sweater",
  //     gender: "Women",
  //     category: "Shoes",
  //   },
  //   {
  //     image:
  //       "https://i.pinimg.com/originals/d2/21/53/d22153974503105d752897d0118bd795.jpg",
  //     price: 500,
  //     Brand: "Levi's",
  //     title: "Red sweater",
  //     gender: "Men",
  //     category: "Shoes",
  //   },
  //   {
  //     image:
  //       "https://i.pinimg.com/originals/d2/21/53/d22153974503105d752897d0118bd795.jpg",
  //     price: 500,
  //     Brand: "Levi's",
  //     title: "Red sweater",
  //     gender: "Women",
  //   },
  //   {
  //     image:
  //       "https://i.pinimg.com/originals/d2/21/53/d22153974503105d752897d0118bd795.jpg",
  //     price: 500,
  //     Brand: "Levi's",
  //     title: "Red sweater",
  //     gender: "Men",
  //   },
  //   {
  //     image:
  //       "https://i.pinimg.com/originals/d2/21/53/d22153974503105d752897d0118bd795.jpg",
  //     price: 500,
  //     Brand: "Levi's",
  //     title: "Red sweater",
  //     gender: "Women",
  //   },
  // ]);
  const [ShowData,setShowData]=useState();

  const [cardData, setCardData] = useState();

  useEffect(() => {
    dispatch(getItems()).then((data)=>
    { 
      setShowData(data.payload.items)
      setCardData(data.payload.items)
    })
    
  }, [type]);
  
  console.log(cardData)

  function getFilteredList() {
    
    if (type === "All") {
      return cardData;
    }
    
    if(cardData&&type==="Shoes")
    {  console.log("andar aaya")
      return cardData.filter((item)=>item.itemType===type)
    }
    if(cardData&&type==="Shirt")
    {  console.log("andar aaya")
      return cardData.filter((item)=>item.itemType==="shirt")
    }
    if(cardData&&type==="Jacket")
    {  console.log("andar aaya")
      return cardData.filter((item)=>item.itemType==="Jacket")
    }

    if(!type)
    return ShowData

    if (cardData) return cardData.filter((item) => item.gender === type || item.gender==="Both" ||item.itemType===type );


    else return ShowData;
  }

  var filteredList = useMemo(getFilteredList, [props, type,cardData]);

  console.log(filteredList);
  return (
    <>
      <div className="flex sm:flex-col md:flex-row lg:flex-row flex-wrap m-2 p-4 justify-center gap-8  align-middle  ">
        {filteredList && filteredList.map((cardData) => (
          <Card {...cardData} />
        ))}
      </div>
    </>
  );
}

export default CardCollection;
