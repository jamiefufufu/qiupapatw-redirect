import { NextResponse } from 'next/server';

const redirects = [
  { source: "/blog/posts/手機隨身碟怎麼用？詳細教學與實用指南", destination: "https://www.qiupapa.com/blog/posts/手機隨身碟怎麼用？詳細教學與實用指南" },
  { source: "/blog/posts/ios-使用者注意！救回-line-聊天記錄的終極指南", destination: "https://www.qiupapa.com/blog/posts/ios-使用者注意！救回-line-聊天記錄的終極指南" },
  { source: "/blog/posts/小米掃地機器人水箱該如何維護", destination: "https://www.qiupapa.com/blog/posts/小米掃地機器人水箱該如何維護" },
  { source: "/blog/posts/how-to-transfer-to-qiu-daddy-pocket-photo-album-mobile-flash-drive", destination: "https://www.qiupapa.com/blog/posts/how-to-transfer-to-qiu-daddy-pocket-photo-album-mobile-flash-drive" },
  { source: "/blog/posts/手機照片備份到隨身碟：隨時隨地攜帶珍貴記憶", destination: "https://www.qiupapa.com/blog/posts/手機照片備份到隨身碟：隨時隨地攜帶珍貴記憶" },
  { source: "/blog/posts/iphone-手機隨身碟怎麼選？使用教學與好用推薦", destination: "https://www.qiupapa.com/blog/posts/iphone-手機隨身碟怎麼選？使用教學與好用推薦" },
  { source: "/blog/posts/小米掃地機器人濾網該如何維護", destination: "https://www.qiupapa.com/blog/posts/小米掃地機器人濾網該如何維護" },
  { source: "/blog/posts/家用-nas-推薦與選購指南：哪款最適合你的需求？", destination: "https://www.qiupapa.com/blog/posts/家用-nas-推薦與選購指南：哪款最適合你的需求？" },
  { source: "/blog/posts/小米掃地機器人主刷該如何維護", destination: "https://www.qiupapa.com/blog/posts/小米掃地機器人主刷該如何維護" },
  { source: "/blog/posts/如何將手機照片備份到電腦？簡單步驟讓回憶永不遺失", destination: "https://www.qiupapa.com/blog/posts/如何將手機照片備份到電腦？簡單步驟讓回憶永不遺失" },
  { source: "/blog/posts/硬碟外接盒是什麼？完整介紹與實用指南", destination: "https://www.qiupapa.com/blog/posts/硬碟外接盒是什麼？完整介紹與實用指南" },
  { source: "/blog/posts/小米掃地機器人電池該如何維護", destination: "https://www.qiupapa.com/blog/posts/小米掃地機器人電池該如何維護" },
  { source: "/blog/posts/android手機照片備份的最佳方法：google相簿與其他替代方案", destination: "https://www.qiupapa.com/blog/posts/android手機照片備份的最佳方法：google相簿與其他替代方案" },
  { source: "/blog/posts/line備份全攻略：如何備份聊天記錄到電腦、iphone與雲端", destination: "https://www.qiupapa.com/blog/posts/line備份全攻略：如何備份聊天記錄到電腦、iphone與雲端" },
  { source: "/blog/posts/手機資料遷移與備份完整教學：從舊設備到新手機的無痛過渡", destination: "https://www.qiupapa.com/blog/posts/手機資料遷移與備份完整教學：從舊設備到新手機的無痛過渡" },
  { source: "/products/口袋相簿手機隨身碟", destination: "https://www.qiupapa.com/products/口袋相簿手機隨身碟" },
  { source: "/blog/posts/最佳iphone備份與資料遷移工具推薦：哪一款適合你的需求？", destination: "https://www.qiupapa.com/blog/posts/最佳iphone備份與資料遷移工具推薦：哪一款適合你的需求？" },
  { source: "/products/xiomi小米行動電源3-10000mah-type-c快充版-qc30", destination: "https://www.qiupapa.com/products/xiomi小米行動電源3-10000mah-type-c快充版-qc30" },
  { source: "/blog/posts/數據存儲解決方案的選擇：nas與雲端存儲的比較", destination: "https://www.qiupapa.com/blog/posts/數據存儲解決方案的選擇：nas與雲端存儲的比較" },
  { source: "/blog/posts/換手機不用怕！教你如何將line聊天記錄備份到新手機", destination: "https://www.qiupapa.com/blog/posts/換手機不用怕！教你如何將line聊天記錄備份到新手機" },
  { source: "/pages/dyson吸塵器配件", destination: "https://www.qiupapa.com/pages/dyson吸塵器配件" },
  { source: "/blog/posts/口袋打印機使用說明書", destination: "https://www.qiupapa.com/blog/posts/口袋打印機使用說明書" },
  { source: "/blog/posts/家用nas入門指南：如何選擇最適合的儲存系統", destination: "https://www.qiupapa.com/blog/posts/家用nas入門指南：如何選擇最適合的儲存系統" },
  { source: "/blog/posts/nas是什麼-nas網路儲存裝置你一定要知道的5大重點要素", destination: "https://www.qiupapa.com/blog/posts/nas是什麼-nas網路儲存裝置你一定要知道的5大重點要素" },
  { source: "/blog/posts/什麼是手機單軸穩定器", destination: "https://www.qiupapa.com/blog/posts/什麼是手機單軸穩定器" },
  { source: "/products/battery-stytj02ym", destination: "https://www.qiupapa.com/products/battery-stytj02ym" },
  { source: "/products/網路儲存器nas", destination: "https://www.qiupapa.com/products/網路儲存器nas" },
  { source: "/products/q18手機旋轉補光穩定器", destination: "https://www.qiupapa.com/products/q18手機旋轉補光穩定器" },
  { source: "/blog/posts/iphone備份到電腦或隨身碟超簡單！5大方法讓你不再苦惱照片遺失", destination: "https://www.qiupapa.com/blog/posts/iphone備份到電腦或隨身碟超簡單！5大方法讓你不再苦惱照片遺失" },
  { source: "/categories/e201-02", destination: "https://www.qiupapa.com/categories/e201-02" },
  { source: "/products/【qiupapa】個人網路儲存器m1-家用雲儲存", destination: "https://www.qiupapa.com/products/【qiupapa】個人網路儲存器m1-家用雲儲存" },
  { source: "/products/小眼q智能wifi監視器攝影機", destination: "https://www.qiupapa.com/products/小眼q智能wifi監視器攝影機" },
  { source: "/pages/xiaomi-robot-vacuum-accessories", destination: "https://www.qiupapa.com/pages/xiaomi-robot-vacuum-accessories" },
  { source: "/products/四合一手機隨身碟", destination: "https://www.qiupapa.com/products/四合一手機隨身碟" },
  { source: "/products/微豆-網路wifi監視器-1080p", destination: "https://www.qiupapa.com/products/微豆-網路wifi監視器-1080p" },
  { source: "/products/battery-sdjqr01rr-sdjqr02rr", destination: "https://www.qiupapa.com/products/battery-sdjqr01rr-sdjqr02rr" },
  { source: "/products/指紋門鎖", destination: "https://www.qiupapa.com/products/指紋門鎖" },
  { source: "/blog/posts/如何安裝-qiudrive-nas：硬體與軟體完整教學", destination: "https://www.qiupapa.com/blog/posts/如何安裝-qiudrive-nas：硬體與軟體完整教學" },
  { source: "/blog/posts/解密戴森：选择正确配件的综合指南｜吸頭＋刷頭篇", destination: "https://www.qiupapa.com/blog/posts/解密戴森：选择正确配件的综合指南｜吸頭＋刷頭篇" },
  { source: "/categories/電池", destination: "https://www.qiupapa.com/categories/電池" },
  { source: "/categories/usams", destination: "https://www.qiupapa.com/categories/usams" },
  { source: "/products/口袋打印影印機", destination: "https://www.qiupapa.com/products/口袋打印影印機" },
  { source: "/products/hd-pinhole-secret-camera", destination: "https://www.qiupapa.com/products/hd-pinhole-secret-camera" },
  { source: "/products/adata-威剛記憶卡", destination: "https://www.qiupapa.com/products/adata-威剛記憶卡" },
  { source: "/products/xiaomi-accessories-279-lucky-bag-stytj02ym", destination: "https://www.qiupapa.com/products/xiaomi-accessories-279-lucky-bag-stytj02ym" },
  { source: "/pages/小眼q智能監視器", destination: "https://www.qiupapa.com/pages/小眼q智能監視器" },
  { source: "/categories/輪子", destination: "https://www.qiupapa.com/categories/輪子" }
];

export function middleware(request) {
  const url = request.nextUrl.clone();
  const path = url.pathname;

  const match = redirects.find((r) => r.source === path);
  if (match) {
    url.href = match.destination;
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}
