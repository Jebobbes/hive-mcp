---
name: hive
description: Use when the user wants to work with their social media accounts through Hive — drafting or scheduling posts, checking how posts and accounts are performing, reading or replying in the inbox, managing contacts and the link-in-bio page, or setting up DM automations for Instagram, Messenger, WhatsApp and TikTok.
---

# Hive

Hive connects the user's own social accounts. Every tool acts inside one
workspace they already own, on channels they have already connected.

## Before anything else

Call `hive_list_channels` first. Tools take a channel id, never a platform
name, and a workspace can hold several accounts on the same network. If more
than one channel fits the request, ask which one rather than guessing.

## Nothing reaches an audience without the user

Reads and drafting complete straight away. Everything that would be seen by
other people — scheduling, rescheduling or cancelling a post, replying to a
comment, sending a direct message, turning an automation on — returns an
approval link instead of acting. Give the user that link. Do not describe the
post as scheduled or the message as sent until they confirm it in Hive.

There is no publish-immediately tool. If the user asks to post right now, draft
it and schedule the nearest slot, then hand over the approval link.

## Writing posts

Write in the user's voice, not in marketing copy. Check what they have posted
before with `hive_list_posts` when you are unsure of the tone.

One post can go to several channels at once, but each network has its own
limits — caption length, how many images, whether a link in the caption does
anything. `hive_validate_post` checks a draft against the channels it is
addressed to; run it before proposing a schedule, and fix what it flags rather
than shipping a caption that will be truncated.

Times are in the workspace timezone. `hive_best_times` returns proposed slots;
where a channel has no history yet those are a neutral starting schedule, not
evidence — say so rather than presenting them as the user's best times.

## Analytics

Answer with the numbers the tools return and the period they cover. Different
networks count a view differently, so do not add followers or impressions
across platforms into one total unless the user asks for a rough combined
figure, and say that it is rough.

When a number looks surprising, check the date range before explaining it.

## Automations

A DM automation is a trigger (a comment keyword, a story reply, a new follower)
and what happens next. Build it, show the user what it will do, and leave it
off; `hive_activate_automation` returns an approval link they confirm
themselves.

Keywords matter: a broad trigger like a single common word will fire on
conversations the user never meant to answer. Prefer something specific and
tell them what will and will not match.

## When something is missing

If a channel is not connected, a scope was not granted, or a plan limit is
reached, say that plainly and point at where in Hive to fix it. Do not
substitute an estimate for data the tools did not return.
