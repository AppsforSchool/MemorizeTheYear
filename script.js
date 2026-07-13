const firebaseConfig = {
  apiKey: "AIzaSyAqIiNj0N4WruPSOkWbeo5gxzsNyeMkuLo",
  authDomain: "appsforschool-study.firebaseapp.com",
  projectId: "appsforschool-study",
  storageBucket: "appsforschool-study.firebasestorage.app",
  messagingSenderId: "740735293440",
  appId: "1:740735293440:web:4e0f9e54da316ea0ec60e5"
};

// Firebase 初期化とサービス取得

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

let myUid = "";
let myUserId = "";
let meIsAdmin = false;
let isUser = false;

let drawerOverlay;
let accountSettingsDrawer;
let drawerCloseButton;
let accountSettingsButton;
let drawerUserId;
let drawerLogoutButton;
let drawerUsername;
let changeUsernameButton;
let newUsernameInput;
let usernameMessage;

let loginButton;
let headerLoading;

let myListArea;
let problemsArea;
document.addEventListener("DOMContentLoaded", () => {
  drawerOverlay = document.getElementById("drawerOverlay");
  accountSettingsDrawer = document.getElementById("accountSettingsDrawer");
  drawerCloseButton = document.getElementById("drawerCloseButton");
  accountSettingsButton = document.getElementById("setting-button");
  
  drawerUserId = document.getElementById("drawerUserId");
  drawerLogoutButton = document.getElementById("logout-button");
  drawerUsername = document.getElementById("drawerUsername");
  changeUsernameButton = document.getElementById("changeUsernameButton");
  newUsernameInput = document.getElementById("newUsernameInput");
  usernameMessage = document.getElementById("username-message");
  
  loginButton = document.getElementById("login-button");
  headerLoading = document.getElementById("header-loading");
  
  myListArea = document.getElementById("my-list-area");
  problemsArea = document.getElementById("problems-area");
  
  accountSettingsButton.addEventListener('click', openDrawer);
  drawerCloseButton.addEventListener('click', closeDrawer);
  drawerOverlay.addEventListener('click', closeDrawer);
  drawerLogoutButton.addEventListener('click', handleLogout);
  
  changeUsernameButton.addEventListener('click', handleChangeUsername);
  newUsernameInput.addEventListener('input', updateNameButtonState);
  
  
  loginButton.addEventListener("click", () => window.location.href = "./login.html");
});

function openDrawer() {
    accountSettingsDrawer.classList.add('is-open');
    drawerOverlay.classList.add('is-open');
}
function closeDrawer() {
  accountSettingsDrawer.classList.remove('is-open');
  drawerOverlay.classList.remove('is-open');
}

document.addEventListener("DOMContentLoaded", () => {
  // getChooseButtons();
  
  auth.onAuthStateChanged(async (user) => {
   try {
    if (user) {
      isUser = true;
      
      headerLoading.classList.add("hidden");
      loginButton.classList.add("hidden");
      accountSettingsButton.classList.remove("hidden");
      
      myUserId = user.email.split("@")[0];
      
      const userSnapshot = await db.collection("users_random").doc(myUserId).get();
      const userData = userSnapshot.data();

      if (userData.isActive) {
        drawerUserId.textContent = myUserId;
        drawerUsername.textContent = userData.name;
        if (userData.isAdmin) drawerUsername.classList.add("admin");
        myUid = userData.uid;
        
        myListArea.classList.remove("hidden");
      }
      
    } else {
      isUser = false;
      
      closeDrawer();
      
      headerLoading.classList.add("hidden");
      loginButton.classList.remove("hidden");
      accountSettingsButton.classList.add("hidden");
      
      myListArea.classList.add("hidden");
      
      drawerUserId.textContent = "取得中...";
      drawerUsername.textContent = "取得中...";
    }
   }
    catch (error) {
      console.log(error);
      alert(error);
    }
  });
});


const handleLogout = async () => {
  const isConfirmed = confirm("ログアウトしますか？");
  if (isConfirmed) {
    try {
    await auth.signOut(auth);
    console.log("ログアウトしました！");
    alert("ログアウトしました。");
  } catch (error) {
    console.error("ログアウトエラー:", error);
    alert("ログアウトに失敗しました。");
  }
  }
};

function updateNameButtonState() {
  if (changeUsernameButton) { // changeUsernameButtonが存在する場合のみ実行
    // 値があるかチェック
    usernameMessage.textContent = '';
    const hasNewName = newUsernameInput && newUsernameInput.value.trim() !== '';
    // 入力されていればボタンを有効、そうでなければ無効
    changeUsernameButton.disabled = !hasNewName;
  }
}
// --- 名前変更処理 ---
const handleChangeUsername = async () => {
  // ドロワー内の入力要素とメッセージ要素を取得
  const newUsername = newUsernameInput.value.trim();
  usernameMessage.textContent = ''; // メッセージをクリア

  if (changeUsernameButton) {
    changeUsernameButton.disabled = true;
    changeUsernameButton.textContent = '変更中...';
    usernameMessage.textContent = '';
  }
  try {
    const user = auth.currentUser;
    if (!user) throw new Error("ユーザーがログインしていません。");
    // Firestoreの users/{UID} ドキュメントを更新
    await db.collection('users_random').doc(myUserId).set({
    name: newUsername, // フィールド名も前のコードに合わせて 'name' にしています
  }, { merge: true });

    usernameMessage.style.color = 'green';
    usernameMessage.textContent = 'ユーザーネームが変更されました！';
    drawerUsername.textContent = newUsername; // 表示を更新
    newUsernameInput.value = ''; // 入力フィールドをクリア
    changeUsernameButton.disabled = true;

    // ヘッダーのアカウント設定ボタンの表示も更新
    //if (headerUsername) headerUsername.textContent = newUsername;

    } catch (error) {
      console.error("ユーザーネーム変更エラー:", error);
      usernameMessage.style.color = 'red';
      usernameMessage.textContent = 'ユーザーネームの変更に失敗しました。' + error.message;
      changeUsernameButton.disabled = false;
    } finally {
      if (changeUsernameButton) {
        changeUsernameButton.textContent = '名前を変更';
      }
    }
};



let chooseProblemsSelectionState = new Set();
let chooseMyListSelectionState = new Set();
let allQuestionCount = 0;
let problemsButtons, myListButtons, chooseButtons, allQuestion;
function getMyListButtons() {
  myListButtons = document.querySelectorAll(".my-list-button");
  
  myListButtons.forEach(button => {
    button.addEventListener("click", () => {
      button.classList.toggle("active");
      if (button.classList.contains("active")) {
        chooseMyListSelectionState.add(button.dataset.listId);
        
        // allQuestionCount += parseInt(button.dataset.count);
      } else {
        chooseMyListSelectionState.delete(button.dataset.listId);
        // allQuestionCount -= parseInt(button.dataset.count);
      }
      // allQuestion.textContent = allQuestionCount;
      checkStartButtonState();
      console.log(chooseMyListSelectionState);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  problemsButtons = document.querySelectorAll(".problems-button");
  
  problemsButtons.forEach(button => {
    button.addEventListener("click", () => {
      button.classList.toggle("active");
      if (button.classList.contains("active")) {
          chooseProblemsSelectionState.add(button.dataset.unit);
        
        // allQuestionCount += parseInt(button.dataset.count);
      } else {
          chooseProblemsSelectionState.delete(button.dataset.unit);
        // allQuestionCount -= parseInt(button.dataset.count);
      }
      // allQuestion.textContent = allQuestionCount;
      checkStartButtonState();
      console.log(chooseProblemsSelectionState);
    });
  });
});

let startButton;
function checkStartButtonState() {
  // const contentOK = contentSelectionState[0] !== contentSelectionState[1];
  const problemsOK = chooseProblemsSelectionState.size > 0;
  const myListOK = chooseMyListSelectionState.size > 0;
  
  if (problemsOK || myListOK) {
    startButton.disabled = false;
  } else {
    startButton.disabled = true;
  }
}
document.addEventListener('DOMContentLoaded', () => {
  startButton = document.getElementById('start-button');
  startButton.addEventListener('click', () => {
    startButton.disabled = true;
    startButton.textContent = "処理中...";
    const params = new URLSearchParams();
    chooseProblemsSelectionState.forEach((g) => {
      params.append("problem", g);
    });
    chooseMyListSelectionState.forEach((g) => {
      params.append("listId", g);
    });
    
    console.log(`card.html?${params.toString()}`);
    window.location.href = `card.html?${params.toString()}`;
    
    startButton.disabled = false;
    startButton.textContent = "スタート！";
  });
});