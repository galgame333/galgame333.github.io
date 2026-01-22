// 毒鸡汤数据集合
const toxicChickenSoups = [
  "今天的工作还没做完，但明天再说吧，反正老板也不着急。",
  "减肥这件事一直在路上，只是路途有点远。",
  "我以为努力就能成功，结果发现是成功在挑人。",
  "每天早上叫醒我的不是闹钟，而是贫穷。",
  "生活不止眼前的苟且，还有读不懂的诗和到不了的远方。",
  "我走过最长的路，是你的套路。",
  "别人在努力，你在问"为什么"。这就是差距。",
  "不要在该奋斗的年纪选择安逸，不然到老了就得努力还债。",
  "你以为你已经很努力了，其实只是感动了自己。",
  "明天开始减肥，今天先吃完这顿。",
  "早起毁一天，所以我要毁三天。",
  "收藏等于学会，学习等于收藏，我学会了。",
  "头发渐渐变少，知识却没增加多少。",
  "穷不是病，穷着穷着就习惯了。",
  "自律给我自由，但周末除外。",
  "今天的我，依然是那条咸鱼，只是翻了个身。",
  "工资不高，脾气倒是不小。",
  "理想是丰满的，现实是骨干的，我是躺平的。",
  "每天都在"再玩五分钟"中度过，这五分钟真长。",
  "间歇性踌躇满志，持续性混吃等死。",
  "不是我不想努力，是努力它不认识我。",
  "今天的目标：活着。已完成。",
  "成功是什么？我还没见过。",
  "人生就像一场戏，因为有缘才相聚。",
  "我用一秒钟的时间打开手机，用三小时的时间刷短视频。",
  "贫穷限制了我的想象力，但富有限制了我的行动力。",
  "每个人的花期不同，不必焦虑有人比你提前拥有。",
  "今天的我依旧很穷，唯一不变的是穷。",
  "生活将我反复捶打，结果我变得更Q弹了。",
  "不要问我为什么没钱，因为我从来没富有过。"
];

// 随机获取一句毒鸡汤
function getRandomSoup() {
  const randomIndex = Math.floor(Math.random() * toxicChickenSoups.length);
  return toxicChickenSoups[randomIndex];
}

// 显示抽签卡片
function showLotteryCard(element, event) {
  // 阻止事件冒泡
  if (event) {
    event.stopPropagation();
    event.preventDefault();
  }

  // 检查是否已存在抽签卡片，如果存在则移除
  const existingCard = document.getElementById('toxic-lottery-card');
  if (existingCard) {
    existingCard.remove();
  }

  // 创建抽签卡片
  const card = document.createElement('div');
  card.id = 'toxic-lottery-card';
  card.innerHTML = `
    <div class="lottery-card-content">
      <div class="lottery-card-header">
        <span>今日毒鸡汤</span>
        <button class="lottery-card-close">&times;</button>
      </div>
      <div class="lottery-card-body">
        <div class="lottery-icon">🍲</div>
        <p class="lottery-text">${getRandomSoup()}</p>
      </div>
      <div class="lottery-card-footer">
        <button class="lottery-btn">再来一碗</button>
      </div>
    </div>
  `;

  // 添加样式
  card.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.8);
    z-index: 10000;
    animation: lotteryPopIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  `;

  // 添加动画样式
  const style = document.createElement('style');
  style.textContent = `
    @keyframes lotteryPopIn {
      0% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.8);
      }
      100% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
      }
    }

    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      25% { transform: translateX(-5px) rotate(-2deg); }
      75% { transform: translateX(5px) rotate(2deg); }
    }

    .lottery-card-content {
      background: linear-gradient(135deg, #ff6b6b 0%, #ffa500 100%);
      border-radius: 20px;
      padding: 25px;
      width: 320px;
      max-width: 90vw;
      box-shadow: 0 20px 60px rgba(255, 107, 107, 0.4);
      color: white;
      position: relative;
      overflow: hidden;
    }

    .lottery-card-content::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
      animation: rotate 10s linear infinite;
    }

    @keyframes rotate {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    .lottery-card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      position: relative;
      z-index: 1;
    }

    .lottery-card-header span {
      font-size: 18px;
      font-weight: bold;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
    }

    .lottery-card-close {
      background: rgba(255,255,255,0.2);
      border: none;
      color: white;
      font-size: 24px;
      cursor: pointer;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
    }

    .lottery-card-close:hover {
      background: rgba(255,255,255,0.4);
      transform: rotate(90deg);
    }

    .lottery-card-body {
      text-align: center;
      position: relative;
      z-index: 1;
      min-height: 120px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .lottery-icon {
      font-size: 48px;
      margin-bottom: 15px;
      animation: bounce 2s ease-in-out infinite;
    }

    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }

    .lottery-text {
      font-size: 16px;
      line-height: 1.6;
      margin: 0;
      text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
    }

    .lottery-card-footer {
      margin-top: 20px;
      position: relative;
      z-index: 1;
    }

    .lottery-btn {
      background: rgba(255,255,255,0.95);
      color: #ff6b6b;
      border: none;
      padding: 12px 30px;
      border-radius: 25px;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    }

    .lottery-btn:hover {
      transform: scale(1.05);
      box-shadow: 0 6px 20px rgba(0,0,0,0.15);
    }

    .lottery-btn:active {
      transform: scale(0.95);
    }
  `;
  document.head.appendChild(style);

  // 添加到页面
  document.body.appendChild(card);

  // 添加遮罩层
  const mask = document.createElement('div');
  mask.id = 'toxic-lottery-mask';
  mask.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 9999;
    animation: fadeIn 0.3s ease forwards;
  `;

  const maskStyle = document.createElement('style');
  maskStyle.textContent = `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `;
  document.head.appendChild(maskStyle);
  document.body.appendChild(mask);

  // 关闭按钮事件
  const closeBtn = card.querySelector('.lottery-card-close');
  closeBtn.onclick = function() {
    closeLotteryCard();
  };

  // 遮罩层点击关闭
  mask.onclick = function() {
    closeLotteryCard();
  };

  // 再来一碗按钮事件
  const lotteryBtn = card.querySelector('.lottery-btn');
  lotteryBtn.onclick = function(e) {
    e.stopPropagation();
    // 更新文字内容，添加动画效果
    const textElement = card.querySelector('.lottery-text');
    textElement.style.animation = 'none';
    setTimeout(() => {
      textElement.textContent = getRandomSoup();
      textElement.style.animation = 'shake 0.5s ease-in-out';
    }, 50);
  };

  // ESC键关闭
  document.addEventListener('keydown', function escHandler(e) {
    if (e.key === 'Escape') {
      closeLotteryCard();
      document.removeEventListener('keydown', escHandler);
    }
  });
}

// 关闭抽签卡片
function closeLotteryCard() {
  const card = document.getElementById('toxic-lottery-card');
  const mask = document.getElementById('toxic-lottery-mask');

  if (card) {
    card.style.animation = 'lotteryPopOut 0.3s ease forwards';
    const style = document.createElement('style');
    style.textContent = `
      @keyframes lotteryPopOut {
        0% {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }
        100% {
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.8);
        }
      }
    `;
    document.head.appendChild(style);
    setTimeout(() => {
      card.remove();
    }, 300);
  }

  if (mask) {
    mask.style.animation = 'fadeOut 0.3s ease forwards';
    const maskStyle = document.createElement('style');
    maskStyle.textContent = `
      @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
      }
    `;
    document.head.appendChild(maskStyle);
    setTimeout(() => {
      mask.remove();
    }, 300);
  }
}
