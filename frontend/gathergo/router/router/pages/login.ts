function login($container : HTMLBodyElement) {
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
    <div class="login-page" ng-app="">

    <div class="login-content login-content-signin" ng-hide="showSignIn">
        <div>
        <h2>로그인</h2>
        <form class="wrapper-box" role="form">
            <input type="id"
            ng-model="id"
            class="form-control"
            placeholder="ID"
            required>
            <input type="password"
            ng-model="password"
            class="form-control form-control-password"
            placeholder="Password"
            required >
            <!-- <div class="checkbox pull-left">
            <label>
                <input type="checkbox"> Remember me.
            </label>
            </div> -->
            <button type="submit" class="btn btn-submit btn-default pull-right">로그인</button>
        </form>
        </div>
    </div>

    <div class="login-content login-content-signup ng-hide" ng-show="showSignIn">
        <div>
        <h2>회원가입</h2>
        <form class="wrapper-box" role="form" ng-submit="register()">
            <input type="text"
            ng-model="id"
            class="form-control form-control-userid"
            placeholder="ID"
            required >
            <input type="text"
            ng-model="username"
            class="form-control form-control-username"
            placeholder="Username"
            required >
            <input type="password"
            ng-model="password"
            class="form-control form-control-password"
            placeholder="Password"
            required >
            <input type="email"
            ng-model="email"
            class="form-control form-control-email"
            placeholder="Email address"
            required >
            <!-- <div class="checkbox pull-left">
            <label>
                <input type="checkbox"> Remember me.
            </label>
            </div> -->
            <button type="submit" class="btn btn-submit btn-default pull-right">회원가입</button>
        </form>
        </div>
    </div>

    <div class="login-switcher">
        <div class="login-switcher-signin" ng-show="showSignIn">
        <h3>계정이 있으신가요?</h3>
        <button ng-click="showSignIn=false">로그인</button>
        </div>
        <div class="login-switcher-signup" ng-hide="showSignIn">
        <h3>계정이 없으신가요?</h3>
        <button ng-click="showSignIn=true">회원가입</button>
        </div>
    </div>

    </div>
    `;
  };

  render();
}

export default login;
