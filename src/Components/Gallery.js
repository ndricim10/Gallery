import React, { useEffect } from "react";
import "./gallery.scss";
import {useDispatch, useSelector} from 'react-redux'
import { getPhotos } from "../Redux/Actions/Actions";

export default function Gallery() {
  let data = [
    {
      id: 1,
      description: "Some descriptions Some descriptions ",
      imgSrc:
        "https://images.pexels.com/photos/12486294/pexels-photo-12486294.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 2,
      description: "Some descriptions",
      imgSrc:
        "https://images.pexels.com/photos/12577819/pexels-photo-12577819.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 3,
      description: "Some descriptions",
      imgSrc:
        "https://images.pexels.com/photos/12708081/pexels-photo-12708081.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 4,
      description: "Some descriptions",
      imgSrc:
        "https://images.pexels.com/photos/12502186/pexels-photo-12502186.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 5,
      description: "Some descriptions",
      imgSrc:
        "https://images.pexels.com/photos/12586694/pexels-photo-12586694.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 6,
      description: "Some descriptions",
      imgSrc:
        "https://images.pexels.com/photos/12590582/pexels-photo-12590582.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 7,
      description: "Some descriptions",
      imgSrc:
        "https://images.pexels.com/photos/12485646/pexels-photo-12485646.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 8,
      description: "Some descriptions",
      imgSrc:
        "https://images.pexels.com/photos/12760654/pexels-photo-12760654.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
  ];


  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getPhotos())
  }, [dispatch])

  return (
    <div className="gallery">
      {data.map((item) => {
        return (
          <div className="images" key={item.id}>
            <img src={item.imgSrc} />
            <div className="description">
              <span>{item.description}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
