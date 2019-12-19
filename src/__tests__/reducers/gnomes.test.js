import reducer from "../../store/reducers/gnomes";
import * as types from "../../store/actions/actionTypes";

describe("gnomes reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      gnomes: [],
      error: false,
      initialized: false
    });
  });

  it("should set Initialized", () => {
    expect(
      reducer([], {
        type: types.SET_INITIALIZED,
        initialized: true
      })
    ).toEqual({
      initialized: true
    });
  });

  it("should set Gnome", () => {
    const gnomes = [
      {
        id: 0,
        name: "Tobus Quickwhistle",
        thumbnail:
          "http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg",
        age: 306,
        weight: 39.065952,
        height: 107.75835,
        hair_color: "Pink",
        professions: [
          "Metalworker",
          "Woodcarver",
          "Stonecarver",
          " Tinker",
          "Tailor",
          "Potter"
        ],
        friends: ["Cogwitz Chillwidget", "Tinadette Chillbuster"]
      },
      {
        id: 1,
        name: "Fizkin Voidbuster",
        thumbnail:
          "http://www.publicdomainpictures.net/pictures/120000/nahled/white-hen.jpg",
        age: 288,
        weight: 35.279167,
        height: 110.43628,
        hair_color: "Green",
        professions: [
          "Brewer",
          "Medic",
          "Prospector",
          "Gemcutter",
          "Mason",
          "Tailor"
        ],
        friends: []
      },
      {
        id: 2,
        name: "Malbin Chromerocket",
        thumbnail:
          "http://www.publicdomainpictures.net/pictures/30000/nahled/maple-leaves-background.jpg",
        age: 166,
        weight: 35.88665,
        height: 106.14395,
        hair_color: "Red",
        professions: ["Cook", "Baker", "Miner"],
        friends: ["Fizwood Voidtossle"]
      }
    ];
    expect(
      reducer([], {
        type: types.SET_GNOMES,
        gnomes: gnomes
      })
    ).toEqual({
      gnomes: gnomes
    });
  });
});
