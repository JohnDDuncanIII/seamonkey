// Allows page scrolling with middle mouse click
user_pref("general.autoScroll", true);

// Enables geotracking
user_pref("geo.enabled", true);

// Enable cool html5/WebM video stuff
user_pref("media.webspeech.synth.enabled", true);
user_pref("media.mediasource.enabled", true);
user_pref("media.mediasource.webm.enabled", true);
user_pref("media.peerconnection.video.h264_enabled", true);

// Initialize plugins asynchronously. See more @ http://www.ghacks.net/2015/01/01/asynchronous-plugin-initialization-improves-plugin-startup-in-firefox/
user_pref("dom.ipc.plugins.asyncInit", true);

// Experimental html5 features
user_pref("canvas.hitregions.enabled", true);
user_pref("media.webspeech.recognition.enable", true);
user_pref("dom.experimental_forms", true);
user_pref("dom.forms.autocomplete.experimental", true);
user_pref("dom.indexedDB.experimental", true);

// Disable stupid places maxpages for history
user_pref("places.history.expiration.max_pages", 999999);
user_pref("places.history.expiration.transient_current_max_pages", 999999);
user_pref("browser.history_expire_days", 1200);
user_pref("browser.formfill.expire_days", 1200);
user_pref("extensions.bonardonet.expire-history-by-days.days", 1200);

// Enable http pipelining to speed everything up
user_pref("network.http.pipelining", true);

// Tell websites not to track. Combine with uBlock and (optionally) disconnect addon[s] for maximum anonymity
user_pref("privacy.donottrackheader.enabled", true);
// Enable tracking protection. "decreases page load times by 44%" -
user_pref("privacy.trackingprotection.enabled", true);


// Click always selects all. Not default on GNU/Linux for some reason...
user_pref("browser.urlbar.clickSelectsAll", true);

// Standard tab swiping. DEAR GOD PLEASE NEVER ENABLE THIS
user_pref("browser.tabs.mouseScrollAdvancesTab", false);

// Set links to mcom homepage instead of seamonkey homepage
user_pref("browser.startup.homepage", "http://home.mcom.com/home/welcome.html");
user_pref("browser.throbber.url", "http://home.mcom.com/home/welcome.html");
user_pref("addressbook.throbber.url", "http://home.mcom.com/home/welcome.html");
user_pref("compose.throbber.url", "http://home.mcom.com/home/welcome.html");
user_pref("editor.throbber.url", "http://home.mcom.com/home/welcome.html");
user_pref("messenger.throbber.url", "http://home.mcom.com/home/welcome.html");

user_pref("dom.webcomponents.enabled", true);
user_pref("dom.serviceWorkers.enabled", true);
user_pref("dom.fetch.enabled", true);
user_pref("dom.caches.enabled", true);

user_pref("dom.forms.requestAutocomplete", true);
user_pref("dom.icc.enabled", true);
user_pref("dom.identity.enabled", true);

user_pref("layout.css.touch_action.enabled", true);
user_pref("security.csp.experimentalEnabled", true);

// Disable compat checking
user_pref("extensions.checkCompatibility.nightly", false);

// Reader view
user_pref("reader.parse-on-load.enabled", true);

// Enable Seer: This keeps track of URLs the user has visited, along with URLs that were loaded by the loading of the initial URL.
user_pref("network.predictor.enabled", true);

// Unknown as of yet. Seems cool though.
//user_pref("signon.ui.experimental", true);

// FF33: audioTracks, and videoTracks properties
user_pref("media.track.enabled", true);

// Related to textTracks property. Helpful for users of kompoz music service?
user_pref("media.webvtt.regions.enabled", true);

// ATTN: possibly deprecated API
user_pref("media.audio_data.enabled", true);

// Encrypted media extensions. Enables DRM?
user_pref("media.eme.enabled", true);

// Enable pointer events, please!
user_pref("dom.w3c_pointer_events.enabled", true);

// Emulate -webkit prefix on select sites - http://www.ghacks.net/2015/05/09/mozilla-adds-webkit-prefix-emulation-to-select-sites-in-firefox/
user_pref("layout.css.unprefixing-service.enabled", true);

// beacon
user_pref("beacon.enabled", true);

// Enable the telemetry data logging
user_pref("toolkit.telemetry.enabled", true);

// Privacy
user_pref("browser.polaris.enabled", true);

// Larger page previews on tab hover
user_pref("browser.tabs.tooltippreview.width", 800);
user_pref("browser.tabs.tooltippreview.enable", false);

// Override prefetching in case programs such as µBlock disable it..
user_pref("network.prefetch-next", true);

// Experimental smooth scrolling
user_pref("layers.async-pan-zoom.enabled", true);

//user_pref("calendar.useragent.extra", "");
// user_pref("general.useragent.override", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:42.0) Gecko/20100101 Firefox/42.0"
user_pref("general.useragent.override.netflix.com", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:42.0) Gecko/20100101 Firefox/42.0");

// Enable full-screen in SeaMonkey
user_pref("full-screen-api.content-only", true);
user_pref("full-screen-api.enabled", true);
// Allow remote xul (for local files)
user_pref("dom.allow_XUL_XBL_for_file", true);

// Set IRC theme
user_pref("extensions.irc.motif.current","chrome://chatzilla/skin/output-bliss.css");
// Move the channel-tree to the left
user_pref("extensions.irc.plugins.channel-tree.treeAtLeft", true);
// Move the user-list to the right
user_pref("extensions.irc.plugins.userlist-mover.enabled", true);
// Set the channel-tree width
user_pref("extensions.irc.plugins.channel-tree.treeWidth", 136);
// autoconnect to rizon
user_pref("extensions.irc.autoperform.client", "/sslserver%20rizonbnc.us.rizon.net%3A12345%20hu6%3AusAOG9");

// Add my beautiful mug to all of my mail and USENET profiles ;)
user_pref("mailnews.customHeaders", "X-Face: Face: X-Image-Url: X-Face-Url: Face-Url");
user_pref("mailnews.customDBHeaders", "x-superfluous x-other x-face face x-image-url x-face-url face-url");
user_pref("mailnews.headers.extraExpandedHeaders", "X-Face Face X-Image-Url X-Face-Url Face-Url x-superfluous x-other");
// Add X-Face to emails
user_pref("mail.compose.other.header", "X-Face,Face,X-Image-Url,X-Face-Url,Face-Url,X-Superfluous,X-Other");

user_pref("mail.identity.id1.headers","xface,xface2");
user_pref("mail.identity.id1.header.xface2", "X-Display-X-Face:<http://www.dairiki.org/xface/>");
user_pref("mail.identity.id1.header.xface", "X-Face:\"dS=exdec+W_UIU-3u;#}nMS}IF1SKB\";kNLiY(S}LxSXj5myL9ah32r\"z;kX6t$L-H%E|fN}p\"MDV6QL||@i`WRth?dQfm5(?Y^ABJz\\/UE|elUyeGz`C0dbwVNL=.9MJ9<3VZCnYU~QemCXs^/]{1Piu]oT^d=w$j4i-j(li3My^pt.wtRT@[eJYI(X3_1yn4L;C8m%DZsRzX'g_*CdxC1}:n2MRr),\"\"bfG}?rb{d9eoJ@W0gg?l)P_8q7l!(!\\5ixU%?H8U9el?Ov<X@D/:l!/bR_\"K-P");

user_pref("mail.identity.id2.headers","xface,xface2");
user_pref("mail.identity.id2.header.xface2", "X-Display-X-Face:<http://www.dairiki.org/xface/>");
user_pref("mail.identity.id2.header.xface", "X-Face:\"dS=exdec+W_UIU-3u;#}nMS}IF1SKB\";kNLiY(S}LxSXj5myL9ah32r\"z;kX6t$L-H%E|fN}p\"MDV6QL||@i`WRth?dQfm5(?Y^ABJz\\/UE|elUyeGz`C0dbwVNL=.9MJ9<3VZCnYU~QemCXs^/]{1Piu]oT^d=w$j4i-j(li3My^pt.wtRT@[eJYI(X3_1yn4L;C8m%DZsRzX'g_*CdxC1}:n2MRr),\"\"bfG}?rb{d9eoJ@W0gg?l)P_8q7l!(!\\5ixU%?H8U9el?Ov<X@D/:l!/bR_\"K-P");

user_pref("mail.identity.id3.headers","xface,xface2");
user_pref("mail.identity.id3.header.xface2", "X-Display-X-Face:<http://www.dairiki.org/xface/>");
user_pref("mail.identity.id3.header.xface", "X-Face:\"dS=exdec+W_UIU-3u;#}nMS}IF1SKB\";kNLiY(S}LxSXj5myL9ah32r\"z;kX6t$L-H%E|fN}p\"MDV6QL||@i`WRth?dQfm5(?Y^ABJz\\/UE|elUyeGz`C0dbwVNL=.9MJ9<3VZCnYU~QemCXs^/]{1Piu]oT^d=w$j4i-j(li3My^pt.wtRT@[eJYI(X3_1yn4L;C8m%DZsRzX'g_*CdxC1}:n2MRr),\"\"bfG}?rb{d9eoJ@W0gg?l)P_8q7l!(!\\5ixU%?H8U9el?Ov<X@D/:l!/bR_\"K-P");

user_pref("mail.identity.id4.headers","xface,xface2");
user_pref("mail.identity.id4.header.xface2", "X-Display-X-Face:<http://www.dairiki.org/xface/>");
user_pref("mail.identity.id4.header.xface", "X-Face:\"dS=exdec+W_UIU-3u;#}nMS}IF1SKB\";kNLiY(S}LxSXj5myL9ah32r\"z;kX6t$L-H%E|fN}p\"MDV6QL||@i`WRth?dQfm5(?Y^ABJz\\/UE|elUyeGz`C0dbwVNL=.9MJ9<3VZCnYU~QemCXs^/]{1Piu]oT^d=w$j4i-j(li3My^pt.wtRT@[eJYI(X3_1yn4L;C8m%DZsRzX'g_*CdxC1}:n2MRr),\"\"bfG}?rb{d9eoJ@W0gg?l)P_8q7l!(!\\5ixU%?H8U9el?Ov<X@D/:l!/bR_\"K-P");

user_pref("mail.identity.id5.headers","xface,xface2");
user_pref("mail.identity.id5.header.xface2", "X-Display-X-Face:<http://www.dairiki.org/xface/>");
user_pref("mail.identity.id5.header.xface", "X-Face:\"dS=exdec+W_UIU-3u;#}nMS}IF1SKB\";kNLiY(S}LxSXj5myL9ah32r\"z;kX6t$L-H%E|fN}p\"MDV6QL||@i`WRth?dQfm5(?Y^ABJz\\/UE|elUyeGz`C0dbwVNL=.9MJ9<3VZCnYU~QemCXs^/]{1Piu]oT^d=w$j4i-j(li3My^pt.wtRT@[eJYI(X3_1yn4L;C8m%DZsRzX'g_*CdxC1}:n2MRr),\"\"bfG}?rb{d9eoJ@W0gg?l)P_8q7l!(!\\5ixU%?H8U9el?Ov<X@D/:l!/bR_\"K-P");

user_pref("mail.identity.id6.headers","xface,xface2");
user_pref("mail.identity.id6.header.xface2", "X-Display-X-Face:<http://www.dairiki.org/xface/>");
user_pref("mail.identity.id6.header.xface", "X-Face:\"dS=exdec+W_UIU-3u;#}nMS}IF1SKB\";kNLiY(S}LxSXj5myL9ah32r\"z;kX6t$L-H%E|fN}p\"MDV6QL||@i`WRth?dQfm5(?Y^ABJz\\/UE|elUyeGz`C0dbwVNL=.9MJ9<3VZCnYU~QemCXs^/]{1Piu]oT^d=w$j4i-j(li3My^pt.wtRT@[eJYI(X3_1yn4L;C8m%DZsRzX'g_*CdxC1}:n2MRr),\"\"bfG}?rb{d9eoJ@W0gg?l)P_8q7l!(!\\5ixU%?H8U9el?Ov<X@D/:l!/bR_\"K-P");

user_pref("mail.identity.id7.headers","xface,xface2");
user_pref("mail.identity.id7.header.xface2", "X-Display-X-Face:<http://www.dairiki.org/xface/>");
user_pref("mail.identity.id7.header.xface", "X-Face:\"dS=exdec+W_UIU-3u;#}nMS}IF1SKB\";kNLiY(S}LxSXj5myL9ah32r\"z;kX6t$L-H%E|fN}p\"MDV6QL||@i`WRth?dQfm5(?Y^ABJz\\/UE|elUyeGz`C0dbwVNL=.9MJ9<3VZCnYU~QemCXs^/]{1Piu]oT^d=w$j4i-j(li3My^pt.wtRT@[eJYI(X3_1yn4L;C8m%DZsRzX'g_*CdxC1}:n2MRr),\"\"bfG}?rb{d9eoJ@W0gg?l)P_8q7l!(!\\5ixU%?H8U9el?Ov<X@D/:l!/bR_\"K-P");

user_pref("mail.identity.id8.headers","xface,xface2");
user_pref("mail.identity.id8.header.xface2", "X-Display-X-Face:<http://www.dairiki.org/xface/>");
user_pref("mail.identity.id8.header.xface", "X-Face:\"dS=exdec+W_UIU-3u;#}nMS}IF1SKB\";kNLiY(S}LxSXj5myL9ah32r\"z;kX6t$L-H%E|fN}p\"MDV6QL||@i`WRth?dQfm5(?Y^ABJz\\/UE|elUyeGz`C0dbwVNL=.9MJ9<3VZCnYU~QemCXs^/]{1Piu]oT^d=w$j4i-j(li3My^pt.wtRT@[eJYI(X3_1yn4L;C8m%DZsRzX'g_*CdxC1}:n2MRr),\"\"bfG}?rb{d9eoJ@W0gg?l)P_8q7l!(!\\5ixU%?H8U9el?Ov<X@D/:l!/bR_\"K-P");

user_pref("mail.identity.id9.headers","xface,xface2");
user_pref("mail.identity.id9.header.xface2", "X-Display-X-Face:<http://www.dairiki.org/xface/>");
user_pref("mail.identity.id9.header.xface", "X-Face:\"dS=exdec+W_UIU-3u;#}nMS}IF1SKB\";kNLiY(S}LxSXj5myL9ah32r\"z;kX6t$L-H%E|fN}p\"MDV6QL||@i`WRth?dQfm5(?Y^ABJz\\/UE|elUyeGz`C0dbwVNL=.9MJ9<3VZCnYU~QemCXs^/]{1Piu]oT^d=w$j4i-j(li3My^pt.wtRT@[eJYI(X3_1yn4L;C8m%DZsRzX'g_*CdxC1}:n2MRr),\"\"bfG}?rb{d9eoJ@W0gg?l)P_8q7l!(!\\5ixU%?H8U9el?Ov<X@D/:l!/bR_\"K-P");

user_pref("mail.identity.id10.headers","xface,xface2");
user_pref("mail.identity.id10.header.xface2", "X-Display-X-Face:<http://www.dairiki.org/xface/>");
user_pref("mail.identity.id10.header.xface", "X-Face:\"dS=exdec+W_UIU-3u;#}nMS}IF1SKB\";kNLiY(S}LxSXj5myL9ah32r\"z;kX6t$L-H%E|fN}p\"MDV6QL||@i`WRth?dQfm5(?Y^ABJz\\/UE|elUyeGz`C0dbwVNL=.9MJ9<3VZCnYU~QemCXs^/]{1Piu]oT^d=w$j4i-j(li3My^pt.wtRT@[eJYI(X3_1yn4L;C8m%DZsRzX'g_*CdxC1}:n2MRr),\"\"bfG}?rb{d9eoJ@W0gg?l)P_8q7l!(!\\5ixU%?H8U9el?Ov<X@D/:l!/bR_\"K-P");

user_pref("mail.identity.id11.headers","xface,xface2");
user_pref("mail.identity.id11.header.xface2", "X-Display-X-Face:<http://www.dairiki.org/xface/>");
user_pref("mail.identity.id11.header.xface", "X-Face:\"dS=exdec+W_UIU-3u;#}nMS}IF1SKB\";kNLiY(S}LxSXj5myL9ah32r\"z;kX6t$L-H%E|fN}p\"MDV6QL||@i`WRth?dQfm5(?Y^ABJz\\/UE|elUyeGz`C0dbwVNL=.9MJ9<3VZCnYU~QemCXs^/]{1Piu]oT^d=w$j4i-j(li3My^pt.wtRT@[eJYI(X3_1yn4L;C8m%DZsRzX'g_*CdxC1}:n2MRr),\"\"bfG}?rb{d9eoJ@W0gg?l)P_8q7l!(!\\5ixU%?H8U9el?Ov<X@D/:l!/bR_\"K-P");

user_pref("mail.identity.id12.headers","xface,xface2");
user_pref("mail.identity.id12.header.xface2", "X-Display-X-Face:<http://www.dairiki.org/xface/>");
user_pref("mail.identity.id12.header.xface", "X-Face:\"dS=exdec+W_UIU-3u;#}nMS}IF1SKB\";kNLiY(S}LxSXj5myL9ah32r\"z;kX6t$L-H%E|fN}p\"MDV6QL||@i`WRth?dQfm5(?Y^ABJz\\/UE|elUyeGz`C0dbwVNL=.9MJ9<3VZCnYU~QemCXs^/]{1Piu]oT^d=w$j4i-j(li3My^pt.wtRT@[eJYI(X3_1yn4L;C8m%DZsRzX'g_*CdxC1}:n2MRr),\"\"bfG}?rb{d9eoJ@W0gg?l)P_8q7l!(!\\5ixU%?H8U9el?Ov<X@D/:l!/bR_\"K-P");

user_pref("mail.identity.id14.headers","xface,xface2,face");
user_pref("mail.identity.id14.header.xface2", "X-Display-X-Face:<http://www.dairiki.org/xface/>");
user_pref("mail.identity.id14.header.xface", "X-Face:\"dS=exdec+W_UIU-3u;#}nMS}IF1SKB\";kNLiY(S}LxSXj5myL9ah32r\"z;kX6t$L-H%E|fN}p\"MDV6QL||@i`WRth?dQfm5(?Y^ABJz\\/UE|elUyeGz`C0dbwVNL=.9MJ9<3VZCnYU~QemCXs^/]{1Piu]oT^d=w$j4i-j(li3My^pt.wtRT@[eJYI(X3_1yn4L;C8m%DZsRzX'g_*CdxC1}:n2MRr),\"\"bfG}?rb{d9eoJ@W0gg?l)P_8q7l!(!\\5ixU%?H8U9el?Ov<X@D/:l!/bR_\"K-P");

user_pref("mail.identity.id15.headers","xface,xface2,face");
user_pref("mail.identity.id15.header.xface2", "X-Display-X-Face:<http://www.dairiki.org/xface/>");
user_pref("mail.identity.id15.header.xface", "X-Face:\"dS=exdec+W_UIU-3u;#}nMS}IF1SKB\";kNLiY(S}LxSXj5myL9ah32r\"z;kX6t$L-H%E|fN}p\"MDV6QL||@i`WRth?dQfm5(?Y^ABJz\\/UE|elUyeGz`C0dbwVNL=.9MJ9<3VZCnYU~QemCXs^/]{1Piu]oT^d=w$j4i-j(li3My^pt.wtRT@[eJYI(X3_1yn4L;C8m%DZsRzX'g_*CdxC1}:n2MRr),\"\"bfG}?rb{d9eoJ@W0gg?l)P_8q7l!(!\\5ixU%?H8U9el?Ov<X@D/:l!/bR_\"K-P");

//Face:iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAElBMVEX9/ftIS5IsNImXjKgcI3Dh29sdnA7JAAAB60lEQVR4nI2US5ajMAxFXeF4HtlhXlZ7AdCCBWCcORTx/rfSkgyEyqg14uiipw8SpnzaRmrm/8yWD0dZqn80G5WlUOVEnsCPNKp6D2w98JsWHcJuiOiCPnXGNPDIU/U7BuKPGe7GfAW/rNPhl+A4bqkC6IZDiwOwXb0CnKBtpjMJhgZoB96bXl5Gtftfr+AHJ4LlhRm8VOvmJlCvwM3Ud41f9maX1dOADG4cQe1lDD3RAzVH+DXMhhUTfjOIkWexvAHRkCSiyZmuYBWlGpGfV0CihDyrW8yhbOYDaFU5d+8AU8YXqtQNEz5P92KskWFq54h/ONWs4OtpbDoiGCzmNatc05rmBE6AtQpKsdsOfoLDUBgci6JAqgqI8bI2F+AwjleAew6OwFYSWA8CVgFdrQqfCnIW8MKAdexscwWTbOML8Q0myV4y82187FIKomwvf5bO0ph+gZFbZCD7q2DZAc7nyQxv4FSLTcHjkLo5KS/Ox41lPHIExyEZRb4lP5zgR7c8BV822d6UTiAjiQnGVfyyIZfpYmZg+gpiTvHsg4EzHOIVsMC9lsvP0He2B+qHmHOO6fsAAehpqSc+yBNIF1wUgOXzCJDVBIB0Icfd2vKAN2jAubRfOvt3INsO+3XvdgGBgAH/OepfoIJ/RyuNKjhmbCAAAAAASUVORK5CYII=
//user_pref("mail.identity.id1.header.xface", "X-Face:#T<IuihVYUgpG'l~4NUw't?/7uN}Q*yxE`;uHO+(}T4+k3ol/Tn_JO.[1&UD{Ey;!,}N2m>)Fvmy`^(e<)m+9Fu|%sQ5`ch~7ot%L){!'hin,vzcD><vP]gs5-G44jK7WSx/0Id3xqVR[:eB(j*td_6*M6$aol-g0wR:iCBQghVQA<W%y)2RSV)i.+gW=z;en(+68Xq:TZ|o(XzCML.Ol;5U)}s'ewSa7Wh{:Qdk`liL#Vzya-^v");
