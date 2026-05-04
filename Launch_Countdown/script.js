const output = document.querySelector(".output");
output.textContent = "";

for(i=10;i>=0;i--){
    if(i > 0){
        const para = document.createElement('p');
        para.textContent = i;
        output.appendChild(para);
    } else if (i == 0){
        const para = document.createElement('p');
        para.textContent = "Blast Off!";
        output.appendChild(para);
    }
}