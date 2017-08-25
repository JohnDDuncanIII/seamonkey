//https://addons.mozilla.org/en-US/firefox/addon/html5-websql-for-firefox/
/* ::::: HTML5 ::::: */
user_pref("dom.webcomponents.enabled", true);
user_pref("dom.push.enabled", true);
user_pref("dom.forms.datetime", true);
user_pref("dom.forms.datetime.others", true);
user_pref("dom.moduleScripts.enabled", true);
user_pref("dom.serviceWorkers.enabled", true);
user_pref("dom.w3c_pointer_events.enabled", true);
user_pref("dom.vr.enabled", true);
user_pref("canvas.hitregions.enabled", true);
// audioTracks, and videoTracks properties
user_pref("media.track.enabled", true);
user_pref("media.webspeech.synth.enabled", true);
user_pref("media.webspeech.recognition.enable", true);
user_pref("full-screen-api.unprefix.enabled", true);


/* ::::: enhancements :::::*/
user_pref("dom.forms.requestAutocomplete", true);
user_pref("dom.forms.autocomplete.experimental", true);
user_pref("dom.indexedDB.experimental", true);

user_pref("general.autoScroll", true);
// Initialize plugins asynchronously. See more @ http://www.ghacks.net/2015/01/01/asynchronous-plugin-initialization-improves-plugin-startup-in-firefox/
user_pref("dom.ipc.plugins.asyncInit", true);
// Enable http pipelining to speed everything up
user_pref("network.http.pipelining", true);
// Tell websites not to track. Combine with uBlock and (optionally) disconnect addon[s] for maximum anonymity
user_pref("privacy.donottrackheader.enabled", true);
// Enable tracking protection. "decreases page load times by 44%" -
user_pref("privacy.trackingprotection.enabled", true);
// Click always selects all.
user_pref("browser.urlbar.clickSelectsAll", true);
// Standard tab swiping
user_pref("browser.tabs.mouseScrollAdvancesTab", false);
// Disable compat checking
user_pref("extensions.checkCompatibility.nightly", false);
// Enable Seer: This keeps track of URLs the user has visited, along with URLs that were loaded by the loading of the initial URL.
user_pref("network.predictor.enabled", true);
// Related to textTracks property. Helpful for users of kompoz music service?
user_pref("media.webvtt.regions.enabled", true);
// Larger page previews on tab hover
user_pref("browser.tabs.tooltippreview.width", 800);
user_pref("browser.tabs.tooltippreview.enable", false);
// Encrypted media extensions. Enables DRM.
user_pref("media.eme.enabled", true);
// Allow remote xul (for local files)
user_pref("dom.allow_XUL_XBL_for_file", true);
user_pref("extensions.update.autoUpdateDefault", false);
user_pref("view_source.wrap_long_lines", true);

/* ::::: history :::::*/
// Disable stupid places maxpages for history
user_pref("places.history.expiration.max_pages", 999999);
user_pref("places.history.expiration.transient_current_max_pages", 999999);
user_pref("browser.history_expire_days", 1200);
user_pref("browser.formfill.expire_days", 1200);
user_pref("extensions.bonardonet.expire-history-by-days.days", 1200);


/* ::::: homepage :::::*/
//user_pref("browser.startup.homepage", "file:///Users/John/Desktop/Completed/NotePad/index.html");
user_pref("browser.throbber.url", "http://home.mcom.com/home/welcome.html");
user_pref("addressbook.throbber.url", "http://home.mcom.com/home/welcome.html");
user_pref("compose.throbber.url", "http://home.mcom.com/home/welcome.html");
user_pref("editor.throbber.url", "http://home.mcom.com/home/welcome.html");
user_pref("messenger.throbber.url", "http://home.mcom.com/home/welcome.html");

// user_pref("calendar.useragent.extra", "");
// user_pref("general.useragent.override", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:42.0) Gecko/20100101 Firefox/42.0"
user_pref("general.useragent.override.netflix.com", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:51.0) Gecko/20100101 Firefox/51.0");


/* ::::: IRC ::::: */
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


/* ::::: mailnews ::::: */
// custom header support
user_pref("mailnews.customHeaders", "X-Face: Face: X-Image-Url: X-Face-Url: Face-Url");
user_pref("mailnews.customDBHeaders", "x-superfluous x-other x-face face x-image-url x-face-url face-url");
user_pref("mailnews.headers.extraExpandedHeaders", "X-Face Face X-Image-Url X-Face-Url Face-Url x-superfluous x-other");
user_pref("mail.compose.other.header", "X-Face,Face,X-Image-Url,X-Face-Url,Face-Url,X-Superfluous,X-Other");

// faces
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

//user_pref("media.mediasource.webm.enabled", true);
//user_pref("browser.send_pings", true);
//user_pref("javascript.options.shared_memory", true);
//user_pref("webgl.enable-webgl2", true);
//user_pref("gfx.offscreencanvas.enabled", true);
//user_pref("dom.flyweb.enabled", true);
//user_pref("media.seekToNextFrame.enabled", true);
//user_pref("dom.node.rootNode.enabled", true);
//user_pref("devtools.webconsole.new-frontend-enabled", true);
//user_pref("devtools.responsive.html.enabled", true);
//user_pref("devtools.performance.ui.experimental", true);
//user_pref("dom.requestIdleCallback.enabled", true);
//user_pref("geo.enabled", true);
//user_pref("media.mediasource.enabled", true);
//user_pref("media.peerconnection.video.h264_enabled", true);
//user_pref("dom.fetch.enabled", true);
//user_pref("dom.caches.enabled", true);
//user_pref("dom.icc.enabled", true);
//user_pref("dom.identity.enabled", true);
//user_pref("security.csp.experimentalEnabled", true);
//user_pref("layout.css.unprefixing-service.enabled", true);
//user_pref("beacon.enabled", true);
//user_pref("toolkit.telemetry.enabled", true);
//user_pref("browser.polaris.enabled", true);
//user_pref("media.audio_data.enabled", true);
// user_pref("network.prefetch-next", true);
//user_pref("layers.async-pan-zoom.enabled", true);
//user_pref("dom.experimental_forms", true);
//user_pref("svg.transform-box.enabled", true);
//user_pref("webgl.enable-draft-extensions", true);
//user_pref("webgl.enable-privileged-extensions", true);
//user_pref("webgl.enable-prototype-webgl2", true);
//user_pref("layout.css.getBoxQuads.enabled", true);
//user_pref("layout.css.convertFromNode.enabled", true);

// https://developer.mozilla.org/en-US/Firefox/Experimental_features
// https://dxr.mozilla.org/mozilla-central/source/modules/libpref/init/all.js
/*user_pref("layout.css.grid.enabled", true);
user_pref("layout.css.float-logical-values.enabled", true);
user_pref("layout.css.control-characters.enabled", true);
user_pref("layout.css.grid-template-subgrid-value.enabled", true);
user_pref("layout.css.clip-path-shapes.enabled", true);
user_pref("layout.css.font-display.enabled", true);
user_pref("layout.css.touch_action.enabled", true);*/
