let btn = document.querySelector("#btn_submit");
let qstionInput = document.querySelector("#newQ");
let question = getQuestionfromLocalStorage();

renderTasks(question);
btn.addEventListener("click", () => {
    if (!qstionInput.value) {
        alert("Please Enter Your Question!");
        return false;
    }
    let question = getQuestionfromLocalStorage();
    question.push({ name: qstionInput.value });
    qstionInput.value = "";
    localStorage.setItem("question", JSON.stringify(question));
    renderTasks(question);
});
function renderTasks(question = []) {
    let content = "<div>";
    question.forEach((question) => {
        content += `
        <div class="question container-fluid p-1 m-2 border border-dark">
        <div class="head container text-left">
            <div>User</div>
        </div>
        <div class="content p-2">
            <div class="text p-2">
                ${question.name}
            </div>
            <div class="interact">
                <i class="fas fa-thumbs-up"></i>
                <i class="fas fa-thumbs-down" style="transform: scale(-1,1);"></i>
            </div>
            
        </div>
        <div id ="list-comments" class="list-comments" style="overflow:scroll; max-height:300px;">
        <textarea id="comments" class="comments" ></textarea>
    
        <div id="resultComment"></div>

        <div id="comments" class="comments">Văn bản là một loại hình phương tiện để ghi nhận, lưu giữ và truyền đạt các thông tin từ chủ thể này sang chủ thể khác bằng ký hiệu gọi là chữ viết. Nó gồm tập hợp các câu có tính trọn vẹn về nội dung, hoàn chỉnh về hình thức, có tính liên kết chặt chẽ và</div>
        </div>
    </div>`;
    });
    content += "</div>";
    document.querySelector("#result").innerHTML = content;
}

localStorage.removeItem("question");
function getQuestionfromLocalStorage() {
    return localStorage.getItem("question")
        ? JSON.parse(localStorage.getItem("question"))
        : [];
}
let listComments = document.querySelector("#list-comments");
let isShow = true;
function showListComments() {
    if (isShow) {
        listComments.style.display = "none";
        isShow = false;
    } else {
        listComments.style.display = "block";
        isShow = true;
    }
}
                // <b id ="btn-comments" class="btn-comments" style="margin:5px;" onclick="showListComments()">Comments</b>

//////////////////////comment-input//////

// function comments (){let btnCommments=document.querySelector('#btn-comments')

// let commentInput = document.querySelector('#comments');
// let userName = document.querySelector('#user').innerHTML;
// btnCommments.addEventListener('click', function () {
// if (!commentInput.value) {
// alert ("Phần bình luận đang trống")
// return false
// }
// let comment = localStorage.getItem('comment') ? JSON.parse(localStorage.getItem('comment')) : []
// comment.push({name: commentInput.value})
// commentInput.value=''
// localStorage.setItem('comment',JSON.stringify(comment))
// renderTasks(question)
// })
// localStorage.removeItem('comment')
// function renderTasks(comment=[]) {
//     let contentComment ='<div>'
//     comment.forEach((comment) => {
//         contentComment +=`<div id="comments> <p>${comment.name}</p></div>
//         `
//     })
//     contentComment +='</div>'
//     document.querySelector('#resultComment').innerHTML=contentComment;
// }}
