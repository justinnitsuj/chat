import { supabase } from "../lib/superbase"


export const tokenProvider = async () => {
    const {data} = await supabase.functions.invoke('stream-token')
    return data.token;
}