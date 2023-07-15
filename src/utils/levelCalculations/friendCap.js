

export const getFriendCap = (level, dreamLvl) => {
    if(dreamLvl > level){
        return 250+(dreamLvl*5)>2000?2000:250+(dreamLvl*5)
    }
    else{
        return 250 + (level*5)>2000?2000:250 + (level*5)
    }
}