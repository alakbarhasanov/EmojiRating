const starts = document.querySelectorAll(".fa-star")
const emoji = document.querySelectorAll(".fa-regular")

starts.forEach((starts, index) => {
    starts.addEventListener("click", () => {
        updaterating(index)
    })
})


function updaterating(index) {
    starts.forEach((starts, ind) => {
        if (ind < index + 1) {
            starts.classList.add("active")
        } else {
            starts.classList.remove("active")
        }
    })

    emoji.forEach((emoji) => {
        emoji.style.transform = `translate(-${index * 50}px)`
    })
}