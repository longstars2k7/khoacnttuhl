
    const refreshBtn = document.getElementById('refresh-btn');
    const captchaImg = document.getElementById('captcha-img');

    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-msg');

    const captchaList = [

      {
        image: "22d5n.png",
        answer: "22d5n"
      },

      {
        image: "23mdg.png",
        answer: "23mdg"
      },

      {
        image: "23n88.png",
        answer: "23n88"
      },

      {
        image: "24f6w.png",
        answer: "24f6w"
      },

      {
        image: "24pew.png",
        answer: "24pew"
      },

      {
        image: "226md.png",
        answer: "226md"
      },

      {
        image: "243mm.png",
        answer: "243mm"
      },

      {
        image: "244e2.png",
        answer: "244e2"
      },

      {
        image: "245y5.png",
        answer: "245y5"
      },

      {
        image: "2356g.png",
        answer: "2356g"
      }

    ];

    let currentCaptcha = "";

    function generateCaptcha() {

      const randomIndex =
        Math.floor(Math.random() * captchaList.length);

      captchaImg.src =
        captchaList[randomIndex].image;

      currentCaptcha =
        captchaList[randomIndex].answer;

    }

    function showError(inputId, messageId, condition) {

      const input =
        document.getElementById(inputId);

      const message =
        document.getElementById(messageId);

      if (!condition) {

        input.classList.add('invalid');

        message.style.display = 'block';

        return false;

      } else {

        input.classList.remove('invalid');

        message.style.display = 'none';

        return true;
      }
    }

    function showToast(message, isSuccess = false) {

      toast.style.display = 'flex';

      toastMsg.textContent = message;

      toast.style.backgroundColor =
        isSuccess ? '#4CAF50' : '#f44336';

      toast.querySelector('.material-symbols-outlined').textContent =
        isSuccess ? 'check_circle' : 'error';

      setTimeout(() => {

        toast.style.display = 'none';

      }, 3000);
    }

    function login() {

      const username =
        document.getElementById('username').value.trim();

      const password =
        document.getElementById('password').value.trim();

      const captchaInput =
        document.getElementById('captcha-input').value.trim();

      const check1 =
        showError(
          'username',
          'username-error',
          username !== ""
        );

      const check2 =
        showError(
          'password',
          'password-error',
          password !== ""
        );

      const check3 =
        showError(
          'captcha-input',
          'captcha-error',
          captchaInput !== ""
        );

      if (!check1 || !check2 || !check3) return;

      const validUser =
        username === "admin" &&
        password === "Admin@2026";

      if (!validUser) {

        showToast(
          "Sai tên đăng nhập hoặc mật khẩu!"
        );

        return;
      }

      const validCaptcha =
        captchaInput.toLowerCase() ===
        currentCaptcha.toLowerCase();

      if (!validCaptcha) {

        showToast("Sai mã xác nhận!");

        generateCaptcha();

        return;
      }

      showToast(
        "Đăng nhập thành công!",
        true
      );

      setTimeout(() => {

        window.location.href = "../index.html";

      }, 1500);
    }

    refreshBtn.addEventListener(
      'click',
      generateCaptcha
    );

    window.addEventListener(
      'load',
      generateCaptcha
    );

    const fields = [

      {
        id: 'username',
        error: 'username-error'
      },

      {
        id: 'password',
        error: 'password-error'
      },

      {
        id: 'captcha-input',
        error: 'captcha-error'
      }

    ];

    fields.forEach(({ id, error }) => {

      const input =
        document.getElementById(id);

      input.addEventListener('blur', () => {

        showError(
          id,
          error,
          input.value.trim() !== ""
        );

      });

    });