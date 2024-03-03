const discussSection = async () => {
    const res = await fetch ('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    const discuss =data.posts;
    // console.log(discuss)
    displayDiscussSection(discuss);
}

const displayDiscussSection = discuss =>{
    const postContainer =document.getElementById('discuss-section');

    discuss.forEach(post =>{
        // console.log(post)
        const postCard= document.createElement('div');
        postCard.classList = `flex gap-5 mt-4 w-[700px] py-8 px-4 rounded-xl bg-gray-100`;
        postCard.innerHTML =`
                <div>
                    <img class="h-16 w-16" src="${post.image}" alt="">
                </div>
                <div class="space-y-4">
                    <div class="flex gap-3">
                      <p>#${post.category}</p>
                      <p>Author:${post.author.name}</p>
                    </div>
                    <h1 class="text-xl font-medium">${post.title}</h1>
                    <p>${post.description}</p>
                    <hr>
                    <div class="flex gap-3">
                      <p><i class="fa-regular fa-message pr-2"></i>${post.comment_count}</p>
                      <p><i class="fa-solid fa-eye"></i>${post.view_count}</p>
                      <p><i class="fa-regular fa-clock pr-2"></i>${post.posted_time}</p>
                    </div>
                </div>`
        postContainer.appendChild(postCard);       
    });
}

discussSection();

