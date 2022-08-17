import React, { useState } from "react";

function ImageBar() {
  const [images] = useState([
    {
      url: "https://th.bing.com/th/id/R.0fe4502024003c2c50e84b5b288c8659?rik=ldMOKuk6qMVavw&riu=http%3a%2f%2fwww.miamiamine.com%2fwp-content%2fuploads%2f2015%2f12%2fLOFT-Sweater.jpg&ehk=1f6XVqNXnqbNr6CElHgvm0q67E%2bhP9YWQmhkojTkDtM%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      url: "https://i.pinimg.com/originals/d2/21/53/d22153974503105d752897d0118bd795.jpg",
    },
    {
      url: "https://i.pinimg.com/originals/77/83/e0/7783e0a65e720ce1ff0f56bc0dbe57fc.jpg",
    },
    {
      url: "https://th.bing.com/th/id/R.0fe4502024003c2c50e84b5b288c8659?rik=ldMOKuk6qMVavw&riu=http%3a%2f%2fwww.miamiamine.com%2fwp-content%2fuploads%2f2015%2f12%2fLOFT-Sweater.jpg&ehk=1f6XVqNXnqbNr6CElHgvm0q67E%2bhP9YWQmhkojTkDtM%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      url: "https://i.pinimg.com/originals/d2/21/53/d22153974503105d752897d0118bd795.jpg",
    },
    {
      url: "https://i.pinimg.com/originals/77/83/e0/7783e0a65e720ce1ff0f56bc0dbe57fc.jpg",
    },
  ]);
  return (
    <>
      {/* <div className="lg:flex hidden flex-wrap h-100  w-full ">
        {images.map((photo)=>
        {
            return(
                <>
                <img src={photo.url} className="lg:w-1/6  w-full" />
                </>
            )
        })}
      </div> */}
    </>
  );
}

export default ImageBar;
