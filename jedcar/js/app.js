"use strict"


const url = "http://localhost:3000/users/"
const allCars = document.querySelector(".dataCar")
const loginBtn = document.querySelector("#loginBtn")
const barmenuBtn = document.getElementById("menuBtn")
const submitBtn = document.getElementById("button")
const showMenu = document.getElementById("showMenu")
const navbarMenu = document.getElementById("navbar")
const menuLogo = document.getElementById("menuLogo")
const likeLogo = document.getElementById("like")

const writeData = async () =>{
    const {data} = await axios(url)
    data.forEach(({id,marka,model,price,year,image,mileage,engine,date,link}) => {
        allCars.innerHTML +=`<div id="car" class="rounded">
        <img  class="rounded-top" src="${image}" alt="">
        <h3>${price}</h3>
        <h4>${marka} ${model}</h4>
        <h4>${year} ${engine} ${mileage}</h4>
        <h4>${date}</h4>
        <a class="goLink" href="${link}" target="_blank"></a>
        <button onclick="like()" id="like" class="likeItem btn btn-success "><i id="likeItem" class="fa-regular fa-heart"></i></button>
        <button id="deleteBtn" class="btn btn-danger" onclick="deleteUser(${id})">Delete</button>
        <button id="editBtn" class="btn btn-warning " onclick="editUser(${id})">Edit</button>
        </div>`
    });
}
const deleteUser =  (id)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "OK"
      }).then((result) => {
        if (result.isConfirmed) {
            axios.delete(url + id).then((res)=>{
                console.log("OK")
            })
        } 
      });
}
const editUser = async (id )=>{
    const {data:{marka,model,price,year,image,mileage,engine,date}} = await axios(url+id);
    const _marka = prompt("Yeni Adi daxil edin:"+marka)
    const _model = prompt("Yeni Modeli daxil edin:"+model)
    const _year = prompt("Yeni Il daxil edin:"+year)
    const _engine = prompt("Yeni Motor daxil edin:"+engine)
    const _mileage = prompt("Yeni Yurus daxil edin:"+mileage)
    const _price = prompt("Yeni Price daxil edin:"+price)
    const _image = prompt("Yeni Sekil daxil edin:"+image)
    const _date = prompt("Yeni Tarix daxil edin:",date)
    
    const obj   ={
        marka:_marka,
        model:_model,
        price:_price,
        year:_year,
        image:_image,
        mileage:_mileage,
        engine:_engine,
        date:_date
    }   
    axios.put(url + id,obj).then(()=>{
        console.log(res)
    })
}
const like = async(id)=>{
    likeLogo.onmousedown = ()=>{
        likeLogo.style.background = 'red'
    }
}




barmenuBtn.onmousedown = () => {
    if(showMenu.style.display === 'none'){
    showMenu.style.display = 'inline'
    barmenuBtn.style.background = 'white'
    barmenuBtn.style.color = 'black'
    barmenuBtn.innerHTML = '<i class="fa-solid fa-minus"></i>'
}else{
    barmenuBtn.style.color = 'white'
    showMenu.style.display = 'none'
    barmenuBtn.style.background = 'green'
    barmenuBtn.style.color = 'white'
    barmenuBtn.innerHTML = '<i class="fa-solid fa-plus"></i>'
}}


writeData();
