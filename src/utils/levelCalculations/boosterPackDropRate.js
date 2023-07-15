

export const getBoosterDropRate = (dreamLvl) => {
    return Math.floor(dreamLvl/10) * 20
}