# Beach Bar Ordering App

Aug 2026 · Product specification · testing · prototyping · AI-assisted

A Greek beach club with 120 umbrellas, each turning over up to four times a day, took every order on foot. This is phone ordering from each umbrella: guests pick their language, tell the kitchen about allergies, and order from their sunbed. The bar sees each order live on its own screen.

I've been going to this club since 2012. Its name, logo and location are removed; "Seaside" is made up. The menu is the real one.

## The problem

Waiters walk between the sunbeds all day taking orders. Guests come from all over, and many don't read Greek. And the kitchen needs to know about allergies before it cooks, not after.

## What it does

**Guest page** (`index.html`)

- 6 languages: English, Greek, German, Turkish, Bulgarian, Romanian. Switch any time.
- Allergies first: the menu only opens after the guest picks from the 14 EU allergens, writes their own, or says "no allergies".
- Options per item: sugar, milk, ice, extra espresso shots, glass or bottle, cocktail strength, steak doneness, sides. Free-text special requests.
- A running tab against the umbrella's minimum spend: "53 € left to reach the minimum".
- "Clear my table", with a 10-minute timer and a reminder button.

**Bar screen** (`bar.html`)

- A ticket per order, with the umbrella number and the guest's allergies.
- The bar prices special requests, and the charge shows up on the guest's tab.
- Clear-table calls.

No payment inside the app. Guests pay their waiter at the end of the day, as they do now.

## Try it

The two pages only talk to each other when they run on the same local site. In this folder:

```
python3 -m http.server 8000
```

Then open two tabs:

- http://localhost:8000/index.html (the guest)
- http://localhost:8000/bar.html (the bar)

## How the two screens talk

Through `BroadcastChannel`, a browser feature that lets tabs of the same site send each other messages. No server and no database, which is fine for a demo. A real version needs a server, so many phones can reach one bar screen.

## What happened

I pitched it to the owners. Not adopted: it needed a new payment system linked to their existing POS, which wasn't in the budget.

## What I'd change

Payment first. When guests sit down, the app would hold the minimum spend on their card and charge the real total at the end, the way hotels and car rentals do. That needs a payment provider, and the bar no longer depends on guests settling up.

## My part

The idea, the spec, the testing and the pitch. I tested it against the real menu and sent back what didn't match.

HTML, CSS and JavaScript. No frameworks.

---

Bora Marasli · Information Technology in Mechanical Engineering, TU Berlin · [LinkedIn](https://www.linkedin.com/in/boramarasli) · [More projects](https://github.com/boramarasli)
