
const getXP = (lvl) => {
    let result = 0
    const units = lvl%10
    const tens = Math.floor(lvl/10)
    if(tens > 0){
        for(let i = 1; i<tens+1; i++){
            result+=1000*i
        }
        result+=((tens+1)*100)*units
    }
    else{
        result+=units*100
    }
    return result
}

export const getXpNeeded = (level, dreamLvl) => {
    if(dreamLvl>level){
        const levelXP = getXP(level)
        const dreamLevelXP = getXP(dreamLvl)
        return dreamLevelXP-levelXP
    }
    else{
        return 0
    }
}