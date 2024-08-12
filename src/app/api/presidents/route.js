import { getPresidents } from "app/services/ApiColombia/Presidents"

export async function GET(){
    const presidents = await getPresidents()

    return  presidents
}