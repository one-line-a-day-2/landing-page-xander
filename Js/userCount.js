/**
 * counting animation
 */
function countUP(totalCount){
    
    let i = 0
    
    const intervalID = setInterval(()=>{
        if(i <= totalCount){
            userCount.textContent = i;
            i ++;
        }else{
            clearInterval(intervalID)
        }
    }, 100)
}

/**
 * Keep the usercount Updated
 */
function liveUpdate() {
    setInterval( () =>{
        fetch('https://one-line-a-day-2.herokuapp.com/api/users/quantity').then((res)=>{
            return res.json()
        }).then((count) => {
            if(Number(userCount.textContent) != count){
                countUP(count)
            }
        })
    }, 5000)
}

window.onload = () => {
    window.liveUpdate()
}