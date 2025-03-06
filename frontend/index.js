const but = document.getElementById("but");
const space = document.getElementById("space");
const form = document.getElementById("addpost");

async function getPosts() {
  const post = await fetch("http://localhost:8000/data/posts");

  if (!post.ok) {
    throw new Error("failed to fetch data");
  }
  const posts = await post.json();
  space.innerHTML = "";

  posts.forEach((post) => {
    const hold = document.createElement("div");
    hold.textContent = post.title;
    space.appendChild(hold);
  });
}

async function addPost(e) {
  e.preventDefault();
  const formdata = new FormData(this);
  const title = formdata.get("title");

  const data = await fetch("http://localhost:8000/data/posts", {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  });

  if (!data.ok) {
    throw new Error("failed to post");
  }

  const newPost = await data.json();

  const postEl = document.createElement("div");
  postEl.textContent = newPost.title;
  space.appendChild(postEl);
  getPosts();
}

but.addEventListener("click", getPosts);
form.addEventListener("submit", addPost);
