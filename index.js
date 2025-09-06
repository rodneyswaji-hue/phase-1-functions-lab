// Code your solution in this file!
function distanceFromHqInBlocks(pick_uplocation) {
    return Math.abs(42 - pick_uplocation)
}
function distanceFromHqInFeet(pick_uplocation) {
    
    return distanceFromHqInBlocks(pick_uplocation) * 264
}
function distanceTravelledInFeet(start, destination) {
    return Math.abs((start - destination) * 264)
}
function calculatesFarePrice(start, destination) {
    if (Math.abs(destination - start) * 264 < 400){
        return 0
    }else if (Math.abs(destination - start) * 264 >= 400 && Math.abs(destination - start) * 264 < 2000) {
        return Math.abs(((start - destination) * 264)-400) * 0.02
    }else if (Math.abs(destination - start) * 264 >= 2000 && Math.abs(destination - start) * 264 <= 2500){
        return 25
    }else {
        return "cannot travel that far"
    }
}