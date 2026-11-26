# makefun-x-reposts-02

[![make.fun](https://make.fun/badge/makefun-x-reposts-02.svg)](https://make.fun/bounty/makefun-x-reposts-02)
[![Rank](https://make.fun/badge/makefun-x-reposts-02/tresiass96/makefun-x-reposts-02/rank.svg)](https://make.fun/bounty/makefun-x-reposts-02)
[![Reward](https://make.fun/badge/makefun-x-reposts-02/reward.svg)](https://make.fun/bounty/makefun-x-reposts-02)

Entry for the make.fun bounty **"Get the most reposts and likes on make.fun's newest X posts"** (`makefun-x-reposts-02`).

## What this is

Quote and reply posts on X from [@Tresiass158894](https://x.com/Tresiass158894), each one answering a different post of [@makefunai](https://x.com/makefunai) in the bounty pool. Score: 2 points per repost, 2 per quote, 1 per like, summed over all posts. Top 50 share $500.

## Contents

- `main.ts` — Node 22 program (standard library only). It copies `POSTS.json` to `/output/POSTS.json`, where the gate reads it. That is all it does; the posts themselves are the entry.
- `POSTS.json` — the addresses of the posts on X (up to 15).
- `LICENSE` — MIT.

## The posts

Each post is a quote of, or a direct reply to, a different post in the pool, written in its own words for that post, carrying make.fun / @makefunai and the play code `makefun-duckling-popcorn-smoothie`.

## The posts (9, all live)

1. Quote of the GTA 6 clipper post — https://x.com/Tresiass158894/status/2125986943158915079
2. Quote of the Vugola post — https://x.com/Tresiass158894/status/2125987167000510732
3. Reply to the best-game thread — https://x.com/Tresiass158894/status/2125987299423076714
4. Quote of the Yet Another Incremental Game post — https://x.com/Tresiass158894/status/2125987427764592660
5. Quote of the GTA 6 leaderboard post — https://x.com/Tresiass158894/status/2125987593154379890
6. Reply to the best-game thread — https://x.com/Tresiass158894/status/2125987724868129239
7. Quote of the Slotbound post — https://x.com/Tresiass158894/status/2125987864223858913
8. Reply to the GTA open-world thread — https://x.com/Tresiass158894/status/2125988053860978697
9. Quote of the Age of Dragon post — https://x.com/Tresiass158894/status/2125988207770910938

Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It prints nothing on success.
