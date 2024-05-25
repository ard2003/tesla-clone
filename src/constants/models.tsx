
import ms from "@/public/images/images/tesla models and prodects02.png";
import m3 from  "@/public/images/images/tesla models and prodects03.png";
import mx from "@/public/images/images/tesla models and prodects04.png";
import my from "@/public/images/images/tesla models and prodects05.png";
import ct from "@/public/images/images/tesla models and prodects06.png";
import hc from "@/public/images/images/tesla models and prodects07.png";
import heromy from"@/public/images/images/tesla models and prodects19.jpg";
import herom3 from"@/public/images/images/tesla models and prodects20.jpg";
import heromx from"@/public/images/images/tesla models and prodects21.jpg";
import heroms from"@/public/images/images/tesla models and prodects22.jpg";
import heroct from"@/public/images/images/tesla models and prodects23.jpg";
import herosl from"@/public/images/images/tesla models and prodects24.jpg";
import herosr from"@/public/images/images/tesla models and prodects25.jpg";
import heropw from"@/public/images/images/tesla models and prodects26.jpg";
import heroacc from"@/public/images/images/tesla models and prodects27.jpg";
import cybfont from "@/public/images/images/256px-Cybertrucklogo.svg.png"

import { heros, models, navItems } from "@/types/items";
import { title } from "process";

export const Vehicles: models[] = [
  { id: 1, src: ms, name: "model-s" },
  { id: 2, src: m3, name: "model-3" },
  { id: 3, src: mx, name: "model-x" },
  { id: 4, src: my, name: "model-y" },
  { id: 5, src: ct, name: "Cybertruck" },
  { id: 6, src: hc, name: "Help Me choose" },
];
export const Heromodel:heros[]=[
   {id:1,src:heromy, name:'Model Y', link:'#',color:'black' ,alt:'modely',check:true,price:'$33,990'},
   {id:2,src:herom3, name:'Model 3', link:'#',color:'black',alt:'model3',check:true,price:'$33,990'},
   {id:3,src:heromx, name:'Model X', link:'#' ,color:'black',alt:'modelx',check:true,price:'$63,990'},
   {id:4,src:heroms, name:'Model S', link:'#' ,color:'black',alt:'models',check:true,price:'$66,490'},
   {id:5,src:heroct, font:cybfont, link:'#' ,color:'black',alt:'cybertruck',check:false},
   {id:6,src:herosl, name:'Solar Panels', link:'#' ,color:'white',alt:'solarpanel',check:true,price:'Schedule a Virtual Consultation'},
   {id:7,src:herosr, name:'Solar Roof', link:'#' ,color:'black',alt:'solar roof',check:true,price:'Produce Clean Energy From Your Roof'},
   {id:8,src:heropw, name:'Powerwall', link:'#' ,color:'black',alt:'powerwall',check:true},
   {id:9,src:heroacc, name:'Accessories', link:'#' ,color:'black',alt:'accessories',check:true},

]
export const NavbarItems:navItems[]=[

  {title:'Vehicle',id:1,items:[
    { id: 1, src: ms, name: "model-s" },
  { id: 2, src: m3, name: "model-3" },
  { id: 3, src: mx, name: "model-x" },
  { id: 4, src: my, name: "model-y" },
  { id: 5, src: ct, name: "Cybertruck" },
  { id: 6, src: hc, name: "Help Me choose" },
  ]},
  {title:'Energy',id:2,items:[
    { id: 1, src: ms, name: "solar" },
  { id: 2, src: m3, name: "model-3" },
  { id: 3, src: mx, name: "model-x" },
  { id: 4, src: my, name: "model-y" },
  { id: 5, src: ct, name: "Cybertruck" },
  { id: 6, src: hc, name: "Help Me choose" },
  ]}
]
