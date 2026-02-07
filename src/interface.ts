type Chai = {
    type: string
    sugar: number
    strong: boolean
}
function makeChai(order: Chai) {
    console.log("chai: ", order)
}

const serveChai = (order: Chai) => {
    console.log(order)
}

type Tearecipe = {
    water: number
    milk: number
}


// interface Tearecipe {
//     water: number
//     milk: number
// }


class MasalaChai implements Tearecipe {
    water = 100
    milk = 50
}

interface CupSize {
    size: "small" | "large"
}

class NewChai implements CupSize {
    size: "small" | "large" = "large"
}

// in classes programmer prefered interface insted of use type

// type Response = { ok: true } | { ok: false }

// class MyRes implements Response {
//     ok: boolean = true
// }

type TeaType = "machala" | "dinger" | "lemon"

function orderChai(tea: TeaType) {
    console.log(tea)
}

type BaseChai = { teaLeaves: number }
type Extra = { mashala: number }

type MachalaaChai = BaseChai & Extra

const cup: MachalaaChai = {
    teaLeaves: 1,
    mashala: 2
}

type User = {
    username: string
    bio?: string
}
const u1: User = { username: "hardip" }
const u2: User = { username: "hardip", bio: "ue" }

type Config = {
    readonly appName: string
    version: number
}

const cfg: Config = {
    appName: "byte bazaae",
    version: 1
}

// cfg.appName = "cha aur code"