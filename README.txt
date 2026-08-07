SIM TENNIS WEBSITE — QUICK SETUP

1. Open index.html in any browser to preview the website.

2. Replace these placeholders inside index.html:
   - YOUR PHONE OR EMAIL
   - +10000000000
   - you@example.com

3. Replace the fake QR placeholder:
   - Export your real Zelle QR code as an image named zelle-qr.png.
   - Put it in the same folder as index.html.
   - Replace:
       <div class="qr-placeholder"> ... </div>
     with:
       <img class="real-qr" src="zelle-qr.png" alt="Zelle QR code" />

   Then add this to styles.css:
       .real-qr {
         width: min(250px, 80%);
         border-radius: 22px;
         background: white;
         padding: 12px;
       }

4. To publish free:
   - GitHub Pages
   - Netlify
   - Cloudflare Pages

IMPORTANT:
This site does not process cards. It directs clients to pay through Zelle, so there is no website transaction fee. Your bank's normal Zelle terms still apply.
