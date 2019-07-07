
interface Plan {
    name: string,
    subscription: Subscription
}
interface Subscription {
    id: number
    name: string
    duration: number,
    notes?: string
}

let sub: Subscription = { id: 1, name: 'sub1', duration: 30 }



interface Player {
    play: () => boolean
    stop: () => boolean
    seek: (length: number) => number
}

class VideoPlayer implements Player {
    play() {
        return true;
    }
    stop() {
        return false
    }
    seek(length: number) {
        return 10;
    }


}