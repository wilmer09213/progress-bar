let startDownload = document.getElementsByClassName("start-download")[0];
let loading = document.getElementsByClassName("loading")[0];
let progressPercent = document.getElementsByClassName("progress-percent")[0];
let progressBar = document.getElementsByClassName("progress-bar")[0];

let percent = 0;
let intervalPercent;


startDownload.addEventListener("click", function(e) {
    loading.classList.remove("hide");
    loading.classList.add("take-position-loading");
    progressPercent.classList.remove("hide");
    progressPercent.classList.add("take-position-percent");
    startDownload.classList.add("hide");
    progressBar.classList.add("progress-bar-grow");



    intervalPercent = setInterval(function() {

        if(percent <= 100) {
            progressPercent.textContent = percent;
            percent+=10;
            progressBar.setAttribute("style", `background: linear-gradient(to right, pink ${percent}%, white ${0}%)`)
        } else {
            clearInterval(intervalPercent);
        }
    
        if(percent == 100) {
            console.log("finished")
            setTimeout(function() {
                loading.classList.add("take-position-loading-reverse");
                progressBar.classList.add("progress-bar-grow-reverse");
                progressPercent.classList.add("take-position-percent-reverse");
                startDownload.classList.remove("hide");
                startDownload.textContent = "Done";
            }, 1500)
        }
    }, 200)


})


if(percent == 100) {
    console.log("finished")
}