import axios from "axios";

export default async term => {
  const response = await axios.get(
    "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"
  )

  return response.data.Brastlewark;
};
