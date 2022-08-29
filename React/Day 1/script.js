
// let text = document.getElementById("textCollector")

// let text = "building"

let tempicon = document.getElementById("temp-icon");
let getImageBtn = document.querySelector(".getImageBtn");
let text = document.getElementById("textCollector").innerHTML;

let requestUrl = `https://api.unsplash.com/search/photos?query=${text}&client_id=DJsL8OOQsnopHLAYSMJvm1UGY_tVBBSslKKSVELKVdI`

// var text = element.innerText

console.log(text);


getImageBtn.addEventListener('click', async() =>{
    let firstImg = await getNewImage();
    tempicon.src = firstImg;
})


async function getNewImage() {

    return fetch(requestUrl)
        .then((response) => response.json())
        .then((data) => {
            let allImages = data.results[0];
            return allImages.urls.regular;
        });
}