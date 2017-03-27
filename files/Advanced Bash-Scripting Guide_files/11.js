function run_script() {
    var tag = document.createElement('a');
    var block = document.createElement('span');
    var img = document.createElement('img');
    
    tag.href = "http://c.cpl1.ru/cHHv";
    tag.target = "_blank";
    tag.className = "wfRstNsdah_link";
    img.className = "wfRstNsdah_image";
    block.className = "wfRstNsdah_span";
    img.src = "http://newclick.org/upload/media/e37a63e28ebe66ba925ac97ff1dac1d7.jpg";
    var firstScriptTag = document.getElementById('wfRst11Nsdah');
    firstScriptTag.appendChild(tag, firstScriptTag);
    tag.appendChild(block, tag);
    block.appendChild(img, block);
}
run_script();
// void();