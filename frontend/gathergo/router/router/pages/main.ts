function Main($container : HTMLBodyElement) {
  const container = $container;

  const setState = () => {
    render();
  };

  const render = () => {
    container.innerHTML = `
<div class="main">
    <nav class="header navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-lg">
        <div class="navbar-brand-wrapper">
          <img class="navbar-brand" src="./assets/Logo/GatherGoLogo.svg" alt="GatherGo" />
        </div>
        <div class="container-fluid">
          <ul class="nav-link-wrapper login me-auto show">
            <li class="nav-item">
              <a class="nav-link" href="./src/Feed/create-update.html" data-hover="모임 만들기">
                <span>모임 만들기</span>
              </a>
            </li>
            <li class="nav-item divider"></li>
            <li class="nav-item">
              <a class="nav-link" data-hover="알람" id = "alarm-button">
                <span>알람</span>
              </a>
              <span class="dot unread"></span>
            </li>
            <li class="nav-item divider"></li>
            <li class="nav-item profile-icon">
              <a class="nav-link" href="" data-hover="내 프로필">
                <span>내 프로필</span>
              </a>
            </li>
          </ul>
          <ul class="nav-link-wrapper logout me-auto ">
            <li class="nav-item">
              <a class="nav-link" href="" data-hover="로그인">
                <span>로그인</span>
              </a>
            </li>
            <li class="nav-item divider"></li>
            <li class="nav-item profile-icon">
              <a class="nav-link" href="" data-hover="회원가입">
                <span>회원가입</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <ul class="navbar-nav navbar-filter me-auto">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle " data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true"
            aria-expanded="false">지역을 선택하세요</a>
          <div class="dropdown-menu  ">
            <a class="dropdown-item" href="#">서울특별시</a>
            <a class="dropdown-item" href="#">부산광역시</a>
            <a class="dropdown-item" href="#">대구광역시</a>
            <a class="dropdown-item" href="#">인천광역시</a>
            <a class="dropdown-item" href="#">광주광역시</a>
            <a class="dropdown-item" href="#">대전광역시</a>
            <a class="dropdown-item" href="#">울산광역시</a>
            <a class="dropdown-item" href="#">경기도</a>
            <a class="dropdown-item" href="#">강원도</a>
            <a class="dropdown-item" href="#">충청북도</a>
            <a class="dropdown-item" href="#">충청남도</a>
            <a class="dropdown-item" href="#">전라북도</a>
            <a class="dropdown-item" href="#">전라남도</a>
            <a class="dropdown-item" href="#">경상북도</a>
            <a class="dropdown-item" href="#">경상남도</a>
            <a class="dropdown-item" href="#">제주특별자치도</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">지역을 선택하세요</a>
          </div>
        </li>
        <li class="nav-item dropdown category">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true"
            aria-expanded="false">카테고리를 선택하세요</a>
          <div class="dropdown-menu">
            <div class="dropdown-item-wrapper category">
              <div class="dropdown-item category" data-category-title="축구">
                <img style="width: 25px;" src="./assets/category/icons/1.png" alt="">
                <span>아웃도어/여행</span>
              </div>
              <div class="dropdown-item category">
                <img style="width: 25px;" src="./assets/category/icons/2.png" alt="">
                <span>운동/스포츠</span>
              </div>
              <div class="dropdown-item category">
                <img style="width: 25px;" src="./assets/category/icons/3.png" alt="">
                <span>인문학/책/글</span>
              </div>
              <div class="dropdown-item category">
                <img style="width: 25px;" src="./assets/category/icons/4.png" alt="">
                <span>업종/직무</span>
              </div>
              <div class="dropdown-item category">
                <img style="width: 25px;" src="./assets/category/icons/5.png" alt="">
                <span>외국/언어</span>
              </div>
              <div class="dropdown-item category">
                <img style="width: 25px;" src="./assets/category/icons/6.png" alt="">
                <span>문화/공연/축제</span>
              </div>
              <div class="dropdown-item category">
                <img style="width: 25px;" src="./assets/category/icons/7.png" alt="">
                <span>음악/악기</span>
              </div>
              <div class="dropdown-item category">
                <img style="width: 25px;" src="./assets/category/icons/8.png" alt="">
                <span>패션/뷰티</span>
              </div>
              <div class="dropdown-item category">
                <img style="width: 25px;" src="./assets/category/icons/9.png" alt="">
                <span>공예/만들기</span>
              </div>
              <div class="dropdown-item category">
                <img style="width: 25px;" src="./assets/category/icons/10.png" alt="">
                <span>댄스/무용</span>
              </div>
              <div class="dropdown-item category">
                <img style="width: 25px;" src="./assets/category/icons/11.png" alt="">
                <span>봉사활동</span>
              </div>
              <div class="dropdown-item category">
                <img style="width: 25px;" src="./assets/category/icons/12.png" alt="">
                <span>사교/인맥</span>
              </div>
              <div class="dropdown-item category">
                <img style="width: 25px;" src="./assets/category/icons/13.png" alt="">
                <span>차/오토바이</span>
              </div>
              <div class="dropdown-item category">
                <img style="width: 25px;" src="./assets/category/icons/14.png" alt="">
                <span>사진/영상</span>
              </div>
              <div class="dropdown-item category">
                <img style="width: 25px;" src="./assets/category/icons/15.png" alt="">
                <span>야구관람</span>
              </div>
              <div class="dropdown-item category">
                <img style="width: 25px;" src="./assets/category/icons/16.png" alt="">
                <span>게임/오락</span>
              </div>
              <div class="dropdown-item category">
                <img style="width: 25px;" src="./assets/category/icons/17.png" alt="">
                <span>요리/제조</span>
              </div>
              <div class="dropdown-item category">
                <img style="width: 25px;" src="./assets/category/icons/18.png" alt="">
                <span>반려동물</span>
              </div>
              <div class="dropdown-item category">
                <img style="width: 25px;" src="./assets/category/icons/19.png" alt="">
                <span>자유주제</span>
              </div>
            </div>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">카테고리를 선택하세요</a>
          </div>
        </li>
        <form class="d-flex">
          <input class="form-control me-sm-2" type="search" placeholder="Search" />
          <button class="btn btn-primary my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </ul>
    </nav>
    <div class="search-container">
      <img class="search-container-logo" src="./assets/Logo/LogoIconChar-theme.svg" alt="">
      <div class="navbar-divider"></div>
      <input type="text" class="search-input" placeholder="Search">
      <button type="button" class="btn btn-outline-primary">Search</button>
    </div>
    <div class="card-wrapper">
      <div class="card mb-3" data-hostId="">
        <div class="card-thumbnail-wrapper">
          <img class="card-thumbnail" src="./assets/category/thumbnails/15.jpg" alt="카드 썸네일">
        </div>
        <div class="card-body">
          <p class="card-text">
            <strong> 강남 농민 백암 순대 팟 구해요</strong>
          </p>
        </div>
        <div class="card-body">
          <span class="badge rounded-pill bg-secondary">대전광역시</span>
          <span class="badge rounded-pill bg-info">유성구</span>
          <span class="badge rounded-pill bg-light">패션</span>
        </div>
        <div class="card-footer">
          <div class="user-host-meet-peoples">
            <img class="people-icon icon" src="./assets/Icons/peopleIcon.png" alt="User" />
            <span class="user-host-meet-peoples-status">27/68</span>
          </div>
          <span class="card-date text-muted">2월 18일</span>
        </div>
      </div>
      <div class="card mb-3" data-hostId="">
        <div class="card-thumbnail-wrapper">
          <img class="card-thumbnail" src="./assets/category/thumbnails/1.jpg" alt="카드 썸네일">
        </div>

        <div class="card-body">
          <p class="card-text">
            <strong> 강남 농민 백암 순대 팟 구해요</strong>
          </p>
        </div>
        <div class="card-body">
          <span class="badge rounded-pill bg-secondary">대전광역시</span>
          <span class="badge rounded-pill bg-info">유성구</span>
          <span class="badge rounded-pill bg-light">패션</span>
        </div>
        <div class="card-footer">
          <div class="user-host-meet-peoples">
            <img class="people-icon icon" src="./assets/Icons/peopleIcon.png" alt="User" />
            <span class="user-host-meet-peoples-status">27/68</span>
          </div>
          <span class="card-date text-muted">2월 18일</span>
        </div>
      </div>
      <div class="card mb-3" data-hostId="">
        <div class="card-thumbnail-wrapper">
          <img class="card-thumbnail" src="./assets/category/thumbnails/2.jpg" alt="카드 썸네일">
        </div>

        <div class="card-body">
          <p class="card-text">
            <strong> 강남 농민 백암 순대 팟 구해요</strong>
          </p>
        </div>
        <div class="card-body">
          <span class="badge rounded-pill bg-secondary">대전광역시</span>
          <span class="badge rounded-pill bg-info">유성구</span>
          <span class="badge rounded-pill bg-light">패션</span>
        </div>
        <div class="card-footer">
          <div class="user-host-meet-peoples">
            <img class="people-icon icon" src="./assets/Icons/peopleIcon.png" alt="User" />
            <span class="user-host-meet-peoples-status">27/68</span>
          </div>
          <span class="card-date text-muted">2월 18일</span>
        </div>
      </div>
      <div class="card mb-3" data-hostId="">
        <div class="card-thumbnail-wrapper">
          <img class="card-thumbnail" src="./assets/category/thumbnails/10.jpg" alt="카드 썸네일">
        </div>

        <div class="card-body">
          <p class="card-text">
            <strong> 강남 농민 백암 순대 팟 구해요</strong>
          </p>
        </div>
        <div class="card-body">
          <span class="badge rounded-pill bg-secondary">대전광역시</span>
          <span class="badge rounded-pill bg-info">유성구</span>
          <span class="badge rounded-pill bg-light">패션</span>
        </div>
        <div class="card-footer">
          <div class="user-host-meet-peoples">
            <img class="people-icon icon" src="./assets/Icons/peopleIcon.png" alt="User" />
            <span class="user-host-meet-peoples-status">27/68</span>
          </div>
          <span class="card-date text-muted">2월 18일</span>
        </div>
      </div>
      <div class="card mb-3" data-hostId="">
        <div class="card-thumbnail-wrapper">
          <img class="card-thumbnail" src="./assets/category/thumbnails/14.jpg" alt="카드 썸네일">
        </div>

        <div class="card-body">
          <p class="card-text">
            <strong> 강남 농민 백암 순대 팟 구해요 다같이 모여서 식사합시다</strong>
          </p>
        </div>
        <div class="card-body">
          <span class="badge rounded-pill bg-secondary">대전광역시</span>
          <span class="badge rounded-pill bg-info">유성구</span>
          <span class="badge rounded-pill bg-light">패션</span>
        </div>
        <div class="card-footer">
          <div class="user-host-meet-peoples">
            <img class="people-icon icon" src="./assets/Icons/peopleIcon.png" alt="User" />
            <span class="user-host-meet-peoples-status">27/68</span>
          </div>
          <span class="card-date text-muted">2월 18일</span>
        </div>
      </div>
      <div class="card mb-3" data-hostId="">
        <div class="card-thumbnail-wrapper">
          <img class="card-thumbnail" src="./assets/category/thumbnails/14.jpg" alt="카드 썸네일">
        </div>

        <div class="card-body">
          <p class="card-text">
            <strong> 강남 농민 백암 순대 팟 구해요 다같이 모여서 식사합시다</strong>
          </p>
        </div>
        <div class="card-body">
          <span class="badge rounded-pill bg-secondary">대전광역시</span>
          <span class="badge rounded-pill bg-info">유성구</span>
          <span class="badge rounded-pill bg-light">패션</span>
        </div>
        <div class="card-footer">
          <div class="user-host-meet-peoples">
            <img class="people-icon icon" src="./assets/Icons/peopleIcon.png" alt="User" />
            <span class="user-host-meet-peoples-status">27/68</span>
          </div>
          <span class="card-date text-muted">2월 18일</span>
        </div>
      </div>
      <div class="card mb-3" data-hostId="">
        <div class="card-thumbnail-wrapper">
          <img class="card-thumbnail" src="./assets/category/thumbnails/14.jpg" alt="카드 썸네일">
        </div>

        <div class="card-body">
          <p class="card-text">
            <strong> 강남 농민 백암 순대 팟 구해요 다같이 모여서 식사합시다</strong>
          </p>
        </div>
        <div class="card-body">
          <span class="badge rounded-pill bg-secondary">대전광역시</span>
          <span class="badge rounded-pill bg-info">유성구</span>
          <span class="badge rounded-pill bg-light">패션</span>
        </div>
        <div class="card-footer">
          <div class="user-host-meet-peoples">
            <img class="people-icon icon" src="./assets/Icons/peopleIcon.png" alt="User" />
            <span class="user-host-meet-peoples-status">27/68</span>
          </div>
          <span class="card-date text-muted">2월 18일</span>
        </div>
      </div>
      <div class="card mb-3" data-hostId="">
        <div class="card-thumbnail-wrapper">
          <img class="card-thumbnail" src="./assets/category/thumbnails/14.jpg" alt="카드 썸네일">
        </div>

        <div class="card-body">
          <p class="card-text">
            <strong> 강남 농민 백암 순대 팟 구해요 다같이 모여서 식사합시다</strong>
          </p>
        </div>
        <div class="card-body">
          <span class="badge rounded-pill bg-secondary">대전광역시</span>
          <span class="badge rounded-pill bg-info">유성구</span>
          <span class="badge rounded-pill bg-light">패션</span>
        </div>
        <div class="card-footer">
          <div class="user-host-meet-peoples">
            <img class="people-icon icon" src="./assets/Icons/peopleIcon.png" alt="User" />
            <span class="user-host-meet-peoples-status">27/68</span>
          </div>
          <span class="card-date text-muted">2월 18일</span>
        </div>
      </div>
      <div class="card mb-3" data-hostId="">
        <div class="card-thumbnail-wrapper">
          <img class="card-thumbnail" src="./assets/category/thumbnails/14.jpg" alt="카드 썸네일">
        </div>

        <div class="card-body">
          <p class="card-text">
            <strong> 강남 농민 백암 순대 팟 구해요 다같이 모여서 식사합시다</strong>
          </p>
        </div>
        <div class="card-body">
          <span class="badge rounded-pill bg-secondary">대전광역시</span>
          <span class="badge rounded-pill bg-info">유성구</span>
          <span class="badge rounded-pill bg-light">패션</span>
        </div>
        <div class="card-footer">
          <div class="user-host-meet-peoples">
            <img class="people-icon icon" src="./assets/Icons/peopleIcon.png" alt="User" />
            <span class="user-host-meet-peoples-status">27/68</span>
          </div>
          <span class="card-date text-muted">2월 18일</span>
        </div>
      </div>
      <div class="card mb-3" data-hostId="">
        <div class="card-thumbnail-wrapper">
          <img class="card-thumbnail" src="./assets/category/thumbnails/14.jpg" alt="카드 썸네일">
        </div>

        <div class="card-body">
          <p class="card-text">
            <strong> 강남 농민 백암 순대 팟 구해요 다같이 모여서 식사합시다</strong>
          </p>
        </div>
        <div class="card-body">
          <span class="badge rounded-pill bg-secondary">대전광역시</span>
          <span class="badge rounded-pill bg-info">유성구</span>
          <span class="badge rounded-pill bg-light">패션</span>
        </div>
        <div class="card-footer">
          <div class="user-host-meet-peoples">
            <img class="people-icon icon" src="./assets/Icons/peopleIcon.png" alt="User" />
            <span class="user-host-meet-peoples-status">27/68</span>
          </div>
          <span class="card-date text-muted">2월 18일</span>
        </div>
      </div>
      <div class="card mb-3" data-hostId="">
        <div class="card-thumbnail-wrapper">
          <img class="card-thumbnail" src="./assets/category/thumbnails/14.jpg" alt="카드 썸네일">
        </div>

        <div class="card-body">
          <p class="card-text">
            <strong> 강남 농민 백암 순대 팟 구해요 다같이 모여서 식사합시다</strong>
          </p>
        </div>
        <div class="card-body">
          <span class="badge rounded-pill bg-secondary">대전광역시</span>
          <span class="badge rounded-pill bg-info">유성구</span>
          <span class="badge rounded-pill bg-light">패션</span>
        </div>
        <div class="card-footer">
          <div class="user-host-meet-peoples">
            <img class="people-icon icon" src="./assets/Icons/peopleIcon.png" alt="User" />
            <span class="user-host-meet-peoples-status">27/68</span>
          </div>
          <span class="card-date text-muted">2월 18일</span>
        </div>
      </div>
    </div>
  </div>
  <div id="modal-container">
    <div id="modal-background">
      <div class="modal">
        <div id="modal-close-icon">
          <img src="./assets/Icons/closeIcon.svg" alt="">
        </div>
        <div class="feed-main-wrapper">
          <div class="feed-main-info">
            <div id="map-api-readOnly"></div>
            <h3 class="address"><strong>서울시 서초구 강남대로61길 23</strong> </h3>
            <div class="info-detail">
              <div class="schedule-synthesis">
                <div class="schedule-time-badge badge bg-light">
                  <span class="schedule-date">6.10</span>
                  <span class="schedule-time">15:00</span>
                </div>
                <div class="schedule-info">
                  <div class="schedule-data">
                    <span class="badge rounded-pill bg-secondary">대전광역시 유성구</span>

                    <span class="badge rounded-pill bg-light">운동 / 스포츠</span>
                  </div>
                  <div class="peoples">
                    <img class="people-icon icon" src="./assets/Icons/peopleIcon.png" alt="User" />
                    <span class="peoples-status">27/68</span>
                  </div>
                </div>
                <button type="button" class="feed-info btn btn-primary btn-lg"><strong>참가하기</strong></button>
              </div>

            </div>

          </div>
          <div class="feed-main-divider"></div>
          <div class="feed-main-content">
            <div class="feed-main-content-scrollable">
              <div class="user-info container-md">
                <div class="user-profile">
                  <img class="user-profile-img" src="./assets/userProfileImg.jpeg" alt="User" />
                </div>
                <div class="container-sm">
                  <strong class="user-id">testId1234</strong>
                </div>
                <div class="space"></div>
                <div>
                  <div class="user-info-icon" tooltip="어릴 때부터 부모님으로부터 남을 배려하고 남의 말에 귀 기울일 줄
                  아는 태도를 배우며 자랐습니다. 부모님이 귀찮아하실 정도로 활달하고
                  말이 많았던 어린 시절의 저에게 늘 귀를 기울여주시고 친구처럼 대화를
                  해주셨습니다. 말은 하는 것도 중요하지만 듣는 것이 더욱 중요하다고
                  항상 생각해 왔습니다. 특히 대인관계에서 의사소통이 잘 되려면 제일
                  중요한 것이 상대방의 이야기를 잘 듣는 것에서부터 시작한다고
                  생각합니다. 그래서 저는 부모님이 저에게 그렇게 하셨듯이, 사람들을
                  대할 때는 상대방의 이야기를 잘 들으려고 항상 노력하였습니다. 그래서
                  친구들 사이에서 저는 고민상담사로 통합니다." flow="down">
                    <img class="user-info-icon icon" src="./assets/Icons/who.png" alt="User" />
                  </div>
                </div>

              </div>
              <div class="line"></div>
              <div class="feed-text-container">
                <h2 class="feed-title"><strong>급하게 말뚝박기 인원을 구합니다.</strong></h2>
                <p class="feed-content">다른거 필요 없이 맨몸만으로도 즐겁게 할 수 있는 놀이. 어느 지방(주로 대구)에서는 소타기 말타기라고도 한다. 초중고 모두에서 성행하며
                  대학생들도 가끔 MT 같은거 가면 남자들끼리
                  하기도 한다. 인원은 3:3, 4:4정도가 적정수준</p>
              </div>
              <div class="feed-comment-container">
                <div class="feed-comment">
                  <strong class="comment-user-id">asd</strong>
                  <span class="comment-content">별론듯</span>
                  <span class="comment-date text-muted">3분 전</span>
                </div>
                <div class="feed-comment">
                  <strong class="comment-user-id">qwerqwer213</strong>
                  <span class="comment-content">맛있게 잘 먹었습니다.맛있게 잘 먹었습니다.맛있게 잘 먹 었 습니다.</span>
                  <span class="comment-date text-muted">3분 전</span>
                </div>
                <div class="feed-comment">
                  <strong class="comment-user-id">qwerqwer213</strong>
                  <span class="comment-content">맛있게 잘 먹었습니다.맛있게 잘 먹었습니다.맛있게 잘 먹 었 습니다.</span>
                  <span class="comment-date text-muted">3분 전</span>
                </div>
                <div class="feed-comment">
                  <strong class="comment-user-id">qwerqwer213</strong>
                  <span class="comment-content">맛있게 잘 먹었습니다.맛있게 잘 먹었습니다.맛있게 잘 먹 었 습니다.</span>
                  <span class="comment-date text-muted">3분 전</span>
                </div>
                <div class="feed-comment">
                  <strong class="comment-user-id">qwerqwer213</strong>
                  <span class="comment-content">맛있게 잘 먹었습니다.맛있게 잘 먹었습니다.맛있게 잘 먹 었 습니다.</span>
                  <span class="comment-date text-muted">3분 전</span>
                </div>
                <div class="feed-comment">
                  <strong class="comment-user-id">qwerqwer213</strong>
                  <span class="comment-content">맛있게 잘 먹었습니다.맛있게 잘 먹었습니다.맛있게 잘 먹 었 습니다.</span>
                  <span class="comment-date text-muted">3분 전</span>
                </div>
                <div class="feed-comment">
                  <strong class="comment-user-id">qwerqwer213</strong>
                  <span class="comment-content">맛있게 잘 먹었습니다.맛있게 잘 먹었습니다.맛있게 잘 먹 었 습니다.</span>
                  <span class="comment-date text-muted">3분 전</span>
                </div>
                <div class="feed-comment">
                  <strong class="comment-user-id">qwerqwer213</strong>
                  <span class="comment-content">맛있게 잘 먹었습니다.맛있게 잘 먹었습니다.맛있게 잘 먹 었 습니다.</span>
                  <span class="comment-date text-muted">3분 전</span>
                </div>
                <div class="feed-comment">
                  <strong class="comment-user-id">qwerqwer213</strong>
                  <span class="comment-content">맛있게 잘 먹었습니다.맛있게 잘 먹었습니다.맛있게 잘 먹 었 습니다.</span>
                  <span class="comment-date text-muted">3분 전</span>
                </div>
                <div class="feed-comment">
                  <strong class="comment-user-id">qwerqwer213</strong>
                  <span class="comment-content">맛있게 잘 먹었습니다.맛있게 잘 먹었습니다.맛있게 잘 먹 었 습니다.</span>
                  <span class="comment-date text-muted">3분 전</span>
                </div>
                <div class="feed-comment">
                  <strong class="comment-user-id">santa</strong>
                  <span class="comment-content">별론듯</span>
                  <span class="comment-date text-muted">53분 전</span>
                </div>
              </div>
            </div>
            <div class="comment-input">
              <div class="form-group">
                <input class="form-control form-control-lg" type="text" placeholder="댓글 달기.." id="inputLarge">
              </div>
              <button type="button" class="btn btn-info disabled comment-send">게시</button>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
  
  <div class = "notice-container">
    <div class = "notice-background">
      <div class="notice-sidebar">
        <div class = "notice-sidebar-title"><h4><strong>알림</strong></h4></div>
        <div class = "notice-sidebar-main">
          <strong>제목#1</strong>에 참가하였습니다.
          <strong>제목#1</strong>에 참가를 취소하였습니다.
        </div>
      </div>
    </div>
  </div>
  <script type="text/javascript"
    src="//dapi.kakao.com/v2/maps/sdk.js?appkey=e025d257c750a5635c774ac925157964&libraries=services"></script>

    <!-- 사이드바 -->
  <script>
    function noticeSidebar(){
      const toggleBtn = document.querySelector('#alarm-button');
      const sidebar = document.querySelector('.notice-sidebar')
      const sidebarBackground = document.querySelector('.notice-background');

      toggleBtn.setAttribute('style','cursor : pointer');

      toggleBtn.addEventListener('click', function () {
        sidebarBackground.classList.toggle('is-closed');
      });
      sidebarBackground.addEventListener('click',(e)=>{
        if(e.target != sidebar){
          e.stopPropagation();
          sidebarBackground.classList.toggle('is-closed');
        }
      })
    }
    noticeSidebar()
    </script>
    <!-- 삭제버튼 -->
    <script>
    
  </script>
    `;
  };

  render();
}

export default Main;
