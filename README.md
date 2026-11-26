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

Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It prints nothing on success.
