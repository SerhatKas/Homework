import { games } from "../data/games.js"
import { DataError } from "../models/dataErrors.js";


export default class GameService {
    constructor() {
        this.strategies = []
        this.arcades = []
        this.errors = []
        this.nameOfGames = []
    }

    load() {
        for (let game of games) {
            switch (game.type) {
                case "strategy":
                    
                    if (this.validateGameControl(game)) {
                        this.strategies.push(game)  //Strategy type olan ürünler ayrıştırılıp Strategies'e basılır.
                        this.nameOfGames.push(game.gameName) //Strategy Oyun isimleri nameOfGames 'e gönderilir.
                        console.log(this.nameOfGames) // nameOfGame array cıktısı alınır.

                    }
                    

                    break;

                case "arcade":
                    if (this.validateGameControl(game)) {
                        this.arcades.push(game)
                        this.nameOfGames.push(game.gameName)
                        console.log(this.nameOfGames)
                    }
                    break;

                default:
                    if (this.validateGameControl(game)) {
                        this.errors.push(new DataError("Geçersiz Veri :", game))
                    }
                    break;
            }

        }
    }

    validateGameControl(game) {
        let requiredFields = ["id", "gameName", "unitPrice", "type"];
        let hasErrorGame = false;
        for (let field of requiredFields) {
            if (!game[field]) {
                this.errors.push(new DataError("Geçersiz Alan :" + field, game))
                this.nameOfGames.push(game.gameName)
                hasErrorGame = true
            }

        }
        return !hasErrorGame;

    }

    validateDoubleEntryStatus(game) {
        let hasErrorGame = false;
        for (let i = 0; i < this.nameOfGames.length; i++) {
            if (game.gameName ===nameOfGames[i]) {
                hasErrorGame = true
                console.log(this.nameOfGames + "Tekrar girdiniz.")
            }
        }
        console.log(nameOfGames.name)
        return !hasErrorGame;

    }




}