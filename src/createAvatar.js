import testImg from "./testImg.jpg";
import './index.scss'; //css module
function creatAvatar() {
    let root = document.getElementById("root");
    let html = '<div class="iconfont iconfanhui">asdasddddddddd</div>';
    let imgDom = document.createElement('img');
    imgDom.src = testImg;
    imgDom.className = `avatar`;
    root.innerHTML = html;
    root.appendChild(imgDom);
}

export default creatAvatar;
