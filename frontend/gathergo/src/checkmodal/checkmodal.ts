import './modalTemplate'

const loginCheck = `
<div class = "loginCheck-modal-container">
      <div class = "loginCheck-modal-background">
          <div class = "loginCheck-modal">
            <div class = "loginCheck-modal-header">알림</div>
            <div class = "loginCheck-modal-divider"></div>
                <div class = "loginCheck-modal-message">로그인이 필요합니다.</div>
                <div style = "display : flex; justify-content : end;">
                    <button type="button" class="btn btn-primary">로그인</button>
                    <div class = "loginCheck-modal-button-divider"></div>
                    <button type="button" class="btn btn-outline-secondary checkmodal-cancel">취소</button>

                </div>
              </div>
          </div>
      </div>
  </div>
  `;
const joinCheck = `
<div class = "joinCheck-modal-container">
      <div class = "joinCheck-modal-background">
          <div class = "joinCheck-modal">
            <div class = "joinCheck-modal-header">알림</div>
            <div class = "joinCheck-modal-divider"></div>
                <div class = "joinCheck-modal-message">참가하시겠습니까?</div>
                <div style = "display : flex; justify-content : end;">
                    <button type="button" class="btn btn-primary">참가</button>
                    <div class = "joinCheck-modal-button-divider"></div>
                    <button type="button" class="btn btn-outline-secondary checkmodal-cancel">취소</button>

                </div>
              </div>
          </div>
      </div>
  </div>
  `;
const gatheringEdit = `
<div class = "gatheringEdit-modal-container">
      <div class = "gatheringEdit-modal-background">
          <div class = "gatheringEdit-modal">
            <div class = "gatheringEdit-modal-header">알림</div>
            <div class = "gatheringEdit-modal-divider"></div>
                <div class = "gatheringEdit-modal-message">수정하시겠습니까?</div>
                <div style = "display : flex; justify-content : end;">
                    <button type="button" class="btn btn-primary">수정</button>
                    <div class = "gatheringEdit-modal-button-divider"></div>
                    <button type="button" class="btn btn-outline-secondary checkmodal-cancel">취소</button>

                </div>
              </div>
          </div>
      </div>
  </div>
  `;
const gatheringDelete = `
<div class = "gatheringDelete-modal-container">
      <div class = "gatheringDelete-modal-background">
          <div class = "gatheringDelete-modal">
            <div class = "gatheringDelete-modal-header">알람</div>
            <div class = "gatheringDelete-modal-divider"></div>
                <div class = "gatheringDelete-modal-message">모임을 삭제하시겠습니까?</div>
                <div style = "display : flex; justify-content : end;">
                    <button type="button" class="btn btn-primary">삭제</button>
                    <div class = "gatheringDelete-modal-button-divider"></div>
                    <button type="button" class="btn btn-outline-secondary checkmodal-cancel">취소</button>

                </div>
              </div>
          </div>
      </div>
  </div>
  `;

const commentDelete = `
<div class = "commentDelete-modal-container">
      <div class = "commentDelete-modal-background">
          <div class = "commentDelete-modal">
            <div class = "commentDelete-modal-header">알람</div>
            <div class = "commentDelete-modal-divider"></div>
                <div class = "commentDelete-modal-message">댓글을 삭제하시겠습니까?</div>
                <div style = "display : flex; justify-content : end;">
                    <button type="button" class="btn btn-primary">삭제</button>
                    <div class = "commentDelete-modal-button-divider"></div>
                    <button type="button" class="btn btn-outline-secondary checkmodal-cancel">취소</button>

                </div>
              </div>
          </div>
      </div>
  </div>
  `;

const joinCancel = `
<div class = "joinCancel-modal-container">
      <div class = "joinCancel-modal-background">
          <div class = "joinCancel-modal">
            <div class = "joinCancel-modal-header">알람</div>
            <div class = "joinCancel-modal-divider"></div>
                <div class = "joinCancel-modal-message">참가신청을 삭제하시겠습니까?</div>
                <div style = "display : flex; justify-content : end;">
                    <button type="button" class="btn btn-primary">삭제</button>
                    <div class = "joinCancel-modal-button-divider"></div>
                    <button type="button" class="btn btn-outline-secondary checkmodal-cancel">취소</button>

                </div>
              </div>
          </div>
      </div>
  </div>
  `;
//------------------------------------------------- 필요한 모달 삽입하는 부분-------------------------------------------


//insertCheckModal함수는 문자열 $checkModal의 값에 따라 상황에 맞는 모달을 modal-container에 넣어주는 함수입니다.
function insertCheckModal($checkModal : string){
    const modalContainer = document.getElementById('modal-container');
    const checkModal = document.createElement('div')
    switch ($checkModal) {
      case 'loginCheck':
        checkModal.innerHTML = loginCheck;
        break;
      case 'joinCheck':
        checkModal.innerHTML = joinCheck;
        break;
      case 'gatheringDelete':
        checkModal.innerHTML = gatheringDelete;
        break;
      case 'gatheringEdit':
        checkModal.innerHTML = gatheringEdit;
        break;
      case 'commentDelete':
        checkModal.innerHTML = commentDelete;
        break;
      case 'joinCancel':
        checkModal.innerHTML = joinCancel;
        break;
    }
    modalContainer?.appendChild(checkModal);
    
    checkModalBackgroundEvent($checkModal,checkModal)
    checkModalCancelEvent(checkModal)
}

//각각의 checkModal의 취소버튼을 누르면 모달이 없어지는 기능을 담당합니다.

function checkModalCancelEvent(checkModal : HTMLDivElement){
  const checkModalCancelButton = document.querySelector('.checkmodal-cancel')
  checkModalCancelButton?.addEventListener('click',()=>{
    checkModal.remove();
  })
}
//checkModalBackgroundEvent는 확인용 작은 모달들의 백그라운드를 누르면 모달이 없어지는 기능을 담당합니다.
function checkModalBackgroundEvent($checkModal : string ,checkModal : HTMLDivElement){ //$checkModal은 그냥 string이고 이름 문자열일 뿐입니다.
    const checkModalBackgroundName = $checkModal + '-modal-background';
    const checkModalBackground = document.getElementsByClassName(
      checkModalBackgroundName
    )[0];
    checkModalBackground.addEventListener('click', (e) => {
      if (e.target == checkModalBackground)
        checkModal.remove();
    });
}

//rightClickDeleteComment함수는 댓글에서 우클릭했을때 삭제 버튼이 나오는 기능을 담당합니다.
function rightClickDeleteComment() {
  const modalRegister = document.getElementsByClassName('feed-comment');
  for(const element of Array.from(modalRegister)){
    element.addEventListener('contextmenu', (event : Event) => {
    const e = event as MouseEvent;
        e.preventDefault();
        removeAllcontextmenu();
        const x = e.clientX + 'px';
        const y = e.clientY + 'px';
        const div = document.createElement('div');
        div.classList.add('comment-delete');
        div.innerHTML = `<button id = "commentDeleteButton" class="custom-btn btn-1">삭제하기</button>`;
        div.style.position = 'fixed';
        div.style.left = `${x}`;
        div.style.top = `${y}`;
        document.getElementById('modal-container')?.appendChild(div);
    });
  }
}
//removeAllcontextmenu함수는 우클릭으로 삭제버튼이 나오면 마우스를 움직여 다른곳에 클릭이나 우클릭을 할 경우 해당 버튼을 삭제하는 기능입니다.
function removeAllcontextmenu() {
  const contextmenuList = document.getElementsByClassName('comment-delete');
  for(const element of Array.from(contextmenuList)){
    element.remove();
  }
}

//window에 좌클릭을 할경우 우클릭이 댓글삭제버튼이면 모달을띄우고 아니면 댓글삭제 버튼을 없애는 기능을 담당합니다.
function deleteAllCommentButton(){
    window.addEventListener('click', (e) => {
    const contextmenuList = document.getElementById('commentDeleteButton');
    if (e.target == contextmenuList) {
        insertCheckModal('commentDelete');
    }
    removeAllcontextmenu();
    });
}

deleteAllCommentButton();
rightClickDeleteComment();

//------------------------------------------------------참가하기 버튼 이벤트 달기-------------------------------------------------------------

function registerButtonEvent(){
    const registerButtonList = document.getElementsByClassName('feed-info')
    for(const registerButton of Array.from(registerButtonList)){
        registerButton.addEventListener('click',()=>{
            insertCheckModal('joinCheck');
        })
    }
}
registerButtonEvent();

//------------------------------------------------------수정하기 버튼 이벤트 달기-------------------------------------------------------------

function settingButtonEvent(){
    const settingButtonList = document.getElementsByClassName('setting-icon')
    for(const settingButton of Array.from(settingButtonList)){
        settingButton.addEventListener('click', () => {
          insertCheckModal('gatheringEdit');
        });
    }
}
// settingButtonEvent();

//----------------------------------------------------로그인 안했을 때 버튼-----------------------------------------------------------------

function notLoginEvent() {
  const ButtonList = document.getElementsByClassName('not-login');
  for (const notLoginButton of Array.from(ButtonList)) {
    notLoginButton.addEventListener('click', () => {
      insertCheckModal('loginCheck');
    });
  }
}
notLoginEvent();

//---------------------------------------------------삭제하기 버튼-----------------------------------------------------------------------
function settingNotLoginEvent() {
  const ButtonList = document.getElementsByClassName('gathering-delete');
  for (const settingButton of Array.from(ButtonList)) {
    settingButton.addEventListener('click', () => {
      insertCheckModal('gatheringDelete');
    });
  }
}
settingNotLoginEvent();

//---------------------------------------------------참가 취소-----------------------------------------------------------------------
function joinCancelEvent() {
  const ButtonList = document.getElementsByClassName('register-cancel');
  for (const settingButton of Array.from(ButtonList)) {
    settingButton.addEventListener('click', () => {
      insertCheckModal('joinCancel');
    });
  }
}
joinCancelEvent();