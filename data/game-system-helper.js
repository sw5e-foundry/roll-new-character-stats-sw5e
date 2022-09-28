
import JSON_Helper from "./json-helper.js";

const jh = new JSON_Helper();

export default class GAME_SYSTEM_Helper {

    constructor() { }

    async getSystemRaces() {
        const jsonDATA = await jh.getJSONData("./modules/roll-new-character-stats/data/character-properties.json");
        switch (game.system.id) {
            case "sw5e":
                return jsonDATA.game_system[0].sw5e.races;
            case "pf1":
                return jsonDATA.game_system[0].pf1.races;
            case "ose":
                return jsonDATA.game_system[0].ose.races;
            case "archmage":
                return jsonDATA.game_system[0].archmage.races;
            case "dcc":
                return jsonDATA.game_system[0].dcc.races;
            default:// Default to sw5e for now
                return jsonDATA.game_system[0].sw5e.races;
        }
    }

    async getSystemAbilities() {
        const jsonDATA = await jh.getJSONData("./modules/roll-new-character-stats/data/character-properties.json");
        switch (game.system.id) {
            case "sw5e":
                return jsonDATA.game_system[0].sw5e.abilities;
            case "pf1":
                return jsonDATA.game_system[0].pf1.abilities;
            case "ose":
                return jsonDATA.game_system[0].ose.abilities;
            case "archmage":
                return jsonDATA.game_system[0].archmage.abilities;
            case "dcc":
                return jsonDATA.game_system[0].dcc.abilities;
            default:// Default to sw5e for now
                return jsonDATA.game_system[0].sw5e.abilities;
        }
    }

    getSystemActorType() { // Is this not saved somewhere in game.system ??? Explore this when you are bored.
        switch (game.system.id) {
            case "sw5e":
            case "pf1":
            case "ose":
            case "archmage":
                return "character";
            case "dcc":
                return "Player";
            default:
                return "character";
        }
    }
}