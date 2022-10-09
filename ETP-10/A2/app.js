const clockContainer = document.querySelector('.clock-container');

const updateClock = () =>
{
    const present = new Date();
    let hours = present.getHours();
    let minutes = present.getMinutes();
    let seconds = present.getSeconds();

    const clockHTML =
        `
        <span>${String(hours).length === 1 ? `0${hours}` : `${hours}`}</span> :
        <span>${String(minutes).length === 1 ? `0${minutes}` : `${minutes}`}</span> :
        <span>${String(seconds).length === 1 ? `0${seconds}` : `${seconds}`}</span>
    `

    clockContainer.innerHTML = clockHTML;
}

setInterval(updateClock, 1000);