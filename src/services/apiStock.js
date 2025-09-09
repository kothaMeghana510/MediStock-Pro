import supabase from "./supabase";

export async function getStock() {
const { data, error } = await supabase
  .from('stock')
  .select('*');

  if(error) {
    console.log(error);
    throw new Error("stock could not be loaded");
  }

  return data;
}


export async function enterStock(newStock) {  
  const { data, error } = await supabase
    .from('stock')
    .insert(newStock)
    .select()

  if(error) {
    console.log(error);
    throw new Error("stock could not be loaded");
  }

  return data;
}

export async function deleteStock(id) {
  const { data, error } = await supabase
  .from('stock')
  .delete()
  .eq('id', id);

  if(error) {
    console.log(error);
    throw new Error("stock could not be deletd");
  }

  return data;

}

export async function pendingStockAfterDate(startDate) {
    const isoDate = startDate.toISOString();
  const { data, error } = await supabase
    .from('stock')
    .select("*")
    .gte("created_at", isoDate)

    if(error) {
        console.log(error) ;
        throw new Error("stock could not be loaded");
    }

  return data;
}
