##Team3-Frontend

# GatherGo

<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
<img width="394" alt="GatherGoLogo" src="https://user-images.githubusercontent.com/63828202/217709195-4be91489-dc44-4015-94d5-fe04e2cd883e.svg">

  </a>


<h3 align="center">GatherGo</h3>

  <p align="center">
    번개 매칭 플랫폼
    <br />
    <br />
    <a href="">데모 영상 보기(준비중)</a> ·
    <a href="https://quill-bed-0bb.notion.site/Hyundai-Web-Project-2fd7966806c54e418c89e2d38ab22b30">팀 페이지</a> ·
    <a href="https://docs.google.com/presentation/d/101pvz4olysHofRXOB_jt3_sGQii5iGU0m7y7qUaF5jo/edit?usp=sharing">화면 설계</a>
  </p>
</div>

***

## ⚡️gatherGo란?

지역 기반의 인스턴트 만남 플랫폼입니다!  
운동할때! 공부할때! 여행갈때! 사람이 부족하다면?  
아니면 그냥 아무이유없이 사람을 만나고 싶다면???  
GatherGo를 써보세요!

<br>

카테고리나 지역을 기반으로 검색후 모임에 참가할 수 있습니다.<br>
모집글을 작성하고 만남을 주최하는 호스트가 되어보세요!<br>
모집글에 댓글을 달고 알람으로 누가 당신의 모집글에 참여하였는지 확인하세요!<br>
프로필 이미지를 변경하고 당신의 일정을 확인하세요.

***
## 주요기능

1. 회원가입/로그인/로그아웃
2. 모임 모집 글 작성
3. 글 조회, 수정, 삭제
4. 글에 댓글 작성
5. 지역, 카테고리 기반 검색
6. 프로필 조회/수정
7. 알람 기능
8. 챗봇

***
## 기획의도

코로나 이후 대면에서 비대면으로 급격하게 변화하는 시대, MZ세대를 중심으로 온라인 매칭에 대한 일부 부정적인 인식이 사라지며 매칭앱에 대한 수요가 증가하고 있습니다. 코로나에도 사람들은 누군가와 관계를 맺고싶고, 여전히 소통하고 싶습니다.
그래서 저희는 지역과 관심사를 기반으로 쉽게 글을 작성하고 사람을 구할 수 있는 플랫폼이 있으면 어떨까 생각했고 'GatherGo'를 구상하게 되었습니다.

***
## 기술 스택

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white">
<img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=CSS3&logoColor=white">
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">  
<br>
<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white">
<img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white">
<img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=ESLint&logoColor=white">
<img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=white">
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
<img src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=Bootstrap&logoColor=white">

***
## 기술선정 이유

### Vite

프랑스어로 빠르다를 의미하고, 빠르고 간결한 모던 웹 프로젝트 개발 경험에 초점을 맞춰 탄생한 빌드 도구입니다.

장점
1. 굉장히 빠른 빌드 속도
2. 서버의 시작속도가 매우 빠릅니다.
3. HMR : 앱을 종료하지 않고 갱신된 파일을 교체하는 방식
4. Vanilla, React, Vue와의 호환성

### Redux

Javascript의 state들을 관리할 수 있는 라이브러리

장점
1. state를 쉽게 관리
2. 웹사이트의 상태를 어디서 관리할지 고민하지 않아도 됩니다.
3. 어떤 액션이 취해졌고, 어떤 데이터가 어떻게 변경되었는지 쉽게 알 수 있습니다.

***
## FE 디렉토리 폴더 구조
```bash

gathergo
 ┣ public
 ┃ ┗ assets
 ┃ ┃ ┣ Icons
 ┃ ┃ ┃ ┣ _profileIcon.png
 ┃ ┃ ┃ ┣ chatIcon.png
 ┃ ┃ ┃ ┣ chevronupIcon.svg
 ┃ ┃ ┃ ┣ closeIcon.svg
 ┃ ┃ ┃ ┣ doneIcon.png
 ┃ ┃ ┃ ┣ editTextIcon.png
 ┃ ┃ ┃ ┣ heartIcon.png
 ┃ ┃ ┃ ┣ inprogressIcon.png
 ┃ ┃ ┃ ┣ mapIcon.png
 ┃ ┃ ┃ ┣ peopleIcon.png
 ┃ ┃ ┃ ┣ profileIcon.png
 ┃ ┃ ┃ ┣ setting icon.png
 ┃ ┃ ┃ ┣ threedots.png
 ┃ ┃ ┃ ┗ who.png
 ┃ ┃ ┣ Logo
 ┃ ┃ ┃ ┣ GatherGoLogo.png
 ┃ ┃ ┃ ┣ GatherGoLogo.svg
 ┃ ┃ ┃ ┣ LogoIconChar-Black.svg
 ┃ ┃ ┃ ┣ LogoIconChar-theme.svg
 ┃ ┃ ┃ ┣ bgLogo.png
 ┃ ┃ ┃ ┣ bgLogoIcon.svg
 ┃ ┃ ┃ ┣ bigNavLogo.png
 ┃ ┃ ┃ ┣ mainLogo.png
 ┃ ┃ ┃ ┣ mainLogoIcon.svg
 ┃ ┃ ┃ ┗ smNavLogo.png
 ┃ ┃ ┣ category
 ┃ ┃ ┃ ┣ icons
 ┃ ┃ ┃ ┃ ┗ ...png
 ┃ ┃ ┃ ┗ thumbnails
 ┃ ┃ ┃ ┃ ┗ ...jpg
 ┃ ┃ ┣ blankProfile.png
 ┃ ┃ ┣ cherryblossom.jpeg
 ┃ ┃ ┣ profileEdit.svg
 ┃ ┃ ┗ userProfileImg.jpeg
 ┣ src
 ┃ ┣ common
 ┃ ┃ ┣ fg.timepicker-master
 ┃ ┃ ┃ ┣ fg.timepicker.css
 ┃ ┃ ┃ ┗ fg.timepicker.js
 ┃ ┃ ┣ kakaoMapAPI
 ┃ ┃ ┃ ┣ kakaoMapAPI.css
 ┃ ┃ ┃ ┗ kakaoMapAPI.ts
 ┃ ┃ ┣ utils
 ┃ ┃ ┃ ┣ navigate.ts
 ┃ ┃ ┃ ┗ querySelctor.ts
 ┃ ┃ ┣ Fetches.ts
 ┃ ┃ ┣ commonFunctions.ts
 ┃ ┃ ┗ constants.ts
 ┃ ┣ components
 ┃ ┃ ┣ card
 ┃ ┃ ┃ ┣ Card.ts
 ┃ ┃ ┃ ┣ CardList.ts
 ┃ ┃ ┃ ┗ CardModal.ts
 ┃ ┃ ┣ comment
 ┃ ┃ ┃ ┣ CommentInput.ts
 ┃ ┃ ┃ ┣ CommentList.ts
 ┃ ┃ ┃ ┗ MyComment.ts
 ┃ ┃ ┣ dropdown
 ┃ ┃ ┃ ┣ dropdownCategory.ts
 ┃ ┃ ┃ ┗ dropdownRegion.ts
 ┃ ┃ ┣ fba
 ┃ ┃ ┃ ┗ fba.ts
 ┃ ┃ ┣ form
 ┃ ┃ ┃ ┣ postingForms
 ┃ ┃ ┃ ┃ ┣ AddressForm.ts
 ┃ ┃ ┃ ┃ ┣ CategoryForm.ts
 ┃ ┃ ┃ ┃ ┣ ContentForm.ts
 ┃ ┃ ┃ ┃ ┣ DateTimeForm.ts
 ┃ ┃ ┃ ┃ ┣ MapForm.ts
 ┃ ┃ ┃ ┃ ┣ PeopleForm.ts
 ┃ ┃ ┃ ┃ ┗ TitleForm.ts
 ┃ ┃ ┃ ┣ LoginForm.ts
 ┃ ┃ ┃ ┗ PostingForm.ts
 ┃ ┃ ┣ header
 ┃ ┃ ┃ ┣ headerDefault.ts
 ┃ ┃ ┃ ┣ headerDefaultNav.ts
 ┃ ┃ ┃ ┣ headerHome.ts
 ┃ ┃ ┃ ┣ headerHomeNav.ts
 ┃ ┃ ┃ ┣ headerSearchMain.ts
 ┃ ┃ ┃ ┗ headerSearchSticky.ts
 ┃ ┃ ┣ modals
 ┃ ┃ ┃ ┣ errorModal.ts
 ┃ ┃ ┃ ┣ loadingModal.ts
 ┃ ┃ ┃ ┗ notiModal.ts
 ┃ ┃ ┣ profile
 ┃ ┃ ┃ ┣ tabEdit
 ┃ ┃ ┃ ┣ tabProfile
 ┃ ┃ ┃ ┃ ┣ profileUserDesc.ts
 ┃ ┃ ┃ ┃ ┣ profileUserHost.ts
 ┃ ┃ ┃ ┃ ┣ profileUserHostList.ts
 ┃ ┃ ┃ ┃ ┣ profileUserInfo.ts
 ┃ ┃ ┃ ┃ ┣ profileUserJoin.ts
 ┃ ┃ ┃ ┃ ┗ profileUserJoinList.ts
 ┃ ┃ ┃ ┣ profileLayout.ts
 ┃ ┃ ┃ ┣ profileMain.ts
 ┃ ┃ ┃ ┣ profileSidebar.ts
 ┃ ┃ ┃ ┣ tabEditMain.ts
 ┃ ┃ ┃ ┣ tabLogoutModal.ts
 ┃ ┃ ┃ ┗ tabProfileMain.ts
 ┃ ┃ ┣ sidebar
 ┃ ┃ ┃ ┣ alarmSidebar.ts
 ┃ ┃ ┃ ┗ log.ts
 ┃ ┃ ┗ .DS_Store
 ┃ ┣ css
 ┃ ┃ ┣ bootstrap.css
 ┃ ┃ ┣ errormodal.css
 ┃ ┃ ┣ feedRead.css
 ┃ ┃ ┣ index.css
 ┃ ┃ ┣ login.css
 ┃ ┃ ┣ modal.css
 ┃ ┃ ┣ notiModal.css
 ┃ ┃ ┣ postPage.css
 ┃ ┃ ┣ profile.css
 ┃ ┃ ┗ sidebar.css
 ┃ ┣ pages
 ┃ ┃ ┣ home.ts
 ┃ ┃ ┣ login.ts
 ┃ ┃ ┣ notFound.ts
 ┃ ┃ ┣ post.ts
 ┃ ┃ ┗ profile.ts
 ┃ ┣ server
 ┃ ┃ ┗ initialstate.ts
 ┃ ┣ store
 ┃ ┃ ┣ actions.ts
 ┃ ┃ ┣ reducers.ts
 ┃ ┃ ┗ store.ts
 ┃ ┣ .DS_Store
 ┃ ┣ app.ts
 ┃ ┣ index.ts
 ┃ ┗ router.ts
 ┣ .DS_Store
 ┣ .eslintrc.json
 ┣ .gitignore
 ┣ .prettierrc.json
 ┣ README.md
 ┣ firebase-messaging-sw.js
 ┣ index.html
 ┣ index.ts
 ┣ package-lock.json
 ┣ package.json
 ┗ tsconfig.json
 ```
