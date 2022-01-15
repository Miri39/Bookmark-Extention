// const player = "per"
// const opponent = "nick"
// const game = "AmazingFighter"
// let points = 0
// let hasWon = false
// points += 100
// hasWon = true
// if(hasWon){
//     console.log(`${player} got ${points} oiubts and won the ${game} game!`)
// }
//
// let myCourses = ["Learn CSS", "UI Design", "Clean Code"]
// function logItems(arr){
//     for(let i = 0; i<arr.length;i++)
//         console.log(arr[i])
// }
// logItems(myCourses)
// localStorage.setItem("myKey","myObject")
// localStorage.getItem("mykey")
//
// let data = [
//     {
//         player: "Jane",
//         score: 52
//     },
//     {
//         player: "Mark",
//         score: 41
//     }
// ]
// let logBtn = document.getElementById("log-btn")
// logBtn.addEventListener("click", function(){
//     console.log(`${data[0].player}'s score is ${data[0].score}`)
// }) 
//
// function generateSentence(desc, arr){
//     let sentence = `The ${arr.length} ${desc} are `
//     for( let i = 0; i<arr.length-1; i++)
//         sentence +=arr[i] + ", "
//     sentence+= arr[arr.length-1] + "."
//     console.log(sentence)
// }
// generateSentence("best fruits", ["bananas", "apples"]) 
//
const containerEl = document.getElementById("container-el")

const imgs = [
    "img1",
    "img2",
    "img3"
]
let imgsDOM = ""
for( let i = 0; i<imgs.length; i++){
    imgsDOM += `<img class= "team-cls" src="${imgs[i]}">`
}
containerEl.innerHTML = imgsDOM