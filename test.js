
  <script>
    const db = firebase.firestore();
    var docId ='';

    $('#check-icon').click(function(){
        var post_color = document.getElementById('postColor');
        var display_name = localStorage.getItem('user')
        var 내name = JSON.parse(localStorage.getItem('user')).displayName;
        var 내uid = JSON.parse(localStorage.getItem('user')).uid
        var 저장할거 = {
            내용: $('#note-text').val(),
            색상: post_color.options[post_color.selectedIndex].value,
            신상: [내name, 내uid]
        }
        db.collection('question').add(저장할거).then(()=>{
            location.href=location.href;
        });
    })


        db.collection('question').get().then((result)=>{
        result.forEach((doc)=>{
        var 템플릿 = 
        `<div class="node0">  
                <h1 class="node1" style="background:${doc.data().색상}">${doc.data().내용}</h1>
                    <div id="detailBox">
                    <button class="postDelete" id="${doc.id}"">삭제</button>
                    <div class="like">
                        나도 궁금해요<span class="ec ec-raised-hand"></span>
                    </div>
                    <div class="postComment">답하기</div>
                </div>
                <div class="commentReple">하잉</div>
                <div class="hiddenId">${doc.id}</div>
                <div class="hiddenName">${doc.data().신상[0]}</div>
        </div>`
            $('.container2').append(템플릿);
            docId = doc.id
            var post_delete = document.querySelector('.postDelete');
            post_delete.onclick = (event) =>{
                var 신청자이름 = JSON.parse(localStorage.getItem('user')).displayName
                var selected = event.target.id
                console.log(selected);
                console.log(docId);
                if(selected == 신청자이름){
                    db.collection('question').doc(docId).delete().then((result)=>{
                    console.log(docId);
                    console.log(result);
                    })
                }
            }     
            })
        })
</script>
