import { googleMaps } from "./constants"

export default function mapsUrl(address, cep){
    return `${googleMaps}${encodeURIComponent(address)},${encodeURIComponent(cep)}`;
}