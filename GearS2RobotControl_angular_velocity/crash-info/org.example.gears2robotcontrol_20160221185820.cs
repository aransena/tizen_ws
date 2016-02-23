S/W Version Information
Model: SM-R720
Tizen-Version: 2.3.1.2
Build-Number: R720XXU2BOKK
Build-Date: 2015.11.27 18:01:21

Crash Information
Process Name: gears2robotcontrol
PID: 5335
Date: 2016-02-21 18:58:20+0000
Executable File Path: /opt/usr/apps/org.example.gears2robotcontrol/bin/gears2robotcontrol
Signal: 11
      (SIGSEGV)
      si_code: 1
      address not mapped to object
      si_addr = 0xc

Register Information
r0   = 0x00000001, r1   = 0x0000037c
r2   = 0x00000000, r3   = 0x400a5788
r4   = 0x400b3b18, r5   = 0x00000140
r6   = 0x00000000, r7   = 0x40000ed9
r8   = 0x00000000, r9   = 0x00000000
r10  = 0x40009a34, fp   = 0x00000000
ip   = 0x4009470d, sp   = 0xbec7e3e8
lr   = 0x40094745, pc   = 0x4008d06a
cpsr = 0x20000030

Memory Information
MemTotal:   491012 KB
MemFree:      8196 KB
Buffers:     19728 KB
Cached:     116032 KB
VmPeak:      23660 KB
VmSize:      23656 KB
VmLck:           0 KB
VmPin:           0 KB
VmHWM:        5892 KB
VmRSS:        5892 KB
VmData:       2604 KB
VmStk:         136 KB
VmExe:           8 KB
VmLib:       17632 KB
VmPTE:          28 KB
VmSwap:          0 KB

Maps Information
40000000 40002000 r-xp /opt/usr/apps/org.example.gears2robotcontrol/bin/gears2robotcontrol
40009000 4000a000 rwxp /opt/usr/apps/org.example.gears2robotcontrol/bin/gears2robotcontrol
4000a000 40027000 r-xp /lib/ld-2.13.so
4002e000 4002f000 r-xp /lib/ld-2.13.so
4002f000 40030000 rwxp /lib/ld-2.13.so
40030000 40034000 r-xp /usr/lib/libsys-assert.so
4003c000 4003d000 rwxp /usr/lib/libsys-assert.so
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
41a23000 41a44000 rwxp [heap]
bec5e000 bec7f000 rwxp [stack]
End of Maps Information

Callstack Information (PID:5335)
Call Stack Count: 3
 0: (0x4008d06a) [/usr/lib/libecore.so.1] + 0x706a
 1: ecore_timer_add + 0x38 (0x40094745) [/usr/lib/libecore.so.1] + 0xe745
 2: main + 0x68 (0x40000f7d) [/opt/usr/apps/org.example.gears2robotcontrol/bin/gears2robotcontrol] + 0xf7d
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
ePortService.cpp: CheckRemotePort(220) > Check a remote message port: [com.samsung.w-home:music-control-service-message-port]
02-21 18:58:11.141+0000 I/MESSAGE_PORT(  437): MessagePortIpcServer.cpp: Send(847) > _MessagePortIpcServer::Stop
02-21 18:58:11.146+0000 I/MESSAGE_PORT(  437): MessagePortIpcServer.cpp: OnReadMessage(739) > _MessagePortIpcServer::OnReadMessage
02-21 18:58:11.146+0000 I/MESSAGE_PORT(  437): MessagePortIpcServer.cpp: HandleReceivedMessage(578) > _MessagePortIpcServer::HandleReceivedMessage
02-21 18:58:11.146+0000 I/MESSAGE_PORT(  437): MessagePortStub.cpp: OnIpcRequestReceived(147) > MessagePort message received
02-21 18:58:11.146+0000 I/MESSAGE_PORT(  437): MessagePortStub.cpp: OnSendMessage(126) > MessagePort OnSendMessage
02-21 18:58:11.146+0000 I/MESSAGE_PORT(  437): MessagePortService.cpp: SendMessage(291) > _MessagePortService::SendMessage
02-21 18:58:11.146+0000 I/MESSAGE_PORT(  437): MessagePortService.cpp: GetKey(365) > _MessagePortService::GetKey
02-21 18:58:11.146+0000 I/MESSAGE_PORT(  437): MessagePortService.cpp: SendMessage(299) > Sends a message to a remote message port [com.samsung.w-home:music-control-service-message-port]
02-21 18:58:11.146+0000 I/MESSAGE_PORT(  437): MessagePortStub.cpp: SendMessage(138) > MessagePort SendMessage
02-21 18:58:11.146+0000 I/MESSAGE_PORT(  437): MessagePortIpcServer.cpp: SendResponse(884) > _MessagePortIpcServer::SendResponse
02-21 18:58:11.146+0000 I/MESSAGE_PORT(  437): MessagePortIpcServer.cpp: Send(847) > _MessagePortIpcServer::Stop
02-21 18:58:11.146+0000 I/MESSAGE_PORT(  437): MessagePortIpcServer.cpp: OnReadMessage(739) > _MessagePortIpcServer::OnReadMessage
02-21 18:58:11.151+0000 I/MESSAGE_PORT(  437): MessagePortIpcServer.cpp: HandleReceivedMessage(578) > _MessagePortIpcServer::HandleReceivedMessage
02-21 18:58:11.151+0000 I/MESSAGE_PORT(  437): MessagePortStub.cpp: OnIpcRequestReceived(147) > MessagePort message received
02-21 18:58:11.151+0000 I/MESSAGE_PORT(  437): MessagePortStub.cpp: OnCheckRemotePort(115) > _MessagePortStub::OnCheckRemotePort.
02-21 18:58:11.151+0000 I/MESSAGE_PORT(  437): MessagePortService.cpp: CheckRemotePort(207) > _MessagePortService::CheckRemotePort
02-21 18:58:11.151+0000 I/MESSAGE_PORT(  437): MessagePortService.cpp: GetKey(365) > _MessagePortService::GetKey
02-21 18:58:11.151+0000 I/MESSAGE_PORT(  437): MessagePortService.cpp: CheckRemotePort(220) > Check a remote message port: [com.samsung.w-home:music-control-service-message-port]
02-21 18:58:11.151+0000 I/MESSAGE_PORT(  437): MessagePortIpcServer.cpp: Send(847) > _MessagePortIpcServer::Stop
02-21 18:58:11.151+0000 I/MESSAGE_PORT(  437): MessagePortIpcServer.cpp: OnReadMessage(739) > _MessagePortIpcServer::OnReadMessage
02-21 18:58:11.151+0000 I/MESSAGE_PORT(  437): MessagePortIpcServer.cpp: HandleReceivedMessage(578) > _MessagePortIpcServer::HandleReceivedMessage
02-21 18:58:11.151+0000 I/MESSAGE_PORT(  437): MessagePortStub.cpp: OnIpcRequestReceived(147) > MessagePort message received
02-21 18:58:11.151+0000 I/MESSAGE_PORT(  437): MessagePortStub.cpp: OnSendMessage(126) > MessagePort OnSendMessage
02-21 18:58:11.151+0000 I/MESSAGE_PORT(  437): MessagePortService.cpp: SendMessage(291) > _MessagePortService::SendMessage
02-21 18:58:11.151+0000 I/MESSAGE_PORT(  437): MessagePortService.cpp: GetKey(365) > _MessagePortService::GetKey
02-21 18:58:11.156+0000 I/MESSAGE_PORT(  437): MessagePortService.cpp: SendMessage(299) > Sends a message to a remote message port [com.samsung.w-home:music-control-service-message-port]
02-21 18:58:11.156+0000 I/MESSAGE_PORT(  437): MessagePortStub.cpp: SendMessage(138) > MessagePort SendMessage
02-21 18:58:11.156+0000 I/MESSAGE_PORT(  437): MessagePortIpcServer.cpp: SendResponse(884) > _MessagePortIpcServer::SendResponse
02-21 18:58:11.156+0000 I/MESSAGE_PORT(  437): MessagePortIpcServer.cpp: Send(847) > _MessagePortIpcServer::Stop
02-21 18:58:11.166+0000 W/W_HOME  (  728): clock_shortcut.c: _music_service_messageport_cb(361) > mode:remote state:unknown 
02-21 18:58:11.166+0000 E/W_HOME  (  728): clock_shortcut.c: _mp_state_get(104) > (s_info.music_service.state != 1) -> _mp_state_get() return
02-21 18:58:11.221+0000 W/STARTER (  707): hw_key.c: _key_release_cb(1124) > [_key_release_cb:1124] POWER Key is released
02-21 18:58:11.341+0000 W/STARTER (  707): hw_key.c: _key_press_cb(1200) > [_key_press_cb:1200] POWER Key is pressed
02-21 18:58:11.341+0000 W/STARTER (  707): hw_key.c: _key_press_cb(1203) > [_key_press_cb:1203] LCD state : 1
02-21 18:58:11.341+0000 W/STARTER (  707): hw_key.c: _key_press_cb(1210) > [_key_press_cb:1210] PM state : 1
02-21 18:58:11.341+0000 W/STARTER (  707): hw_key.c: _key_press_cb(1224) > [_key_press_cb:1224] powerkey count : 2
02-21 18:58:11.426+0000 W/STARTER (  707): hw_key.c: _key_release_cb(1124) > [_key_release_cb:1124] POWER Key is released
02-21 18:58:11.686+0000 W/STARTER (  707): hw_key.c: _powerkey_timer_cb(806) > [_powerkey_timer_cb:806] _powerkey_timer_cb, powerkey count[2]
02-21 18:58:11.706+0000 W/STARTER (  707): hw_key.c: _powerkey_timer_cb(909) > [_powerkey_timer_cb:909] powerkey double press
02-21 18:58:11.751+0000 E/STARTER (  707): dbus-util.c: dbus_request_cpu_boost(337) > [dbus_request_cpu_boost:337] failed to _invoke_dbus_method_sync
02-21 18:58:11.751+0000 W/AUL_AMD (  475): amd_request.c: __request_handler(640) > __request_handler: 0
02-21 18:58:11.766+0000 W/AUL_AMD (  475): amd_launch.c: _start_app(1659) > caller pid : 707
02-21 18:58:11.771+0000 W/AUL_AMD (  475): amd_launch.c: _start_app(2026) > pad pid(-5)
02-21 18:58:11.771+0000 W/AUL_PAD ( 1043): launchpad.c: __launchpad_main_loop(512) > Launch on type-based process-pool
02-21 18:58:11.771+0000 W/AUL_PAD ( 1043): launchpad.c: __send_result_to_caller(265) > Check app launching
02-21 18:58:11.791+0000 E/RESOURCED(  477): heart-memory.c: heart_memory_get_data(601) > [heart_memory_get_data,601] hashtable heart_memory_app_list is NULL
02-21 18:58:11.796+0000 I/CAPI_APPFW_APPLICATION( 2221): app_main.c: app_efl_main(129) > app_efl_main
02-21 18:58:11.801+0000 I/CAPI_APPFW_APPLICATION( 2221): app_main.c: app_appcore_create(152) > app_appcore_create
02-21 18:58:11.881+0000 E/RESOURCED(  477): proc-main.c: proc_add_program_list(233) > [proc_add_program_list,233] not found ppi : com.samsung.w-taskmanager
02-21 18:58:11.976+0000 I/efl-extension( 2221): efl_extension_circle_surface.c: _eext_circle_surface_resize_cb(642) > surface 0x4506df90 = w: 0 h: 0  obj 0x45051400 w: 360 h: 360
02-21 18:58:11.976+0000 I/efl-extension( 2221): efl_extension_circle_surface.c: _eext_circle_surface_resize_cb(666) > Surface will be initialized! surface->w= 360 surface->h = 360
02-21 18:58:11.976+0000 I/efl-extension( 2221): efl_extension_rotary.c: eext_rotary_object_event_callback_add(147) > In
02-21 18:58:11.976+0000 I/efl-extension( 2221): efl_extension_rotary.c: eext_rotary_event_handler_add(77) > init_count: 0
02-21 18:58:11.976+0000 I/efl-extension( 2221): efl_extension_rotary.c: _init_Xi2_system(314) > In
02-21 18:58:11.981+0000 I/efl-extension( 2221): efl_extension_rotary.c: _init_Xi2_system(375) > Done
02-21 18:58:11.981+0000 I/efl-extension( 2221): efl_extension_rotary.c: eext_rotary_object_event_activated_set(283) > eext_rotary_object_event_activated_set : 0x45051400, elm_image, _activated_obj : 0x0, activated : 1
02-21 18:58:12.086+0000 E/W_TASKMANAGER( 2221): util_wc1.c: close_button_disabled_set(364) > [close_button_disabled_set:364] (ad->ly_main == NULL) -> close_button_disabled_set() return
02-21 18:58:12.091+0000 E/W_TASKMANAGER( 2221): pkgmgr.c: pkgmgr_init(396) > [pkgmgr_init:396] (pkgmgr_client_listen_status(pkg_mgr_info.listen_pc, _pkgmgr_cb, data) != PKGMGR_R_OK) -> pkgmgr_init() return
02-21 18:58:12.091+0000 E/W_TASKMANAGER( 2221): taskmanager.c: _app_create(315) > [_app_create:315] cannot init pkgmgr
02-21 18:58:12.146+0000 W/AUL_AMD (  475): amd_request.c: __request_handler(640) > __request_handler: 12
02-21 18:58:12.151+0000 E/W_TASKMANAGER( 2221): task.c: _iterfunc(553) > [_iterfunc:553] Fail to get ai table !!
02-21 18:58:12.151+0000 E/W_TASKMANAGER( 2221): task.c: _iterfunc(553) > [_iterfunc:553] Fail to get ai table !!
02-21 18:58:12.151+0000 E/W_TASKMANAGER( 2221): task.c: _iterfunc(553) > [_iterfunc:553] Fail to get ai table !!
02-21 18:58:12.151+0000 E/W_TASKMANAGER( 2221): task.c: _iterfunc(553) > [_iterfunc:553] Fail to get ai table !!
02-21 18:58:12.151+0000 E/W_TASKMANAGER( 2221): task.c: _iterfunc(553) > [_iterfunc:553] Fail to get ai table !!
02-21 18:58:12.151+0000 E/W_TASKMANAGER( 2221): task.c: _iterfunc(553) > [_iterfunc:553] Fail to get ai table !!
02-21 18:58:12.151+0000 E/W_TASKMANAGER( 2221): task.c: _iterfunc(553) > [_iterfunc:553] Fail to get ai table !!
02-21 18:58:12.151+0000 E/W_TASKMANAGER( 2221): task.c: _iterfunc(553) > [_iterfunc:553] Fail to get ai table !!
02-21 18:58:12.151+0000 E/W_TASKMANAGER( 2221): task.c: _iterfunc(553) > [_iterfunc:553] Fail to get ai table !!
02-21 18:58:12.151+0000 E/W_TASKMANAGER( 2221): task.c: _iterfunc(553) > [_iterfunc:553] Fail to get ai table !!
02-21 18:58:12.151+0000 E/W_TASKMANAGER( 2221): task.c: _iterfunc(553) > [_iterfunc:553] Fail to get ai table !!
02-21 18:58:12.151+0000 E/W_TASKMANAGER( 2221): task.c: _iterfunc(553) > [_iterfunc:553] Fail to get ai table !!
02-21 18:58:12.151+0000 E/W_TASKMANAGER( 2221): task.c: _iterfunc(553) > [_iterfunc:553] Fail to get ai table !!
02-21 18:58:12.151+0000 E/W_TASKMANAGER( 2221): task.c: _iterfunc(553) > [_iterfunc:553] Fail to get ai table !!
02-21 18:58:12.151+0000 E/W_TASKMANAGER( 2221): task.c: _iterfunc(553) > [_iterfunc:553] Fail to get ai table !!
02-21 18:58:12.151+0000 E/W_TASKMANAGER( 2221): task.c: _iterfunc(553) > [_iterfunc:553] Fail to get ai table !!
02-21 18:58:12.151+0000 E/W_TASKMANAGER( 2221): task.c: _iterfunc(553) > [_iterfunc:553] Fail to get ai table !!
02-21 18:58:12.151+0000 E/W_TASKMANAGER( 2221): task.c: _iterfunc(553) > [_iterfunc:553] Fail to get ai table !!
02-21 18:58:12.151+0000 E/W_TASKMANAGER( 2221): task.c: _iterfunc(553) > [_iterfunc:553] Fail to get ai table !!
02-21 18:58:12.151+0000 E/W_TASKMANAGER( 2221): task.c: _iterfunc(553) > [_iterfunc:553] Fail to get ai table !!
02-21 18:58:12.151+0000 E/W_TASKMANAGER( 2221): task.c: _iterfunc(553) > [_iterfunc:553] Fail to get ai table !!
02-21 18:58:12.156+0000 E/RUA     ( 2221): rua.c: rua_history_load_db(278) > rua_history_load_db ok. nrows : 28, ncols : 5
02-21 18:58:12.251+0000 E/EFL     ( 2221): elementary<2221> elm_layout.c:1020 _elm_layout_smart_content_set() could not swallow 0x45053080 into part 'elm.swallow.event.0'
02-21 18:58:12.296+0000 E/E17     (  418): e_manager.c: _e_manager_cb_window_show_request(1128) > Show request(0x06e00003)
02-21 18:58:12.296+0000 I/APP_CORE( 2221): appcore-efl.c: __do_app(429) > [APP 2221] Event: RESET State: CREATED
02-21 18:58:12.301+0000 I/CAPI_APPFW_APPLICATION( 2221): app_main.c: app_appcore_reset(245) > app_appcore_reset
02-21 18:58:12.316+0000 I/APP_CORE( 2221): appcore-efl.c: __do_app(472) > Legacy lifecycle: 0
02-21 18:58:12.321+0000 I/APP_CORE( 2221): appcore-efl.c: __do_app(474) > [APP 2221] Initial Launching, call the resume_cb
02-21 18:58:12.321+0000 I/CAPI_APPFW_APPLICATION( 2221): app_main.c: app_appcore_resume(223) > app_appcore_resume
02-21 18:58:12.366+0000 E/E17     (  418): e_manager.c: _e_manager_cb_client_message(1506) > ACTIVE REQUEST(0x06e00003)
02-21 18:58:12.381+0000 W/W_HOME  (  728): event_manager.c: _ecore_x_message_cb(403) > state: 0 -> 1
02-21 18:58:12.381+0000 W/APP_CORE( 2221): appcore-efl.c: __show_cb(787) > [EVENT_TEST][EVENT] GET SHOW EVENT!!!. WIN:6e00003
02-21 18:58:12.386+0000 W/W_HOME  (  728): event_manager.c: _state_control(194) > control:4, app_state:1 win_state:1(1) pm_state:1 home_visible:1 clock_visible:0 tutorial_state:0 editing : 0, home_clocklist:0, addviewer:0 scrolling : 0, powersaving : 0, apptray state : 1, apptray visibility : 0, apptray edit visibility : 0
02-21 18:58:12.386+0000 W/W_HOME  (  728): event_manager.c: _state_control(194) > control:2, app_state:1 win_state:1(1) pm_state:1 home_visible:1 clock_visible:0 tutorial_state:0 editing : 0, home_clocklist:0, addviewer:0 scrolling : 0, powersaving : 0, apptray state : 1, apptray visibility : 0, apptray edit visibility : 0
02-21 18:58:12.386+0000 W/W_HOME  (  728): event_manager.c: _state_control(194) > control:1, app_state:1 win_state:1(1) pm_state:1 home_visible:1 clock_visible:0 tutorial_state:0 editing : 0, home_clocklist:0, addviewer:0 scrolling : 0, powersaving : 0, apptray state : 1, apptray visibility : 0, apptray edit visibility : 0
02-21 18:58:12.391+0000 W/W_HOME  (  728): main.c: _ecore_x_message_cb(1222) > main_info.is_win_on_top: 0
02-21 18:58:12.471+0000 W/W_HOME  (  728): event_manager.c: _window_visibility_cb(448) > Window [0x2E00003] is now visible(1)
02-21 18:58:12.471+0000 W/W_HOME  (  728): event_manager.c: _window_visibility_cb(458) > state: 1 -> 0
02-21 18:58:12.471+0000 W/W_HOME  (  728): event_manager.c: _state_control(194) > control:4, app_state:1 win_state:1(0) pm_state:1 home_visible:1 clock_visible:0 tutorial_state:0 editing : 0, home_clocklist:0, addviewer:0 scrolling : 0, powersaving : 0, apptray state : 1, apptray visibility : 0, apptray edit visibility : 0
02-21 18:58:12.471+0000 W/W_HOME  (  728): main.c: _window_visibility_cb(1189) > Window [0x2E00003] is now visible(1)
02-21 18:58:12.471+0000 I/APP_CORE(  728): appcore-efl.c: __do_app(429) > [APP 728] Event: PAUSE State: RUNNING
02-21 18:58:12.471+0000 I/CAPI_APPFW_APPLICATION(  728): app_main.c: app_appcore_pause(202) > app_appcore_pause
02-21 18:58:12.471+0000 W/W_HOME  (  728): main.c: _appcore_pause_cb(690) > appcore pause
02-21 18:58:12.471+0000 W/W_HOME  (  728): event_manager.c: _app_pause_cb(372) > state: 1 -> 2
02-21 18:58:12.471+0000 W/W_HOME  (  728): event_manager.c: _state_control(194) > control:2, app_state:2 win_state:1(0) pm_state:1 home_visible:1 clock_visible:0 tutorial_state:0 editing : 0, home_clocklist:0, addviewer:0 scrolling : 0, powersaving : 0, apptray state : 1, apptray visibility : 0, apptray edit visibility : 0
02-21 18:58:12.471+0000 W/W_HOME  (  728): event_manager.c: _state_control(194) > control:0, app_state:2 win_state:1(0) pm_state:1 home_visible:1 clock_visible:0 tutorial_state:0 editing : 0, home_clocklist:0, addviewer:0 scrolling : 0, powersaving : 0, apptray state : 1, apptray visibility : 0, apptray edit visibility : 0
02-21 18:58:12.471+0000 W/W_HOME  (  728): main.c: home_pause(751) > clock/widget paused
02-21 18:58:12.476+0000 W/W_HOME  (  728): event_manager.c: _state_control(194) > control:1, app_state:2 win_state:1(0) pm_state:1 home_visible:1 clock_visible:0 tutorial_state:0 editing : 0, home_clocklist:0, addviewer:0 scrolling : 0, powersaving : 0, apptray state : 1, apptray visibility : 0, apptray edit visibility : 0
02-21 18:58:12.476+0000 I/MESSAGE_PORT(  437): MessagePortIpcServer.cpp: OnReadMessage(739) > _MessagePortIpcServer::OnReadMessage
02-21 18:58:12.476+0000 I/MESSAGE_PORT(  437): MessagePortIpcServer.cpp: HandleReceivedMessage(578) > _MessagePortIpcServer::HandleReceivedMessage
02-21 18:58:12.476+0000 I/MESSAGE_PORT(  437): MessagePortStub.cpp: OnIpcRequestReceived(147) > MessagePort message received
02-21 18:58:12.476+0000 I/MESSAGE_PORT(  437): MessagePortStub.cpp: OnCheckRemotePort(115) > _MessagePortStub::OnCheckRemotePort.
02-21 18:58:12.476+0000 I/MESSAGE_PORT(  437): MessagePortService.cpp: CheckRemotePort(207) > _MessagePortService::CheckRemotePort
02-21 18:58:12.476+0000 I/MESSAGE_PORT(  437): MessagePortService.cpp: GetKey(365) > _MessagePortService::GetKey
02-21 18:58:12.476+0000 I/MESSAGE_PORT(  437): MessagePortService.cpp: CheckRemotePort(220) > Check a remote message port: [com.samsung.w-music-player.music-control-service:music-control-service-request-message-port]
02-21 18:58:12.476+0000 I/MESSAGE_PORT(  437): MessagePortIpcServer.cpp: Send(847) > _MessagePortIpcServer::Stop
02-21 18:58:12.481+0000 I/MESSAGE_PORT(  437): MessagePortIpcServer.cpp: OnReadMessage(739) > _MessagePortIpcServer::OnReadMessage
02-21 18:58:12.481+0000 I/MESSAGE_PORT(  437): MessagePortIpcServer.cpp: HandleReceivedMessage(578) > _MessagePortIpcServer::HandleReceivedMessage
02-21 18:58:12.481+0000 I/MESSAGE_PORT(  437): MessagePortStub.cpp: OnIpcRequestReceived(147) > MessagePort message received
02-21 18:58:12.481+0000 I/MESSAGE_PORT(  437): MessagePortStub.cpp: OnSendMessage(126) > MessagePort OnSendMessage
02-21 18:58:12.481+0000 I/MESSAGE_PORT(  437): MessagePortService.cpp: SendMessage(291) > _MessagePortService::SendMessage
02-21 18:58:12.481+0000 I/MESSAGE_PORT(  437): MessagePortService.cpp: GetKey(365) > _MessagePortService::GetKey
02-21 18:58:12.481+0000 I/MESSAGE_PORT(  437): MessagePortService.cpp: SendMessage(299) > Sends a message to a remote message port [com.samsung.w-music-player.music-control-service:music-control-service-request-message-port]
02-21 18:58:12.481+0000 I/MESSAGE_PORT(  437): MessagePortStub.cpp: SendMessage(138) > MessagePort SendMessage
02-21 18:58:12.481+0000 I/MESSAGE_PORT(  437): MessagePortIpcServer.cpp: SendResponse(884) > _MessagePortIpcServer::SendResponse
02-21 18:58:12.481+0000 I/MESSAGE_PORT(  437): MessagePortIpcServer.cpp: Send(847) > _MessagePortIpcServer::Stop
02-21 18:58:12.491+0000 W/AUL_AMD (  475): amd_key.c: _key_ungrab(254) > fail(-1) to ungrab key(XF86Stop)
02-21 18:58:12.491+0000 W/AUL_AMD (  475): amd_launch.c: __e17_status_handler(2194) > back key ungrab error
02-21 18:58:12.511+0000 E/CAPI_APPFW_APP_CONTROL( 1469): app_control.c: app_control_error(133) > [app_control_get_caller] INVALID_PARAMETER(0xffffffea) : invalid app_control handle type
02-21 18:58:12.511+0000 W/MUSIC_CONTROL_SERVICE( 1469): music-control-service.c: _music_control_service_pasre_request(409) > [33m[TID:1469]   value = [false][0m
02-21 18:58:12.516+0000 I/APP_CORE( 2221): appcore-efl.c: __do_app(429) > [APP 2221] Event: RESUME State: RUNNING
02-21 18:58:12.586+0000 I/wnotib  (  728): w-notification-board-broker-main.c: _wnotib_ecore_x_event_visibility_changed_cb(701) > fully_obscured: 1
02-21 18:58:12.586+0000 E/wnotib  (  728): w-notification-board-action-drawer.c: wnotib_action_drawer_hidden_get(4570) > [NULL==g_wnotib_action_drawer_data] msg Drawer not initialized.
02-21 18:58:12.591+0000 I/CAPI_WIDGET_APPLICATION( 1377): widget_app.c: __provider_pause_cb(296) > widget obj was paused
02-21 18:58:12.596+0000 I/CAPI_WIDGET_APPLICATION( 1377): widget_app.c: __check_status_for_cgroup(145) > enter background group
02-21 18:58:12.921+0000 I/MALI    ( 2221): egl_platform_x11_tizen.c: tizen_update_native_surface_private(176) > [EGL-X11] surface->[0x43303db8] swap changed from async to sync
02-21 18:58:12.926+0000 W/AUL_AMD (  475): amd_request.c: __request_handler(640) > __request_handler: 14
02-21 18:58:12.961+0000 W/AUL_AMD (  475): amd_request.c: __send_result_to_client(83) > __send_result_to_client, pid: 2221
02-21 18:58:12.961+0000 W/AUL_AMD (  475): amd_request.c: __request_handler(640) > __request_handler: 12
02-21 18:58:12.971+0000 E/main    ( 4555): Timer Callback
02-21 18:58:12.981+0000 I/APP_CORE(  728): appcore-efl.c: __do_app(429) > [APP 728] Event: MEM_FLUSH State: PAUSED
02-21 18:58:13.176+0000 E/EFL     ( 2221): elementary<2221> elm_interface_scrollable.c:3964 _elm_scroll_mouse_move_event_cb() [DDO] obj(45006400), block(1)
02-21 18:58:13.176+0000 E/EFL     ( 2221): elementary<2221> elm_interface_scrollable.c:3978 _elm_scroll_mouse_move_event_cb() [DDO] obj(45006400), ev->cur.canvas.x(138) ev->cur.canvas.y(184)
02-21 18:58:13.176+0000 E/EFL     ( 2221): elementary<2221> elm_interface_scrollable.c:3979 _elm_scroll_mouse_move_event_cb() [DDO] obj(45006400), hold(0) freeze(0)
02-21 18:58:13.176+0000 E/EFL     ( 2221): evas_main<2221> evas_events.c:994 evas_event_feed_mouse_down() ButtonEvent:down time=12542578 button=1 downs=1
02-21 18:58:13.191+0000 E/EFL     ( 2221): elementary<2221> elm_interface_scrollable.c:3964 _elm_scroll_mouse_move_event_cb() [DDO] obj(45006400), block(1)
02-21 18:58:13.191+0000 E/EFL     ( 2221): elementary<2221> elm_interface_scrollable.c:3978 _elm_scroll_mouse_move_event_cb() [DDO] obj(45006400), ev->cur.canvas.x(138) ev->cur.canvas.y(185)
02-21 18:58:13.196+0000 E/EFL     ( 2221): elementary<2221> elm_interface_scrollable.c:3979 _elm_scroll_mouse_move_event_cb() [DDO] obj(45006400), hold(0) freeze(0)
02-21 18:58:13.251+0000 E/EFL     ( 2221): elementary<2221> elm_interface_scrollable.c:3964 _elm_scroll_mouse_move_event_cb() [DDO] obj(45006400), block(1)
02-21 18:58:13.251+0000 E/EFL     ( 2221): elementary<2221> elm_interface_scrollable.c:3978 _elm_scroll_mouse_move_event_cb() [DDO] obj(45006400), ev->cur.canvas.x(138) ev->cur.canvas.y(184)
02-21 18:58:13.251+0000 E/EFL     ( 2221): elementary<2221> elm_interface_scrollable.c:3979 _elm_scroll_mouse_move_event_cb() [DDO] obj(45006400), hold(0) freeze(0)
02-21 18:58:13.271+0000 E/EFL     ( 2221): elementary<2221> elm_interface_scrollable.c:3964 _elm_scroll_mouse_move_event_cb() [DDO] obj(45006400), block(1)
02-21 18:58:13.271+0000 E/EFL     ( 2221): elementary<2221> elm_interface_scrollable.c:3978 _elm_scroll_mouse_move_event_cb() [DDO] obj(45006400), ev->cur.canvas.x(138) ev->cur.canvas.y(183)
02-21 18:58:13.271+0000 E/EFL     ( 2221): elementary<2221> elm_interface_scrollable.c:3979 _elm_scroll_mouse_move_event_cb() [DDO] obj(45006400), hold(0) freeze(0)
02-21 18:58:13.291+0000 E/EFL     ( 2221): elementary<2221> elm_interface_scrollable.c:3964 _elm_scroll_mouse_move_event_cb() [DDO] obj(45006400), block(1)
02-21 18:58:13.291+0000 E/EFL     ( 2221): elementary<2221> elm_interface_scrollable.c:3978 _elm_scroll_mouse_move_event_cb() [DDO] obj(45006400), ev->cur.canvas.x(137) ev->cur.canvas.y(182)
02-21 18:58:13.291+0000 E/EFL     ( 2221): elementary<2221> elm_interface_scrollable.c:3979 _elm_scroll_mouse_move_event_cb() [DDO] obj(45006400), hold(0) freeze(0)
02-21 18:58:13.306+0000 E/EFL     ( 2221): elementary<2221> elm_interface_scrollable.c:3964 _elm_scroll_mouse_move_event_cb() [DDO] obj(45006400), block(1)
02-21 18:58:13.306+0000 E/EFL     ( 2221): elementary<2221> elm_interface_scrollable.c:3978 _elm_scroll_mouse_move_event_cb() [DDO] obj(45006400), ev->cur.canvas.x(134) ev->cur.canvas.y(181)
02-21 18:58:13.306+0000 E/EFL     ( 2221): elementary<2221> elm_interface_scrollable.c:3979 _elm_scroll_mouse_move_event_cb() [DDO] obj(45006400), hold(0) freeze(0)
02-21 18:58:13.316+0000 E/EFL     ( 2221): elementary<2221> elm_interface_scrollable.c:3964 _elm_scroll_mouse_move_event_cb() [DDO] obj(45006400), block(1)
02-21 18:58:13.316+0000 E/EFL     ( 2221): elementary<2221> elm_interface_scrollable.c:3978 _elm_scroll_mouse_move_event_cb() [DDO] obj(45006400), ev->cur.canvas.x(132) ev->cur.canvas.y(181)
02-21 18:58:13.316+0000 E/EFL     ( 2221): elementary<2221> elm_interface_scrollable.c:3979 _elm_scroll_mouse_move_event_cb() [DDO] obj(45006400), hold(0) freeze(0)
02-21 18:58:13.326+0000 E/EFL     ( 2221): evas_main<2221> evas_events.c:1258 evas_event_feed_mouse_up() ButtonEvent:up time=12542732 button=1 downs=0
02-21 18:58:13.346+0000 W/AUL_AMD (  475): amd_request.c: __request_handler(640) > __request_handler: 14
02-21 18:58:13.351+0000 W/AUL_AMD (  475): amd_request.c: __send_result_to_client(83) > __send_result_to_client, pid: 4555
02-21 18:58:13.356+0000 W/AUL_AMD (  475): amd_request.c: __request_handler(640) > __request_handler: 1
02-21 18:58:13.356+0000 W/AUL_AMD (  475): amd_launch.c: _start_app(1659) > caller pid : 2221
02-21 18:58:13.371+0000 W/AUL_AMD (  475): amd_launch.c: __nofork_processing(1138) > __nofork_processing, cmd: 1, pid: 4555
02-21 18:58:13.371+0000 E/AUL     (  475): app_sock.c: __connect_client_sock(194) > connect error: 2
02-21 18:58:13.371+0000 E/AUL     (  475): app_sock.c: __create_client_sock(160) > cannot connect the client socket: 2
02-21 18:58:13.411+0000 I/efl-extension( 5307): efl_extension.c: eext_mod_init(40) > Init
02-21 18:58:13.441+0000 I/UXT     ( 5307): Uxt_ObjectManager.cpp: OnInitialized(731) > Initialized.
02-21 18:58:13.471+0000 E/AUL     (  475): app_sock.c: __connect_client_sock(194) > connect error: 2
02-21 18:58:13.471+0000 E/AUL     (  475): app_sock.c: __create_client_sock(160) > cannot connect the client socket: 2
02-21 18:58:13.531+0000 I/AUL_PAD ( 5307): launchpad_loader.c: main(603) > [candidate] elm init, returned: 1
02-21 18:58:13.556+0000 E/TBM     ( 5307): tbm_bufmgr.c: _tbm_bufmgr_init_state(674) > USE TGL LOCK!
02-21 18:58:13.771+0000 E/AUL     (  475): app_sock.c: __connect_client_sock(194) > connect error: 2
02-21 18:58:13.771+0000 E/AUL     (  475): app_sock.c: __create_client_sock(160) > cannot connect the client socket: 2
02-21 18:58:13.771+0000 E/AUL_AMD (  475): amd_launch.c: _resume_app(775) > raise failed - 4555 resume fail
02-21 18:58:13.771+0000 E/AUL_AMD (  475): amd_launch.c: _resume_app(776) > we will term the app - 4555
02-21 18:58:13.771+0000 W/AUL_AMD (  475): amd_launch.c: _resume_app(783) > resume done
02-21 18:58:13.771+0000 E/AUL_AMD (  475): amd_launch.c: __nofork_processing(1144) > __resume_app failed. error code = -1
02-21 18:58:13.771+0000 E/W_TASKMANAGER( 2221): task.c: taskmanager_launch_task_info(888) > [taskmanager_launch_task_info:888] _launch_app() failed(-1)
02-21 18:58:13.776+0000 E/AUL_AMD (  475): amd_launch.c: __real_send(819) > send fail to client
02-21 18:58:13.891+0000 I/AUL_AMD (  475): amd_main.c: __app_dead_handler(261) > __app_dead_handler, pid: 4555
02-21 18:58:15.121+0000 E/EFL     ( 2221): elementary<2221> elm_interface_scrollable.c:3964 _elm_scroll_mouse_move_event_cb() [DDO] obj(45006400), block(1)
02-21 18:58:15.121+0000 E/EFL     ( 2221): elementary<2221> elm_interface_scrollable.c:3978 _elm_scroll_mouse_move_event_cb() [DDO] obj(45006400), ev->cur.canvas.x(156) ev->cur.canvas.y(172)
02-21 18:58:15.126+0000 E/EFL     ( 2221): elementary<2221> elm_interface_scrollable.c:3979 _elm_scroll_mouse_move_event_cb() [DDO] obj(45006400), hold(0) freeze(0)
02-21 18:58:15.126+0000 E/EFL     ( 2221): evas_main<2221> evas_events.c:994 evas_event_feed_mouse_down() ButtonEvent:down time=12544521 button=1 downs=1
02-21 18:58:15.126+0000 E/EFL     ( 2221): elementary<2221> elm_interface_scrollable.c:3964 _elm_scroll_mouse_move_event_cb() [DDO] obj(45006400), block(1)
02-21 18:58:15.126+0000 E/EFL     ( 2221): elementary<2221> elm_interface_scrollable.c:3978 _elm_scroll_mouse_move_event_cb() [DDO] obj(45006400), ev->cur.canvas.x(154) ev->cur.canvas.y(172)
02-21 18:58:15.126+0000 E/EFL     ( 2221): elementary<2221> elm_interface_scrollable.c:3979 _elm_scroll_mouse_move_event_cb() [DDO] obj(45006400), hold(0) freeze(0)
02-21 18:58:15.156+0000 E/EFL     ( 2221): elementary<2221> elm_interface_scrollable.c:3964 _elm_scroll_mouse_move_event_cb() [DDO] obj(45006400), block(1)
02-21 18:58:15.156+0000 E/EFL     ( 2221): elementary<2221> elm_interface_scrollable.c:3978 _elm_scroll_mouse_move_event_cb() [DDO] obj(45006400), ev->cur.canvas.x(154) ev->cur.canvas.y(173)
02-21 18:58:15.156+0000 E/EFL     ( 2221): elementary<2221> elm_interface_scrollable.c:3979 _elm_scroll_mouse_move_event_cb() [DDO] obj(45006400), hold(0) freeze(0)
02-21 18:58:15.186+0000 E/EFL     ( 2221): elementary<2221> elm_interface_scrollable.c:3964 _elm_scroll_mouse_move_event_cb() [DDO] obj(45006400), block(1)
02-21 18:58:15.186+0000 E/EFL     ( 2221): elementary<2221> elm_interface_scrollable.c:3978 _elm_scroll_mouse_move_event_cb() [DDO] obj(45006400), ev->cur.canvas.x(154) ev->cur.canvas.y(174)
02-21 18:58:15.191+0000 E/EFL     ( 2221): elementary<2221> elm_interface_scrollable.c:3979 _elm_scroll_mouse_move_event_cb() [DDO] obj(45006400), hold(0) freeze(0)
02-21 18:58:15.206+0000 E/EFL     ( 2221): elementary<2221> elm_interface_scrollable.c:3964 _elm_scroll_mouse_move_event_cb() [DDO] obj(45006400), block(1)
02-21 18:58:15.206+0000 E/EFL     ( 2221): elementary<2221> elm_interface_scrollable.c:3978 _elm_scroll_mouse_move_event_cb() [DDO] obj(45006400), ev->cur.canvas.x(159) ev->cur.canvas.y(174)
02-21 18:58:15.206+0000 E/EFL     ( 2221): elementary<2221> elm_interface_scrollable.c:3979 _elm_scroll_mouse_move_event_cb() [DDO] obj(45006400), hold(0) freeze(0)
02-21 18:58:15.211+0000 E/EFL     ( 2221): elementary<2221> elm_interface_scrollable.c:3964 _elm_scroll_mouse_move_event_cb() [DDO] obj(45006400), block(1)
02-21 18:58:15.211+0000 E/EFL     ( 2221): elementary<2221> elm_interface_scrollable.c:3978 _elm_scroll_mouse_move_event_cb() [DDO] obj(45006400), ev->cur.canvas.x(169) ev->cur.canvas.y(172)
02-21 18:58:15.211+0000 E/EFL     ( 2221): elementary<2221> elm_interface_scrollable.c:3979 _elm_scroll_mouse_move_event_cb() [DDO] obj(45006400), hold(0) freeze(0)
02-21 18:58:15.221+0000 E/EFL     ( 2221): evas_main<2221> evas_events.c:1258 evas_event_feed_mouse_up() ButtonEvent:up time=12544627 button=1 downs=0
02-21 18:58:15.246+0000 W/AUL_AMD (  475): amd_request.c: __request_handler(640) > __request_handler: 14
02-21 18:58:15.256+0000 W/AUL_AMD (  475): amd_request.c: __send_result_to_client(83) > __send_result_to_client, pid: -1
02-21 18:58:15.261+0000 W/AUL_AMD (  475): amd_request.c: __request_handler(640) > __request_handler: 0
02-21 18:58:15.261+0000 W/AUL_AMD (  475): amd_launch.c: _start_app(1659) > caller pid : 2221
02-21 18:58:15.281+0000 E/RESOURCED(  477): block.c: block_prelaunch_state(134) > [block_prelaunch_state,134] insert data org.example.gears2robotcontrol, table num : 7
02-21 18:58:15.281+0000 E/RESOURCED(  477): heart-memory.c: heart_memory_get_data(601) > [heart_memory_get_data,601] hashtable heart_memory_app_list is NULL
02-21 18:58:15.291+0000 W/AUL_AMD (  475): amd_launch.c: _start_app(2026) > pad pid(-5)
02-21 18:58:15.291+0000 W/AUL_PAD ( 1043): launchpad.c: __launchpad_main_loop(512) > Launch on type-based process-pool
02-21 18:58:15.291+0000 W/AUL_PAD ( 1043): launchpad.c: __send_result_to_caller(265) > Check app launching
02-21 18:58:15.301+0000 I/efl-extension( 5263): efl_extension.c: eext_mod_init(40) > Init
02-21 18:58:15.306+0000 D/main    ( 5263): app start
02-21 18:58:17.486+0000 I/APP_CORE(  728): appcore-efl.c: __do_app(429) > [APP 728] Event: MEM_FLUSH State: PAUSED
02-21 18:58:17.581+0000 I/RESOURCED(  477): heart-battery.c: heart_battery_add_capacity(1168) > [heart_battery_add_capacity,1168] 85 -> 84 1456081097 360
02-21 18:58:17.581+0000 I/RESOURCED(  477): heart-battery.c: heart_battery_calculate_prediction(1137) > [heart_battery_calculate_prediction,1137] TimeToEmpty: 84 1273 635 1782
02-21 18:58:17.581+0000 I/RESOURCED(  477): heart-battery.c: heart_battery_calculate_prediction(1137) > [heart_battery_calculate_prediction,1137] TimeToEmpty: 84 0 0 1729
02-21 18:58:17.581+0000 I/RESOURCED(  477): heart-battery.c: heart_battery_calculate_prediction(1137) > [heart_battery_calculate_prediction,1137] TimeToEmpty: 84 1428 1299 1999
02-21 18:58:17.581+0000 I/RESOURCED(  477): heart-battery.c: heart_battery_calculate_prediction(1137) > [heart_battery_calculate_prediction,1137] TimeToEmpty: 84 300 5 420
02-21 18:58:17.581+0000 I/RESOURCED(  477): heart-battery.c: heart_battery_calculate_prediction(1137) > [heart_battery_calculate_prediction,1137] TimeToEmpty: 84 287 15 402
02-21 18:58:18.311+0000 E/main    ( 5263): Timer Callback
02-21 18:58:19.251+0000 I/efl-extension(  735): efl_extension_rotary.c: _process_raw_event(438) > direction: Counter Clockwise
02-21 18:58:19.251+0000 I/efl-extension( 1348): efl_extension_rotary.c: _process_raw_event(438) > direction: Counter Clockwise
02-21 18:58:19.251+0000 I/efl-extension(  728): efl_extension_rotary.c: _process_raw_event(438) > direction: Counter Clockwise
02-21 18:58:19.251+0000 I/efl-extension(30958): efl_extension_rotary.c: _process_raw_event(438) > direction: Counter Clockwise
02-21 18:58:19.251+0000 I/efl-extension(14478): efl_extension_rotary.c: _process_raw_event(438) > direction: Counter Clockwise
02-21 18:58:20.026+0000 W/STARTER (  707): hw_key.c: _key_press_cb(1200) > [_key_press_cb:1200] POWER Key is pressed
02-21 18:58:20.026+0000 W/STARTER (  707): hw_key.c: _key_press_cb(1203) > [_key_press_cb:1203] LCD state : 1
02-21 18:58:20.031+0000 W/STARTER (  707): hw_key.c: _key_press_cb(1210) > [_key_press_cb:1210] PM state : 1
02-21 18:58:20.031+0000 W/STARTER (  707): hw_key.c: _key_press_cb(1224) > [_key_press_cb:1224] powerkey count : 1
02-21 18:58:20.231+0000 W/STARTER (  707): hw_key.c: _key_release_cb(1124) > [_key_release_cb:1124] POWER Key is released
02-21 18:58:20.456+0000 E/AUL     ( 2221): app_sock.c: __app_send_raw(322) > recv timeout : cmd(0) Resource temporarily unavailable
02-21 18:58:20.456+0000 E/W_TASKMANAGER( 2221): task.c: taskmanager_launch_task_info(888) > [taskmanager_launch_task_info:888] _launch_app() failed(-6)
02-21 18:58:20.486+0000 W/STARTER (  707): hw_key.c: _powerkey_timer_cb(806) > [_powerkey_timer_cb:806] _powerkey_timer_cb, powerkey count[1]
02-21 18:58:20.491+0000 E/AUL     (  475): app_sock.c: __app_send_raw(322) > recv timeout : cmd(0) Resource temporarily unavailable
02-21 18:58:20.491+0000 W/AUL_AMD (  475): amd_launch.c: _start_app(2044) > Launch with legacy way : Timeout
02-21 18:58:20.501+0000 W/AUL_AMD (  475): amd_launch.c: start_process(573) > child process: 5335
02-21 18:58:20.506+0000 W/STARTER (  707): hw_key.c: _powerkey_timer_cb(961) > [_powerkey_timer_cb:961] clock visibility[0] pressed lcd status[1], current lcd status[1] pressed pm state[1]
02-21 18:58:20.551+0000 E/STARTER (  707): dbus-util.c: dbus_request_cpu_boost(337) > [dbus_request_cpu_boost:337] failed to _invoke_dbus_method_sync
02-21 18:58:20.561+0000 I/efl-extension( 2221): efl_extension_rotary.c: _process_raw_event(438) > direction: Counter Clockwise
02-21 18:58:20.561+0000 I/efl-extension( 2221): efl_extension_rotary.c: _rotary_rotate_handler_cb(528) > Deliver counter clockwise rotary event to object: 0x45051400, elm_image, time_stamp : 12548654
02-21 18:58:20.561+0000 I/efl-extension( 2221): efl_extension_circle_object_scroller.c: _eext_circle_object_scroller_rotary_changed_cb(616) > [0x45006400 : elm_scroller] rotary callabck is called.
02-21 18:58:20.561+0000 I/efl-extension( 2221): efl_extension_circle_object_scroller.c: _eext_circle_object_scroller_rotary_changed_cb(646) > [0x45006400 : elm_scroller] block(1)
02-21 18:58:20.561+0000 I/efl-extension( 2221): efl_extension_circle_object_scroller.c: _eext_circle_object_scroller_rotary_changed_cb(647) > [0x45006400 : elm_scroller] scroll_locked_x(0), scroll_locked_y(1)
02-21 18:58:20.561+0000 I/efl-extension( 2221): efl_extension_circle_object_scroller.c: _eext_circle_object_scroller_rotary_changed_cb(648) > [0x45006400 : elm_scroller] content size (w, h)(1324, 360)
02-21 18:58:20.561+0000 I/efl-extension( 2221): efl_extension_circle_object_scroller.c: _eext_circle_object_scroller_rotary_changed_cb(649) > [0x45006400 : elm_scroller] viewport size (w, h)(360, 360)
02-21 18:58:20.561+0000 I/efl-extension( 2221): efl_extension_circle_object_scroller.c: _eext_circle_object_scroller_rotary_changed_cb(712) > [0x45006400 : elm_scroller] CurrentPage(0) DetentCount(-1)
02-21 18:58:20.561+0000 I/efl-extension( 2221): efl_extension_circle_object_scroller.c: _eext_circle_object_scroller_can_scroll(405) > [0x45006400 : elm_scroller] mx(964), my(0), minx(0), miny(0), px(0), py(0)
02-21 18:58:20.561+0000 I/efl-extension( 2221): efl_extension_circle_object_scroller.c: _eext_circle_object_scroller_can_scroll(405) > [0x45006400 : elm_scroller] mx(964), my(0), minx(0), miny(0), px(0), py(0)
02-21 18:58:20.566+0000 I/efl-extension( 2221): efl_extension_circle_object_scroller.c: _eext_circle_object_scroller_can_scroll(405) > [0x45006400 : elm_scroller] mx(964), my(0), minx(0), miny(0), px(0), py(0)
02-21 18:58:20.566+0000 I/efl-extension( 2221): efl_extension_circle_object_scroller.c: _eext_circle_object_scroller_rotary_changed_cb(721) > [0x45006400 : elm_scroller] edge left
02-21 18:58:20.606+0000 W/AUL_AMD (  475): amd_launch.c: __send_app_launch_signal(376) > send launch signal done: 5335
02-21 18:58:20.606+0000 E/AUL_AMD (  475): amd_launch.c: __real_send(817) > send failed due to EPIPE.
02-21 18:58:20.606+0000 E/AUL_AMD (  475): amd_launch.c: __real_send(819) > send fail to client
02-21 18:58:20.606+0000 W/AUL_AMD (  475): amd_request.c: __request_handler(640) > __request_handler: 0
02-21 18:58:20.611+0000 E/RESOURCED(  477): proc-main.c: proc_add_program_list(233) > [proc_add_program_list,233] not found ppi : org.example.gears2robotcontrol
02-21 18:58:20.611+0000 W/AUL_AMD (  475): amd_launch.c: _start_app(1659) > caller pid : 707
02-21 18:58:20.621+0000 W/AUL_AMD (  475): amd_launch.c: __nofork_processing(1138) > __nofork_processing, cmd: 0, pid: 728
02-21 18:58:20.621+0000 E/AUL_PAD ( 1043): launchpad.c: __real_send(246) > send failed due to EPIPE.
02-21 18:58:20.621+0000 E/AUL_PAD ( 1043): launchpad.c: __send_result_to_caller(310) > send SIGKILL: Operation not permitted
02-21 18:58:20.626+0000 W/AUL_AMD (  475): amd_launch.c: __reply_handler(909) > listen fd(27) , send fd(13), pid(728), cmd(0)
02-21 18:58:20.631+0000 I/APP_CORE(  728): appcore-efl.c: __do_app(429) > [APP 728] Event: RESET State: PAUSED
02-21 18:58:20.631+0000 I/CAPI_APPFW_APPLICATION(  728): app_main.c: app_appcore_reset(245) > app_appcore_reset
02-21 18:58:20.631+0000 W/W_HOME  (  728): main.c: _app_control(1726) > Service value : powerkey
02-21 18:58:20.631+0000 I/wnotib  (  728): w-notification-board-broker-main.c: _wnotib_view_event_handler(1182) > Home view event: 0x40001
02-21 18:58:20.631+0000 E/wnotib  (  728): w-notification-board-action-drawer.c: wnotib_action_drawer_popup_shown(4518) > [NULL==g_wnotib_action_drawer_data] msg Drawer not initialized.
02-21 18:58:20.631+0000 E/wnotib  (  728): w-notification-board-action-drawer.c: wnotib_action_drawer_hidden_get(4570) > [NULL==g_wnotib_action_drawer_data] msg Drawer not initialized.
02-21 18:58:20.631+0000 W/W_HOME  (  728): noti_broker.c: _noti_broker_home_cb(781) > continue the home key execution
02-21 18:58:20.631+0000 E/W_HOME  (  728): cs_broker.c: _cs_broker_home_cb(256) > (s_info.is_displayed == 0) -> _cs_broker_home_cb() return
02-21 18:58:20.631+0000 W/W_HOME  (  728): scroller.c: _get_index_in_list(1902) > page:0x4a10d0e0 idx:1 total14 exist:1
02-21 18:58:20.631+0000 W/W_HOME  (  728): scroller.c: scroller_unfreeze(1860) > unfreezed:400537dd
02-21 18:58:20.631+0000 E/EFL     (  728): elementary<728> elm_interface_scrollable.c:1270 _elm_scroll_origin_reverse_set() [DDO] obj(45b5ad60), origin_x(0), origin_y(0)
02-21 18:58:20.641+0000 E/W_HOME  (  728): move.c: move_back_to_home_no_anim(270) > home is already on position
02-21 18:58:20.646+0000 I/APP_CORE(  728): appcore-efl.c: __do_app(479) > Legacy lifecycle: 1
02-21 18:58:20.646+0000 W/W_HOME  (  728): event_manager.c: _home_scroll_cb(564) > scroll,start
02-21 18:58:20.646+0000 W/W_HOME  (  728): dbus_util.c: home_dbus_home_raise_signal_send(260) > Sending HOME RAISE signal, result:0
02-21 18:58:20.646+0000 W/W_HOME  (  728): event_manager.c: _app_resume_cb(355) > state: 2 -> 1
02-21 18:58:20.646+0000 W/W_HOME  (  728): event_manager.c: _state_control(194) > control:2, app_state:1 win_state:1(0) pm_state:1 home_visible:1 clock_visible:0 tutorial_state:0 editing : 0, home_clocklist:0, addviewer:0 scrolling : 1, powersaving : 0, apptray state : 1, apptray visibility : 0, apptray edit visibility : 0
02-21 18:58:20.646+0000 I/efl-extension(30958): efl_extension_more_option.c: eext_more_option_opened_get(600) > called!!
02-21 18:58:20.646+0000 W/wnotibp (30958): wnotiboard-popup-view.c: _wnotibp_event_home_raise_cb(1721) > [0, 2, 1]
02-21 18:58:20.646+0000 W/W_HOME  (  728): event_manager.c: _state_control(194) > control:0, app_state:1 win_state:1(0) pm_state:1 home_visible:1 clock_visible:0 tutorial_state:0 editing : 0, home_clocklist:0, addviewer:0 scrolling : 1, powersaving : 0, apptray state : 1, apptray visibility : 0, apptray edit visibility : 0
02-21 18:58:20.646+0000 W/W_HOME  (  728): main.c: home_resume(729) > journal_appcore_app_fully_loaded called
02-21 18:58:20.646+0000 W/W_HOME  (  728): main.c: home_resume(733) > clock/widget resumed
02-21 18:58:20.646+0000 W/W_HOME  (  728): event_manager.c: _state_control(194) > control:1, app_state:1 win_state:1(0) pm_state:1 home_visible:1 clock_visible:0 tutorial_state:0 editing : 0, home_clocklist:0, addviewer:0 scrolling : 1, powersaving : 0, apptray state : 1, apptray visibility : 0, apptray edit visibility : 0
02-21 18:58:20.651+0000 E/E17     (  418): e_manager.c: _e_manager_cb_client_message(1506) > ACTIVE REQUEST(0x02e00003)
02-21 18:58:20.661+0000 I/ELM_RPANEL(  728): elm-rpanel.c: _panel_swap_effect(2829) > tobj_item_01 is null
02-21 18:58:20.661+0000 I/ELM_RPANEL(  728): elm-rpanel.c: _panel_swap_effect(2884) > tobj_item_02 is null
02-21 18:58:20.681+0000 I/ELM_RPANEL(  728): elm-rpanel.c: _panel_swap_effect(2829) > tobj_item_01 is null
02-21 18:58:20.681+0000 I/CAPI_WIDGET_APPLICATION( 1377): widget_app.c: __provider_resume_cb(314) > widget obj was resumed
02-21 18:58:20.681+0000 I/CAPI_WIDGET_APPLICATION( 1377): widget_app.c: __check_status_for_cgroup(134) > enter foreground group
02-21 18:58:20.686+0000 I/ELM_RPANEL(  728): elm-rpanel.c: _panel_swap_effect(2884) > tobj_item_02 is null
02-21 18:58:20.716+0000 I/efl-extension( 5335): efl_extension.c: eext_mod_init(40) > Init
02-21 18:58:20.716+0000 D/main    ( 5335): app start
02-21 18:58:20.721+0000 I/MALI    (  728): egl_platform_x11_tizen.c: tizen_update_native_surface_private(194) > [EGL-X11] surface->[0x442b7020] swap changed from sync to async
02-21 18:58:20.791+0000 I/ELM_RPANEL(  728): elm-rpanel.c: _panel_swap_effect(2829) > tobj_item_01 is null
02-21 18:58:20.791+0000 W/WATCH_CORE(  735): appcore-watch.c: __widget_resume(1012) > widget_resume
02-21 18:58:20.796+0000 I/CAPI_WATCH_APPLICATION(  735): watch_app_main.c: _watch_core_time_tick(306) > _watch_core_time_tick
02-21 18:58:20.801+0000 I/ELM_RPANEL(  728): elm-rpanel.c: _panel_swap_effect(2884) > tobj_item_02 is null
02-21 18:58:20.821+0000 I/MALI    ( 2221): egl_platform_x11_tizen.c: tizen_update_native_surface_private(194) > [EGL-X11] surface->[0x43303db8] swap changed from sync to async
02-21 18:58:20.836+0000 W/W_HOME  (  728): event_manager.c: _clock_view_visible_cb(608) > state: 0 -> 1
02-21 18:58:20.841+0000 W/W_HOME  (  728): event_manager.c: _state_control(194) > control:2, app_state:1 win_state:1(0) pm_state:1 home_visible:1 clock_visible:1 tutorial_state:0 editing : 0, home_clocklist:0, addviewer:0 scrolling : 1, powersaving : 0, apptray state : 1, apptray visibility : 0, apptray edit visibility : 0
02-21 18:58:20.861+0000 W/PROCESSMGR(  418): e_mod_processmgr.c: _e_mod_processmgr_send_update_watch_action(639) > [PROCESSMGR] =====================> send UpdateClock
02-21 18:58:20.876+0000 I/ELM_RPANEL(  728): elm-rpanel.c: _panel_swap_effect(2829) > tobj_item_01 is null
02-21 18:58:20.876+0000 I/ELM_RPANEL(  728): elm-rpanel.c: _panel_swap_effect(2884) > tobj_item_02 is null
02-21 18:58:20.921+0000 W/W_HOME  (  728): event_manager.c: _ecore_x_message_cb(403) > state: 1 -> 0
02-21 18:58:20.921+0000 W/W_HOME  (  728): event_manager.c: _state_control(194) > control:4, app_state:1 win_state:0(0) pm_state:1 home_visible:1 clock_visible:1 tutorial_state:0 editing : 0, home_clocklist:0, addviewer:0 scrolling : 1, powersaving : 0, apptray state : 1, apptray visibility : 0, apptray edit visibility : 0
02-21 18:58:20.921+0000 W/W_HOME  (  728): event_manager.c: _state_control(194) > control:2, app_state:1 win_state:0(0) pm_state:1 home_visible:1 clock_visible:1 tutorial_state:0 editing : 0, home_clocklist:0, addviewer:0 scrolling : 1, powersaving : 0, apptray state : 1, apptray visibility : 0, apptray edit visibility : 0
02-21 18:58:20.921+0000 W/W_HOME  (  728): event_manager.c: _state_control(194) > control:1, app_state:1 win_state:0(0) pm_state:1 home_visible:1 clock_visible:1 tutorial_state:0 editing : 0, home_clocklist:0, addviewer:0 scrolling : 1, powersaving : 0, apptray state : 1, apptray visibility : 0, apptray edit visibility : 0
02-21 18:58:20.921+0000 W/W_HOME  (  728): main.c: _ecore_x_message_cb(1222) > main_info.is_win_on_top: 1
02-21 18:58:20.926+0000 I/GESTURE (  140): gesture.c: BackGestureSetProperty(4497) > [BackGestureSetProperty] atom=_E_MOVE_W_HOME_CLOCK_STATE, value=1, Clock display 
02-21 18:58:20.926+0000 I/APP_CORE( 2221): appcore-efl.c: __do_app(429) > [APP 2221] Event: PAUSE State: RUNNING
02-21 18:58:20.926+0000 I/CAPI_APPFW_APPLICATION( 2221): app_main.c: app_appcore_pause(202) > app_appcore_pause
02-21 18:58:20.926+0000 E/EFL     ( 2221): elementary<2221> elm_interface_scrollable.c:5302 _elm_scroll_freeze_set() [DDO] obj(45006400), freeze(1)
02-21 18:58:20.926+0000 E/EFL     ( 2221): elementary<2221> elm_interface_scrollable.c:5302 _elm_scroll_freeze_set() [DDO] obj(45006400), freeze(1)
02-21 18:58:20.941+0000 W/W_HOME  (  728): event_manager.c: _window_visibility_cb(448) > Window [0x2E00003] is now visible(0)
02-21 18:58:20.941+0000 W/W_HOME  (  728): event_manager.c: _window_visibility_cb(458) > state: 0 -> 1
02-21 18:58:20.941+0000 W/W_HOME  (  728): event_manager.c: _state_control(194) > control:4, app_state:1 win_state:0(1) pm_state:1 home_visible:1 clock_visible:1 tutorial_state:0 editing : 0, home_clocklist:0, addviewer:0 scrolling : 1, powersaving : 0, apptray state : 1, apptray visibility : 0, apptray edit visibility : 0
02-21 18:58:20.941+0000 W/W_HOME  (  728): main.c: _window_visibility_cb(1189) > Window [0x2E00003] is now visible(0)
02-21 18:58:20.946+0000 I/APP_CORE(  728): appcore-efl.c: __do_app(429) > [APP 728] Event: RESUME State: RUNNING
02-21 18:58:20.946+0000 I/wnotib  (  728): w-notification-board-broker-main.c: _wnotib_ecore_x_event_visibility_changed_cb(701) > fully_obscured: 0
02-21 18:58:20.946+0000 E/wnotib  (  728): w-notification-board-action-drawer.c: wnotib_action_drawer_hidden_get(4570) > [NULL==g_wnotib_action_drawer_data] msg Drawer not initialized.
02-21 18:58:20.946+0000 W/wnotib  (  728): w-notification-board-noti-manager.c: wnotib_noti_manager_do_postponed_job(1695) > No postponed update.
02-21 18:58:20.951+0000 I/ELM_RPANEL(  728): elm-rpanel.c: _panel_swap_effect(2829) > tobj_item_01 is null
02-21 18:58:20.951+0000 I/ELM_RPANEL(  728): elm-rpanel.c: _panel_swap_effect(2884) > tobj_item_02 is null
02-21 18:58:20.966+0000 W/wnotib  (  728): w-notification-board-noti-manager.c: wnotib_noti_manager_do_postponed_job(1695) > No postponed update.
02-21 18:58:20.971+0000 I/efl-extension(  728): efl_extension_circle_object_scroller.c: _eext_circle_object_scroller_scroll_animatioin_stop_cb(501) > [0x45b5ad60 : elm_scroller] CurrentPage(1)
02-21 18:58:20.971+0000 W/WATCH_CORE(  735): appcore-watch.c: __signal_process_manager_handler(1163) > process_manager_signal
02-21 18:58:20.971+0000 I/WATCH_CORE(  735): appcore-watch.c: __signal_process_manager_handler(1167) > Skip the background tick update
02-21 18:58:20.986+0000 W/AUL_AMD (  475): amd_request.c: __request_handler(640) > __request_handler: 14
02-21 18:58:20.996+0000 W/AUL_AMD (  475): amd_request.c: __send_result_to_client(83) > __send_result_to_client, pid: 5263
02-21 18:58:21.011+0000 W/AUL_AMD (  475): amd_request.c: __request_handler(640) > __request_handler: 12
02-21 18:58:21.021+0000 I/CAPI_WIDGET_APPLICATION( 1377): widget_app.c: __provider_pause_cb(296) > widget obj was paused
02-21 18:58:21.026+0000 I/CAPI_WIDGET_APPLICATION( 1377): widget_app.c: __check_status_for_cgroup(145) > enter background group
02-21 18:58:21.041+0000 I/CAPI_WATCH_APPLICATION(  735): watch_app_main.c: _watch_core_time_tick(306) > _watch_core_time_tick
02-21 18:58:21.071+0000 W/AUL_AMD (  475): amd_request.c: __request_handler(640) > __request_handler: 23
02-21 18:58:21.116+0000 W/AUL_AMD (  475): amd_request.c: __send_result_to_client(83) > __send_result_to_client, pid: 0
02-21 18:58:21.116+0000 W/AUL_AMD (  475): amd_request.c: __request_handler(917) > pkg_status: installed, dead pid: 5335
02-21 18:58:21.116+0000 W/AUL_AMD (  475): amd_request.c: __send_app_termination_signal(507) > send dead signal done
02-21 18:58:21.126+0000 I/AUL_AMD (  475): amd_main.c: __app_dead_handler(261) > __app_dead_handler, pid: 5335
02-21 18:58:21.136+0000 W/AUL_AMD (  475): amd_request.c: __request_handler(640) > __request_handler: 22
02-21 18:58:21.136+0000 W/AUL_AMD (  475): amd_request.c: __request_handler(884) > app status : 4
02-21 18:58:21.181+0000 W/W_HOME  (  728): event_manager.c: _home_scroll_cb(564) > scroll,done
02-21 18:58:21.181+0000 E/APP_CORE( 2221): appcore.c: __del_vconf(429) > [FAILED]vconfkey_ignore_key_changed
02-21 18:58:21.191+0000 I/APP_CORE( 2221): appcore-efl.c: __after_loop(1088) > Legacy lifecycle: 0
02-21 18:58:21.206+0000 I/CAPI_APPFW_APPLICATION( 2221): app_main.c: app_appcore_terminate(177) > app_appcore_terminate
02-21 18:58:21.216+0000 I/efl-extension( 2221): efl_extension_rotary.c: _object_deleted_cb(572) > In: data: 0x45006400, obj: 0x45006400
02-21 18:58:21.266+0000 W/CRASH_MANAGER( 5344): worker.c: worker_job(1199) > 1105335676561145608110
