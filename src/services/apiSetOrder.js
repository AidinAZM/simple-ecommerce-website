import supabase from "./supabase";

export async function setOrder(obj) {
  const { data, error } = await supabase
    .from("Orders")
    .insert([
      {
        product_id: obj.id,
        productName: obj.productName,
        price: obj.price,
      },
    ])
    .select();

  if (error) {
    console.log(error);
  }
}
