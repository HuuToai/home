const initSlider = () => {
    const prevButton = document.getElementById("prev-slide");
    const nextButton = document.getElementById("next-slide");
    const sliderScrollbar = document.querySelector(".container_s3 .slider-scrollbar");
    const scrollbarThumb = document.querySelector(".scrollbar-thumb");
    const imageList = document.querySelector(".slider-wrapper .image-list");

    
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    // ScrollbarThumb kéo thanh scrollbar
    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;

        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;
            const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
            scrollbarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;
        }

        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });

    // Sự kiện khi bấm nút prev
    prevButton.addEventListener('click', () => {
        const scrollAmount = imageList.clientWidth;
        const newScrollPosition = imageList.scrollLeft - scrollAmount;

        if (newScrollPosition < 0) {
            // Nếu đang ở đầu danh sách, chuyển về cuối
            imageList.scrollTo({
                left: maxScrollLeft,
                behavior: "smooth"
            });
        } else {
            imageList.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        }
        
    });

    // Sự kiện khi bấm nút next
    nextButton.addEventListener('click', () => {
        const scrollAmount = imageList.clientWidth;
        const newScrollPosition = imageList.scrollLeft + scrollAmount;

        if (newScrollPosition >= maxScrollLeft) {
            // Nếu đang ở cuối danh sách, chuyển về đầu
            imageList.scrollTo({
                left: 0,
                behavior: "smooth"
            });
        } else {
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    });

    // Cập nhật vị trí của thanh scrollbar khi kéo ảnh
    const updatesScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }

    imageList.addEventListener('scroll', () => {
        // updatesScrollThumbPosition();
    });
}

window.addEventListener("load", initSlider);
