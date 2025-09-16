import supabase from "./supabase";

export async function getReceivedStocks() {
    let { data, error } = await supabase
        .from('receivedStock')
        .select('*')
        

    if(error) {
        console.log(error) ;
        throw new Error("stock could not be loaded");
    }

  return data;
}

export async function insertStocks(newStock) {
    const { data, error } = await supabase
    .from('receivedStock')
    .insert(newStock)
    .select()

    if(error) {
        console.log(error) ;
        throw new Error("stock could not be inserted");
    }

  return data;
}


export  async function deleteReceivedStock(id) {
  const {data, error } = await supabase
    .from('receivedStock')
    .delete()
    .eq('id', id)

    if(error) {
        console.log(error) ;
        throw new Error("stock could not be deleted");
    }
    return data;
}



export async function stockAfterDate(startDate) {
  const isoDate = startDate.toISOString();
  const { data, error } = await supabase
    .from('receivedStock')
    .select("*")
    .gte("created_at", isoDate)

    if(error) {
        console.log(error) ;
        throw new Error("stock could not be loaded");
    }

  return data;

}