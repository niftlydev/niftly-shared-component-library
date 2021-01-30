import { Info } from "../../components/info-box/info-box"
import { IListingItem, ListingItem } from "../../components/listing/listing"
import { infobox } from "../info-box/info-box-factory";

export const ListingFactory = () => {
    var link = "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1026205392%2F0x0.jpg" 


    let l: IListingItem = new ListingItem(infobox, link, "house");

    return l;
}