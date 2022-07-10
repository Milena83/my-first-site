//set images in gallery
const allUpImg = document.querySelectorAll('.gallery__photo_up');
const allDownImg = document.querySelectorAll('.gallery__photo_down');
console.log(allUpImg)


for (let i = 1; i < allUpImg.length + 1; i++) {
    allUpImg[i - 1].style.background = `url('../img/galleryUp${i}.jpg')`;
    allUpImg[i - 1].style.backgroundSize = "cover";
}

for (let i = 1; i < allDownImg.length + 1; i++) {
    allDownImg[i - 1].style.background = `url('../img/galleryDown${i}.jpg')`;
    allDownImg[i - 1].style.backgroundSize = "cover";
}

