Bottom-right cookie consent card that slides/fades in ~600ms after first load; choice persists (in production, via localStorage).

```jsx
<CookieBanner visible={showBanner} onAccept={() => save('accepted')} onDecline={() => save('declined')} />
```
