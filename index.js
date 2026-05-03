// 번역 데이터
const translations = {
  en: {
    langName: "English (US)",
    mainText: "Add features to your chat<br>and make it more fun!",
    mainText2: "Includes various features like message leveling and automatic message deletion after a set time.",
    btnInvite: "Invite",
    btnFeatures: "See features",
    serverCount: "InfoChat is currently being used on approximately 100 servers.",
    feature1Title: "Detailed and Flexible Leveling Settings",
    feature1Desc: "You can easily set up the leveling system with a single command. It allows you to choose a channel for level-up notifications, and supports three languages: Korean, English, and Japanese, making it accessible for everyone. You can also disable leveling in specific channels or categories. Additionally, level-up notifications are sent in a clean image format for better readability.",
    feature2Title: "Timed Messages & Emoji Enlargement",
    feature2Desc: "Sometimes you may want messages in a specific channel to be automatically deleted after a certain period. This bot lets you set a deletion timer so messages are removed automatically. You can choose a duration from 1 minute up to 1 week, and also decide whether to keep a log after deletion. The emoji enlargement feature displays a bigger version of any emoji sent by users.",
    supportserver: "Support Server",
    discordserver: "Discord Server",
    footerDev: "Developer",
    footerTeam: "Team",
    footerPolicy: "Policies & Terms",
    footerPrivacy: "Privacy Policy",
    footerTerms: "Terms of Service"
  },
  ko: {
    langName: "한국어",
    mainText: "채팅에 기능을 더해<br>재미를 추가해보세요!",
    mainText2: "메시지 레벨링, 특정 시간 후 메시지 삭제 등 다양한 기능이 있어요.",
    btnInvite: "초대하기",
    btnFeatures: "기능 보기",
    serverCount: "현재 약 100개의 서버에서 InfoChat를 사용하고 있어요",
    feature1Title: "다양하고 세세한 레벨링 세팅",
    feature1Desc: "하나의 명령어로 레벨링 시스템을 간편하게 설정할 수 있어요. 레벨링 알림 채널 지정을 할 수 있고, 한국어 · 영어 · 일본어까지 총 3개의 언어를 지원해 누구나 편하게 사용할 수 있어요. 또한  특정 채널이나 카테고리에서 레벨링이 작동하지 않도록 설정할 수도 있어요. 그리고 레벨 시 깔끔한 이미지 형식으로 알림을 전송해 보기 간편해요.",
    feature2Title: "시간 메시지와 이모지 확대",
    feature2Desc: "특정 채널에서 작성하는 메시지가 특정 시간 후에 삭제되면 좋을 때가 있죠. 이 봇은 메시지 삭제 시간을 설정하여 그 시간 후에 메시지가 작동으로 삭제되게 도와줘요. 삭제될 시간을 1분에서 1주까지 설정할 수 있고, 삭제 후 로그를 남길지 선택할 수도 있어요. 그리고 이모지 확대 기능은 유저가 이모지를 보내면 해당 이모지를 확대하여 보여주는 기능이에요.",
    supportserver: "서포트 서버",
    discordserver: "디스코드 서버",
    footerDev: "개발자",
    footerTeam: "팀원",
    footerPolicy: "정책 및 약관",
    footerPrivacy: "개인정보 보호 정책",
    footerTerms: "서비스 약관"
  },
  ja: {
    langName: "日本語",
    mainText: "チャットに機能を追加して<br>もっと楽しくしましょう！",
    mainText2: "メッセージレベリングや一定時間後の自動削除など、さまざまな機能があります。",
    btnInvite: "招待",
    btnFeatures: "機能を見る",
    serverCount: "InfoChatは現在、約100のサーバーで使用されています。",
    feature1Title: "多機能で細かく設定できるレベリングシステム",
    feature1Desc: "1つのコマンドでレベリングシステムを簡単に設定できます。レベルアップ通知チャンネルの指定が可能で、韓国語・英語・日本語の3言語に対応しているため、誰でも快適に利用できます。また、特定のチャンネルやカテゴリーでレベリングを無効にすることも可能です。さらに、レベルアップ時には見やすい画像形式で通知が送信されます。",
    feature2Title: "時間指定メッセージと絵文字拡大",
    feature2Desc: "特定のチャンネルで送信されたメッセージを、一定時間後に自動削除したい場合があります。このボットでは削除時間を設定することで、メッセージを自動的に削除できます。削除時間は1分から1週間まで設定可能で、削除後にログを残すかどうかも選択できます。また、絵文字拡大機能では、ユーザーが送信した絵文字を大きく表示します。",
    supportserver: "Support Server",
    discordserver: "Discord Server",
    footerDev: "開発者",
    footerTeam: "チーム",
    footerPolicy: "ポリシーと規約",
    footerPrivacy: "プライバシーポリシー",
    footerTerms: "利用規約"
  }
};

// URL에서 언어 코드 가져오기
function getLangFromURL() {
  const path = window.location.pathname;
  const match = path.match(/\/(en|ko|ja)/);
  return match ? match[1] : 'en';
}

// 페이지 언어 업데이트
function updatePageLanguage(lang) {
  const t = translations[lang];
  
  document.getElementById('currentLang').textContent = t.langName + " ▼";
  document.getElementById('mainText').innerHTML = t.mainText;
  document.getElementById('mainText2').textContent = t.mainText2;
  document.getElementById('btnInvite').textContent = t.btnInvite;
  document.getElementById('btnFeatures').textContent = t.btnFeatures;
  document.getElementById('serverCount').textContent = t.serverCount;
  document.getElementById('feature1Title').textContent = t.feature1Title;
  document.getElementById('feature1Desc').textContent = t.feature1Desc;
  document.getElementById('feature2Title').textContent = t.feature2Title;
  document.getElementById('feature2Desc').textContent = t.feature2Desc;
  document.getElementById('support-server').textContent = t.supportserver;
  document.getElementById('discord-server').textContent = t.discordserver;
  document.getElementById('footerDev').textContent = t.footerDev;
  document.getElementById('footerTeam').textContent = t.footerTeam;
  document.getElementById('footerPolicy').textContent = t.footerPolicy;
  document.getElementById('footerPrivacy').textContent = t.footerPrivacy;
  document.getElementById('footerTerms').textContent = t.footerTerms;
  
  // HTML lang 속성 업데이트
  document.documentElement.lang = lang;
}

// 언어 변경
function changeLanguage(lang) {
  // 선택한 언어를 localStorage에 저장
  localStorage.setItem('preferred_language', lang);
  
  const currentPath = window.location.pathname;
  const basePath = currentPath.replace(/\/(en|ko|ja)/, '');
  const newPath = `/${lang}${basePath}`;
  
  window.location.href = newPath;
}

// 스크롤 함수
function scrollToServer() {
  const el = document.getElementById("server-section");
  const y = el.getBoundingClientRect().top + window.pageYOffset - 150;

  window.scrollTo({
    top: y,
    behavior: "smooth"
  });
}

// 언어 메뉴 토글
function toggleLanguageMenu() {
  const menu = document.getElementById("language-menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// 메뉴 외부 클릭시 닫기
document.addEventListener("click", function(e) {
  const langText = document.querySelector(".top-language-text");
  const menu = document.getElementById("language-menu");
  if (!langText.contains(e.target) && !menu.contains(e.target)) {
    menu.style.display = "none";
  }
});

// 페이지 로드시 언어 적용
document.addEventListener('DOMContentLoaded', function() {
  const currentLang = getLangFromURL();
  
  // 현재 언어를 localStorage에 저장 (마지막 방문 언어 기록)
  localStorage.setItem('preferred_language', currentLang);
  
  updatePageLanguage(currentLang);
  
  // 로고 링크 설정
  const logoLink = document.getElementById('logoLink');
  if (logoLink) {
    logoLink.href = `/${currentLang}/`;
  }
});




















// 페이지 로드 시 로그인 상태 확인
async function checkLoginStatus() {
  try {
    const response = await fetch('/api/user');
    const data = await response.json();
    
    if (data.loggedIn) {
      updateUIForLoggedIn(data.user);
    } else {
      updateUIForLoggedOut();
    }
  } catch (error) {
    console.error('Error checking login status:', error);
    updateUIForLoggedOut();
  }
}

// 로그인 상태일 때 UI 업데이트
function updateUIForLoggedIn(user) {
  const loginButton = document.getElementById('discord');
  const rightMenu = document.querySelector('.right-menu');
  
  // 로그인 버튼을 사용자 정보로 교체
  const userInfo = document.createElement('div');
  userInfo.className = 'user-info';
  userInfo.innerHTML = `
    <div class="user-dropdown">
      <img src="https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png" 
           alt="Avatar" 
           class="user-avatar"
           onclick="toggleUserMenu()">
      <div id="user-menu" class="user-menu" style="display: none;">
        <div class="user-menu-header">
          <img src="https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png" 
               alt="Avatar" 
               class="user-menu-avatar">
          <div>
            <p class="user-menu-name">${user.username}</p>
            <p class="user-menu-id">#${user.discriminator}</p>
          </div>
        </div>
        <div class="user-menu-divider"></div>
        <a href="/dashboard" class="user-menu-item">Dashboard</a>
        <a href="/logout" class="user-menu-item">Logout</a>
      </div>
    </div>
  `;
  
  loginButton.parentElement.replaceWith(userInfo);
}

// 로그아웃 상태일 때 UI 업데이트
function updateUIForLoggedOut() {
  // 기본 상태 유지
}

// 사용자 메뉴 토글
function toggleUserMenu() {
  const menu = document.getElementById('user-menu');
  menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
}

// 메뉴 외부 클릭 시 닫기
document.addEventListener('click', function(event) {
  const userMenu = document.getElementById('user-menu');
  const userAvatar = document.querySelector('.user-avatar');
  
  if (userMenu && !event.target.closest('.user-dropdown')) {
    userMenu.style.display = 'none';
  }
});

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', checkLoginStatus);