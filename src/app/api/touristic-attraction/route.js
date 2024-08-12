import { getTouristicAttraction } from "app/services/ApiColombia/TouristicAttraction"

export async function GET(){
    const touristicAttraction = await getTouristicAttraction()

    return  touristicAttraction
}