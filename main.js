

const sendBtn = document.getElementById("sent-btn");

sendBtn.addEventListener('click', function () {

    const textfeild = document.getElementById("comment-feild");

    const p = document.createElement('p');
    
    p.innerText = textfeild.value;

    p.className = "p-2 m-2 bg-primary rounded-3 text-white";

    const commentSection = document.getElementById("comment-section");
    console.log(commentSection);

    commentSection.appendChild(p);

    textfeild.value = '';       	

})


const likeBtn = document.getElementById("like-btn");

let likeCount = 0;

likeBtn.addEventListener('click', function () {
    
    likeCount = likeCount + 1;

    const likeSpan = document.getElementById("like-count");

    likeSpan.innerText = likeCount;
    
    likeBtn.style.color = 'green';
})