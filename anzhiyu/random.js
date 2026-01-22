var posts=["2025/11/19/gemini-3-release/","2025/09/25/gpt4-subscription-guide/","2026/01/22/hello-world/","2025/10/28/sora2-android-release/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };