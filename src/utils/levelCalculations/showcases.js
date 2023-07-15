

export const getShowCases = (dreamLvl) => {
    return Math.floor(dreamLvl/10)>20?20:Math.floor(dreamLvl/10)
}