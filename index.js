{const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "October",
    "Nov",
    "Dec",
];
const show=()=>{

}
show();


const remainingtime=()=>{
    var timers = document.getElementsByClassName("nextDoseTime");

    const initialtime = new Date().getTime();
    const offset = 100000;
    const interval = setInterval( ()=>{
        const now = new Date().getTime();
        const distance = initialtime + offset + 5 * 1000000 - now;
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        timers[0].innerHTML =
        `${hours}h   ${minutes}m  ${seconds}s Remaining`;
        timers[1].innerHTML =
        `${hours*3}h   ${minutes/2}m  ${seconds}s Remaining`;
        timers[2].innerHTML =
        `${hours*5}h   ${minutes*2}m  ${seconds}s Remaining`;
    }, 1000);
    
}

const addRemainingDays = document.getElementsByClassName("RemainingDoses");

const doses=()=>{
    const dt = new Date();
    const currMonthNo = dt.getMonth();
    document.getElementById("remMonth").innerHTML +=
    `[${month[currMonthNo]}]`
    for (let i = 0; i < addRemainingDays.length; i++) {
        const d = new Date(2022, currMonthNo + 1, 0);
        const monthTotal = d.getDate();
        const currentDate = new Date().getDate();
        addRemainingDays[i].innerHTML = monthTotal - currentDate;
    }
    
}


remainingtime();
doses();
}