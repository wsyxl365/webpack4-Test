import testImg from "./testImg.jpg";
import style from './index.scss'; //css module
function creatAvatar() {
    let root = document.getElementById("root");
    let imgDom = document.createElement('img');
    imgDom.src = testImg;
    imgDom.className = `${style.avatar}`;
    root.appendChild(imgDom);
}

export default creatAvatar;
