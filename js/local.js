window.onload = function () {
    document.querySelectorAll('.key-desc div').forEach(div => {
        div.addEventListener('click', (e) => {
            let param = e.target.textContent;
            window.parent.postMessage(param, '*');
        })
    })
}