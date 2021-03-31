
const secunda = document.getElementById("smol-hand")
const minuta = document.getElementById("medi-hand")
const horus = document.getElementById("bigs-hand")

function setDate() {
    const now = new Date;

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const mediDegs = (minutes / 60) * 360 + 90;
    const smolDeg = (seconds / 60) * 360 + 90;
    const bigusDeg = (hours / 12) * 360 + 90;
    secunda.style.transform = `rotate(${smolDeg}deg)`
    minuta.style.transform = `rotate(${mediDegs}deg)`
    horus.style.transform = `rotate(${bigusDeg}deg)`
}
setInterval(setDate, 1000)

// aca acaba la parte del reloj
// ============= Variables en CSS _++_+++++++++++++++++++_+_+_+_+

const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    const suffix= this.dataset.sizing || '' ;
    document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);
    console.log(`--${this.name}`,this.value+suffix);
    
}

inputs.forEach(input => {
    input.addEventListener('change',handleUpdate)
});
inputs.forEach(input => {
    input.addEventListener('mousemove',handleUpdate)
});