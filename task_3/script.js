const title = document.getElementById('title');
const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');
const p3 = document.querySelector('.p3');
const p4 = document.querySelector('.p4');
const btn = document.getElementById('mybtn');
const btn1 = document.getElementById('mybtn1');

btn.addEventListener('click', tambahList);
btn1.addEventListener('click', percantik)

title.addEventListener('dblclick', function() {
    title.innerHTML="Hi, Selamat Datang";
    p1.innerHTML="Gery Melia Suwanda";
    p2.innerHTML="120140147";
    p3.innerHTML="Teknik Informatika ITERA";
    p4.innerHTML="AKTIVITASKU :";
});

function percantik(){
    var styles = `* {
        padding: 15px;
        margin: 15px;
    }
    
    html {
        background: linear-gradient(90deg, rgba(12,111,255,255) 0%, rgba(11,81,212,255) 100%);
        margin: 0;
        padding: 0;
    }
    body{
        max-width: 720px;
        margin: 30px auto;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        color: #ffffff;
    }
    
    #title {
        display: grid;
        justify-content: center;
        background-color: darkblue;
        border-radius: 15px;
    }
    
    font{
        border: 1px solid #808080;
        cursor: pointer;
    }
    
    #container {
        background-color: darkblue;
        border-radius: 15px;
    }
    
    p{
        border-radius: 8px;
        background-color: cyan;
        color: black;
        font-weight: bold;
    }
    
    #aktivitas{
        border-radius: 8px;
        background-color: darkblue;
        color: black;
        font-weight: bold;
    }
    
    ul li{
        border-radius: 8px;
        background-color: blue;
        color: white;
    }
    
    .btn {
        background-color: #4CAF50; /* Green */
        border: none;
        color: black;
        padding: 15px 20px;
        text-decoration: none;
        font-size: 16px;
        margin: 2px 2px;
        cursor: pointer;
        border-radius: 6px;
        font-weight: bold;
    }
    
    .btn:hover{
        background-color: white;
        color: darkblue;
    }
    
    .btn[id=mybtn]{
        padding-top: -20px;
        position: relative;
        left: 42%;
        align-self: center;
    }
    
    #tombol {
        display: grid;
        justify-content: center;
        border: none;
    }`;
    var styleSheet = document.querySelector('style');
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
}

function gantiWarna(){
    p1.style.backgroundColor = 'purple';
    p1.style.color = 'white';
}

function tambahList(){
    const ul = document.querySelector('section#aktivitas ul');
    const newLi = document.createElement('li');
    const newLiText = document.createTextNode('Item baru');
    newLi.appendChild(newLiText);
    ul.appendChild(newLi);
};

