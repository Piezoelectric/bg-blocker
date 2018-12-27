# FR Coli Background Blocker

Web extension. When active, it replaces the coliseum backgrounds with a black screen. 

# Why? 

This makes it easier to read the enemy names. First, it removes the noisy and cluttered backgrounds. Second, it removes the black dropshadow from behind the text. This also makes Optical Character Recognition easier.

# How do I use it?

Follow Firefox's instructions for temporarily installing extensions. https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Temporary_Installation_in_Firefox 

This is not the proper way to install extensions at all, but I'm too lazy to get this extension approved by the Mozilla Foundation. 

# How does it work?

I just followed the example given here: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Intercept_HTTP_requests (see "Intercepting Requests"

It uses the Firefox webRequest API. It adds an onBeforeRequest listener, which redirects any requests for a FR coliseum background, and replaces them with the black image.

More details: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeRequest
