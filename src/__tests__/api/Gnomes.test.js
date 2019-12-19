import setGnomes from "../../api/Gnomes";
import mockAxios from "axios";

it("calls axios and returns gnomes", async () => {
  /* Setup */
  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: {
        Brastlewark: [{ name: "Gnome" }, { name: "Gnome 2" }]
      }
    })
  );
  /* Work */
  const gnomes = await setGnomes();
  /* Assertion / expects */
  expect(gnomes).toEqual([{ name: "Gnome" }, { name: "Gnome 2" }]);
  expect(mockAxios.get).toHaveBeenCalledTimes(1);
  expect(mockAxios.get).toHaveBeenCalledWith(
    "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json")
});
