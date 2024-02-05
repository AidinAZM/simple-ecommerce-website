import supabase from "./supabase";

export async function checkUser(value) {
  let isRegistered = false;
  let { data, error } = await supabase
    .from("Users")
    .select("*")
    .eq("username", value.username);

  if (error) {
    console.log(error);
  }

  if (
    data[0]?.username == value.username &&
    data[0]?.password == value.password
  ) {
    isRegistered = true;
  }

  return isRegistered;
}
