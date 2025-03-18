function changeImage(src) {
    document.getElementById('mainImage').src = src;
}
function changeImage(thumbnail) {
    const mainImage = document.getElementById("mainImage");
   
    mainImage.src = thumbnail.src.replace("100/100", "600/400");
}