const url = "http://localhost:3000/users"
const allCars = document.querySelector(".dataCar")
const loginBtn = document.querySelector("#loginBtn")
const barmenuBtn = document.getElementById("menuBtn")
const submitBtn = document.getElementById("button")
const showMenu = document.getElementsByClassName("showmenu")
const writeData = async () =>{
    const {data} = await axios(url)
    data.forEach(({marka,model,price,year,image,mileage,engine,date,link}) => {
        allCars.innerHTML +=`<div id="car" class="rounded-top">
        <img  class="rounded-top" src="${image}" alt="">
        <h3>${price}</h3>
        <h4>${marka} ${model}</h4>
        <h4>${year} ${engine} ${mileage}</h4>
        <h4>${date}</h4>
        <a class="goLink" href="${link}"></a>
        <a class="likeItem" href="№"><i id="likeItem" class="fa-regular fa-heart"></i></a>
        </div>`
    });
}










writeData();

submitBtn.onmousedown = () =>{
        Swal.fire({
                title: "Tamamlandı!🤩",
                text: "Əsas səhifəyə qayıdaraq digər maşınlara göz gəzdirə bilərsiniz.",
                 icon: "success"
            })
        
}
