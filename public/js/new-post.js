const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector("#post-title").value.trim();
    const content = document.querySelector("#content").value.trim();
  
    if (title && content) {
      const response = await fetch(`/api/posts`, {
        method: "POST",
        body: JSON.stringify({ title, content }),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        document.location.replace("/dashbored");
      } else {
        alert("Failed to create post");
    }
}
};

document
.querySelector(".new-post-form")
.addEventListener("submit", newFormHandler);