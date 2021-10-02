const images = ["0.jpeg", "1.jpeg", "2.jpeg"];
const choshenImages = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `img/${choshenImages}`;
bgImage.alt = `${choshenImages}`;

document.body.prepend(bgImage); // 이미지 태그를 body 맨뒤(append)로 배치, 맨 앞으로 배치(prepend)

// 외부 랜덤 이미지로 대체