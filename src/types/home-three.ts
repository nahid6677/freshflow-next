import { StaticImageData } from "next/image";

export interface ServiceContentHomeThree {
    id: number,
    bgImage: string;
    image1: string | StaticImageData;
    image2: string | StaticImageData;
    title: string;
    text: string;
    price: string;
    lin: string;
}
export interface ServiceItemHomeThree {
    id: number,
    icon: string,
    text1: string,
    text2: string,
}