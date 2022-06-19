//상단 html코드
   <div class="square">
        <div class="wrapper">
            
            <nav>
                <div class="items">
                    <span class="item active" data-name="all">전체</span>
                    <span class="item" data-name="firstChapter">1부</span>
                    <span class="item" data-name="secondChapter">2부</span>
                    <span class="item" data-name="thirdChapter">3부</span>
                    <span class="item" data-name="fourChapter">4부</span>
                    <span class="item" data-name="fifthChapter">5부</span>
                    <button class="item" id="upload">올리기</button>
                </div>
            </nav>
            <div class="gallery">
               
            </div>
        </div>

        <div class="preview-box">
            <div class="details">
                <span class="title">챕터: <p> Not defined</p> </span>
                <span class="icon fas fa-times"></span>
            </div>
            <div class="image-box">
                <img src="">
            </div>
        </div>
        <div class="shadow"></div>
    </div>



//js코드
<script>
        const db = firebase.firestore();
        
        var filterImgName = '';

        db.collection('square').get().then((결과)=>{
            결과.forEach((doc)=>{
                console.log(doc.data())
                
                var 템플릿 = `
                <div class="image" data-name="${doc.data().챕터}">
                    <span>
                        <img src="${doc.data().이미지}.jpg" alt="">
                    </span>
                </div>`;
                
            
                $('.gallery').append(템플릿)
                var filterImgName = doc.data().챕터
                const filterItem = document.querySelector(".items");
                const filterImg = document.querySelectorAll(".image");
                console.log(filterImgName)


                filterItem.onclick = (selectedItem) => {
                if(selectedItem.target.classList.contains("item")){ //분류 중 하나를 클릭할 때 그 밑의 이미지들이 있다면
                    filterItem.querySelector(".active").classList.remove("active");
                    //items의 class에 active가 있다면 그것을 제거한다.
                    selectedItem.target.classList.add("active");
                    //선택된 items에 active라는 클래스명을 추가한다.
                    let filterName = selectedItem.target.getAttribute("data-name");
                    console.log(filterName);
                    //선택된 분류의 data-name를 filterName으로 설정
                    filterImg.forEach((image) => { //filterImg의 각 이미지들에게 실행하는 반복문
                        //image의 data-name가져오기
                        if((filterImgName === filterName) || filterName == "all"){
                            //filterImages의 dataname이 filterName의 dataname하고 같거나 
                            //fiterName이 all이라면
                            image.classList.add("show");
                            //image에 show라는 클래스명을 넣고
                        }else{
                            image.classList.add("hide");
                            //image라는 hide라는 클래스명을 넣고
                            image.classList.remove("show");
                            //show라는 클래스명을 지운다.
                        }
                    })
                }
            }
            for ( let index = 0; index < filterImg.length; index++){
            filterImg[index].setAttribute("onclick", "preview(this)");
        }
            })
        })
        
        $('#upload').click(function(){
            location.href="./upload.html"
        })
    </script>
