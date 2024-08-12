import { getAirPort } from "app/services/ApiColombia/AirPort"

export async function GET(){
    const airport = await getAirPort()

    return  airport
}