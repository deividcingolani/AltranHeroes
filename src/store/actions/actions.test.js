/* import * as actions from './actionCreator'
import * as types from './actionsTypes'

describe('actions', () => {
    it('should create an action to add a gnome', () => {
        const gnome = {
            "id": 0,
            "name": "Tobus Quickwhistle",
        }
        const gnomeTest = JSON.parse(JSON.stringify(gnome))
        const expectedAction = {
            type: types.SET_GNOME,
            gnomeTest
        }
        expect(actions.setGnomes(gnome)).toEqual(expectedAction)
    })
}) */