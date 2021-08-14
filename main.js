
const commentSection = document.getElementById("comment-section");
const sendBtn = document.getElementById("sent-btn");

sendBtn.addEventListener('click', function () {

    const textfeild = document.getElementById("comment-feild");

    const p = document.createElement('p');
    
    p.innerHTML = `${textfeild.value} <button class='btn btn-danger btn-sm text-end' data-comment= 'delete'>Delete</button> `

    p.className = "single-comment";


    commentSection.appendChild(p);

    const commentCount = commentSection.childElementCount;
        
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

const commentBtn = document.getElementById('comment-btn');

commentBtn.addEventListener('click', function () {
    commentSection.classList.toggle('d-none');
})

commentSection.addEventListener('click', function (event) {
    const findDeleteBtn = event.target.getAttribute('data-comment')
    if (findDeleteBtn == 'delete') {
        let conf = confirm(`Are you sure Delete This Comment`);
        if (conf) {
            commentSection.removeChild(event.target.parentNode); 
        }
        
    }
})