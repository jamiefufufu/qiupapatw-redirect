from urllib.parse import quote

# List of tuples: (source_path, destination_url)
redirect_data = [
    ("/blog/posts/手機隨身碟怎麼用？詳細教學與實用指南", "https://www.qiupapa.com/blog/posts/手機隨身碟怎麼用？詳細教學與實用指南"),
    ("/blog/posts/ios-使用者注意！救回-line-聊天記錄的終極指南", "https://www.qiupapa.com/blog/posts/ios-使用者注意！救回-line-聊天記錄的終極指南"),
    ("/blog/posts/小米掃地機器人水箱該如何維護", "https://www.qiupapa.com/blog/posts/小米掃地機器人水箱該如何維護"),
    ("/blog/posts/how-to-transfer-to-qiu-daddy-pocket-photo-album-mobile-flash-drive", "https://www.qiupapa.com/blog/posts/how-to-transfer-to-qiu-daddy-pocket-photo-album-mobile-flash-drive"),
    ("/blog/posts/手機照片備份到隨身碟：隨時隨地攜帶珍貴記憶", "https://www.qiupapa.com/blog/posts/手機照片備份到隨身碟：隨時隨地攜帶珍貴記憶"),
    ("/blog/posts/iphone-手機隨身碟怎麼選？使用教學與好用推薦", "https://www.qiupapa.com/blog/posts/iphone-手機隨身碟怎麼選？使用教學與好用推薦"),
    ("/blog/posts/小米掃地機器人濾網該如何維護", "https://www.qiupapa.com/blog/posts/小米掃地機器人濾網該如何維護"),
    ("/blog/posts/家用-nas-推薦與選購指南：哪款最適合你的需求？", "https://www.qiupapa.com/blog/posts/家用-nas-推薦與選購指南：哪款最適合你的需求？"),
    ("/blog/posts/小米掃地機器人主刷該如何維護", "https://www.qiupapa.com/blog/posts/小米掃地機器人主刷該如何維護"),
    ("/blog/posts/如何將手機照片備份到電腦？簡單步驟讓回憶永不遺失", "https://www.qiupapa.com/blog/posts/如何將手機照片備份到電腦？簡單步驟讓回憶永不遺失"),
    ("/blog/posts/硬碟外接盒是什麼？完整介紹與實用指南", "https://www.qiupapa.com/blog/posts/硬碟外接盒是什麼？完整介紹與實用指南"),
    ("/blog/posts/小米掃地機器人電池該如何維護", "https://www.qiupapa.com/blog/posts/小米掃地機器人電池該如何維護"),
    ("/blog/posts/android手機照片備份的最佳方法：google相簿與其他替代方案", "https://www.qiupapa.com/blog/posts/android手機照片備份的最佳方法：google相簿與其他替代方案"),
    ("/blog/posts/line備份全攻略：如何備份聊天記錄到電腦、iphone與雲端", "https://www.qiupapa.com/blog/posts/line備份全攻略：如何備份聊天記錄到電腦、iphone與雲端"),
    ("/blog/posts/手機資料遷移與備份完整教學：從舊設備到新手機的無痛過渡", "https://www.qiupapa.com/blog/posts/手機資料遷移與備份完整教學：從舊設備到新手機的無痛過渡"),
    ("/products/口袋相簿手機隨身碟", "https://www.qiupapa.com/products/口袋相簿手機隨身碟"),
    ("/blog/posts/最佳iphone備份與資料遷移工具推薦：哪一款適合你的需求？", "https://www.qiupapa.com/blog/posts/最佳iphone備份與資料遷移工具推薦：哪一款適合你的需求？"),
    ("/products/xiomi小米行動電源3-10000mah-type-c快充版-qc30", "https://www.qiupapa.com/products/xiomi小米行動電源3-10000mah-type-c快充版-qc30"),
    ("/blog/posts/數據存儲解決方案的選擇：nas與雲端存儲的比較", "https://www.qiupapa.com/blog/posts/數據存儲解決方案的選擇：nas與雲端存儲的比較"),
    ("/blog/posts/換手機不用怕！教你如何將line聊天記錄備份到新手機", "https://www.qiupapa.com/blog/posts/換手機不用怕！教你如何將line聊天記錄備份到新手機"),
    ("/pages/dyson吸塵器配件", "https://www.qiupapa.com/pages/dyson吸塵器配件"),
    ("/blog/posts/口袋打印機使用說明書", "https://www.qiupapa.com/blog/posts/口袋打印機使用說明書"),
    ("/blog/posts/家用nas入門指南：如何選擇最適合的儲存系統", "https://www.qiupapa.com/blog/posts/家用nas入門指南：如何選擇最適合的儲存系統"),
    ("/blog/posts/nas是什麼-nas網路儲存裝置你一定要知道的5大重點要素", "https://www.qiupapa.com/blog/posts/nas是什麼-nas網路儲存裝置你一定要知道的5大重點要素"),
    ("/blog/posts/什麼是手機單軸穩定器", "https://www.qiupapa.com/blog/posts/什麼是手機單軸穩定器"),
    ("/products/battery-stytj02ym", "https://www.qiupapa.com/products/battery-stytj02ym"),
    ("/products/網路儲存器nas", "https://www.qiupapa.com/products/網路儲存器nas"),
    ("/products/q18手機旋轉補光穩定器", "https://www.qiupapa.com/products/q18手機旋轉補光穩定器"),
    ("/blog/posts/iphone備份到電腦或隨身碟超簡單！5大方法讓你不再苦惱照片遺失", "https://www.qiupapa.com/blog/posts/iphone備份到電腦或隨身碟超簡單！5大方法讓你不再苦惱照片遺失"),
    ("/categories/e201-02", "https://www.qiupapa.com/categories/e201-02"),
    ("/products/【qiupapa】個人網路儲存器m1-家用雲儲存", "https://www.qiupapa.com/products/【qiupapa】個人網路儲存器m1-家用雲儲存"),
    ("/products/小眼q智能wifi監視器攝影機", "https://www.qiupapa.com/products/小眼q智能wifi監視器攝影機"),
    ("/pages/xiaomi-robot-vacuum-accessories", "https://www.qiupapa.com/pages/xiaomi-robot-vacuum-accessories"),
    ("/products/四合一手機隨身碟", "https://www.qiupapa.com/products/四合一手機隨身碟"),
    ("/products/微豆-網路wifi監視器-1080p", "https://www.qiupapa.com/products/微豆-網路wifi監視器-1080p"),
    ("/products/battery-sdjqr01rr-sdjqr02rr", "https://www.qiupapa.com/products/battery-sdjqr01rr-sdjqr02rr"),
    ("/products/指紋門鎖", "https://www.qiupapa.com/products/指紋門鎖"),
    ("/blog/posts/如何安裝-qiudrive-nas：硬體與軟體完整教學", "https://www.qiupapa.com/blog/posts/如何安裝-qiudrive-nas：硬體與軟體完整教學"),
    ("/blog/posts/解密戴森：选择正确配件的综合指南｜吸頭＋刷頭篇", "https://www.qiupapa.com/blog/posts/解密戴森：选择正确配件的综合指南｜吸頭＋刷頭篇"),
    ("/categories/電池", "https://www.qiupapa.com/categories/電池"),
    ("/categories/usams", "https://www.qiupapa.com/categories/usams"),
    ("/products/口袋打印影印機", "https://www.qiupapa.com/products/口袋打印影印機"),
    ("/products/hd-pinhole-secret-camera", "https://www.qiupapa.com/products/hd-pinhole-secret-camera"),
    ("/products/adata-威剛記憶卡", "https://www.qiupapa.com/products/adata-威剛記憶卡"),
    ("/products/xiaomi-accessories-279-lucky-bag-stytj02ym", "https://www.qiupapa.com/products/xiaomi-accessories-279-lucky-bag-stytj02ym"),
    ("/pages/小眼q智能監視器", "https://www.qiupapa.com/pages/小眼q智能監視器"),
    ("/categories/輪子", "https://www.qiupapa.com/categories/輪子")
]

# Generate middleware.js content
middleware_lines = [
    "import { NextResponse } from 'next/server';",
    "",
    "const redirects = new Map(["
]

# Add entries
for src, dst in redirect_data:
    encoded_src = quote(src)
    middleware_lines.append(f"  ['{encoded_src}', '{dst}'],")

middleware_lines.append("]);")
middleware_lines.append("")
middleware_lines.append("export function middleware(req) {")
middleware_lines.append("  const url = req.nextUrl.pathname;")
middleware_lines.append("  const redirectTo = redirects.get(url);")
middleware_lines.append("  if (redirectTo) {")
middleware_lines.append("    return NextResponse.redirect(redirectTo, 301);")
middleware_lines.append("  }")
middleware_lines.append("  return NextResponse.next();")
middleware_lines.append("}")

# Join to form complete JS
middleware_code = "\n".join(middleware_lines)

# Save as UTF-8 without BOM
output_path = "/mnt/data/middleware.js"
with open(output_path, "w", encoding="utf-8") as f:
    f.write(middleware_code)

output_path
