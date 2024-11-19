import { googleMaps } from "./constants"

export default function mapsUrl(address){
    return `${googleMaps}${encodeURIComponent(address)}`
}