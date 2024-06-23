export function loadImages(urls) {
    return Promise.all(
        urls.map(
            (imageSource) =>
                new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = imageSource;
                    img.onload = resolve;
                    img.onerror = reject;
                })
        )
    );
}
