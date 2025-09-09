import supabase from "./supabase";


export async function setReturnStock(returnStock) {
    const { data, error } = await supabase
    .from('returns')
    .insert(returnStock)
    .select()

    if(error) {
    console.log(error);
    throw new Error("stock could not be inserted");
  }

  return data;
}



export async function getReturnStock() {
    let { data, error } = await supabase
    .from('returns')
    .select('*')

    if(error) {
    console.log(error);
    throw new Error("stock could not be loaded");
  }

  return data;

}

export async function returnStockAfterDate(startDate) {
  const isoDate = startDate.toISOString();
  const { data, error } = await supabase
    .from('returns')
    .select("*")
    .gte("created_at", isoDate)

    if(error) {
        console.log(error) ;
        throw new Error("stock could not be loaded");
    }

    return data;
}

