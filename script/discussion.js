
const discussSection = async (categoryName) => {
    // const res = await fetch (`https://openapi.programming-hero.com/api/retro-forum/posts?category=${categoryName}`);
    const res = await fetch ('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    const discuss =data.posts;
    // console.log(discuss)
    displayDiscussSection(discuss);
}


const displayDiscussSection = discuss =>{
    const postContainer =document.getElementById('discuss-section');
    postContainer.textContent ='';

    discuss.forEach(post =>{
        // console.log(post)
        const postCard= document.createElement('div');
        postCard.classList = `flex gap-5 mt-4 w-[400px] lg:w-[700px] py-8 px-4 rounded-xl bg-gray-100`;
        postCard.innerHTML =`
                <div>
                <div class="indicator">
                <span id="${post.author.name}" class="indicator-item badge"></span> 
                <div class="grid w-16 h-16 place-items-center"><img class="h-16 w-16" src="${post.image}" alt="${post.isActive}"></div>
              </div>
                </div>
                <div class="space-y-5">
                    <div class="flex gap-3">
                      <p>#${post.category}</p>
                      <p>Author:${post.author.name}</p>
                    </div>
                    <h1 class="text-xl font-medium">${post.title}</h1>
                    <p>${post.description}</p>
                    <hr>
                    <div class="">
                        <div class="flex gap-3">
                            <p><i class="fa-regular fa-message pr-2"></i>${post.comment_count}</p>
                            <p><i class="fa-solid fa-eye"></i>${post.view_count}</p>
                            <p><i class="fa-regular fa-clock pr-2"></i>${post.posted_time}</p>
                        </div>
                        <div class="ml-[250px] lg:ml-[500px]"> 
                            <button id="${post.id}" class="btn text-white rounded-full btn-active btn-accent"><i class="fa-solid fa-house"></i></button>
                        </div>
                    </div>
                </div>`
        postContainer.appendChild(postCard);       
    });

    const idFind =document.getElementById('101');
    idFind.onclick= clicked;
//    console.log(idFind)
    
    function clicked(){
    // console.log('click')
    const firstClick = document.getElementById ('1st-click');
    firstClick.classList.remove('hidden');
    }

    const idFind2 =document.getElementById('102');
    idFind2.onclick= clicked2;
// console.log(idFind)
    function clicked2(){
    //   console.log('click')
    const firstClick = document.getElementById ('2nd-click');
    firstClick.classList.remove('hidden');
    }

    const idFind3 =document.getElementById('103');
   idFind3.onclick= clicked3;
// console.log(idFind)
    function clicked3(){
    //   console.log('click')
    const firstClick = document.getElementById ('3rd-click');
    firstClick.classList.remove('hidden');
    }
    const idFind4 =document.getElementById('104');
    idFind4.onclick= clicked4;
// console.log(idFind)

    function clicked4(){
    //   console.log('click')
    const firstClick = document.getElementById ('4th-click');
    firstClick.classList.remove('hidden');
    }
    const idFind5 =document.getElementById('105');
   idFind5.onclick= clicked5;
// console.log(idFind)

    function clicked5(){
    //   console.log('click')
    const firstClick = document.getElementById ('5th-click');
    firstClick.classList.remove('hidden');
    }

    // 
 
    if(isActive = true){
        const green = document.getElementById('John Doe')
        green.classList.add('badge-accent')
    }
    else{
        const green = document.getElementById('John Doe')
        green.classList.add('badge-secondary')
    }   
    if(isActive = false){
        const green = document.getElementById('Alice Johnson')
        green.classList.add('badge-accent')
    }
    else{
        const red = document.getElementById('Alice Johnson');
        red.classList.add('badge-secondary');
    }   
    if(isActive = true){
        const green = document.getElementById('Bob Smith')
        green.classList.add('badge-accent')
    }
    else{
        const green = document.getElementById('Bob Smith')
        green.classList.add('badge-secondary')
    }   
    if(isActive = true){
        const green = document.getElementById('Emily White')
        green.classList.add('badge-accent')
    }
    else{
        const red = document.getElementById('Emily White')
        red.classList.add('badge-secondary')
    }   
    if(isActive = false){
        const green = document.getElementById('David Brown')
        green.classList.add('badge-accent')
    }
    else{
        const green = document.getElementById('David Brown')
        green.classList.add('badge-secondary')
    }   
    if(isActive = true){
        const green = document.getElementById('Michael Johnson')
        green.classList.add('badge-accent')
    }
    else{
        const green = document.getElementById('Michael Johnson')
        green.classList.add('badge-secondary')
    }   
}


const search = () => {
    const searchFelid = document.getElementById('search-felid');
    const searchText = searchFelid.value;
    // console.log (searchText)
    discussSection(searchText);
}



discussSection();



