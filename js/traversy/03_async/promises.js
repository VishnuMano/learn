const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' },
];


function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if (!error) {
                resolve();
            } else {
            reject('createpost failed');
            }
        }, 2000);
    })
}

// createPost({ title: 'Post Three', body: 'This is post three' })
//     .then(getPosts)
//     .catch((err) => {
//         console.log(err);
//     }
// );

// Async / Await
async function init() {
    await createPost({ title: 'Post Three', body: 'This is post three' });
    await createPost({ title: 'Post Four', body: 'This is post four' })
    getPosts();
}

init();