const latestPost = async () => {
    const res = await fetch ('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();
    const allPost = data.latest-posts;
    console.log (allPost);
}

// const discussSection = async () => {
//     const res = await fetch ('https://openapi.programming-hero.com/api/retro-forum/posts');
//     const data = await res.json();
//     const discuss =data.posts;
//     // console.log(discuss)
//     displayDiscussSection(discuss);
// }

// const showPost = card => {
//     card.forEach(post => {
//         console.log(post)
//     });
// }