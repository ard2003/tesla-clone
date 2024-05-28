import { StaticImageData } from 'next/image'
export interface addition{
    id:number
    title:string
}

export interface models {
id:number
src:StaticImageData
name:string
}
export interface heros{
    id:number
    src:StaticImageData
    name?:string
    link:string
    color:string
    font?:StaticImageData|string
    alt:string
    check:boolean
    price?:string
   
   
}
export interface navItems{
    title:string
    id:number
    items:models[]
    additonal:addition[]
}

