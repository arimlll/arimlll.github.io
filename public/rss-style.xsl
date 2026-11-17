<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="zh-CN">
      <head>
        <title><xsl:value-of select="/rss/channel/title"/> - RSS 订阅源</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
        <style type="text/css">
          :root {
            --color-bg: #f5f5f7;
            --color-text: #1d1d1f;
            --color-text-secondary: #6e6e73;
            --color-accent: #F8C822;
            --color-accent-text: #b38600;
            --color-card-bg: #ffffff;
            --color-border: #e0e0e0;
          }
          @media (prefers-color-scheme: dark) {
            :root {
              --color-bg: #1a1a2e;
              --color-text: #e0e0e0;
              --color-text-secondary: #8888a0;
              --color-accent: #F8C822;
              --color-accent-text: #F8C822;
              --color-card-bg: #16213e;
              --color-border: #2a2a4a;
            }
          }
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
            background-color: var(--color-bg);
            color: var(--color-text);
            line-height: 1.6;
            padding: 2rem 1rem;
          }
          .container {
            max-width: 760px;
            margin: 0 auto;
          }
          .banner {
            background-color: var(--color-card-bg);
            border: 1px solid var(--color-border);
            border-left: 4px solid var(--color-accent);
            border-radius: 12px;
            padding: 1.5rem;
            margin-bottom: 2rem;
            box-shadow: 0 2px 8px rgba(0,0,0,0.04);
          }
          .banner h1 {
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }
          .banner p {
            font-size: 0.95rem;
            color: var(--color-text-secondary);
            margin-bottom: 0.75rem;
          }
          .feed-url-box {
            display: flex;
            gap: 0.5rem;
            align-items: center;
            margin-top: 1rem;
            background: var(--color-bg);
            padding: 0.5rem 0.75rem;
            border-radius: 8px;
            border: 1px solid var(--color-border);
          }
          .feed-url {
            font-family: monospace;
            font-size: 0.85rem;
            color: var(--color-text);
            word-break: break-all;
            flex: 1;
          }
          .copy-btn, .home-btn {
            background-color: var(--color-accent);
            color: #1a1a1a;
            border: none;
            padding: 0.4rem 0.85rem;
            border-radius: 6px;
            font-size: 0.85rem;
            font-weight: 600;
            cursor: pointer;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 0.3rem;
            transition: opacity 0.2s;
            white-space: nowrap;
          }
          .copy-btn:hover, .home-btn:hover {
            opacity: 0.85;
          }
          .action-bar {
            display: flex;
            gap: 0.75rem;
            margin-top: 1rem;
            flex-wrap: wrap;
          }
          .items-header {
            font-size: 1.25rem;
            margin-bottom: 1rem;
            font-weight: 700;
          }
          .item {
            background-color: var(--color-card-bg);
            border: 1px solid var(--color-border);
            border-radius: 12px;
            padding: 1.25rem 1.5rem;
            margin-bottom: 1rem;
            transition: transform 0.2s, border-color 0.2s;
          }
          .item:hover {
            border-color: var(--color-accent);
            transform: translateY(-1px);
          }
          .item h2 {
            font-size: 1.15rem;
            margin-bottom: 0.5rem;
          }
          .item h2 a {
            color: var(--color-text);
            text-decoration: none;
          }
          .item h2 a:hover {
            color: var(--color-accent-text);
          }
          .item-desc {
            font-size: 0.9rem;
            color: var(--color-text-secondary);
            margin-bottom: 0.75rem;
            line-height: 1.5;
          }
          .item-meta {
            font-size: 0.8rem;
            color: var(--color-text-secondary);
            display: flex;
            gap: 1rem;
            align-items: center;
            flex-wrap: wrap;
          }
          .item-tag {
            background-color: var(--color-bg);
            padding: 0.15rem 0.5rem;
            border-radius: 4px;
            font-size: 0.75rem;
            border: 1px solid var(--color-border);
          }
          .toast {
            position: fixed;
            bottom: 2rem;
            left: 50%;
            transform: translateX(-50%) translateY(100px);
            background: #1d1d1f;
            color: #ffffff;
            padding: 0.6rem 1.2rem;
            border-radius: 8px;
            font-size: 0.85rem;
            opacity: 0;
            transition: all 0.3s ease;
            pointer-events: none;
            z-index: 100;
          }
          .toast.show {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="banner">
            <h1>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #F8C822;">
                <path d="M4 11a9 9 0 0 1 9 9"></path>
                <path d="M4 4a16 16 0 0 1 16 16"></path>
                <circle cx="5" cy="19" r="1"></circle>
              </svg>
              <xsl:value-of select="/rss/channel/title"/>
            </h1>
            <p><xsl:value-of select="/rss/channel/description"/></p>
            <p>这是一个 RSS 订阅源（RSS Feed）。您可以将此地址复制到您的 RSS 阅读器（如 NetNewsWire, Follow, Feedly, Reeder, Inoreader 等）中订阅本博客。</p>
            
            <div class="feed-url-box">
              <span class="feed-url" id="feed-url"><xsl:value-of select="/rss/channel/link"/>rss.xml</span>
              <button class="copy-btn" id="copy-btn" onclick="copyFeedUrl()">复制订阅链接</button>
            </div>

            <div class="action-bar">
              <a class="home-btn" href="{/rss/channel/link}">访问博客首页 &rarr;</a>
            </div>
          </div>

          <h2 class="items-header">近期文章预览</h2>

          <xsl:for-each select="/rss/channel/item">
            <article class="item">
              <h2>
                <a href="{link}" target="_blank">
                  <xsl:value-of select="title"/>
                </a>
              </h2>
              <p class="item-desc"><xsl:value-of select="description"/></p>
              <div class="item-meta">
                <time><xsl:value-of select="substring(pubDate, 1, 16)"/></time>
                <xsl:for-each select="category">
                  <span class="item-tag">#<xsl:value-of select="."/></span>
                </xsl:for-each>
              </div>
            </article>
          </xsl:for-each>
        </div>

        <div id="toast" class="toast">订阅地址已复制到剪贴板！</div>

        <script>
          function copyFeedUrl() {
            var url = document.getElementById('feed-url').textContent;
            navigator.clipboard.writeText(url).then(function() {
              var toast = document.getElementById('toast');
              toast.className = 'toast show';
              setTimeout(function() { toast.className = 'toast'; }, 2500);
            });
          }
        </script>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
