let hesab = document.getElementById('hesab');
let netice;

hesab.onclick = () => {
    netice = (num1.value - num2.value)-50;
    document.getElementById('result').innerHTML = netice +"Sizin ideal cekinizdir"
}