import Parse from "parse";
import "regenerator-runtime/runtime";

Parse.initialize(
  "a1trvZaAYAVRWxbp4JSEp046ERC2oYsDmsLS0Dnh",
  "LZN6cBW4V3fYsyxVRIh1UlK7FmB8HzEJSqm32gJf"
);
Parse.serverURL = "https://parseapi.back4app.com";

const fetchStores = async () => {
  const Stores = Parse.Object.extend("Stores");
  const query = new Parse.Query(Stores);
  try {
    const results = await query.find();
    return results.map((store) => store.toJSON());
  } catch (error) {
    console.error("Error while fetching stores: ", error);
    return [];
  }
};

const fetchBeanJuiceMenu = async () => {
  const BeanJuiceMenu = Parse.Object.extend("BeanJuiceMenu");
  const query = new Parse.Query(BeanJuiceMenu);
  try {
    const results = await query.find();
    return results.map((store) => store.toJSON());
  } catch (error) {
    console.error("Error while fetching stores: ", error);
    return [];
  }
};

const fetchStoffelbergMenu = async () => {
  const StoffelbergMenu = Parse.Object.extend("StoffelbergMenu");
  const query = new Parse.Query(StoffelbergMenu);
  try {
    const results = await query.find();
    return results.map((store) => store.toJSON());
  } catch (error) {
    console.error("Error while fetching stores: ", error);
    return [];
  }
};

const fetchUsers = async () => {
  const query = new Parse.Query(Parse.User);
  try {
    const results = await query.find();
    return results.map((user) => user.toJSON());
  } catch (error) {
    console.error("Error while fetching users: ", error);
    return [];
  }
};

export { fetchStores, fetchBeanJuiceMenu, fetchStoffelbergMenu, fetchUsers };

export default Parse;
