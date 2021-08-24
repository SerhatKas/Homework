import GameService from "./services/gameService.js"
import UserService3 from "./services/userService3.js"

let userService = new UserService3();
userService.load();

//console.log(userService.customers)
//console.log(userService.employees)
//console.log(userService.errors)

let gameService = new GameService();
gameService.load();

console.log(gameService.strategies)
console.log(gameService.arcades)
console.log(gameService.errors)