S/W Version Information
Model: SM-R720
Tizen-Version: 2.3.1.2
Build-Number: R720XXU2BOKK
Build-Date: 2015.11.27 18:01:21

Crash Information
Process Name: gears2robotcontrol
PID: 21443
Date: 2016-02-23 17:18:40+0000
Executable File Path: /opt/usr/apps/org.example.gears2robotcontrol/bin/gears2robotcontrol
Signal: 11
      (SIGSEGV)
      si_code: 1
      address not mapped to object
      si_addr = 0x20

Register Information
r0   = 0x00000025, r1   = 0x00000000
r2   = 0x00000001, r3   = 0xf0f6d300
r4   = 0xbee2d3e4, r5   = 0x40072980
r6   = 0x00000274, r7   = 0xbee2cbe0
r8   = 0x404a8e7c, r9   = 0x404a8fd4
r10  = 0x404a8f64, fp   = 0x00000000
ip   = 0x400859f8, sp   = 0xbee2cbc0
lr   = 0x400011c5, pc   = 0x400011ca
cpsr = 0x20000030

Memory Information
MemTotal:   489992 KB
MemFree:      8000 KB
Buffers:     17104 KB
Cached:      90644 KB
VmPeak:      43884 KB
VmSize:      43704 KB
VmLck:           0 KB
VmPin:           0 KB
VmHWM:       14348 KB
VmRSS:       14344 KB
VmData:      14048 KB
VmStk:         136 KB
VmExe:           8 KB
VmLib:       25532 KB
VmPTE:          40 KB
VmSwap:          0 KB

Threads Information
Threads: 3
PID = 21443 TID = 21443
21443 21446 21447 

Maps Information
40000000 40002000 r-xp /opt/usr/apps/org.example.gears2robotcontrol/bin/gears2robotcontrol
40009000 4000a000 rwxp /opt/usr/apps/org.example.gears2robotcontrol/bin/gears2robotcontrol
4000a000 40027000 r-xp /lib/ld-2.13.so
4002e000 4002f000 r-xp /lib/ld-2.13.so
4002f000 40030000 rwxp /lib/ld-2.13.so
40030000 40034000 r-xp /usr/lib/libsys-assert.so
4003c000 4003d000 rwxp /usr/lib/libsys-assert.so
4003d000 4003e000 r-xp /usr/share/locale/locale-archive
4003e000 40040000 r-xp /usr/lib/libdri2.so.0.0.0
40047000 40048000 rwxp /usr/lib/libdri2.so.0.0.0
40049000 4004c000 rwxp [stack:21447]
4004c000 40050000 rwxs /dev/mali
40051000 40065000 r-xp /lib/libpthread-2.13.so
4006c000 4006d000 r-xp /lib/libpthread-2.13.so
4006d000 4006e000 rwxp /lib/libpthread-2.13.so
40070000 40074000 r-xp /usr/lib/libcapi-appfw-application.so.0.3.2.5
4007b000 4007c000 rwxp /usr/lib/libcapi-appfw-application.so.0.3.2.5
4007c000 4007e000 r-xp /usr/lib/libdlog.so.0.0.0
40085000 40086000 rwxp /usr/lib/libdlog.so.0.0.0
40086000 4009d000 r-xp /usr/lib/libecore.so.1.7.99
400a5000 400a6000 rwxp /usr/lib/libecore.so.1.7.99
400b4000 400d4000 r-xp /usr/lib/libefl-extension.so.0.1.0
400d4000 400d5000 rwxp /usr/lib/libefl-extension.so.0.1.0
400d5000 4020f000 r-xp /usr/lib/libelementary.so.1.7.99
40216000 4021e000 rwxp /usr/lib/libelementary.so.1.7.99
40225000 402f4000 r-xp /usr/lib/libevas.so.1.7.99
402fb000 40305000 rwxp /usr/lib/libevas.so.1.7.99
40318000 40433000 r-xp /lib/libc-2.13.so
4043b000 4043d000 r-xp /lib/libc-2.13.so
4043d000 4043e000 rwxp /lib/libc-2.13.so
40441000 4044c000 r-xp /lib/libunwind.so.8.0.1
40453000 40454000 rwxp /lib/libunwind.so.8.0.1
40479000 4047b000 r-xp /lib/libdl-2.13.so
40482000 40483000 r-xp /lib/libdl-2.13.so
40483000 40484000 rwxp /lib/libdl-2.13.so
40484000 4048c000 r-xp /lib/libgcc_s-4.6.so.1
4048c000 4048d000 rwxp /lib/libgcc_s-4.6.so.1
4048d000 40492000 r-xp /usr/lib/libcapi-appfw-app-control.so.0.3.2.5
40499000 4049a000 rwxp /usr/lib/libcapi-appfw-app-control.so.0.3.2.5
4049a000 4049c000 r-xp /usr/lib/libcapi-appfw-app-common.so.0.3.2.5
404a4000 404a5000 rwxp /usr/lib/libcapi-appfw-app-common.so.0.3.2.5
404a5000 404aa000 r-xp /usr/lib/libappcore-efl.so.1.1
404b1000 404b2000 rwxp /usr/lib/libappcore-efl.so.1.1
404b2000 404b7000 r-xp /usr/lib/libappcore-common.so.1.1
404be000 404bf000 rwxp /usr/lib/libappcore-common.so.1.1
404bf000 404cb000 r-xp /usr/lib/libaul.so.0.1.0
404d3000 404d4000 rwxp /usr/lib/libaul.so.0.1.0
404d5000 404f7000 r-xp /usr/lib/libpkgmgr-info.so.0.0.17
404fe000 404ff000 rwxp /usr/lib/libpkgmgr-info.so.0.0.17
404ff000 40540000 r-xp /usr/lib/libeina.so.1.7.99
40547000 40549000 rwxp /usr/lib/libeina.so.1.7.99
40549000 40619000 r-xp /usr/lib/libglib-2.0.so.0.3200.3
40619000 4061a000 rwxp /usr/lib/libglib-2.0.so.0.3200.3
4061a000 40620000 r-xp /lib/librt-2.13.so
40627000 40628000 r-xp /lib/librt-2.13.so
40628000 40629000 rwxp /lib/librt-2.13.so
40629000 40692000 r-xp /lib/libm-2.13.so
40699000 4069a000 r-xp /lib/libm-2.13.so
4069a000 4069b000 rwxp /lib/libm-2.13.so
4069b000 406eb000 r-xp /usr/lib/libecore_x.so.1.7.99
406eb000 406ed000 rwxp /usr/lib/libecore_x.so.1.7.99
406ed000 4074a000 r-xp /usr/lib/libedje.so.1.7.99
40752000 40754000 rwxp /usr/lib/libedje.so.1.7.99
40754000 4080c000 r-xp /usr/lib/libcairo.so.2.11200.14
40813000 40816000 rwxp /usr/lib/libcairo.so.2.11200.14
40817000 408f8000 r-xp /usr/lib/libX11.so.6.3.0
408ff000 40903000 rwxp /usr/lib/libX11.so.6.3.0
40903000 4090c000 r-xp /usr/lib/libXi.so.6.1.0
40913000 40914000 rwxp /usr/lib/libXi.so.6.1.0
40914000 4093c000 r-xp /usr/lib/libfontconfig.so.1.8.0
4093c000 4093d000 rwxp /usr/lib/libfontconfig.so.1.8.0
4093d000 40956000 r-xp /usr/lib/libeet.so.1.7.99
4095e000 4095f000 rwxp /usr/lib/libeet.so.1.7.99
40967000 40989000 r-xp /usr/lib/libecore_evas.so.1.7.99
40990000 40992000 rwxp /usr/lib/libecore_evas.so.1.7.99
40992000 40997000 r-xp /usr/lib/libecore_file.so.1.7.99
4099e000 4099f000 rwxp /usr/lib/libecore_file.so.1.7.99
4099f000 409b0000 r-xp /usr/lib/libecore_input.so.1.7.99
409b7000 409b8000 rwxp /usr/lib/libecore_input.so.1.7.99
409b8000 409bc000 r-xp /usr/lib/libvconf.so.0.2.45
409c3000 409c4000 rwxp /usr/lib/libvconf.so.0.2.45
409c4000 409cd000 r-xp /usr/lib/libedbus.so.1.7.99
409d4000 409d5000 rwxp /usr/lib/libedbus.so.1.7.99
409d5000 409ff000 r-xp /usr/lib/libdbus-1.so.3.8.12
40a07000 40a08000 rwxp /usr/lib/libdbus-1.so.3.8.12
40a08000 40a22000 r-xp /usr/lib/libecore_con.so.1.7.99
40a29000 40a2a000 rwxp /usr/lib/libecore_con.so.1.7.99
40a2b000 40a3e000 r-xp /usr/lib/libfribidi.so.0.3.1
40a45000 40a46000 rwxp /usr/lib/libfribidi.so.0.3.1
40a46000 40a83000 r-xp /usr/lib/libharfbuzz.so.0.940.0
40a8a000 40a8b000 rwxp /usr/lib/libharfbuzz.so.0.940.0
40a8c000 40ae2000 r-xp /usr/lib/libfreetype.so.6.11.3
40aea000 40aee000 rwxp /usr/lib/libfreetype.so.6.11.3
40aee000 40b44000 r-xp /usr/lib/libpixman-1.so.0.28.2
40b4c000 40b51000 rwxp /usr/lib/libpixman-1.so.0.28.2
40b51000 40b57000 r-xp /usr/lib/libappsvc.so.0.1.0
40b5e000 40b5f000 rwxp /usr/lib/libappsvc.so.0.1.0
40b5f000 40b62000 r-xp /usr/lib/libbundle.so.0.1.22
40b69000 40b6a000 rwxp /usr/lib/libbundle.so.0.1.22
40b6a000 40b6d000 r-xp /usr/lib/libsmack.so.1.0.0
40b74000 40b75000 rwxp /usr/lib/libsmack.so.1.0.0
40b75000 40b7b000 r-xp /usr/lib/libecore_imf.so.1.7.99
40b82000 40b83000 rwxp /usr/lib/libecore_imf.so.1.7.99
40b83000 40bb7000 r-xp /usr/lib/libgobject-2.0.so.0.3200.3
40bbe000 40bc0000 rwxp /usr/lib/libgobject-2.0.so.0.3200.3
40bc0000 40bc2000 r-xp /usr/lib/libiniparser.so.0
40bca000 40bcb000 rwxp /usr/lib/libiniparser.so.0
40bcb000 40be2000 r-xp /usr/lib/libdbus-glib-1.so.2.2.2
40be9000 40bea000 rwxp /usr/lib/libdbus-glib-1.so.2.2.2
40bea000 40bef000 r-xp /usr/lib/libxdgmime.so.1.1.0
40bf6000 40bf7000 rwxp /usr/lib/libxdgmime.so.1.1.0
40bf7000 40c33000 r-xp /usr/lib/libsystemd.so.0.4.0
40c3a000 40c3b000 r-xp /usr/lib/libsystemd.so.0.4.0
40c3b000 40c3c000 rwxp /usr/lib/libsystemd.so.0.4.0
40c3c000 40c3f000 r-xp /usr/lib/libproc-stat.so.0.2.86
40c46000 40c47000 rwxp /usr/lib/libproc-stat.so.0.2.86
40c47000 40c5c000 r-xp /usr/lib/libpkgmgr_parser.so.0.1.0
40c63000 40c64000 rwxp /usr/lib/libpkgmgr_parser.so.0.1.0
40c64000 40cd9000 r-xp /usr/lib/libsqlite3.so.0.8.6
40ce0000 40ce3000 rwxp /usr/lib/libsqlite3.so.0.8.6
40ce3000 40cea000 r-xp /usr/lib/libXcursor.so.1.0.2
40cf1000 40cf2000 rwxp /usr/lib/libXcursor.so.1.0.2
40cf2000 40cf4000 r-xp /usr/lib/libXdamage.so.1.1.0
40cfb000 40cfc000 rwxp /usr/lib/libXdamage.so.1.1.0
40cfc000 40cfe000 r-xp /usr/lib/libXcomposite.so.1.0.0
40d05000 40d06000 rwxp /usr/lib/libXcomposite.so.1.0.0
40d06000 40d08000 r-xp /usr/lib/libXgesture.so.7.0.0
40d0f000 40d10000 rwxp /usr/lib/libXgesture.so.7.0.0
40d10000 40d13000 r-xp /usr/lib/libXfixes.so.3.1.0
40d1a000 40d1b000 rwxp /usr/lib/libXfixes.so.3.1.0
40d1b000 40d1c000 r-xp /usr/lib/libXinerama.so.1.0.0
40d24000 40d25000 rwxp /usr/lib/libXinerama.so.1.0.0
40d25000 40d2b000 r-xp /usr/lib/libXrandr.so.2.2.0
40d32000 40d33000 rwxp /usr/lib/libXrandr.so.2.2.0
40d33000 40d39000 r-xp /usr/lib/libXrender.so.1.3.0
40d40000 40d41000 rwxp /usr/lib/libXrender.so.1.3.0
40d41000 40d44000 r-xp /usr/lib/libXtst.so.6.1.0
40d4c000 40d4d000 rwxp /usr/lib/libXtst.so.6.1.0
40d4d000 40d57000 r-xp /usr/lib/libXext.so.6.4.0
40d5f000 40d60000 rwxp /usr/lib/libXext.so.6.4.0
40d60000 40d67000 r-xp /usr/lib/libembryo.so.1.7.99
40d6e000 40d6f000 rwxp /usr/lib/libembryo.so.1.7.99
40d6f000 40d86000 r-xp /usr/lib/liblua-5.1.so
40d8e000 40d8f000 rwxp /usr/lib/liblua-5.1.so
40d8f000 40d90000 r-xp /usr/lib/libecore_imf_evas.so.1.7.99
40d97000 40d98000 rwxp /usr/lib/libecore_imf_evas.so.1.7.99
40d98000 40da6000 r-xp /usr/lib/libGLESv2.so.2.0
40dae000 40daf000 rwxp /usr/lib/libGLESv2.so.2.0
40daf000 40dc7000 r-xp /usr/lib/libpng12.so.0.50.0
40dce000 40dcf000 rwxp /usr/lib/libpng12.so.0.50.0
40dcf000 40dd0000 r-xp /usr/lib/libxcb-shm.so.0.0.0
40dd8000 40dd9000 rwxp /usr/lib/libxcb-shm.so.0.0.0
40dd9000 40ddf000 r-xp /usr/lib/libxcb-render.so.0.0.0
40de6000 40de7000 rwxp /usr/lib/libxcb-render.so.0.0.0
40de7000 40dfa000 r-xp /usr/lib/libxcb.so.1.1.0
40e02000 40e03000 rwxp /usr/lib/libxcb.so.1.1.0
40e03000 40e19000 r-xp /lib/libz.so.1.2.5
40e20000 40e21000 rwxp /lib/libz.so.1.2.5
40e21000 40e24000 r-xp /usr/lib/libEGL.so.1.4
40e2b000 40e2c000 rwxp /usr/lib/libEGL.so.1.4
40e2c000 40e42000 r-xp /lib/libexpat.so.1.5.2
40e4a000 40e4c000 rwxp /lib/libexpat.so.1.5.2
40e4c000 40e6f000 r-xp /usr/lib/libjpeg.so.8.0.2
40e76000 40e77000 rwxp /usr/lib/libjpeg.so.8.0.2
40e87000 40e8c000 r-xp /usr/lib/libecore_fb.so.1.7.99
40e93000 40e95000 rwxp /usr/lib/libecore_fb.so.1.7.99
40e96000 40e9a000 r-xp /usr/lib/libecore_ipc.so.1.7.99
40ea2000 40ea3000 rwxp /usr/lib/libecore_ipc.so.1.7.99
40ea3000 40ea6000 r-xp /usr/lib/libecore_input_evas.so.1.7.99
40ead000 40eae000 rwxp /usr/lib/libecore_input_evas.so.1.7.99
40eae000 40ef2000 r-xp /usr/lib/libcurl.so.4.3.0
40ef9000 40efb000 rwxp /usr/lib/libcurl.so.4.3.0
40efb000 40f01000 r-xp /usr/lib/libcapi-base-common.so.0.1.8
40f09000 40f0a000 rwxp /usr/lib/libcapi-base-common.so.0.1.8
40f0b000 40f0c000 r-xp /usr/lib/libgthread-2.0.so.0.3200.3
40f13000 40f14000 rwxp /usr/lib/libgthread-2.0.so.0.3200.3
40f14000 40f19000 r-xp /usr/lib/libffi.so.5.0.10
40f20000 40f21000 rwxp /usr/lib/libffi.so.5.0.10
40f21000 40ff4000 r-xp /usr/lib/libgio-2.0.so.0.3200.3
40ffb000 40fff000 rwxp /usr/lib/libgio-2.0.so.0.3200.3
40fff000 41017000 r-xp /usr/lib/liblzma.so.5.0.3
4101e000 4101f000 rwxp /usr/lib/liblzma.so.5.0.3
4101f000 4109b000 r-xp /usr/lib/libgcrypt.so.20.0.3
410a2000 410a7000 rwxp /usr/lib/libgcrypt.so.20.0.3
410a8000 410b8000 r-xp /lib/libresolv-2.13.so
410b8000 410b9000 r-xp /lib/libresolv-2.13.so
410b9000 410ba000 rwxp /lib/libresolv-2.13.so
410bc000 41188000 r-xp /usr/lib/libxml2.so.2.7.8
4118f000 41194000 rwxp /usr/lib/libxml2.so.2.7.8
41195000 41197000 r-xp /usr/lib/libSLP-db-util.so.0.1.0
4119f000 411a0000 rwxp /usr/lib/libSLP-db-util.so.0.1.0
411a0000 411a2000 r-xp /usr/lib/journal/libjournal.so.0.1.0
411a9000 411aa000 rwxp /usr/lib/journal/libjournal.so.0.1.0
411ab000 411ad000 r-xp /usr/lib/libXau.so.6.0.0
411b4000 411b5000 rwxp /usr/lib/libXau.so.6.0.0
411b5000 411be000 r-xp /usr/lib/libcares.so.2.1.0
411c6000 411c7000 rwxp /usr/lib/libcares.so.2.1.0
411c7000 411f5000 r-xp /usr/lib/libidn.so.11.5.44
411fc000 411fd000 rwxp /usr/lib/libidn.so.11.5.44
411fd000 4124a000 r-xp /usr/lib/libssl.so.1.0.0
41251000 41256000 rwxp /usr/lib/libssl.so.1.0.0
41256000 413fe000 r-xp /usr/lib/libcrypto.so.1.0.0
413fe000 41413000 rwxp /usr/lib/libcrypto.so.1.0.0
41418000 4141a000 r-xp /usr/lib/libgmodule-2.0.so.0.3200.3
41421000 41422000 rwxp /usr/lib/libgmodule-2.0.so.0.3200.3
41422000 4142d000 r-xp /usr/lib/libgpg-error.so.0.15.0
41434000 41435000 rwxp /usr/lib/libgpg-error.so.0.15.0
41439000 41503000 r-xp /usr/lib/libCOREGL.so.4.0
4150b000 4150d000 rwxp /usr/lib/libCOREGL.so.4.0
41515000 41539000 r-xp /usr/lib/ecore/immodules/libisf-imf-module.so
41540000 41542000 rwxp /usr/lib/ecore/immodules/libisf-imf-module.so
41542000 41611000 r-xp /usr/lib/libscim-1.0.so.8.2.3
41618000 41627000 rwxp /usr/lib/libscim-1.0.so.8.2.3
41627000 416bb000 r-xp /usr/lib/libstdc++.so.6.0.16
416c3000 416c6000 r-xp /usr/lib/libstdc++.so.6.0.16
416c6000 416c8000 rwxp /usr/lib/libstdc++.so.6.0.16
416ce000 416f4000 r-xp /usr/lib/libsecurity-server-client.so.1.0.1
416fc000 416fd000 rwxp /usr/lib/libsecurity-server-client.so.1.0.1
416fd000 41719000 r-xp /usr/lib/libsecurity-server-commons.so.1.0.0
41721000 41722000 rwxp /usr/lib/libsecurity-server-commons.so.1.0.0
41722000 41724000 r-xp /usr/lib/libiri.so
4172b000 4172c000 rwxp /usr/lib/libiri.so
4172c000 4172f000 r-xp /lib/libcap.so.2.21
41736000 41737000 rwxp /lib/libcap.so.2.21
41737000 4173e000 r-xp /lib/libcrypt-2.13.so
41745000 41746000 r-xp /lib/libcrypt-2.13.so
41746000 41747000 rwxp /lib/libcrypt-2.13.so
4176e000 41771000 r-xp /lib/libattr.so.1.1.0
41778000 41779000 rwxp /lib/libattr.so.1.1.0
41779000 41783000 r-xp /lib/libnss_files-2.13.so
4178a000 4178b000 r-xp /lib/libnss_files-2.13.so
4178b000 4178c000 rwxp /lib/libnss_files-2.13.so
4178c000 4198c000 r-xp /usr/share/locale/locale-archive
4198c000 41a03000 r-xp /usr/lib/evas/modules/engines/gl_x11/linux-gnueabi-armv7l-1.7.99/module.so
41a0b000 41a0d000 rwxp /usr/lib/evas/modules/engines/gl_x11/linux-gnueabi-armv7l-1.7.99/module.so
41a13000 41a1e000 r-xp /usr/lib/evas/modules/engines/software_generic/linux-gnueabi-armv7l-1.7.99/module.so
41a26000 41a27000 rwxp /usr/lib/evas/modules/engines/software_generic/linux-gnueabi-armv7l-1.7.99/module.so
41a27000 41b6f000 r-xp /usr/lib/egl/libMali.so
41b6f000 41b74000 rwxp /usr/lib/egl/libMali.so
41b74000 41b78000 r-xp /usr/lib/bufmgr/libtbm_exynos4412.so.0.0.0
41b7f000 41b80000 rwxp /usr/lib/bufmgr/libtbm_exynos4412.so.0.0.0
41b80000 41b88000 rwxs /dev/mali
41b88000 41b90000 r-xp /usr/lib/libdrm.so.2.4.0
41b97000 41b98000 rwxp /usr/lib/libdrm.so.2.4.0
41b98000 41b9f000 r-xp /usr/lib/libtbm.so.1.0.0
41ba6000 41ba7000 rwxp /usr/lib/libtbm.so.1.0.0
41ba7000 41baa000 r-xp /usr/lib/libnative-buffer.so.0.1.0
41bb1000 41bb2000 rwxp /usr/lib/libnative-buffer.so.0.1.0
41cb2000 41cba000 rwxs /dev/mali
41cba000 41cce000 r-xs /opt/home/app/.cache/evas_gl_common_caches/ARM::OpenGL
41cce000 41cd2000 rwxs /dev/mali
41cd2000 41cd6000 rwxs /dev/mali
41cd6000 41cde000 rwxs /dev/mali
41cde000 41ce6000 rwxs /dev/mali
41ce6000 41ce8000 r-xp /usr/share/locale/en_US/LC_MESSAGES/elementary.mo
41ce8000 41cea000 r-xp /usr/share/locale/en/LC_MESSAGES/elementary.mo
41cea000 41cf7000 rwxp [heap]
41cf7000 41d90000 rwxp [heap]
41d91000 42590000 rwxp [stack:21446]
42590000 4274e000 r-xs /usr/share/elementary/themes/tizen-2.3-wearable-circle-HVGA.edj
4274e000 42765000 r-xp /usr/lib/edje/modules/elm/linux-gnueabi-armv7l-1.0.0/module.so
4276d000 42772000 rwxp /usr/lib/edje/modules/elm/linux-gnueabi-armv7l-1.0.0/module.so
bee0d000 bee2e000 rwxp [stack]
End of Maps Information

Callstack Information (PID:21443)
Call Stack Count: 1
 0: app_resume + 0x61 (0x400011ca) [/opt/usr/apps/org.example.gears2robotcontrol/bin/gears2robotcontrol] + 0x11ca
End of Call Stack

Package Information
Package Name: org.example.gears2robotcontrol
Package ID : org.example.gears2robotcontrol
Version: 1.0.0
Package Type: rpm
App Name: Robot Control
App ID: org.example.gears2robotcontrol
Type: capp
Categories: 

Latest Debug Message Information
--------- beginning of /dev/log_main
ent_manager.c: _state_control(194) > control:4, app_state:2 win_state:0(1) pm_state:0 home_visible:1 clock_visible:1 tutorial_state:0 editing : 0, home_clocklist:0, addviewer:0 scrolling : 0, powersaving : 0, apptray state : 1, apptray visibility : 0, apptray edit visibility : 0
02-23 17:18:21.582+0000 W/W_HOME  (  711): event_manager.c: _state_control(194) > control:2, app_state:2 win_state:0(1) pm_state:0 home_visible:1 clock_visible:1 tutorial_state:0 editing : 0, home_clocklist:0, addviewer:0 scrolling : 0, powersaving : 0, apptray state : 1, apptray visibility : 0, apptray edit visibility : 0
02-23 17:18:21.582+0000 W/W_HOME  (  711): event_manager.c: _state_control(194) > control:1, app_state:2 win_state:0(1) pm_state:0 home_visible:1 clock_visible:1 tutorial_state:0 editing : 0, home_clocklist:0, addviewer:0 scrolling : 0, powersaving : 0, apptray state : 1, apptray visibility : 0, apptray edit visibility : 0
02-23 17:18:21.582+0000 W/W_HOME  (  711): main.c: _ecore_x_message_cb(1222) > main_info.is_win_on_top: 1
02-23 17:18:22.067+0000 W/AUL_AMD (  476): amd_key.c: _key_ungrab(254) > fail(-1) to ungrab key(XF86Stop)
02-23 17:18:22.067+0000 W/AUL_AMD (  476): amd_launch.c: __grab_timeout_handler(1362) > back key ungrab error
02-23 17:18:22.292+0000 E/RESOURCED( 1113): proc-stat.c: send_socket_with_repy(767) > [send_socket_with_repy,767] send_socket_with_repy: read failed
02-23 17:18:22.292+0000 E/AUL     ( 1113): pkginfo.c: __get_id_bypid(197) > Failed to get the cmdline of pid, error: -1
02-23 17:18:22.292+0000 E/CAPI_APPFW_APP_MANAGER( 1113): app_manager.c: app_manager_error(76) > [app_context_get_app_context_by_pid] No such application(0xfeef0001)
02-23 17:18:22.522+0000 I/AUL_PAD (21359): launchpad_loader.c: main(603) > [candidate] elm init, returned: 1
02-23 17:18:34.237+0000 I/GESTURE (  138): gesture.c: GestureHandleKeyPressEvent(3712) > [GestureHandleKeyPressEvent] Ignore key press in DPMS off (devid:7) keycode=166
02-23 17:18:34.437+0000 W/wnotibp (20323): wnotiboard-popup-view.c: _wnotibp_event_lcd_on_cb(1405) > ::APP:: view state=0, 2, 0
02-23 17:18:34.487+0000 W/WATCH_CORE(  753): appcore-watch.c: __signal_lcd_status_handler(1130) > signal_lcd_status_signal: LCDOn
02-23 17:18:34.487+0000 I/WATCH_CORE(  753): appcore-watch.c: __signal_lcd_status_handler(1134) > Skip the background tick update
02-23 17:18:34.487+0000 W/W_HOME  (  711): dbus.c: _dbus_message_recv_cb(186) > LCD on
02-23 17:18:34.487+0000 W/W_HOME  (  711): gesture.c: _manual_render_disable_timer_set(161) > timer set
02-23 17:18:34.487+0000 W/W_HOME  (  711): gesture.c: _manual_render_disable_timer_del(151) > timer del
02-23 17:18:34.492+0000 W/W_HOME  (  711): gesture.c: _apps_status_get(123) > apps status:0
02-23 17:18:34.492+0000 W/W_HOME  (  711): gesture.c: _lcd_on_cb(295) > move_to_clock:1 clock_visible:1 info->offtime:510046
02-23 17:18:34.492+0000 W/W_HOME  (  711): gesture.c: _manual_render_schedule(211) > schedule, manual render
02-23 17:18:34.492+0000 W/W_HOME  (  711): event_manager.c: _lcd_on_cb(691) > lcd state: 1
02-23 17:18:34.492+0000 W/W_HOME  (  711): event_manager.c: _state_control(194) > control:4, app_state:2 win_state:0(1) pm_state:1 home_visible:1 clock_visible:1 tutorial_state:0 editing : 0, home_clocklist:0, addviewer:0 scrolling : 0, powersaving : 0, apptray state : 1, apptray visibility : 0, apptray edit visibility : 0
02-23 17:18:34.497+0000 W/W_HOME  (  711): event_manager.c: _state_control(342) > appcore resumed manually
02-23 17:18:34.497+0000 W/W_HOME  (  711): main.c: home_appcore_resume(708) > Home Appcore Resumed
02-23 17:18:34.497+0000 W/W_HOME  (  711): event_manager.c: _app_resume_cb(355) > state: 2 -> 1
02-23 17:18:34.497+0000 W/W_HOME  (  711): event_manager.c: _state_control(194) > control:2, app_state:1 win_state:0(1) pm_state:1 home_visible:1 clock_visible:1 tutorial_state:0 editing : 0, home_clocklist:0, addviewer:0 scrolling : 0, powersaving : 0, apptray state : 1, apptray visibility : 0, apptray edit visibility : 0
02-23 17:18:34.497+0000 W/W_HOME  (  711): event_manager.c: _state_control(194) > control:0, app_state:1 win_state:0(1) pm_state:1 home_visible:1 clock_visible:1 tutorial_state:0 editing : 0, home_clocklist:0, addviewer:0 scrolling : 0, powersaving : 0, apptray state : 1, apptray visibility : 0, apptray edit visibility : 0
02-23 17:18:34.497+0000 W/W_HOME  (  711): main.c: home_resume(729) > journal_appcore_app_fully_loaded called
02-23 17:18:34.497+0000 W/W_HOME  (  711): main.c: home_resume(733) > clock/widget resumed
02-23 17:18:34.502+0000 W/W_HOME  (  711): event_manager.c: _state_control(194) > control:1, app_state:1 win_state:0(1) pm_state:1 home_visible:1 clock_visible:1 tutorial_state:0 editing : 0, home_clocklist:0, addviewer:0 scrolling : 0, powersaving : 0, apptray state : 1, apptray visibility : 0, apptray edit visibility : 0
02-23 17:18:34.502+0000 I/GESTURE (  138): gesture.c: BackGestureSetProperty(4497) > [BackGestureSetProperty] atom=_E_MOVE_W_HOME_CLOCK_STATE, value=1, Clock display 
02-23 17:18:34.512+0000 W/STARTER (  692): clock-mgr.c: _on_lcd_signal_receive_cb(1519) > [_on_lcd_signal_receive_cb:1519] _on_lcd_signal_receive_cb, 1519, Pre LCD on by [powerkey] after screen off time [510046]ms
02-23 17:18:34.512+0000 W/STARTER (  692): clock-mgr.c: _pre_lcd_on(1245) > [_pre_lcd_on:1245] Will LCD ON as reserved app[(null)] alpm mode[0]
02-23 17:18:34.537+0000 W/WATCH_CORE(  753): appcore-watch.c: __widget_resume(1012) > widget_resume
02-23 17:18:34.542+0000 I/CAPI_WATCH_APPLICATION(  753): watch_app_main.c: _watch_core_time_tick(306) > _watch_core_time_tick
02-23 17:18:34.562+0000 I/SCONTEXT-LIB(  619): scontext.c: context_add_changed_cb(211) > [SUCCESS] Set Changed CB: 42 (req_id=775)
02-23 17:18:34.587+0000 I/APP_CORE(  711): appcore-efl.c: __do_app(429) > [APP 711] Event: RESUME State: RUNNING
02-23 17:18:34.627+0000 W/W_HOME  (  711): gesture.c: _widget_updated_cb(190) > widget updated
02-23 17:18:34.627+0000 W/W_HOME  (  711): gesture.c: _manual_render_disable_timer_del(151) > timer del
02-23 17:18:34.627+0000 W/W_HOME  (  711): gesture.c: _manual_render(176) > 
02-23 17:18:34.667+0000 I/SHealth_Common( 1113): SystemUtil.cpp: OnDeviceStatusChanged(679) > [1;35mlcdState:1[0;m
02-23 17:18:34.667+0000 I/SHealth_Service( 1113): SHealthServiceController.cpp: OnSystemUtilLcdStateChanged(668) > [1;35m ###[0;m
02-23 17:18:34.672+0000 W/MUSIC_CONTROL_SERVICE( 1069): music-control-consumer-control.c: _music_control_consumer_display_state_changed_cb(478) > [36m[TID:1069]   [MUSIC_PLAYER_EVENT]DISPLAY_STATE_NORMAL[0m
02-23 17:18:34.682+0000 W/W_HOME  (  711): gesture.c: _manual_render(176) > 
02-23 17:18:34.727+0000 W/STARTER (  692): clock-mgr.c: _on_lcd_signal_receive_cb(1530) > [_on_lcd_signal_receive_cb:1530] _on_lcd_signal_receive_cb, 1530, Post LCD on by [powerkey]
02-23 17:18:34.727+0000 W/STARTER (  692): clock-mgr.c: _post_lcd_on(1291) > [_post_lcd_on:1291] LCD ON as reserved app[(null)] alpm mode[0]
02-23 17:18:34.752+0000 W/W_HOME  (  711): gesture.c: _manual_render_enable(133) > 0
02-23 17:18:34.767+0000 W/WAKEUP-SERVICE( 1062): WakeupService.cpp: OnReceiveDisplayChanged(905) > [0;32mINFO: LCDOn receive data : 1124317744[0;m
02-23 17:18:34.767+0000 W/WAKEUP-SERVICE( 1062): WakeupService.cpp: WakeupServiceStart(357) > [0;32mINFO: SEAMLESS WAKEUP START REQUEST[0;m
02-23 17:18:34.772+0000 I/TIZEN_N_SOUND_MANAGER( 1062): sound_manager_product.c: sound_manager_svoice_set_param(1239) > [SVOICE] set param [keyword length] : 0
02-23 17:18:34.792+0000 W/TIZEN_N_SOUND_MANAGER( 1062): sound_manager_private.c: __convert_sound_manager_error_code(96) > [sound_manager_svoice_set_param] ERROR_NONE (0x00000000)
02-23 17:18:34.797+0000 I/TIZEN_N_SOUND_MANAGER( 1062): sound_manager_product.c: sound_manager_svoice_wakeup_enable(1207) > [SVOICE] Wake up Enable start
02-23 17:18:34.842+0000 E/CAPI_APPFW_APPLICATION_PREFERENCE( 1113): preference.c: _preference_check_retry_err(507) > key(pedometer_inactive_period), check retry err: -21/(2/No such file or directory).
02-23 17:18:34.897+0000 E/CAPI_APPFW_APPLICATION_PREFERENCE( 1113): preference.c: _preference_get_key(1101) > _preference_get_key(pedometer_inactive_period) step(-17825744) failed(2 / No such file or directory)
02-23 17:18:34.897+0000 E/CAPI_APPFW_APPLICATION_PREFERENCE( 1113): preference.c: preference_get_double(1214) > preference_get_double(1113) : pedometer_inactive_period error
02-23 17:18:34.902+0000 E/CAPI_APPFW_APPLICATION_PREFERENCE( 1113): preference.c: _preference_check_retry_err(507) > key(inactive_10min_precaution_millisec), check retry err: -21/(2/No such file or directory).
02-23 17:18:34.902+0000 E/CAPI_APPFW_APPLICATION_PREFERENCE( 1113): preference.c: _preference_get_key(1101) > _preference_get_key(inactive_10min_precaution_millisec) step(-17825744) failed(2 / No such file or directory)
02-23 17:18:34.902+0000 E/CAPI_APPFW_APPLICATION_PREFERENCE( 1113): preference.c: preference_get_double(1214) > preference_get_double(1113) : inactive_10min_precaution_millisec error
02-23 17:18:34.902+0000 E/CAPI_APPFW_APPLICATION_PREFERENCE( 1113): preference.c: _preference_check_retry_err(507) > key(inactive_before_10min_precaution_millisec), check retry err: -21/(2/No such file or directory).
02-23 17:18:34.902+0000 E/CAPI_APPFW_APPLICATION_PREFERENCE( 1113): preference.c: _preference_get_key(1101) > _preference_get_key(inactive_before_10min_precaution_millisec) step(-17825744) failed(2 / No such file or directory)
02-23 17:18:34.902+0000 E/CAPI_APPFW_APPLICATION_PREFERENCE( 1113): preference.c: preference_get_double(1214) > preference_get_double(1113) : inactive_before_10min_precaution_millisec error
02-23 17:18:35.007+0000 I/CAPI_WATCH_APPLICATION(  753): watch_app_main.c: _watch_core_time_tick(306) > _watch_core_time_tick
02-23 17:18:35.102+0000 I/TIZEN_N_SOUND_MANAGER( 1062): sound_manager_product.c: sound_manager_svoice_wakeup_enable(1210) > [SVOICE] Wake up Enable end. (ret: 0x0)
02-23 17:18:35.102+0000 W/TIZEN_N_SOUND_MANAGER( 1062): sound_manager_private.c: __convert_sound_manager_error_code(96) > [sound_manager_svoice_wakeup_enable] ERROR_NONE (0x00000000)
02-23 17:18:35.102+0000 W/WAKEUP-SERVICE( 1062): WakeupService.cpp: WakeupSetSeamlessValue(350) > [0;32mINFO: WAKEUP SET : 1[0;m
02-23 17:18:35.102+0000 I/HIGEAR  ( 1062): WakeupService.cpp: WakeupServiceStart(381) > [svoice:Application:WakeupServiceStart:IN]
02-23 17:18:35.357+0000 W/STARTER (  692): hw_key.c: _key_press_cb(1200) > [_key_press_cb:1200] POWER Key is pressed
02-23 17:18:35.357+0000 W/STARTER (  692): hw_key.c: _key_press_cb(1203) > [_key_press_cb:1203] LCD state : 1
02-23 17:18:35.357+0000 W/STARTER (  692): hw_key.c: _key_press_cb(1210) > [_key_press_cb:1210] PM state : 1
02-23 17:18:35.357+0000 W/STARTER (  692): hw_key.c: _key_press_cb(1224) > [_key_press_cb:1224] powerkey count : 1
02-23 17:18:35.507+0000 I/MESSAGE_PORT(  438): MessagePortIpcServer.cpp: OnReadMessage(739) > _MessagePortIpcServer::OnReadMessage
02-23 17:18:35.507+0000 I/MESSAGE_PORT(  438): MessagePortIpcServer.cpp: HandleReceivedMessage(578) > _MessagePortIpcServer::HandleReceivedMessage
02-23 17:18:35.507+0000 I/MESSAGE_PORT(  438): MessagePortStub.cpp: OnIpcRequestReceived(147) > MessagePort message received
02-23 17:18:35.507+0000 I/MESSAGE_PORT(  438): MessagePortStub.cpp: OnCheckRemotePort(115) > _MessagePortStub::OnCheckRemotePort.
02-23 17:18:35.507+0000 I/MESSAGE_PORT(  438): MessagePortService.cpp: CheckRemotePort(207) > _MessagePortService::CheckRemotePort
02-23 17:18:35.507+0000 I/MESSAGE_PORT(  438): MessagePortService.cpp: GetKey(365) > _MessagePortService::GetKey
02-23 17:18:35.507+0000 I/MESSAGE_PORT(  438): MessagePortService.cpp: CheckRemotePort(220) > Check a remote message port: [com.samsung.w-music-player.music-control-service:music-control-service-request-message-port]
02-23 17:18:35.507+0000 I/MESSAGE_PORT(  438): MessagePortIpcServer.cpp: Send(847) > _MessagePortIpcServer::Stop
02-23 17:18:35.507+0000 I/MESSAGE_PORT(  438): MessagePortIpcServer.cpp: OnReadMessage(739) > _MessagePortIpcServer::OnReadMessage
02-23 17:18:35.507+0000 I/MESSAGE_PORT(  438): MessagePortIpcServer.cpp: HandleReceivedMessage(578) > _MessagePortIpcServer::HandleReceivedMessage
02-23 17:18:35.507+0000 I/MESSAGE_PORT(  438): MessagePortStub.cpp: OnIpcRequestReceived(147) > MessagePort message received
02-23 17:18:35.507+0000 I/MESSAGE_PORT(  438): MessagePortStub.cpp: OnSendMessage(126) > MessagePort OnSendMessage
02-23 17:18:35.507+0000 I/MESSAGE_PORT(  438): MessagePortService.cpp: SendMessage(291) > _MessagePortService::SendMessage
02-23 17:18:35.507+0000 I/MESSAGE_PORT(  438): MessagePortService.cpp: GetKey(365) > _MessagePortService::GetKey
02-23 17:18:35.507+0000 I/MESSAGE_PORT(  438): MessagePortService.cpp: SendMessage(299) > Sends a message to a remote message port [com.samsung.w-music-player.music-control-service:music-control-service-request-message-port]
02-23 17:18:35.507+0000 I/MESSAGE_PORT(  438): MessagePortStub.cpp: SendMessage(138) > MessagePort SendMessage
02-23 17:18:35.507+0000 I/MESSAGE_PORT(  438): MessagePortIpcServer.cpp: SendResponse(884) > _MessagePortIpcServer::SendResponse
02-23 17:18:35.507+0000 I/MESSAGE_PORT(  438): MessagePortIpcServer.cpp: Send(847) > _MessagePortIpcServer::Stop
02-23 17:18:35.507+0000 E/CAPI_APPFW_APP_CONTROL( 1069): app_control.c: app_control_error(133) > [app_control_get_caller] INVALID_PARAMETER(0xffffffea) : invalid app_control handle type
02-23 17:18:35.507+0000 W/MUSIC_CONTROL_SERVICE( 1069): music-control-service.c: _music_control_service_pasre_request(409) > [33m[TID:1069]   value = [true][0m
02-23 17:18:35.512+0000 W/AUL_AMD (  476): amd_request.c: __request_handler(640) > __request_handler: 14
02-23 17:18:35.522+0000 W/AUL_AMD (  476): amd_request.c: __send_result_to_client(83) > __send_result_to_client, pid: 711
02-23 17:18:35.537+0000 W/MUSIC_CONTROL_SERVICE( 1069): music-control-message.c: music_control_message_send_media_changed_ind(229) > [36m[TID:1069]   [MUSIC_PLAYER_EVENT][0m
02-23 17:18:35.537+0000 I/MESSAGE_PORT(  438): MessagePortIpcServer.cpp: OnReadMessage(739) > _MessagePortIpcServer::OnReadMessage
02-23 17:18:35.537+0000 I/MESSAGE_PORT(  438): MessagePortIpcServer.cpp: HandleReceivedMessage(578) > _MessagePortIpcServer::HandleReceivedMessage
02-23 17:18:35.537+0000 I/MESSAGE_PORT(  438): MessagePortStub.cpp: OnIpcRequestReceived(147) > MessagePort message received
02-23 17:18:35.537+0000 I/MESSAGE_PORT(  438): MessagePortStub.cpp: OnCheckRemotePort(115) > _MessagePortStub::OnCheckRemotePort.
02-23 17:18:35.537+0000 I/MESSAGE_PORT(  438): MessagePortService.cpp: CheckRemotePort(207) > _MessagePortService::CheckRemotePort
02-23 17:18:35.537+0000 I/MESSAGE_PORT(  438): MessagePortService.cpp: GetKey(365) > _MessagePortService::GetKey
02-23 17:18:35.537+0000 I/MESSAGE_PORT(  438): MessagePortService.cpp: CheckRemotePort(220) > Check a remote message port: [com.samsung.w-home:music-control-service-message-port]
02-23 17:18:35.537+0000 I/MESSAGE_PORT(  438): MessagePortIpcServer.cpp: Send(847) > _MessagePortIpcServer::Stop
02-23 17:18:35.542+0000 I/MESSAGE_PORT(  438): MessagePortIpcServer.cpp: OnReadMessage(739) > _MessagePortIpcServer::OnReadMessage
02-23 17:18:35.542+0000 I/MESSAGE_PORT(  438): MessagePortIpcServer.cpp: HandleReceivedMessage(578) > _MessagePortIpcServer::HandleReceivedMessage
02-23 17:18:35.542+0000 I/MESSAGE_PORT(  438): MessagePortStub.cpp: OnIpcRequestReceived(147) > MessagePort message received
02-23 17:18:35.542+0000 I/MESSAGE_PORT(  438): MessagePortStub.cpp: OnSendMessage(126) > MessagePort OnSendMessage
02-23 17:18:35.542+0000 I/MESSAGE_PORT(  438): MessagePortService.cpp: SendMessage(291) > _MessagePortService::SendMessage
02-23 17:18:35.542+0000 I/MESSAGE_PORT(  438): MessagePortService.cpp: GetKey(365) > _MessagePortService::GetKey
02-23 17:18:35.542+0000 I/MESSAGE_PORT(  438): MessagePortService.cpp: SendMessage(299) > Sends a message to a remote message port [com.samsung.w-home:music-control-service-message-port]
02-23 17:18:35.542+0000 I/MESSAGE_PORT(  438): MessagePortStub.cpp: SendMessage(138) > MessagePort SendMessage
02-23 17:18:35.542+0000 I/MESSAGE_PORT(  438): MessagePortIpcServer.cpp: SendResponse(884) > _MessagePortIpcServer::SendResponse
02-23 17:18:35.542+0000 I/MESSAGE_PORT(  438): MessagePortIpcServer.cpp: Send(847) > _MessagePortIpcServer::Stop
02-23 17:18:35.542+0000 W/MUSIC_CONTROL_SERVICE( 1069): music-control-message.c: music_control_message_send_player_state_changed_ind(254) > [36m[TID:1069]   [MUSIC_PLAYER_EVENT][0m
02-23 17:18:35.547+0000 I/MESSAGE_PORT(  438): MessagePortIpcServer.cpp: OnReadMessage(739) > _MessagePortIpcServer::OnReadMessage
02-23 17:18:35.547+0000 I/MESSAGE_PORT(  438): MessagePortIpcServer.cpp: HandleReceivedMessage(578) > _MessagePortIpcServer::HandleReceivedMessage
02-23 17:18:35.547+0000 I/MESSAGE_PORT(  438): MessagePortStub.cpp: OnIpcRequestReceived(147) > MessagePort message received
02-23 17:18:35.547+0000 I/MESSAGE_PORT(  438): MessagePortStub.cpp: OnCheckRemotePort(115) > _MessagePortStub::OnCheckRemotePort.
02-23 17:18:35.547+0000 I/MESSAGE_PORT(  438): MessagePortService.cpp: CheckRemotePort(207) > _MessagePortService::CheckRemotePort
02-23 17:18:35.547+0000 I/MESSAGE_PORT(  438): MessagePortService.cpp: GetKey(365) > _MessagePortService::GetKey
02-23 17:18:35.547+0000 I/MESSAGE_PORT(  438): MessagePortService.cpp: CheckRemotePort(220) > Check a remote message port: [com.samsung.w-home:music-control-service-message-port]
02-23 17:18:35.547+0000 I/MESSAGE_PORT(  438): MessagePortIpcServer.cpp: Send(847) > _MessagePortIpcServer::Stop
02-23 17:18:35.547+0000 I/MESSAGE_PORT(  438): MessagePortIpcServer.cpp: OnReadMessage(739) > _MessagePortIpcServer::OnReadMessage
02-23 17:18:35.547+0000 I/MESSAGE_PORT(  438): MessagePortIpcServer.cpp: HandleReceivedMessage(578) > _MessagePortIpcServer::HandleReceivedMessage
02-23 17:18:35.547+0000 I/MESSAGE_PORT(  438): MessagePortStub.cpp: OnIpcRequestReceived(147) > MessagePort message received
02-23 17:18:35.552+0000 I/MESSAGE_PORT(  438): MessagePortStub.cpp: OnSendMessage(126) > MessagePort OnSendMessage
02-23 17:18:35.552+0000 I/MESSAGE_PORT(  438): MessagePortService.cpp: SendMessage(291) > _MessagePortService::SendMessage
02-23 17:18:35.552+0000 I/MESSAGE_PORT(  438): MessagePortService.cpp: GetKey(365) > _MessagePortService::GetKey
02-23 17:18:35.552+0000 I/MESSAGE_PORT(  438): MessagePortService.cpp: SendMessage(299) > Sends a message to a remote message port [com.samsung.w-home:music-control-service-message-port]
02-23 17:18:35.552+0000 I/MESSAGE_PORT(  438): MessagePortStub.cpp: SendMessage(138) > MessagePort SendMessage
02-23 17:18:35.552+0000 I/MESSAGE_PORT(  438): MessagePortIpcServer.cpp: SendResponse(884) > _MessagePortIpcServer::SendResponse
02-23 17:18:35.552+0000 I/MESSAGE_PORT(  438): MessagePortIpcServer.cpp: Send(847) > _MessagePortIpcServer::Stop
02-23 17:18:35.562+0000 W/W_HOME  (  711): clock_shortcut.c: _music_service_messageport_cb(361) > mode:remote state:unknown 
02-23 17:18:35.562+0000 E/W_HOME  (  711): clock_shortcut.c: _mp_state_get(104) > (s_info.music_service.state != 1) -> _mp_state_get() return
02-23 17:18:35.562+0000 W/W_HOME  (  711): clock_shortcut.c: _music_service_messageport_cb(361) > mode:remote state:unknown 
02-23 17:18:35.562+0000 E/W_HOME  (  711): clock_shortcut.c: _mp_state_get(104) > (s_info.music_service.state != 1) -> _mp_state_get() return
02-23 17:18:35.602+0000 W/STARTER (  692): hw_key.c: _key_release_cb(1124) > [_key_release_cb:1124] POWER Key is released
02-23 17:18:35.702+0000 W/STARTER (  692): hw_key.c: _key_press_cb(1200) > [_key_press_cb:1200] POWER Key is pressed
02-23 17:18:35.702+0000 W/STARTER (  692): hw_key.c: _key_press_cb(1203) > [_key_press_cb:1203] LCD state : 1
02-23 17:18:35.702+0000 W/STARTER (  692): hw_key.c: _key_press_cb(1210) > [_key_press_cb:1210] PM state : 1
02-23 17:18:35.702+0000 W/STARTER (  692): hw_key.c: _key_press_cb(1224) > [_key_press_cb:1224] powerkey count : 2
02-23 17:18:35.772+0000 W/STARTER (  692): hw_key.c: _key_release_cb(1124) > [_key_release_cb:1124] POWER Key is released
02-23 17:18:36.007+0000 I/CAPI_WATCH_APPLICATION(  753): watch_app_main.c: _watch_core_time_tick(306) > _watch_core_time_tick
02-23 17:18:36.027+0000 W/STARTER (  692): hw_key.c: _powerkey_timer_cb(806) > [_powerkey_timer_cb:806] _powerkey_timer_cb, powerkey count[2]
02-23 17:18:36.027+0000 W/STARTER (  692): hw_key.c: _powerkey_timer_cb(909) > [_powerkey_timer_cb:909] powerkey double press
02-23 17:18:36.037+0000 E/STARTER (  692): dbus-util.c: dbus_request_cpu_boost(337) > [dbus_request_cpu_boost:337] failed to _invoke_dbus_method_sync
02-23 17:18:36.042+0000 W/AUL_AMD (  476): amd_request.c: __request_handler(640) > __request_handler: 0
02-23 17:18:36.052+0000 W/AUL_AMD (  476): amd_launch.c: _start_app(1659) > caller pid : 692
02-23 17:18:36.067+0000 W/AUL_AMD (  476): amd_launch.c: _start_app(2026) > pad pid(-5)
02-23 17:18:36.067+0000 W/AUL_PAD ( 1134): launchpad.c: __launchpad_main_loop(512) > Launch on type-based process-pool
02-23 17:18:36.067+0000 W/AUL_PAD ( 1134): launchpad.c: __send_result_to_caller(265) > Check app launching
02-23 17:18:36.072+0000 E/RESOURCED(  478): heart-memory.c: heart_memory_get_data(601) > [heart_memory_get_data,601] hashtable heart_memory_app_list is NULL
02-23 17:18:36.087+0000 I/CAPI_APPFW_APPLICATION(20630): app_main.c: app_efl_main(129) > app_efl_main
02-23 17:18:36.092+0000 I/CAPI_APPFW_APPLICATION(20630): app_main.c: app_appcore_create(152) > app_appcore_create
02-23 17:18:36.172+0000 E/RESOURCED(  478): proc-main.c: proc_add_program_list(233) > [proc_add_program_list,233] not found ppi : com.samsung.w-taskmanager
02-23 17:18:36.327+0000 I/efl-extension(20630): efl_extension_circle_surface.c: _eext_circle_surface_resize_cb(642) > surface 0x4452dd18 = w: 0 h: 0  obj 0x44537b58 w: 360 h: 360
02-23 17:18:36.332+0000 I/efl-extension(20630): efl_extension_circle_surface.c: _eext_circle_surface_resize_cb(666) > Surface will be initialized! surface->w= 360 surface->h = 360
02-23 17:18:36.332+0000 I/efl-extension(20630): efl_extension_rotary.c: eext_rotary_object_event_callback_add(147) > In
02-23 17:18:36.332+0000 I/efl-extension(20630): efl_extension_rotary.c: eext_rotary_event_handler_add(77) > init_count: 0
02-23 17:18:36.337+0000 I/efl-extension(20630): efl_extension_rotary.c: _init_Xi2_system(314) > In
02-23 17:18:36.337+0000 I/efl-extension(20630): efl_extension_rotary.c: _init_Xi2_system(375) > Done
02-23 17:18:36.337+0000 I/efl-extension(20630): efl_extension_rotary.c: eext_rotary_object_event_activated_set(283) > eext_rotary_object_event_activated_set : 0x44537b58, elm_image, _activated_obj : 0x0, activated : 1
02-23 17:18:36.492+0000 E/W_TASKMANAGER(20630): util_wc1.c: close_button_disabled_set(364) > [close_button_disabled_set:364] (ad->ly_main == NULL) -> close_button_disabled_set() return
02-23 17:18:36.497+0000 E/W_TASKMANAGER(20630): pkgmgr.c: pkgmgr_init(396) > [pkgmgr_init:396] (pkgmgr_client_listen_status(pkg_mgr_info.listen_pc, _pkgmgr_cb, data) != PKGMGR_R_OK) -> pkgmgr_init() return
02-23 17:18:36.497+0000 E/W_TASKMANAGER(20630): taskmanager.c: _app_create(315) > [_app_create:315] cannot init pkgmgr
02-23 17:18:36.572+0000 W/AUL_AMD (  476): amd_request.c: __request_handler(640) > __request_handler: 12
02-23 17:18:36.572+0000 E/W_TASKMANAGER(20630): task.c: _iterfunc(553) > [_iterfunc:553] Fail to get ai table !!
02-23 17:18:36.577+0000 E/W_TASKMANAGER(20630): task.c: _iterfunc(553) > [_iterfunc:553] Fail to get ai table !!
02-23 17:18:36.577+0000 E/W_TASKMANAGER(20630): task.c: _iterfunc(553) > [_iterfunc:553] Fail to get ai table !!
02-23 17:18:36.577+0000 E/W_TASKMANAGER(20630): task.c: _iterfunc(553) > [_iterfunc:553] Fail to get ai table !!
02-23 17:18:36.577+0000 E/W_TASKMANAGER(20630): task.c: _iterfunc(553) > [_iterfunc:553] Fail to get ai table !!
02-23 17:18:36.577+0000 E/W_TASKMANAGER(20630): task.c: _iterfunc(553) > [_iterfunc:553] Fail to get ai table !!
02-23 17:18:36.577+0000 E/W_TASKMANAGER(20630): task.c: _iterfunc(553) > [_iterfunc:553] Fail to get ai table !!
02-23 17:18:36.577+0000 E/W_TASKMANAGER(20630): task.c: _iterfunc(553) > [_iterfunc:553] Fail to get ai table !!
02-23 17:18:36.577+0000 E/W_TASKMANAGER(20630): task.c: _iterfunc(553) > [_iterfunc:553] Fail to get ai table !!
02-23 17:18:36.577+0000 E/W_TASKMANAGER(20630): task.c: _iterfunc(553) > [_iterfunc:553] Fail to get ai table !!
02-23 17:18:36.577+0000 E/W_TASKMANAGER(20630): task.c: _iterfunc(553) > [_iterfunc:553] Fail to get ai table !!
02-23 17:18:36.577+0000 E/W_TASKMANAGER(20630): task.c: _iterfunc(553) > [_iterfunc:553] Fail to get ai table !!
02-23 17:18:36.577+0000 E/W_TASKMANAGER(20630): task.c: _iterfunc(553) > [_iterfunc:553] Fail to get ai table !!
02-23 17:18:36.577+0000 E/W_TASKMANAGER(20630): task.c: _iterfunc(553) > [_iterfunc:553] Fail to get ai table !!
02-23 17:18:36.577+0000 E/W_TASKMANAGER(20630): task.c: _iterfunc(553) > [_iterfunc:553] Fail to get ai table !!
02-23 17:18:36.577+0000 E/W_TASKMANAGER(20630): task.c: _iterfunc(553) > [_iterfunc:553] Fail to get ai table !!
02-23 17:18:36.577+0000 E/W_TASKMANAGER(20630): task.c: _iterfunc(553) > [_iterfunc:553] Fail to get ai table !!
02-23 17:18:36.577+0000 E/W_TASKMANAGER(20630): task.c: _iterfunc(553) > [_iterfunc:553] Fail to get ai table !!
02-23 17:18:36.577+0000 E/W_TASKMANAGER(20630): task.c: _iterfunc(553) > [_iterfunc:553] Fail to get ai table !!
02-23 17:18:36.577+0000 E/W_TASKMANAGER(20630): task.c: _iterfunc(553) > [_iterfunc:553] Fail to get ai table !!
02-23 17:18:36.577+0000 E/W_TASKMANAGER(20630): task.c: _iterfunc(553) > [_iterfunc:553] Fail to get ai table !!
02-23 17:18:36.577+0000 E/W_TASKMANAGER(20630): task.c: _iterfunc(553) > [_iterfunc:553] Fail to get ai table !!
02-23 17:18:36.577+0000 E/W_TASKMANAGER(20630): task.c: _iterfunc(553) > [_iterfunc:553] Fail to get ai table !!
02-23 17:18:36.587+0000 E/RUA     (20630): rua.c: rua_history_load_db(278) > rua_history_load_db ok. nrows : 42, ncols : 5
02-23 17:18:36.742+0000 E/EFL     (20630): elementary<20630> elm_layout.c:1020 _elm_layout_smart_content_set() could not swallow 0x445397d8 into part 'elm.swallow.event.0'
02-23 17:18:36.852+0000 I/APP_CORE(20630): appcore-efl.c: __do_app(429) > [APP 20630] Event: RESET State: CREATED
02-23 17:18:36.852+0000 I/CAPI_APPFW_APPLICATION(20630): app_main.c: app_appcore_reset(245) > app_appcore_reset
02-23 17:18:36.857+0000 E/E17     (  409): e_manager.c: _e_manager_cb_window_show_request(1128) > Show request(0x07a00003)
02-23 17:18:36.907+0000 I/APP_CORE(20630): appcore-efl.c: __do_app(472) > Legacy lifecycle: 0
02-23 17:18:36.907+0000 I/APP_CORE(20630): appcore-efl.c: __do_app(474) > [APP 20630] Initial Launching, call the resume_cb
02-23 17:18:36.907+0000 I/CAPI_APPFW_APPLICATION(20630): app_main.c: app_appcore_resume(223) > app_appcore_resume
02-23 17:18:36.937+0000 I/MALI    (  711): egl_platform_x11_tizen.c: tizen_update_native_surface_private(194) > [EGL-X11] surface->[0x442b64c8] swap changed from sync to async
02-23 17:18:36.942+0000 E/E17     (  409): e_manager.c: _e_manager_cb_client_message(1506) > ACTIVE REQUEST(0x07a00003)
02-23 17:18:36.947+0000 W/W_HOME  (  711): event_manager.c: _ecore_x_message_cb(403) > state: 0 -> 1
02-23 17:18:36.947+0000 W/W_HOME  (  711): event_manager.c: _state_control(194) > control:4, app_state:1 win_state:1(1) pm_state:1 home_visible:1 clock_visible:1 tutorial_state:0 editing : 0, home_clocklist:0, addviewer:0 scrolling : 0, powersaving : 0, apptray state : 1, apptray visibility : 0, apptray edit visibility : 0
02-23 17:18:36.947+0000 W/W_HOME  (  711): event_manager.c: _state_control(194) > control:2, app_state:1 win_state:1(1) pm_state:1 home_visible:1 clock_visible:1 tutorial_state:0 editing : 0, home_clocklist:0, addviewer:0 scrolling : 0, powersaving : 0, apptray state : 1, apptray visibility : 0, apptray edit visibility : 0
02-23 17:18:36.962+0000 W/W_HOME  (  711): event_manager.c: _state_control(194) > control:1, app_state:1 win_state:1(1) pm_state:1 home_visible:1 clock_visible:1 tutorial_state:0 editing : 0, home_clocklist:0, addviewer:0 scrolling : 0, powersaving : 0, apptray state : 1, apptray visibility : 0, apptray edit visibility : 0
02-23 17:18:36.962+0000 W/W_HOME  (  711): main.c: _ecore_x_message_cb(1222) > main_info.is_win_on_top: 0
02-23 17:18:36.962+0000 I/GESTURE (  138): gesture.c: BackGestureSetProperty(4502) > [BackGestureSetProperty] atom=_E_MOVE_W_HOME_CLOCK_STATE, value=0, No clock display 
02-23 17:18:36.967+0000 W/APP_CORE(20630): appcore-efl.c: __show_cb(787) > [EVENT_TEST][EVENT] GET SHOW EVENT!!!. WIN:7a00003
02-23 17:18:37.002+0000 I/CAPI_WATCH_APPLICATION(  753): watch_app_main.c: _watch_core_time_tick(306) > _watch_core_time_tick
02-23 17:18:37.072+0000 W/AUL_AMD (  476): amd_key.c: _key_ungrab(254) > fail(-1) to ungrab key(XF86Stop)
02-23 17:18:37.072+0000 W/AUL_AMD (  476): amd_launch.c: __e17_status_handler(2194) > back key ungrab error
02-23 17:18:37.087+0000 I/APP_CORE(20630): appcore-efl.c: __do_app(429) > [APP 20630] Event: RESUME State: RUNNING
02-23 17:18:37.102+0000 W/W_HOME  (  711): event_manager.c: _window_visibility_cb(448) > Window [0x2600003] is now visible(1)
02-23 17:18:37.102+0000 W/W_HOME  (  711): event_manager.c: _window_visibility_cb(458) > state: 1 -> 0
02-23 17:18:37.102+0000 W/W_HOME  (  711): event_manager.c: _state_control(194) > control:4, app_state:1 win_state:1(0) pm_state:1 home_visible:1 clock_visible:1 tutorial_state:0 editing : 0, home_clocklist:0, addviewer:0 scrolling : 0, powersaving : 0, apptray state : 1, apptray visibility : 0, apptray edit visibility : 0
02-23 17:18:37.102+0000 W/W_HOME  (  711): event_manager.c: _state_control(333) > appcore paused manually
02-23 17:18:37.102+0000 W/W_HOME  (  711): main.c: home_appcore_pause(717) > Home Appcore Paused
02-23 17:18:37.102+0000 W/W_HOME  (  711): event_manager.c: _app_pause_cb(372) > state: 1 -> 2
02-23 17:18:37.102+0000 W/W_HOME  (  711): event_manager.c: _state_control(194) > control:2, app_state:2 win_state:1(0) pm_state:1 home_visible:1 clock_visible:1 tutorial_state:0 editing : 0, home_clocklist:0, addviewer:0 scrolling : 0, powersaving : 0, apptray state : 1, apptray visibility : 0, apptray edit visibility : 0
02-23 17:18:37.102+0000 W/W_HOME  (  711): event_manager.c: _state_control(194) > control:0, app_state:2 win_state:1(0) pm_state:1 home_visible:1 clock_visible:1 tutorial_state:0 editing : 0, home_clocklist:0, addviewer:0 scrolling : 0, powersaving : 0, apptray state : 1, apptray visibility : 0, apptray edit visibility : 0
02-23 17:18:37.102+0000 W/W_HOME  (  711): main.c: home_pause(751) > clock/widget paused
02-23 17:18:37.102+0000 W/W_HOME  (  711): event_manager.c: _state_control(194) > control:1, app_state:2 win_state:1(0) pm_state:1 home_visible:1 clock_visible:1 tutorial_state:0 editing : 0, home_clocklist:0, addviewer:0 scrolling : 0, powersaving : 0, apptray state : 1, apptray visibility : 0, apptray edit visibility : 0
02-23 17:18:37.102+0000 I/MESSAGE_PORT(  438): MessagePortIpcServer.cpp: OnReadMessage(739) > _MessagePortIpcServer::OnReadMessage
02-23 17:18:37.102+0000 I/MESSAGE_PORT(  438): MessagePortIpcServer.cpp: HandleReceivedMessage(578) > _MessagePortIpcServer::HandleReceivedMessage
02-23 17:18:37.102+0000 I/MESSAGE_PORT(  438): MessagePortStub.cpp: OnIpcRequestReceived(147) > MessagePort message received
02-23 17:18:37.102+0000 I/MESSAGE_PORT(  438): MessagePortStub.cpp: OnCheckRemotePort(115) > _MessagePortStub::OnCheckRemotePort.
02-23 17:18:37.102+0000 I/MESSAGE_PORT(  438): MessagePortService.cpp: CheckRemotePort(207) > _MessagePortService::CheckRemotePort
02-23 17:18:37.102+0000 I/MESSAGE_PORT(  438): MessagePortService.cpp: GetKey(365) > _MessagePortService::GetKey
02-23 17:18:37.102+0000 I/MESSAGE_PORT(  438): MessagePortService.cpp: CheckRemotePort(220) > Check a remote message port: [com.samsung.w-music-player.music-control-service:music-control-service-request-message-port]
02-23 17:18:37.102+0000 I/MESSAGE_PORT(  438): MessagePortIpcServer.cpp: Send(847) > _MessagePortIpcServer::Stop
02-23 17:18:37.107+0000 I/MESSAGE_PORT(  438): MessagePortIpcServer.cpp: OnReadMessage(739) > _MessagePortIpcServer::OnReadMessage
02-23 17:18:37.107+0000 I/MESSAGE_PORT(  438): MessagePortIpcServer.cpp: HandleReceivedMessage(578) > _MessagePortIpcServer::HandleReceivedMessage
02-23 17:18:37.107+0000 I/MESSAGE_PORT(  438): MessagePortStub.cpp: OnIpcRequestReceived(147) > MessagePort message received
02-23 17:18:37.107+0000 I/MESSAGE_PORT(  438): MessagePortStub.cpp: OnSendMessage(126) > MessagePort OnSendMessage
02-23 17:18:37.107+0000 I/MESSAGE_PORT(  438): MessagePortService.cpp: SendMessage(291) > _MessagePortService::SendMessage
02-23 17:18:37.107+0000 I/MESSAGE_PORT(  438): MessagePortService.cpp: GetKey(365) > _MessagePortService::GetKey
02-23 17:18:37.107+0000 I/MESSAGE_PORT(  438): MessagePortService.cpp: SendMessage(299) > Sends a message to a remote message port [com.samsung.w-music-player.music-control-service:music-control-service-request-message-port]
02-23 17:18:37.107+0000 I/MESSAGE_PORT(  438): MessagePortStub.cpp: SendMessage(138) > MessagePort SendMessage
02-23 17:18:37.107+0000 I/MESSAGE_PORT(  438): MessagePortIpcServer.cpp: SendResponse(884) > _MessagePortIpcServer::SendResponse
02-23 17:18:37.112+0000 I/MESSAGE_PORT(  438): MessagePortIpcServer.cpp: Send(847) > _MessagePortIpcServer::Stop
02-23 17:18:37.112+0000 W/W_HOME  (  711): main.c: _window_visibility_cb(1189) > Window [0x2600003] is now visible(1)
02-23 17:18:37.112+0000 I/APP_CORE(  711): appcore-efl.c: __do_app(429) > [APP 711] Event: PAUSE State: RUNNING
02-23 17:18:37.112+0000 I/CAPI_APPFW_APPLICATION(  711): app_main.c: app_appcore_pause(202) > app_appcore_pause
02-23 17:18:37.112+0000 W/W_HOME  (  711): main.c: _appcore_pause_cb(690) > appcore pause
02-23 17:18:37.112+0000 E/W_HOME  (  711): main.c: _pause_cb(668) > paused already
02-23 17:18:37.142+0000 E/CAPI_APPFW_APP_CONTROL( 1069): app_control.c: app_control_error(133) > [app_control_get_caller] INVALID_PARAMETER(0xffffffea) : invalid app_control handle type
02-23 17:18:37.142+0000 W/MUSIC_CONTROL_SERVICE( 1069): music-control-service.c: _music_control_service_pasre_request(409) > [33m[TID:1069]   value = [false][0m
02-23 17:18:37.197+0000 W/AUL_AMD (  476): amd_request.c: __request_handler(640) > __request_handler: 14
02-23 17:18:37.207+0000 W/AUL_AMD (  476): amd_request.c: __send_result_to_client(83) > __send_result_to_client, pid: 20630
02-23 17:18:37.207+0000 W/AUL_AMD (  476): amd_request.c: __request_handler(640) > __request_handler: 12
02-23 17:18:37.257+0000 I/wnotib  (  711): w-notification-board-broker-main.c: _wnotib_ecore_x_event_visibility_changed_cb(701) > fully_obscured: 1
02-23 17:18:37.257+0000 E/wnotib  (  711): w-notification-board-action-drawer.c: wnotib_action_drawer_hidden_get(4570) > [NULL==g_wnotib_action_drawer_data] msg Drawer not initialized.
02-23 17:18:37.302+0000 W/WATCH_CORE(  753): appcore-watch.c: __widget_pause(1001) > widget_pause
02-23 17:18:37.502+0000 I/MALI    (20630): egl_platform_x11_tizen.c: tizen_update_native_surface_private(176) > [EGL-X11] surface->[0x414efd68] swap changed from async to sync
02-23 17:18:37.612+0000 I/APP_CORE(  711): appcore-efl.c: __do_app(429) > [APP 711] Event: MEM_FLUSH State: PAUSED
02-23 17:18:37.652+0000 I/efl-extension(21427): efl_extension.c: eext_mod_init(40) > Init
02-23 17:18:37.707+0000 I/UXT     (21427): Uxt_ObjectManager.cpp: OnInitialized(731) > Initialized.
02-23 17:18:37.742+0000 E/EFL     (20630): elementary<20630> elm_interface_scrollable.c:3964 _elm_scroll_mouse_move_event_cb() [DDO] obj(444ec908), block(1)
02-23 17:18:37.742+0000 E/EFL     (20630): elementary<20630> elm_interface_scrollable.c:3978 _elm_scroll_mouse_move_event_cb() [DDO] obj(444ec908), ev->cur.canvas.x(169) ev->cur.canvas.y(162)
02-23 17:18:37.742+0000 E/EFL     (20630): elementary<20630> elm_interface_scrollable.c:3979 _elm_scroll_mouse_move_event_cb() [DDO] obj(444ec908), hold(0) freeze(0)
02-23 17:18:37.742+0000 E/EFL     (20630): evas_main<20630> evas_events.c:994 evas_event_feed_mouse_down() ButtonEvent:down time=15608678 button=1 downs=1
02-23 17:18:37.762+0000 E/EFL     (20630): elementary<20630> elm_interface_scrollable.c:3964 _elm_scroll_mouse_move_event_cb() [DDO] obj(444ec908), block(1)
02-23 17:18:37.762+0000 E/EFL     (20630): elementary<20630> elm_interface_scrollable.c:3978 _elm_scroll_mouse_move_event_cb() [DDO] obj(444ec908), ev->cur.canvas.x(169) ev->cur.canvas.y(163)
02-23 17:18:37.762+0000 E/EFL     (20630): elementary<20630> elm_interface_scrollable.c:3979 _elm_scroll_mouse_move_event_cb() [DDO] obj(444ec908), hold(0) freeze(0)
02-23 17:18:37.782+0000 E/EFL     (20630): elementary<20630> elm_interface_scrollable.c:3964 _elm_scroll_mouse_move_event_cb() [DDO] obj(444ec908), block(1)
02-23 17:18:37.782+0000 E/EFL     (20630): elementary<20630> elm_interface_scrollable.c:3978 _elm_scroll_mouse_move_event_cb() [DDO] obj(444ec908), ev->cur.canvas.x(165) ev->cur.canvas.y(163)
02-23 17:18:37.782+0000 E/EFL     (20630): elementary<20630> elm_interface_scrollable.c:3979 _elm_scroll_mouse_move_event_cb() [DDO] obj(444ec908), hold(0) freeze(0)
02-23 17:18:37.792+0000 E/EFL     (20630): elementary<20630> elm_interface_scrollable.c:3964 _elm_scroll_mouse_move_event_cb() [DDO] obj(444ec908), block(1)
02-23 17:18:37.792+0000 E/EFL     (20630): elementary<20630> elm_interface_scrollable.c:3978 _elm_scroll_mouse_move_event_cb() [DDO] obj(444ec908), ev->cur.canvas.x(148) ev->cur.canvas.y(163)
02-23 17:18:37.792+0000 E/EFL     (20630): elementary<20630> elm_interface_scrollable.c:3979 _elm_scroll_mouse_move_event_cb() [DDO] obj(444ec908), hold(0) freeze(0)
02-23 17:18:37.802+0000 E/EFL     (20630): evas_main<20630> evas_events.c:1258 evas_event_feed_mouse_up() ButtonEvent:up time=15608743 button=1 downs=0
02-23 17:18:37.827+0000 W/AUL_AMD (  476): amd_request.c: __request_handler(640) > __request_handler: 14
02-23 17:18:37.837+0000 W/AUL_AMD (  476): amd_request.c: __send_result_to_client(83) > __send_result_to_client, pid: -1
02-23 17:18:37.842+0000 W/AUL_AMD (  476): amd_request.c: __request_handler(640) > __request_handler: 0
02-23 17:18:37.847+0000 W/AUL_AMD (  476): amd_launch.c: _start_app(1659) > caller pid : 20630
02-23 17:18:37.862+0000 W/AUL_AMD (  476): amd_launch.c: _start_app(2026) > pad pid(-5)
02-23 17:18:37.862+0000 W/AUL_PAD ( 1134): launchpad.c: __launchpad_main_loop(512) > Launch on type-based process-pool
02-23 17:18:37.862+0000 W/AUL_PAD ( 1134): launchpad.c: __send_result_to_caller(265) > Check app launching
02-23 17:18:37.867+0000 E/RESOURCED(  478): block.c: block_prelaunch_state(134) > [block_prelaunch_state,134] insert data org.example.gears2robotcontrol, table num : 5
02-23 17:18:37.867+0000 E/RESOURCED(  478): heart-memory.c: heart_memory_get_data(601) > [heart_memory_get_data,601] hashtable heart_memory_app_list is NULL
02-23 17:18:37.872+0000 I/AUL_PAD (21427): launchpad_loader.c: main(603) > [candidate] elm init, returned: 1
02-23 17:18:37.882+0000 I/efl-extension(21359): efl_extension.c: eext_mod_init(40) > Init
02-23 17:18:37.882+0000 D/main    (21359): app start
02-23 17:18:37.882+0000 I/CAPI_APPFW_APPLICATION(21359): app_main.c: ui_app_main(704) > app_efl_main
02-23 17:18:37.887+0000 I/CAPI_APPFW_APPLICATION(21359): app_main.c: _ui_app_appcore_create(563) > app_appcore_create
02-23 17:18:37.887+0000 D/main    (21359): resolved remote socket address 192.168.43.218, 21234
02-23 17:18:37.887+0000 D/main    (21359): Socket created: 23
02-23 17:18:37.887+0000 D/main    (21359): get_UDPsocket: 
02-23 17:18:37.887+0000 D/main    (21359): app_create: udp connection success
02-23 17:18:37.912+0000 E/TBM     (21359): tbm_bufmgr.c: _tbm_bufmgr_init_state(674) > USE TGL LOCK!
02-23 17:18:37.927+0000 E/TBM     (21427): tbm_bufmgr.c: _tbm_bufmgr_init_state(674) > USE TGL LOCK!
02-23 17:18:37.947+0000 I/efl-extension(21359): efl_extension_rotary.c: eext_rotary_event_handler_add(77) > init_count: 0
02-23 17:18:37.947+0000 I/efl-extension(21359): efl_extension_rotary.c: _init_Xi2_system(314) > In
02-23 17:18:37.947+0000 E/E17     (  409): e_manager.c: _e_manager_cb_window_show_request(1128) > Show request(0x02e00002)
02-23 17:18:37.952+0000 I/efl-extension(21359): efl_extension_rotary.c: _init_Xi2_system(375) > Done
02-23 17:18:37.967+0000 E/W_TASKMANAGER(20630): task.c: taskmanager_launch_task_info(888) > [taskmanager_launch_task_info:888] _launch_app() failed(21359)
02-23 17:18:37.972+0000 E/RESOURCED(  478): proc-main.c: proc_add_program_list(233) > [proc_add_program_list,233] not found ppi : org.example.gears2robotcontrol
02-23 17:18:37.997+0000 I/APP_CORE(21359): appcore-efl.c: __do_app(429) > [APP 21359] Event: RESET State: CREATED
02-23 17:18:37.997+0000 I/CAPI_APPFW_APPLICATION(21359): app_main.c: _ui_app_appcore_reset(645) > app_appcore_reset
02-23 17:18:38.022+0000 I/APP_CORE(21359): appcore-efl.c: __do_app(472) > Legacy lifecycle: 0
02-23 17:18:38.022+0000 I/APP_CORE(21359): appcore-efl.c: __do_app(474) > [APP 21359] Initial Launching, call the resume_cb
02-23 17:18:38.022+0000 I/CAPI_APPFW_APPLICATION(21359): app_main.c: _ui_app_appcore_resume(628) > app_appcore_resume
02-23 17:18:38.022+0000 D/main    (21359): APP_RESUME: Start message sent
02-23 17:18:38.082+0000 W/CRASH_MANAGER(21034): worker.c: worker_job(1199) > 11213596765611456247918
02-23 17:18:38.392+0000 I/AUL_AMD (  476): amd_main.c: __app_dead_handler(261) > __app_dead_handler, pid: 21359
02-23 17:18:38.447+0000 I/MALI    (20630): egl_platform_x11_tizen.c: tizen_update_native_surface_private(194) > [EGL-X11] surface->[0x414efd68] swap changed from sync to async
02-23 17:18:38.887+0000 I/MALI    (20630): egl_platform_x11_tizen.c: tizen_update_native_surface_private(176) > [EGL-X11] surface->[0x414efd68] swap changed from async to sync
02-23 17:18:38.977+0000 E/RESOURCED( 1113): proc-stat.c: send_socket_with_repy(767) > [send_socket_with_repy,767] send_socket_with_repy: read failed
02-23 17:18:38.977+0000 E/AUL     ( 1113): pkginfo.c: __get_id_bypid(197) > Failed to get the cmdline of pid, error: -1
02-23 17:18:38.977+0000 E/CAPI_APPFW_APP_MANAGER( 1113): app_manager.c: app_manager_error(76) > [app_context_get_app_context_by_pid] No such application(0xfeef0001)
02-23 17:18:39.252+0000 I/AUL_PAD (21440): launchpad_loader.c: main(603) > [candidate] elm init, returned: 1
02-23 17:18:39.707+0000 E/EFL     (20630): elementary<20630> elm_interface_scrollable.c:3964 _elm_scroll_mouse_move_event_cb() [DDO] obj(444ec908), block(1)
02-23 17:18:39.707+0000 E/EFL     (20630): elementary<20630> elm_interface_scrollable.c:3978 _elm_scroll_mouse_move_event_cb() [DDO] obj(444ec908), ev->cur.canvas.x(177) ev->cur.canvas.y(187)
02-23 17:18:39.707+0000 E/EFL     (20630): elementary<20630> elm_interface_scrollable.c:3979 _elm_scroll_mouse_move_event_cb() [DDO] obj(444ec908), hold(0) freeze(0)
02-23 17:18:39.712+0000 E/EFL     (20630): evas_main<20630> evas_events.c:994 evas_event_feed_mouse_down() ButtonEvent:down time=15610643 button=1 downs=1
02-23 17:18:39.727+0000 E/EFL     (20630): elementary<20630> elm_interface_scrollable.c:3964 _elm_scroll_mouse_move_event_cb() [DDO] obj(444ec908), block(1)
02-23 17:18:39.727+0000 E/EFL     (20630): elementary<20630> elm_interface_scrollable.c:3978 _elm_scroll_mouse_move_event_cb() [DDO] obj(444ec908), ev->cur.canvas.x(178) ev->cur.canvas.y(186)
02-23 17:18:39.727+0000 E/EFL     (20630): elementary<20630> elm_interface_scrollable.c:3979 _elm_scroll_mouse_move_event_cb() [DDO] obj(444ec908), hold(0) freeze(0)
02-23 17:18:39.747+0000 E/EFL     (20630): elementary<20630> elm_interface_scrollable.c:3964 _elm_scroll_mouse_move_event_cb() [DDO] obj(444ec908), block(1)
02-23 17:18:39.747+0000 E/EFL     (20630): elementary<20630> elm_interface_scrollable.c:3978 _elm_scroll_mouse_move_event_cb() [DDO] obj(444ec908), ev->cur.canvas.x(178) ev->cur.canvas.y(185)
02-23 17:18:39.747+0000 E/EFL     (20630): elementary<20630> elm_interface_scrollable.c:3979 _elm_scroll_mouse_move_event_cb() [DDO] obj(444ec908), hold(0) freeze(0)
02-23 17:18:39.757+0000 E/EFL     (20630): elementary<20630> elm_interface_scrollable.c:3964 _elm_scroll_mouse_move_event_cb() [DDO] obj(444ec908), block(1)
02-23 17:18:39.757+0000 E/EFL     (20630): elementary<20630> elm_interface_scrollable.c:3978 _elm_scroll_mouse_move_event_cb() [DDO] obj(444ec908), ev->cur.canvas.x(177) ev->cur.canvas.y(185)
02-23 17:18:39.757+0000 E/EFL     (20630): elementary<20630> elm_interface_scrollable.c:3979 _elm_scroll_mouse_move_event_cb() [DDO] obj(444ec908), hold(0) freeze(0)
02-23 17:18:39.772+0000 E/EFL     (20630): evas_main<20630> evas_events.c:1258 evas_event_feed_mouse_up() ButtonEvent:up time=15610709 button=1 downs=0
02-23 17:18:39.792+0000 W/AUL_AMD (  476): amd_request.c: __request_handler(640) > __request_handler: 14
02-23 17:18:39.802+0000 W/AUL_AMD (  476): amd_request.c: __send_result_to_client(83) > __send_result_to_client, pid: -1
02-23 17:18:39.802+0000 W/AUL_AMD (  476): amd_request.c: __request_handler(640) > __request_handler: 0
02-23 17:18:39.807+0000 W/AUL_AMD (  476): amd_launch.c: _start_app(1659) > caller pid : 20630
02-23 17:18:39.822+0000 W/AUL_AMD (  476): amd_launch.c: _start_app(2026) > pad pid(-5)
02-23 17:18:39.822+0000 W/AUL_PAD ( 1134): launchpad.c: __launchpad_main_loop(526) > Candidate is not prepared, enter legacy logic
02-23 17:18:39.822+0000 W/AUL_PAD ( 1134): launchpad.c: __send_result_to_caller(265) > Check app launching
02-23 17:18:39.822+0000 W/AUL_AMD (  476): amd_launch.c: _start_app(2037) > Launch with legacy way : no launchpad
02-23 17:18:39.822+0000 E/RESOURCED(  478): block.c: block_prelaunch_state(134) > [block_prelaunch_state,134] insert data org.example.gears2robotcontrol, table num : 5
02-23 17:18:39.827+0000 E/RESOURCED(  478): heart-memory.c: heart_memory_get_data(601) > [heart_memory_get_data,601] hashtable heart_memory_app_list is NULL
02-23 17:18:39.832+0000 W/AUL_AMD (  476): amd_launch.c: start_process(573) > child process: 21443
02-23 17:18:39.882+0000 W/AUL_AMD (  476): amd_launch.c: __send_app_launch_signal(376) > send launch signal done: 21443
02-23 17:18:39.882+0000 E/W_TASKMANAGER(20630): task.c: taskmanager_launch_task_info(888) > [taskmanager_launch_task_info:888] _launch_app() failed(21443)
02-23 17:18:39.887+0000 E/RESOURCED(  478): proc-main.c: proc_add_program_list(233) > [proc_add_program_list,233] not found ppi : org.example.gears2robotcontrol
02-23 17:18:39.927+0000 I/efl-extension(21443): efl_extension.c: eext_mod_init(40) > Init
02-23 17:18:39.927+0000 D/main    (21443): app start
02-23 17:18:39.932+0000 W/AUL_AMD (  476): amd_request.c: __request_handler(640) > __request_handler: 14
02-23 17:18:39.937+0000 W/AUL_AMD (  476): amd_request.c: __send_result_to_client(83) > __send_result_to_client, pid: 21443
02-23 17:18:39.942+0000 W/AUL_AMD (  476): amd_request.c: __request_handler(640) > __request_handler: 12
02-23 17:18:39.957+0000 I/CAPI_APPFW_APPLICATION(21443): app_main.c: ui_app_main(704) > app_efl_main
02-23 17:18:40.197+0000 I/CAPI_APPFW_APPLICATION(21443): app_main.c: _ui_app_appcore_create(563) > app_appcore_create
02-23 17:18:40.202+0000 D/main    (21443): resolved remote socket address 192.168.43.218, 21234
02-23 17:18:40.202+0000 D/main    (21443): Socket created: 21
02-23 17:18:40.202+0000 D/main    (21443): get_UDPsocket: 
02-23 17:18:40.202+0000 D/main    (21443): app_create: udp connection success
02-23 17:18:40.232+0000 E/TBM     (21443): tbm_bufmgr.c: _tbm_bufmgr_init_state(674) > USE TGL LOCK!
02-23 17:18:40.402+0000 E/E17     (  409): e_manager.c: _e_manager_cb_window_show_request(1128) > Show request(0x07600003)
02-23 17:18:40.452+0000 I/MALI    (20630): egl_platform_x11_tizen.c: tizen_update_native_surface_private(194) > [EGL-X11] surface->[0x414efd68] swap changed from sync to async
02-23 17:18:40.467+0000 I/efl-extension(21443): efl_extension_rotary.c: eext_rotary_event_handler_add(77) > init_count: 0
02-23 17:18:40.467+0000 I/efl-extension(21443): efl_extension_rotary.c: _init_Xi2_system(314) > In
02-23 17:18:40.472+0000 I/efl-extension(21443): efl_extension_rotary.c: _init_Xi2_system(375) > Done
02-23 17:18:40.477+0000 I/APP_CORE(21443): appcore-efl.c: __do_app(429) > [APP 21443] Event: RESET State: CREATED
02-23 17:18:40.477+0000 I/CAPI_APPFW_APPLICATION(21443): app_main.c: _ui_app_appcore_reset(645) > app_appcore_reset
02-23 17:18:40.512+0000 I/APP_CORE(21443): appcore-efl.c: __do_app(472) > Legacy lifecycle: 0
02-23 17:18:40.512+0000 I/APP_CORE(21443): appcore-efl.c: __do_app(474) > [APP 21443] Initial Launching, call the resume_cb
02-23 17:18:40.512+0000 I/CAPI_APPFW_APPLICATION(21443): app_main.c: _ui_app_appcore_resume(628) > app_appcore_resume
02-23 17:18:40.512+0000 D/main    (21443): APP_RESUME: Start message sent
02-23 17:18:40.612+0000 W/CRASH_MANAGER(21034): worker.c: worker_job(1199) > 1121443676561145624792
