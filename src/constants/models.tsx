
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

import { heros, models } from "@/types/items";

export const Vehicles: models[] = [
  { id: 1, src: ms, name: "model-s" },
  { id: 2, src: m3, name: "model-3" },
  { id: 3, src: mx, name: "model-x" },
  { id: 4, src: my, name: "model-y" },
  { id: 5, src: ct, name: "Cybertruck" },
  { id: 6, src: hc, name: "Help Me choose" },
];
export const Heromodel:heros[]=[
   {id:1,src:heromy, name:'Model Y', link:'#'},
   {id:2,src:herom3, name:'Model 3', link:'#'},
   {id:3,src:heromx, name:'Model X', link:'#'},
   {id:4,src:heroms, name:'Model S', link:'#'},
   {id:5,src:heroct, name:'CYBERTRUCK', link:'#'},
   {id:6,src:herosl, name:'Solar Panels', link:'#'},
   {id:7,src:herosr, name:'Solar Roof', link:'#'},
   {id:8,src:heropw, name:'Powerwall', link:'#'},
   {id:9,src:heroacc, name:'Accessories', link:'#'},

]
