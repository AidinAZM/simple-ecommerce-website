import supabase from "./supabase";

export async function InsertUser(values) {
  console.log(values);
  const { data, error } = await supabase
    .from("Users")
    .insert([
      {
        username: values.username,
        password: values.password,
        email: values.email,
      },
    ])
    .select();

  if (error) {
    console.log(error);
  }
}
