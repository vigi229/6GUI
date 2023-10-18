function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const fetchCount = 100; // 每秒发送的 fetch 请求数量
let secondsPassed = 0;
const stopAfterSeconds = 18;

const intervalId = setInterval(async () => {
    secondsPassed++;
    for (let i = 0; i < fetchCount; i++) {
        const accident_data = await fetch("http://140.113.208.116:5757/accident/a").then((e) => e.json());
        const construction_data = await fetch("http://140.113.208.116:5757/construction/a").then((e) => e.json());
        if (i === 0)
        {
            console.log(accident_data, construction_data);
        }        
    }
    // 停止定时器
    if (secondsPassed >= stopAfterSeconds) {
        clearInterval(intervalId);
    }
}, 1000);  // 每秒执行一次
document.addEventListener('DOMContentLoaded', async () => {
    async function fetchDataAndPlayVideo() {       
        const videoElement = document.getElementById('background-video');
        
        await sleep(3500);
        videoElement.src = 'clip6.mp4';
        videoElement.play();
    }
    await fetchDataAndPlayVideo();
});
