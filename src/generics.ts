function wrapInArr<T>(item: T): T[] {
    return [item]
}

wrapInArr('machala')
wrapInArr(45)
wrapInArr({ name: 'test' })


function pair<A, B>(a: A, b: B): [A, B] {
    // return [b,a]
    return [a, b]
}

pair('masala', 49)
pair(34, "djd")
pair(30, { name: 'uy' })


// gen interface
interface Box<T> {
    content: T
}

const numberBox: Box<number> = { content: 2 }
const numberBox2: Box<string> = { content: "this is a content" }

// also support in partial, required , omit ...
// Real World use case generic api res, form e.g.
interface APIPromise<T> {
    status: number
    data: T
}

const res: APIPromise<{ flev: string, }> = {
    status: 200,
    data: { flev: "lemon" }
}