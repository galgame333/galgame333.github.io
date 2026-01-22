// 毒鸡汤数据
const poisonChickenSoup = [
  "你之所以喝鸡汤，是因为肉被人吃了。",
  "不是钱不好，而是你还不够好。",
  "如果你觉得自己不行，那是因为你确实不行。",
  "不要在该努力的年纪选择安逸，除非你想平庸一辈子。",
  "失败是成功之母，但有时候成功六亲不认。",
  "你的问题在于读书不多而想得太多。",
  "你竭尽全力才能看起来毫不费力。",
  "生活不仅有眼前的苟且，还有明天的苟且和后天的苟且。",
  "咸鱼翻身还是咸鱼，别想太多。",
  "努力不一定会成功，但不努力一定很舒服。",
  "如果你现在放弃，以后连放弃的机会都没有。",
  "你的酒量不行，是因为你的故事不够多。",
  "有些人出现在你的生命里，就是为了给你上一课。",
  "减肥不是喊口号，是要付出行动的。",
  "你以为自己很努力，其实在别人眼里只是感动自己。",
  "人生就像一场戏，因为有缘才相聚。",
  "有时候不努力一下，不知道什么叫绝望。",
  "你的存款，就像你的头发，越来越少。",
  "每天都在用六位数的密码，保护着两位数的存款。",
  "生活不止眼前的枸杞，还有远方的保温杯。",
  "曾经以为30岁很遥远，却发现18岁已经是很久以前的事了。",
  "你永远不知道你在我心里有多重要，直到有一天你变成了前任。",
  "减肥这件小事，我已经说了八百遍了。",
  "有些事情不是努力就有用，还要看运气和背景。",
  "今天不努力，明天努力找工作。",
  "你的竞争对手在看书，你的仇人在磨刀，你的闺蜜在减肥，隔壁老王在练腰。",
  "你以为自己很忙，其实只是在刷手机。",
  "咸鱼翻身还是咸鱼，但至少你翻了个身。",
  "人生就像打电话，不是你先挂，就是我先挂。",
  "如果你觉得生活很难，那说明你在走上坡路。",
  "我太难了，刚发工资还了花呗，就只剩饭钱了。",
  "曾经有一份真挚的爱情摆在我面前，我没有珍惜，直到失去才追悔莫及。",
  "你的善良必须有点锋芒，不然等于零。",
  "成年人的崩溃往往就在一瞬间。",
  "生活就是起起落落落落落落。",
  "你所有的怀才不遇，都是因为怀的才不够多。",
  "如果你没有对象，说明你的要求太高了。",
  "今天的我你爱理不理，明天的我你高攀不起。",
  "有些人表面上光鲜亮丽，其实袜子已经滑到脚底了。",
  "你的存款还没有我的花呗额度多。",
  "我在努力变好，希望你也是。",
  "别在该奋斗的年纪选择了安逸。",
  "你之所以穷，是因为你把时间都用在了省钱上。",
  "有些路，走过才知道是死胡同。",
  "你的时间很宝贵，别浪费在不值得的人和事上。",
  "当你觉得自己很惨的时候，看看镜子里的自己，是不是更惨。",
  "生活就像海洋，只有意志坚强的人才能到达彼岸。",
  "你今天的努力，是明天的勋章。",
  "不是所有的坚持都有结果，但总有一些坚持，能从冰封的土地里，培育出十万朵蔷薇。",
];

// 抽签卡点击事件
function drawPoisonChickenSoup() {
  const randomIndex = Math.floor(Math.random() * poisonChickenSoup.length);
  const soup = poisonChickenSoup[randomIndex];
  
  // 使用 sweetalert2 显示
  if (typeof Swal !== 'undefined') {
    Swal.fire({
      title: '今日毒鸡汤',
      text: soup,
      icon: 'info',
      confirmButtonText: '再来一碗',
      showCancelButton: true,
      cancelButtonText: '不了谢谢',
      background: '#f8f9fa',
      backdrop: `rgba(0,0,0,0.4)`,
      customClass: {
        title: 'poison-chicken-soup-title',
        content: 'poison-chicken-soup-content',
      }
    }).then((result) => {
      if (result.isConfirmed) {
        drawPoisonChickenSoup();
      }
    });
  } else {
    // 如果没有 sweetalert2，使用 alert
    alert(soup);
  }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
  const drawBtn = document.getElementById('poison-chicken-soup-btn');
  if (drawBtn) {
    drawBtn.addEventListener('click', drawPoisonChickenSoup);
  }
});
