export const CONSENT_KEY = "avantari_cookie_consent"
export const OPEN_SETTINGS_EVENT = "avantari:open-cookie-settings"
export const CONSENT_CHANGED_EVENT = "avantari:cookie-consent-changed"

export const getConsent = () => {
  if (typeof window === "undefined") return null
  try {
    return window.localStorage.getItem(CONSENT_KEY)
  } catch (e) {
    return null
  }
}

export const setConsent = value => {
  if (typeof window === "undefined") return
  try {
    window.localStorage.setItem(CONSENT_KEY, value)
  } catch (e) {
    // ignore (private mode / storage blocked)
  }
  window.dispatchEvent(
    new CustomEvent(CONSENT_CHANGED_EVENT, { detail: { value } })
  )
  if (value === "accepted") {
    loadAnalyticsScripts()
  }
}

export const loadAnalyticsScripts = () => {
  if (typeof window === "undefined" || window.__avantariAnalyticsLoaded) return
  window.__avantariAnalyticsLoaded = true

  const clarityScript = document.createElement("script")
  clarityScript.type = "text/javascript"
  clarityScript.innerHTML = `
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "qetqbmpda8");
  `
  document.head.appendChild(clarityScript)

  const gtagScript = document.createElement("script")
  gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-KGV6PFK7DM"
  gtagScript.async = true
  document.head.appendChild(gtagScript)

  const gtagConfig = document.createElement("script")
  gtagConfig.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-KGV6PFK7DM');
  `
  document.head.appendChild(gtagConfig)
}

export const openCookieSettings = () => {
  if (typeof window === "undefined") return
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT))
}
