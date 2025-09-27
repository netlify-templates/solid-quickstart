import { Suspense, type Component } from 'solid-js';
import { A, useLocation } from '@solidjs/router';

const App: Component = (props: { children: Element }) => {
  const location = useLocation();

  return (
    <div>
      <nav class="bg-slate-100 text-slate-900 px-4">
        <ul class="flex items-center">
          <li class="py-2 px-4">
            <A href="/" class="no-underline hover:underline">
              Home
            </A>
          </li>
          <li class="py-2 px-4">
            <A href="/about" class="no-underline hover:underline">
              About
            </A>
          </li>
          <li class="py-2 px-4">
            <A href="/error" class="no-underline hover:underline">
              Error
            </A>
          </li>

          <li class="text-sm flex items-center space-x-1 ml-auto">
            <span>URL:</span>
            <input
              class="w-75px p-1 bg-white text-sm rounded-lg"
              type="text"
              readOnly
              value={location.pathname}
            />
          </li>
        </ul>
      </nav>

      <main class="max-w-2xl mx-auto h-screen flex flex-col justify-center px-4">
        <h1 class="text-5xl mx-auto mb-8 text-slate-600 font-light">Welcome to my Solid app!</h1>
        <Suspense>{props.children}</Suspense>
      </main>
    </div>
  );
};

export default App;
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>PHONING</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    /* Genel Y2K tarzı */
    body {
      margin: 0;
      font-family: "Arial Black", sans-serif;
      background: linear-gradient(135deg, #ff00ff, #00ffff, #ffcc00);
      background-size: 400% 400%;
      animation: gradientMove 10s ease infinite;
      color: white;
    }
    @keyframes gradientMove {
      0% {background-position: 0% 50%;}
      50% {background-position: 100% 50%;}
      100% {background-position: 0% 50%;}
    }

    /* Giriş ekranı */
    #loginScreen {
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;
    }
    #loginScreen h1 {
      font-size: 60px;
      text-shadow: 0 0 15px #fff, 0 0 30px #ff00ff, 0 0 45px #00ffff;
      cursor: pointer;
      margin: 0;
    }

    /* Ana ekran */
    #appScreen {
      display: none;
    }
    nav {
      display: flex;
      justify-content: space-around;
      background: rgba(0,0,0,0.6);
      padding: 15px;
    }
    nav a {
      color: white;
      text-decoration: none;
      font-size: 20px;
      font-weight: bold;
      text-shadow: 0 0 10px #fff, 0 0 20px #ff00ff;
      cursor: pointer;
    }
    .page {
      display: none;
      padding: 20px;
    }
    .active {
      display: block;
    }

    /* Mesajlar */
    #messages {
      max-height: 60vh;
      overflow-y: auto;
      background: rgba(255,255,255,0.1);
      border: 2px solid white;
      border-radius: 10px;
      padding: 10px;
      margin-bottom: 15px;
    }
    .message {
      background: rgba(0,0,0,0.5);
      padding: 8px 12px;
      border-radius: 12px;
      margin: 5px 0;
      max-width: 70%;
      box-shadow: 0 0 10px #ff00ff;
    }
    #inputArea {
      display: flex;
      gap: 10px;
    }
    #msgInput {
      flex: 1;
      padding: 10px;
      border-radius: 20px;
      border: none;
      font-size: 16px;
    }
    button {
      background: #ff00ff;
      border: none;
      border-radius: 20px;
      padding: 10px 20px;
      color: white;
      font-weight: bold;
      cursor: pointer;
      box-shadow: 0 0 10px #00ffff, 0 0 20px #ffcc00;
    }

    /* Profil */
    #profile img {
      border-radius: 50%;
      border: 3px solid white;
      margin-bottom: 15px;
      width: 120px;
      height: 120px;
    }
  </style>
</head>
<body>

  <!-- Giriş ekranı -->
  <div id="loginScreen">
    <h1 onclick="enterApp()">PHONING</h1>
    <p style="margin-top:20px;">Tap to Enter</p>
  </div>

  <!-- Ana ekran -->
  <div id="appScreen">
    <nav>
      <a onclick="showPage('messagesPage')">Message</a>
      <a onclick="showPage('profile')">Profile</a>
    </nav>

    <!-- Message sayfası -->
    <div id="messagesPage" class="page active">
      <h2>Message</h2>
      <div id="messages"></div>
      <div id="inputArea">
        <input type="text" id="msgInput" placeholder="Write a message...">
        <button onclick="sendMessage()">Send</button>
      </div>
    </div>

    <!-- Profile sayfası -->
    <div id="profile" class="page">
      <h2>Profile</h2>
      <img src="https://via.placeholder.com/120" alt="Profile Picture">
      <p><b>Username:</b> Guest</p>
      <p><b>Status:</b> Y2K vibes ✨</p>
    </div>
  </div>

  <script>
    function enterApp() {
      document.getElementById('loginScreen').style.display = 'none';
      document.getElementById('appScreen').style.display = 'block';
    }

    function showPage(pageId) {
      document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
      document.getElementById(pageId).classList.add('active');
    }

    function sendMessage() {
      const input = document.getElementById('msgInput');
      const text = input.value.trim();
      if(text === "") return;

      const msgDiv = document.createElement('div');
      msgDiv.classList.add('message');
      msgDiv.innerText = text;
      document.getElementById('messages').appendChild(msgDiv);

      input.value = "";
      input.focus();
    }
  </script>
</body>
</html>
