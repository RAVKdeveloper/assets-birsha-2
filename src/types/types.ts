export type TradingPar = {
    allPar: string
    market: string
    image: string
    price: string
    procents: string
    obmenAction: string
    _id: string
}

export type UserTypeMain = {
    nickname: string
    email: string
    password: string
    _id: string
    avatar?: string
    verificationName: string
    createdAt: string
    updatedAt: string
    token: string
}


export interface SpotAsset {
    balance: string
    userId: string
}
