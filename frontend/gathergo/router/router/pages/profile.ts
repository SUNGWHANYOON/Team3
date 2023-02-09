function Profile($container : HTMLBodyElement) {
  const container = $container;

  const setState = () => {
    render();
  };

  const render = () => {
    container.innerHTML = `
<div class="search-container">
            <img class="search-container-logo" src="../../assets/Logo/LogoIconChar-theme.svg" alt="">
            <ul class="nav-link-wrapper login me-auto show">
                <li class="nav-item">
                    <a class="nav-link" href="" data-hover="모임 만들기">
                    <span>모임 만들기</span>
                    </a>
                </li>
                <li class="nav-item divider"></li>
                <li class="nav-item">
                    <a class="nav-link" href="" data-hover="알람">
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
        </div>
        <div class = "profile-layout">
            <div class = "profile-sidebar">
                <div class = "mypage">
                    <span class="nav-link"><strong>마이페이지</strong></span>
                </div>
                <div class="tab">
                    <button class="tablinks" onclick="openTap(event, 'sidebar-body')">프로필</button>
                    <button class="tablinks" onclick="openTap(event, 'profile-fix')">프로필 편집</button>
                    <button class="tablinks" id = "logout" style = "color : red">로그아웃</button>
                </div>
            </div>
            <div class = "profile-main">
                <div class = "tabcontent profile" id="sidebar-body">
                    <h2 style = "margin : 1rem 0 2rem 2.8rem"><strong>프로필</strong></h2>
                    <div class="sidebar-user-info container-md">
                        <div class="user-profile">
                            <img class="user-profile-img" src="../../assets/Logo/mainLogo.png" alt="User" />
                        </div>
                        <div class="container-sm">
                            <strong class="user-id">testId1234</strong>
                            <span class="user-email">hyundai123@naver.com</span>
                        </div>
                        <div class="space"></div>
                    </div>
                    <div class="user-desc">
                        <div class="user-desc-header">
                            <h3><strong>한 줄 소개</strong></h3>
                        </div>
                        <small class="muted-text">어릴 때부터 부모님으로부터 남을 배려하고 남의 말에 귀 기울일 줄
                        아는 태도를 배우며 자랐습니다. 부모님이 귀찮아하실 정도로 활달하고
                        말이 많았던 어린 시절의 저에게 늘 귀를 기울여주시고 친구처럼 대화를
                        해주셨습니다. 말은 하는 것도 중요하지만 듣는 것이 더욱 중요하다고
                        항상 생각해 왔습니다. 특히 대인관계에서 의사소통이 잘 되려면 제일
                        중요한 것이 상대방의 이야기를 잘 듣는 것에서부터 시작한다고
                        생각합니다. 그래서 저는 부모님이 저에게 그렇게 하셨듯이, 사람들을
                        대할 때는 상대방의 이야기를 잘 들으려고 항상 노력하였습니다. 그래서
                        친구들 사이에서 저는 고민상담사로 통합니다.</small>
                    </div>
                    <div class="line"></div>
                        <div class="user-host-meet-list">
                            <h3 style = "padding : 1rem 0 0 0"><strong>내가 호스트한 만남</strong></h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th>만남 이름</th>
                                        <th>인원</th>
                                        <th>진행상태</th>
                                        <th>만남 일정</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>강남 농민 백암 순대에서 같이 점심식사를 할 사람을 구하고 있어요</strong></td>
                                        <td>27/68</td>
                                        <td>진행 중</td>
                                        <td>01/02/2023</td>
                                    </tr>
                                    <tr>
                                        <td><strong>양재역에서 축구 할 사람을 구하고 있어요</strong></td>
                                        <td>27/68</td>
                                        <td>완료</td>
                                        <td>03/12/2023</td>
                                    </tr>
                                    <tr>
                                        <td><strong>양재역에서 축구 할 사람을 구하고 있어요</strong></td>
                                        <td>27/68</td>
                                        <td>완료</td>
                                        <td>01/02/2022</td>
                                    </tr>
                                </tbody>
                            </table>
                    </div>
                    <div class="line"></div>
                        <div class="user-schedule-wrapper">
                            <h3 style = "padding-top : 1.5rem; padding-bottom : 1.5rem"><strong>만남 스케쥴</strong></h3>
                            <ul class="user-schedule-list">
                            <li class="user-schedule">
                                <div class="schedule-time-badge badge bg-light">
                                <span class="schedule-date">6.10</span>
                                <span class="schedule-time">15:00</span>
                                </div>
                                <div class="schedule-info">
                                <strong class="scheduel-title">강남 농민 백암 순대</strong>
                                <div class="schedule-data">
                                    <span class="badge rounded-pill bg-secondary">대전광역시 유성구</span>
                                    <span class="badge rounded-pill bg-light">점심 식사</span>
                                    <div class="user-host-meet-peoples">
                                    <img class="people-icon icon" src="../../assets/Icons/peopleIcon.png" alt="User" />
                                    <span class="user-host-meet-peoples-status">27/68</span>
                                    </div>
                                </div>
                                </div>
                            </li>
                            <li class="user-schedule">
                                <div class="schedule-time-badge badge bg-light">
                                    <span class="schedule-date">6.10</span>
                                    <span class="schedule-time">15:00</span>
                                </div>
                                <div class="schedule-info">
                                    <strong class="scheduel-title">강남 농민 백암 순대</strong>
                                <div class="schedule-data">
                                    <span class="badge rounded-pill bg-secondary">대전광역시 유성구</span>
                                    <span class="badge rounded-pill bg-light">점심 식사</span>
                                    <div class="user-host-meet-peoples">
                                        <img class="people-icon icon" src="../../assets/Icons/peopleIcon.png" alt="User" />
                                        <span class="user-host-meet-peoples-status">27/68</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>   
            </div>
            <div class = "tabcontent profile" id="profile-fix">
                <div class = "profile-userInfo">
                    <h2>
                        <strong>프로필 편집</strong>
                    </h2>
                </div>
                <div class = "profile-fix-main">
                    <div class = "profile-context">
                        <div class = "profile-img-name">
                            <div class = "image-button">
                                <img class = "profile-fix-image" id = "profile-fix-image" src = "../../assets/userProfileImg.jpeg" alt = "USER">
                                <div class = "image-upload">
                                    <input type = "file" id = "file-input" style = "margin : 0 0 0 2.5rem;" onchange="addEventProfileEdit(this)">
                                    <!-- <label for="file-input">
                                        <img class = "profile-fix-image-button" src = "../../assets/profileEdit.svg">
                                    </label>
                                    <input style="display:none" id = "file-input" type = "file"/> -->
                                </div>
                            </div>
                        </div>
                        <div class = "profile-textarea" id = "name">
                            <div class = "profile-textarea-text" style = "width : 6.25rem">이름</div>
                            <input type = "text" value = "이용자" class = "form-control" readonly>
                        </div>
                        <div class = "profile-textarea" id = "nickname">
                            <div class = "profile-textarea-text" style = "width : 6.25rem">닉네임</div>
                            <input type = "text" value = "UserUser1" class = "form-control">
                        </div>
                        <div class = "profile-textarea" id = "email">
                            <div class = "profile-textarea-text" style = "width : 6.25rem">이메일</div>
                            <input type = "text" value = "example1@example.com" class = "form-control" readonly>
                        </div>
                        <div class = "profile-textarea" id = "sentence">
                            <div class = "profile-textarea-text" style = "width : 6.25rem; height : 6.25rem;">
                                한 줄 소개
                            </div>
                            <textarea onkeydown="resize()" onkeyup="resize()" value = "hihi" class = "form-control" style = "height : 6.25rem"></textarea>
                        </div>
                        <div class = "profile-button">
                            <button type = "button" class = "btn btn-primary register-button">
                                변경내용 저장
                            </button>
                            <div style = "width : 5%"></div>
                            <button type = "button" id = "profileCancelButton" class = "btn btn-outline-danger register-button">
                                취소
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div id = "logout-modal">
                <div class = "modal-content">
                    <h4 style = "margin-top : 2rem">
                        <strong>로그아웃 하시겠습니까?</strong></h4> 
                    <div class = "modal-button">
                        <button type="button" class="btn btn-warning" id = "button-logout">로그아웃</button>
                        <div style="width : 2.5rem"></div>
                        <button type="button" class="btn btn-outline-danger" id = "button-cancel">취소</button>
                    </div>   
                </div>
            </div>
        </div>
    `;
  };

  render();
}

export default Profile;
