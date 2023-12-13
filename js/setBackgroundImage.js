function setBackground() {
    const imgTag = document.getElementById('background_image');
    let deviceType;

    if (window.innerWidth < 600) {
        deviceType = 'mobile';
    }
    else {
        deviceType = 'desktop';
    }

    imgTag.src = `images/${deviceType}_background.jpg`;
}

window.onload = setBackground;