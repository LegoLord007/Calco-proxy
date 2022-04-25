const form = document.querySelector('form');
const input = document.querySelector('.special-input');
const iframe = document.querySelector('iframe');
const searchBTN = document.querySelector('.searchbtn');


searchBTN.addEventListener('click', async event => {
    console.log('clicked');
    if (localStorage.getItem('AB-cloak-check') === 'true') {
        console.log('AB-cloak-check is true');
        event.preventDefault();
        window.navigator.serviceWorker.register('./sw.js', {
            scope: __uv$config.prefix
        }).then(() => {
            let url = input.value.trim();
            if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
            else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;
            var urle = "https://" + document.domain + __uv$config.prefix + __uv$config.encodeUrl(url);
            if (urle) {
                var win; {
                    if (win) { win.focus(); } else {
                        win = window.open();
                        win.document.body.style.margin = '0';
                        win.document.body.style.height = '100vh';
                        var iframe = win.document.createElement('iframe');
                        iframe.style.border = 'none';
                        iframe.style.width = '100%';
                        iframe.style.height = '100%';
                        iframe.style.margin = '0';
                        iframe.src = urle;
                        win.document.body.appendChild(iframe)
                    }
                }
            }

        });

    } else {
        console.log('AB-cloak-check is false');
        event.preventDefault();
        window.navigator.serviceWorker.register('./sw.js', {
            scope: __uv$config.prefix
        }).then(() => {
            let url = input.value.trim();
            if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
            else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;

            iframe.src = __uv$config.prefix + __uv$config.encodeUrl(url);
            document.querySelector(".Logcontaner2").style.display = "block";
            document.querySelector(".iframeControlls").style.display = "block";
        });
    }
});

function isUrl(val = '') {
    if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
    return false;
};


