# wiiInfo Project Memory

## Core Direction
- As of 2026-06-17, wiiInfo is expected to evolve from the current multilingual Korea-life/phrase-learning PWA into:
  - "nearby foreign grocery store finder for foreigners living in Korea"
  - plus store detail pages, saved stores, owner coupons, and later legal life-service partnerships such as remittance/mobile referrals.
- Do not treat the existing phrase-learning product as discarded. Reposition it as the "Life info / Learn" retention tab inside the broader foreigner living-support app.
- The first market wedge is not generic community. It is local offline discovery: foreign residents finding ethnic/international grocery stores near them.
- Initial target geography: Ulsan first, then Gyeongju if field validation supports it.
  - Ulsan: Beongae Market Asia street, Nam-gu/Dal-dong, Dong-gu Bang-eo/Jeonha, Ulju/Eonyang/Onsan.
  - Gyeongju: Seonggeon-dong, especially Central Asia/Koryoin-related stores.
- The defensible asset is not the map API. It is the store database and owner relationships collected by field sales.

## Current Code State
- Main app path: `C:\Users\fathe\dy-openwork\wiithai`
- Public URL: `https://wiiinfo.web.app`
- Firebase project: `wiigame-448c7`
- Hosting target: `hosting:wiiinfo`
- Current main app remains the 7-language phrase/Korea info app.
- As of 2026-06-17, the new grocery-store pivot is represented locally by `demo.html`.
  - `demo.html` is a separate demo page, not yet integrated into `index.html` / `app.js`.
  - It contains a Carrot-style mobile demo with Korean/Thai/Vietnamese UI, store list, category chips, list/map toggle, and store detail sheet.
  - Git status showed `demo.html` as untracked when this note was created.

## Source Materials
- Product/business research source folder: `C:\Users\fathe\dy-openwork\open`
- Before answering wiiInfo pivot/business questions, check:
  - `open\_INDEX_조사자료목록.md`
  - `open\_오늘작업_정리_2026-06-16.md`
  - `open\wiiInfo_피벗_6팀분석_2026-06-16.md`
  - `open\wiiInfo_제작설계_4팀_2026-06-16.md`
  - `open\외국인식료품점_시장조사_2026-06-16.md`
  - `open\식료품점연계_기술검토_2026-06-16.md`
  - `open\정부지원_요금제_검토_2026-06-16.md`
  - `open\파트너_브리핑_2026-06-16.md`
  - `open\파트너_브리핑_태국어_2026-06-16.md`
- These files are the controlling local context unless the user explicitly asks for fresh research.

## Business Summary
- Market premise:
  - Foreign residents in Korea are growing structurally.
  - Ethnic/international grocery stores are fragmented, small, and hard for new foreigners to discover.
  - There is no strong local-offline, non-Seoul-focused, multi-nationality store map plus owner-coupon platform.
- Competition:
  - Forpang/Shejang exists, but is more online-commerce/halal/metro oriented.
  - wiiInfo should avoid broad "foreigner community" competition and focus on local offline store discovery and owner relationships.
- Revenue view:
  - Store ads alone are small. Treat this as side-business scale at first.
  - More promising later revenue: store SaaS tools, coupon/regular-customer tools, and legal remittance/mobile affiliate partnerships.
  - Visa/admin agency work must not be performed directly unless legally qualified; keep it to information or professional referrals.

## Recommended Execution Order
1. Do not stop at mobile-demo polish and then go to stores. The user's intended sequence is to implement the basic and core app features first, then use that stronger product for mart/store sales.
2. First build the core MVP into the main app:
   - bottom tabs
   - nearby/store home
   - store list
   - category/nationality/search filters
   - store detail
   - saved stores
   - multilingual UI
   - real seed store data structure
   - map/route support
   - basic coupon display or coupon-ready structure
3. Then verify the app on real mobile/desktop browsers and deployed URL.
4. After the core features are working, visit foreign grocery marts/stores for sales and onboarding.
5. Use field feedback to improve owner-facing coupon/redeem tooling and store-management features.

## Product Guardrails
- Keep the first version free for both users and store owners.
- For owners, pitch "free, no commission, no terminal, we register it for you."
- The immediate strategy is product-first enough to show a credible working app before field sales. Still avoid unrelated community/social features before the store-discovery core is stable.
- Do not make this a generic SNS/community app in the first phase.
- Preserve existing wiiInfo assets: 7-language UI, phrase data, TTS, Korea info, PWA, analytics, and Firebase setup.
- When deploying, follow the existing version-bump rule:
  - `index.html` `?v=`
  - `app.js` `ASSET_VERSION`
  - `sw.js` `SW_VERSION`
