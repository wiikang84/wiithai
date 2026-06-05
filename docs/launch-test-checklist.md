# wiiInfo Launch Test Checklist

Last updated: 2026-06-05

## Purpose

Use this checklist before public launch to find confusing wording, missing guide content, broken language flows, and mobile layout issues with real foreign users.

## Test Profile

- Minimum testers: 3 to 5 people
- Priority languages: English, Thai, Vietnamese
- Device mix: at least 2 Android phones, 1 iPhone if possible
- Network: test once on normal mobile data and once after adding the PWA to home screen

## Core Missions

1. Open `https://wiiinfo.web.app/?from=en&learn=ko`.
2. Switch country to Thai and learn Korean.
3. Search for a hospital or pharmacy phrase.
4. Search for a real estate or housing phrase.
5. Play one Korean phrase audio.
6. Save one phrase and refresh the page.
7. Open Letters mode and read the first Korean letter card.
8. Open Korea info guide and view one detail card.
9. Find the freshness line such as `Last checked: 2026-06`.
10. Send feedback from the bottom feedback panel.

## What To Observe

- Can the user understand what to press without explanation?
- Can the user find a phrase using their own language words?
- Does audio play quickly enough on mobile data?
- Does any card text overflow or feel cramped?
- Does the guide feel trustworthy enough for pre-launch use?
- Does the feedback link include current page, language, mode, and version?

## Pass Criteria

- No console errors in the tested user flow.
- No horizontal overflow on 390px mobile width.
- User can complete 8 of 10 missions without help.
- At least 2 testers submit feedback successfully.
- Any legal, visa, medical, real estate, or contract confusion is logged before broader promotion.

## Launch Notes

- Public promotion remains intentionally on hold until content confidence improves.
- Thai and Vietnamese phrase translations still need native review before heavy marketing.
- Static guide pages and sitemap expansion should be handled after the feedback loop is working.
