document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", triggerError);
    });

    document.addEventListener("mousemove", triggerError);
});

function triggerError() {
    let errorBox = document.createElement("div");
    errorBox.id = "error-box";
    errorBox.innerHTML = `
        <p><strong>Device Under Attack!</strong><br>Immediate action is required.</p>
        <div id="error-buttons">
            <button onclick="terminateError()">Terminate</button>
            <button onclick="ignoreError()">Ignore</button>
        </div>
    `;
    document.body.appendChild(errorBox);
    errorBox.style.display = "block";
}

function terminateError() {
    for (let i = 0; i < 10; i++) {
        let newError = document.createElement("div");
        newError.id = "error-box";
        newError.innerHTML = `<p><strong>Critical Error!</strong><br>System failure imminent.</p>`;
        document.body.appendChild(newError);
        newError.style.display = "block";
        newError.style.position = "absolute";
        newError.style.top = `${Math.random() * window.innerHeight}px`;
        newError.style.left = `${Math.random() * window.innerWidth}px`;
    }
}

function ignoreError() {
    let rickroll = document.createElement("video");
    rickroll.src = "vid.mp4"; 
    rickroll.style.position = "fixed";
    rickroll.style.top = "0";
    rickroll.style.left = "0";
    rickroll.style.width = "100%";
    rickroll.style.height = "100%";
    rickroll.controls = false;
    rickroll.autoplay = true;
    rickroll.loop = true;
    document.body.appendChild(rickroll);
}
