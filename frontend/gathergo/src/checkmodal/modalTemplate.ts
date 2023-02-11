const ifHOST = `    <div id="modal-background">
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
                <button type="button" class="gathering-delete btn btn-warning btn-lg"><strong>삭제하기</strong></button>
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
                <div style = "display : flex">
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
                  <img class="user-info-icon icon setting-icon" src="./assets/Icons/setting icon.png" alt="User" />
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
    `
const ifREGISTER = `    <div id="modal-background">
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
                <button type="button" class="register-cancel btn btn-warning btn-lg"><strong>취소하기</strong></button>
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
                <div style = "display : flex">
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
    `

const ifNOTLOGIN = `
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
                <button type="button" class="not-login btn btn-primary btn-lg"><strong>참가하기</strong></button>
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
                <div style = "display : flex">
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
    </div>`;

const ifNOTREGISTER = `
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
                <div style = "display : flex">
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
    </div>`;

function renderProperModal($modal : string){
    const div = document.createElement('div')
    div.innerHTML =$modal;
    const modalContainer = document.getElementById('modal-container')
    if(modalContainer != null)
        modalContainer.innerHTML = $modal;
}

renderProperModal(ifHOST);