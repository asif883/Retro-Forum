const latestPost = async () => {
    const res = await fetch ('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();
    
    // console.log (data);
    showPost(data);
}


const showPost = data => {
    const allPost = document.getElementById('Latest-post');
    allPost.classList=`flex flex-col lg:flex-row gap-4 mt-8`
    data.forEach(post => {
        // console.log(post)
        const postCard = document.createElement('div');
        postCard.classList =` card border-2 border-gray-200 shadow-xl`
        postCard.innerHTML=`
      <div>
      <figure class="px-10 pt-10">
      <img src="${post.cover_image}" alt="" class="rounded-xl" />
    </figure>
    <div class="card-body ">
       <p><i class="fa-regular fa-calendar mr-2"></i>${post.author.posted_date}</p>
      <h2 class="card-title">${post.title}</h2>
      <p>${post.description}</p>
      <br>
      <div class="flex gap-3">
        <div>
          <img class="rounded-full w-12 h-12" src="${post.profile_image}" alt="">
        </div>
        <div>
          <p class="font-semibold text-xl">${post.author.name}</p>
          <p>${post.author.designation}</p>
        </div>
      </div>
    </div>
    </div>`
    allPost.appendChild(postCard);

    });
}

latestPost()