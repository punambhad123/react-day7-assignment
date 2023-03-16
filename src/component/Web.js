import { useState } from "react";
import LeftDiv from "./Left";
import RightDiv from "./Right";


export default function Main(){
    let img1="https://www.southernliving.com/thmb/pT_Tsl6Ny7gn5kpPasRbZV3Pouw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/gettyimages-914296496-2000-3546d73e7b264247b3d392253dbf032a.jpg"
    let [image, setImage] = useState(img1);

    let img2='https://www.euttaranchal.com/tourism/photos/valley-of-flowers-5353172.jpg'
    let img3='https://cdn.britannica.com/84/73184-004-E5A450B5/Sunflower-field-Fargo-North-Dakota.jpg'
    let img4='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3fQvC5a8PGZb9PVkKLjBvFC_roDzfOfQH_A&usqp=CAU'
    let imgarr=[img1, img2, img3, img4];
    let [count,setCount]=useState(0)


    const changeImage = () => {
      if(count===imgarr.length-1){
        setCount(count=-1);
      }
      setCount(++count);
      setImage(image = imgarr[count]);
      
        
    };


return (
    <>
    <LeftDiv image={image}/>
    <RightDiv changeImage={changeImage}/>
    </>
    
    )
}