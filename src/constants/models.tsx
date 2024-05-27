import ms from "@/public/images/homeimges/tesla models and prodects02.png";
import m3 from "@/public/images/homeimges/tesla models and prodects03.png";
import mx from "@/public/images/homeimges/tesla models and prodects04.png";
import my from "@/public/images/homeimges/tesla models and prodects05.png";
import ct from "@/public/images/homeimges/tesla models and prodects06.png";
import hc from "@/public/images/homeimges/tesla models and prodects07.png";
import heromy from "@/public/images/homeimges/tesla models and prodects19.jpg";
import herom3 from "@/public/images/homeimges/tesla models and prodects20.jpg";
import heromx from "@/public/images/homeimges/tesla models and prodects21.jpg";
import heroms from "@/public/images/homeimges/tesla models and prodects22.jpg";
import heroct from "@/public/images/homeimges/tesla models and prodects23.jpg";
import herosl from "@/public/images/homeimges/tesla models and prodects24.jpg";
import herosr from "@/public/images/homeimges/tesla models and prodects25.jpg";
import heropw from "@/public/images/homeimges/tesla models and prodects26.jpg";
import heroacc from "@/public/images/homeimges/tesla models and prodects27.jpg";
import cybfont from "@/public/images/homeimges/256px-Cybertrucklogo.svg.png";
import solarpanel from "@/public/images/homeimges/tesla models and prodects08.png";
import solarroof from "@/public/images/homeimges/tesla models and prodects09.png";
import powerwall from "@/public/images/homeimges/tesla models and prodects10.png";
import megapack from "@/public/images/homeimges/tesla models and prodects11.png";
import charging from "@/public/images/homeimges/tesla models and prodects12.jpg";
import HomeCharging from "@/public/images/homeimges/tesla models and prodects13.jpg";
import Supercharging from "@/public/images/homeimges/tesla models and prodects14.png";
import accCharging from "@/public/images/homeimges/tesla models and prodects15.jpg";
import vehiclecAcessories from "@/public/images/homeimges/tesla models and prodects16.jpg";
import apparel from "@/public/images/homeimges/tesla models and prodects17.png";
import lifestyle from "@/public/images/homeimges/tesla models and prodects18.jpg";

import { heros, models, navItems } from "@/types/items";
import { title } from "process";

export const Heromodel: heros[] = [
  {
    id: 1,
    src: heromy,
    name: "Model Y",
    link: "#",
    color: "black",
    alt: "modely",
    check: true,
    price: "$33,990",
  },
  {
    id: 2,
    src: herom3,
    name: "Model 3",
    link: "#",
    color: "black",
    alt: "model3",
    check: true,
    price: "$33,990",
  },
  {
    id: 3,
    src: heromx,
    name: "Model X",
    link: "#",
    color: "black",
    alt: "modelx",
    check: true,
    price: "$63,990",
  },
  {
    id: 4,
    src: heroms,
    name: "Model S",
    link: "#",
    color: "black",
    alt: "models",
    check: true,
    price: "$66,490",
  },
  {
    id: 5,
    src: heroct,
    font: cybfont,
    link: "#",
    color: "black",
    alt: "cybertruck",
    check: false,
  },
  {
    id: 6,
    src: herosl,
    name: "Solar Panels",
    link: "#",
    color: "white",
    alt: "solarpanel",
    check: true,
    price: "Schedule a Virtual Consultation",
  },
  {
    id: 7,
    src: herosr,
    name: "Solar Roof",
    link: "#",
    color: "black",
    alt: "solar roof",
    check: true,
    price: "Produce Clean Energy From Your Roof",
  },
  {
    id: 8,
    src: heropw,
    name: "Powerwall",
    link: "#",
    color: "black",
    alt: "powerwall",
    check: true,
  },
  {
    id: 9,
    src: heroacc,
    name: "Accessories",
    link: "#",
    color: "black",
    alt: "accessories",
    check: true,
  },
];
export const NavbarItems: navItems[] = [
  {
    title: "Vehicle",
    id: 1,
    items: [
      { id: 1, src: ms, name: "model-s" },
      { id: 1.2, src: m3, name: "model-3" },
      { id: 1.3, src: mx, name: "model-x" },
      { id: 1.4, src: my, name: "model-y" },
      { id: 1.5, src: ct, name: "Cybertruck" },
      { id: 1.6, src: hc, name: "Help Me choose" },
    ],
    additonal: [
      { title: "Inventory"},
      {title:"Used Cars"},
      {title:"Demo Drive"},
      {title:"Trade in"},
      {title:"Compare"},
      {title:"Help me Charge"},
      {title:"fleet"},
      {title:"semi"},
      {title:"Roadstr"} ],
  },
  {
    title: "Energy",
    id: 2,
    items: [
      { id: 2.1, src: solarpanel, name: "Solar Panels" },
      { id: 2.2, src: solarroof, name: "Solar Roof" },
      { id: 2.3, src: powerwall, name: "Powerwall" },
      { id: 2.4, src: megapack, name: "Megapack" },
    ],
    additonal:[
      {title:"Schedule a Consultation"},
      {title:"Why Solar"},
      {title:"Incentives"},
      {title:"Support"},
      {title:"Partner with Tesla"},
      {title:"Used Cars"},
]
  },
  {
    title: "charging",
    id: 3,
    items: [
      { id: 2.1, src: charging, name: "Charging" },
      { id: 2.2, src: HomeCharging, name: "Home Charging" },
      { id: 2.3, src: Supercharging, name: "Supercharging" },
    ],
  
    additonal: [
      { title: "Inventory"},
      {title:"Used Cars"},
      {title:"Demo Drive"},
      {title:"Trade in"},
      {title:"Compare"},
      {title:"Help me Charge"},
      {title:"fleet"},
      {title:"semi"},
      {title:"Roadstr"} ],
  },
  {
    title: "Discover",
    id: 4,
    items: [
      { id: 1, src: solarpanel, name: "Charging" },
      { id: 2, src: solarroof, name: "Home Charging" },
      { id: 3, src: powerwall, name: "Supercharging" },
    ],
    
    additonal: [
      { title: "Inventory"},
      {title:"Used Cars"},
      {title:"Demo Drive"},
      {title:"Trade in"},
      {title:"Compare"},
      {title:"Help me Charge"},
      {title:"fleet"},
      {title:"semi"},
      {title:"Roadstr"} ],
  },
  {
    title: "Shop",
    id: 4,
    items: [
      { id: 1, src: accCharging, name: "Charging" },
      { id: 2, src: vehiclecAcessories, name: "Vehicle Acessories" },
      { id: 3, src: apparel, name: "Apparel" },
      { id: 3, src: lifestyle, name: "Life Style" },
    ]
    ,
    additonal: [
      { title: "Inventory"},
      {title:"Used Cars"},
      {title:"Demo Drive"},
      {title:"Trade in"},
      {title:"Compare"},
      {title:"Help me Charge"},
      {title:"fleet"},
      {title:"semi"},
      {title:"Roadstr"} ],
  },
];
