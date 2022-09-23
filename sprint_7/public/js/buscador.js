const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggbox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

inputBox.onkeyup =(e)=>{
    let userData= e.target.value;
    let emptyArray = [];
    if(userData){
        icon.onclick = () => {
            webLink = `http://localhost:3000/buscarProductos/${userData}`;
            linkTag.setAttribute("href",webLink);
            linkTag.click();
        }

        emptyArray = suggestions.filter((data)=>{
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });

        emptyArray = emptyArray.map((data)=>{
            return data =  `<li onclick = "select(event)">${data}</li>`;
        });

        searchWrapper.classList.add("active");
        showSuggestions(emptyArray);
        let allList = suggbox.querySelectorAll("li");

        for (let i = 0; i< allList.length; i++) {
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchWrapper.classList.remove("active");
    }

}




function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = ()=>{
        webLink = `http://localhost:3000/API/productos/buscarProducto/${selectData}`;
        linkTag.setAttribute("href",webLink);
        linkTag.click();
    }
    searchWrapper.classList.remove("active");

}

function showSuggestions(list){
    let listData;
    if (!list.length) {
        userValue=inputBox.value;
        listData=`<li>${data}</li>`;
    }else{
        listData=list.join("");
    }
    suggbox.innerHTML=listData;
}