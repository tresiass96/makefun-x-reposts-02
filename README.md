# makefun-x-reposts-02

[![make.fun · makefun-x-reposts-02](https://make.fun/badge/makefun-x-reposts-02.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![rank](https://make.fun/badge/makefun-x-reposts-02/tresiass96/makefun-x-reposts-02/rank.svg)](https://make.fun/bounty/makefun-x-reposts-02/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![reward](https://make.fun/badge/makefun-x-reposts-02/tresiass96/makefun-x-reposts-02/reward.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)

Entry for the make.fun bounty **"Get the most reposts and likes on make.fun's newest X posts"** (`makefun-x-reposts-02`).

## What this is

Quote and reply posts on X from [@Tresiass158894](https://x.com/Tresiass158894), each one answering a different post of [@makefunai](https://x.com/makefunai) in the bounty pool. Score: 2 points per repost, 2 per quote, 1 per like, summed over all posts. Top 50 share $500.

## Contents

- `main.ts` — Node 22 program (standard library only). It copies `POSTS.json` to `/output/POSTS.json`, where the gate reads it. That is all it does; the posts themselves are the entry.
- `POSTS.json` — the addresses of the posts on X (up to 15).
- `LICENSE` — MIT.

## The posts

Each post is a quote of, or a direct reply to, a different post in the pool, written in its own words for that post, carrying make.fun / @makefunai and the play code `makefun-duckling-popcorn-smoothie`.

## The posts (12, all live)

1. Quote of the GTA 6 clipper post — https://x.com/Tresiass158894/status/2125986943158915079
2. Quote of the Vugola post — https://x.com/Tresiass158894/status/2125987167000510732
3. Quote of the Yet Another Incremental Game post — https://x.com/Tresiass158894/status/2125987427764592660
4. Quote of the GTA 6 leaderboard post — https://x.com/Tresiass158894/status/2125987593154379890
5. Quote of the Slotbound post — https://x.com/Tresiass158894/status/2125987864223858913
6. Quote of the Age of Dragon post — https://x.com/Tresiass158894/status/2125988207770910938
7. Quote of the Nov 27 leaderboard post — https://x.com/Tresiass158894/status/2126212038708101515
8. Quote of the game-jam winners post — https://x.com/Tresiass158894/status/2126358463504871703
9. Quote of the best-game post — https://x.com/Tresiass158894/status/2126358592714691066
10. Quote of the GTA open-world post — https://x.com/Tresiass158894/status/2126358808612237765
11. Quote of the best browser game winners post — https://x.com/Tresiass158894/status/2126359183310389727
12. Quote of the GeoSports post — https://x.com/Tresiass158894/status/2126359629013909595

Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It prints nothing on success.
