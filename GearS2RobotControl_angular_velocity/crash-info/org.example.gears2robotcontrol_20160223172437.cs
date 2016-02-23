S/W Version Information
Model: SM-R720
Tizen-Version: 2.3.1.2
Build-Number: R720XXU2BOKK
Build-Date: 2015.11.27 18:01:21

Crash Information
Process Name: gears2robotcontrol
PID: 22400
Date: 2016-02-23 17:24:37+0000
Executable File Path: /opt/usr/apps/org.example.gears2robotcontrol/bin/gears2robotcontrol
Signal: 11
      (SIGSEGV)
      si_code: 1
      address not mapped to object
      si_addr = 0x20

Register Information
r0   = 0x00000025, r1   = 0x00000000
r2   = 0x00000001, r3   = 0x013c8d00
r4   = 0xbeed1574, r5   = 0x41529980
r6   = 0x00000274, r7   = 0xbeed0d70
r8   = 0x40044e7c, r9   = 0x40044fd4
r10  = 0x40044f64, fp   = 0x00000000
ip   = 0x400899f8, sp   = 0xbeed0d48
lr   = 0x415541c9, pc   = 0x415541ce
cpsr = 0x20000030

Memory Information
MemTotal:   489992 KB
MemFree:     17620 KB
Buffers:     18128 KB
Cached:      92592 KB
VmPeak:      31916 KB
VmSize:      31912 KB
VmLck:           0 KB
VmPin:           0 KB
VmHWM:       11300 KB
VmRSS:       11296 KB
VmData:       4044 KB
VmStk:         136 KB
VmExe:          20 KB
VmLib:       19820 KB
VmPTE:          34 KB
VmSwap:          0 KB

Maps Information
40000000 40005000 r-xp /usr/bin/launchpad-loader
4000d000 4002a000 r-xp /lib/ld-2.13.so
40033000 40037000 r-xp /usr/lib/libsys-assert.so
40041000 40046000 r-xp /usr/lib/libappcore-efl.so.1.1
40054000 40060000 r-xp /usr/lib/libaul.so.0.1.0
4006a000 4006c000 r-xp /lib/libdl-2.13.so
40075000 40078000 r-xp /usr/lib/libbundle.so.0.1.22
40080000 40082000 r-xp /usr/lib/libdlog.so.0.0.0
4008a000 4009e000 r-xp /lib/libpthread-2.13.so
400a9000 401e3000 r-xp /usr/lib/libelementary.so.1.7.99
401f9000 402c8000 r-xp /usr/lib/libevas.so.1.7.99
402ec000 40303000 r-xp /usr/lib/libecore.so.1.7.99
4031a000 40377000 r-xp /usr/lib/libedje.so.1.7.99
40381000 40451000 r-xp /usr/lib/libglib-2.0.so.0.3200.3
40452000 40458000 r-xp /usr/lib/libprivilege-control.so.0.0.2
40460000 40463000 r-xp /usr/lib/libsmack.so.1.0.0
4046b000 40473000 r-xp /lib/libgcc_s-4.6.so.1
40474000 4058f000 r-xp /lib/libc-2.13.so
4059d000 405d9000 r-xp /usr/lib/libsystemd.so.0.4.0
405e2000 405ed000 r-xp /lib/libunwind.so.8.0.1
4061a000 40631000 r-xp /usr/lib/libdbus-glib-1.so.2.2.2
40639000 40663000 r-xp /usr/lib/libdbus-1.so.3.8.12
4066c000 40671000 r-xp /usr/lib/libxdgmime.so.1.1.0
40679000 4069b000 r-xp /usr/lib/libpkgmgr-info.so.0.0.17
406a3000 406a6000 r-xp /usr/lib/libproc-stat.so.0.2.86
406ae000 406b4000 r-xp /usr/lib/libcapi-base-common.so.0.1.8
406bd000 40726000 r-xp /lib/libm-2.13.so
4072f000 40748000 r-xp /usr/lib/libeet.so.1.7.99
40759000 4079a000 r-xp /usr/lib/libeina.so.1.7.99
407a3000 407c5000 r-xp /usr/lib/libecore_evas.so.1.7.99
407ce000 407d3000 r-xp /usr/lib/libecore_file.so.1.7.99
407db000 407ec000 r-xp /usr/lib/libecore_input.so.1.7.99
407f4000 407f8000 r-xp /usr/lib/libvconf.so.0.2.45
40800000 40850000 r-xp /usr/lib/libecore_x.so.1.7.99
40852000 4085b000 r-xp /usr/lib/libedbus.so.1.7.99
40863000 4087d000 r-xp /usr/lib/libecore_con.so.1.7.99
40886000 40899000 r-xp /usr/lib/libfribidi.so.0.3.1
408a1000 408de000 r-xp /usr/lib/libharfbuzz.so.0.940.0
408e7000 4090f000 r-xp /usr/lib/libfontconfig.so.1.8.0
40910000 40966000 r-xp /usr/lib/libfreetype.so.6.11.3
40972000 409c8000 r-xp /usr/lib/libpixman-1.so.0.28.2
409d5000 409db000 r-xp /lib/librt-2.13.so
409e4000 409eb000 r-xp /usr/lib/libembryo.so.1.7.99
409f3000 40a0a000 r-xp /usr/lib/liblua-5.1.so
40a13000 40a19000 r-xp /usr/lib/libecore_imf.so.1.7.99
40a21000 40a22000 r-xp /usr/lib/libecore_imf_evas.so.1.7.99
40a2a000 40a50000 r-xp /usr/lib/libsecurity-server-client.so.1.0.1
40a59000 40a5c000 r-xp /lib/libcap.so.2.21
40a64000 40a7c000 r-xp /usr/lib/liblzma.so.5.0.3
40a84000 40b00000 r-xp /usr/lib/libgcrypt.so.20.0.3
40b0c000 40b1c000 r-xp /lib/libresolv-2.13.so
40b20000 40bf3000 r-xp /usr/lib/libgio-2.0.so.0.3200.3
40bfe000 40c32000 r-xp /usr/lib/libgobject-2.0.so.0.3200.3
40c3b000 40c50000 r-xp /usr/lib/libpkgmgr_parser.so.0.1.0
40c58000 40ccd000 r-xp /usr/lib/libsqlite3.so.0.8.6
40cd7000 40ced000 r-xp /lib/libz.so.1.2.5
40cf5000 40d18000 r-xp /usr/lib/libjpeg.so.8.0.2
40d30000 40e11000 r-xp /usr/lib/libX11.so.6.3.0
40e1c000 40e21000 r-xp /usr/lib/libecore_fb.so.1.7.99
40e2a000 40e2e000 r-xp /usr/lib/libecore_ipc.so.1.7.99
40e37000 40e3a000 r-xp /usr/lib/libecore_input_evas.so.1.7.99
40e42000 40e49000 r-xp /usr/lib/libXcursor.so.1.0.2
40e51000 40e53000 r-xp /usr/lib/libXdamage.so.1.1.0
40e5b000 40e5d000 r-xp /usr/lib/libXcomposite.so.1.0.0
40e65000 40e67000 r-xp /usr/lib/libXgesture.so.7.0.0
40e6f000 40e72000 r-xp /usr/lib/libXfixes.so.3.1.0
40e7a000 40e83000 r-xp /usr/lib/libXi.so.6.1.0
40e8b000 40e8c000 r-xp /usr/lib/libXinerama.so.1.0.0
40e95000 40e9b000 r-xp /usr/lib/libXrandr.so.2.2.0
40ea3000 40ea9000 r-xp /usr/lib/libXrender.so.1.3.0
40eb1000 40eb4000 r-xp /usr/lib/libXtst.so.6.1.0
40ebd000 40ec7000 r-xp /usr/lib/libXext.so.6.4.0
40ed0000 40f14000 r-xp /usr/lib/libcurl.so.4.3.0
40f1d000 40f33000 r-xp /lib/libexpat.so.1.5.2
40f3d000 40f55000 r-xp /usr/lib/libpng12.so.0.50.0
40f5d000 40f79000 r-xp /usr/lib/libsecurity-server-commons.so.1.0.0
40f82000 41016000 r-xp /usr/lib/libstdc++.so.6.0.16
4102a000 4102d000 r-xp /lib/libattr.so.1.1.0
41035000 41040000 r-xp /usr/lib/libgpg-error.so.0.15.0
41048000 41049000 r-xp /usr/lib/libgthread-2.0.so.0.3200.3
41051000 41056000 r-xp /usr/lib/libffi.so.5.0.10
4105e000 41060000 r-xp /usr/lib/libgmodule-2.0.so.0.3200.3
41069000 41135000 r-xp /usr/lib/libxml2.so.2.7.8
41142000 41144000 r-xp /usr/lib/libSLP-db-util.so.0.1.0
4114d000 4114f000 r-xp /usr/lib/journal/libjournal.so.0.1.0
41157000 4116a000 r-xp /usr/lib/libxcb.so.1.1.0
41174000 4117d000 r-xp /usr/lib/libcares.so.2.1.0
41186000 411b4000 r-xp /usr/lib/libidn.so.11.5.44
411bc000 41209000 r-xp /usr/lib/libssl.so.1.0.0
41215000 413bd000 r-xp /usr/lib/libcrypto.so.1.0.0
413d6000 413d8000 r-xp /usr/lib/libiri.so
413e1000 413e8000 r-xp /lib/libcrypt-2.13.so
41418000 4141a000 r-xp /usr/lib/libXau.so.6.0.0
41527000 4152b000 r-xp /usr/lib/libcapi-appfw-application.so.0.3.2.5
4153b000 41540000 r-xp /usr/lib/libappcore-common.so.1.1
41548000 4154a000 r-xp /usr/lib/libiniparser.so.0
41553000 41555000 r-xp /opt/usr/apps/org.example.gears2robotcontrol/bin/gears2robotcontrol
4155d000 4155e000 r-xp /usr/lib/libxcb-shm.so.0.0.0
41567000 4156c000 r-xp /usr/lib/libcapi-appfw-app-control.so.0.3.2.5
41574000 41576000 r-xp /usr/lib/libcapi-appfw-app-common.so.0.3.2.5
4157f000 41585000 r-xp /usr/lib/libappsvc.so.0.1.0
4158d000 415b1000 r-xp /usr/lib/ecore/immodules/libisf-imf-module.so
415ba000 41689000 r-xp /usr/lib/libscim-1.0.so.8.2.3
4169f000 416a9000 r-xp /lib/libnss_files-2.13.so
41970000 4197b000 r-xp /usr/lib/evas/modules/engines/software_x11/linux-gnueabi-armv7l-1.7.99/module.so
41984000 419a4000 r-xp /usr/lib/libefl-extension.so.0.1.0
419a5000 41a5d000 r-xp /usr/lib/libcairo.so.2.11200.14
41a68000 41a76000 r-xp /usr/lib/libGLESv2.so.2.0
41a7f000 41a85000 r-xp /usr/lib/libxcb-render.so.0.0.0
41a8d000 41a90000 r-xp /usr/lib/libEGL.so.1.4
41a98000 41b62000 r-xp /usr/lib/libCOREGL.so.4.0
41d74000 41d7f000 r-xp /usr/lib/evas/modules/engines/software_generic/linux-gnueabi-armv7l-1.7.99/module.so
41d88000 41d8c000 r-xp /usr/lib/bufmgr/libtbm_exynos4412.so.0.0.0
41d9c000 41da4000 r-xp /usr/lib/libdrm.so.2.4.0
41dac000 41db3000 r-xp /usr/lib/libtbm.so.1.0.0
41dbb000 41dbd000 r-xp /usr/lib/libdri2.so.0.0.0
41dc5000 41ddc000 r-xp /usr/lib/edje/modules/elm/linux-gnueabi-armv7l-1.0.0/module.so
beeb1000 beed2000 rwxp [stack]
End of Maps Information

Callstack Information (PID:22400)
Call Stack Count: 1
 0: app_resume + 0x65 (0x415541ce) [/opt/usr/apps/org.example.gears2robotcontrol/bin/gears2robotcontrol] + 0x11ce
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
ePort(115) > _MessagePortStub::OnCheckRemotePort.
02-23 17:24:19.612+0000 I/MESSAGE_PORT(  438): MessagePortService.cpp: CheckRemotePort(207) > _MessagePortService::CheckRemotePort
02-23 17:24:19.612+0000 I/MESSAGE_PORT(  438): MessagePortService.cpp: GetKey(365) > _MessagePortService::GetKey
02-23 17:24:19.612+0000 I/MESSAGE_PORT(  438): MessagePortService.cpp: CheckRemotePort(220) > Check a remote message port: [com.samsung.w-home:music-control-service-message-port]
02-23 17:24:19.612+0000 I/MESSAGE_PORT(  438): MessagePortIpcServer.cpp: Send(847) > _MessagePortIpcServer::Stop
02-23 17:24:19.677+0000 I/MESSAGE_PORT(  438): MessagePortIpcServer.cpp: OnReadMessage(739) > _MessagePortIpcServer::OnReadMessage
02-23 17:24:19.677+0000 I/MESSAGE_PORT(  438): MessagePortIpcServer.cpp: HandleReceivedMessage(578) > _MessagePortIpcServer::HandleReceivedMessage
02-23 17:24:19.677+0000 I/MESSAGE_PORT(  438): MessagePortStub.cpp: OnIpcRequestReceived(147) > MessagePort message received
02-23 17:24:19.677+0000 I/MESSAGE_PORT(  438): MessagePortStub.cpp: OnSendMessage(126) > MessagePort OnSendMessage
02-23 17:24:19.677+0000 I/MESSAGE_PORT(  438): MessagePortService.cpp: SendMessage(291) > _MessagePortService::SendMessage
02-23 17:24:19.677+0000 I/MESSAGE_PORT(  438): MessagePortService.cpp: GetKey(365) > _MessagePortService::GetKey
02-23 17:24:19.677+0000 I/MESSAGE_PORT(  438): MessagePortService.cpp: SendMessage(299) > Sends a message to a remote message port [com.samsung.w-home:music-control-service-message-port]
02-23 17:24:19.677+0000 I/MESSAGE_PORT(  438): MessagePortStub.cpp: SendMessage(138) > MessagePort SendMessage
02-23 17:24:19.677+0000 I/MESSAGE_PORT(  438): MessagePortIpcServer.cpp: SendResponse(884) > _MessagePortIpcServer::SendResponse
02-23 17:24:19.677+0000 I/MESSAGE_PORT(  438): MessagePortIpcServer.cpp: Send(847) > _MessagePortIpcServer::Stop
02-23 17:24:19.682+0000 W/W_HOME  (  711): clock_shortcut.c: _music_service_messageport_cb(361) > mode:remote state:unknown 
02-23 17:24:19.682+0000 E/W_HOME  (  711): clock_shortcut.c: _mp_state_get(104) > (s_info.music_service.state != 1) -> _mp_state_get() return
02-23 17:24:19.692+0000 W/MUSIC_CONTROL_SERVICE( 1069): music-control-message.c: music_control_message_send_player_state_changed_ind(254) > [36m[TID:1069]   [MUSIC_PLAYER_EVENT][0m
02-23 17:24:19.707+0000 I/MESSAGE_PORT(  438): MessagePortIpcServer.cpp: OnReadMessage(739) > _MessagePortIpcServer::OnReadMessage
02-23 17:24:19.707+0000 I/MESSAGE_PORT(  438): MessagePortIpcServer.cpp: HandleReceivedMessage(578) > _MessagePortIpcServer::HandleReceivedMessage
02-23 17:24:19.707+0000 I/MESSAGE_PORT(  438): MessagePortStub.cpp: OnIpcRequestReceived(147) > MessagePort message received
02-23 17:24:19.707+0000 I/MESSAGE_PORT(  438): MessagePortStub.cpp: OnCheckRemotePort(115) > _MessagePortStub::OnCheckRemotePort.
02-23 17:24:19.707+0000 I/MESSAGE_PORT(  438): MessagePortService.cpp: CheckRemotePort(207) > _MessagePortService::CheckRemotePort
02-23 17:24:19.707+0000 I/MESSAGE_PORT(  438): MessagePortService.cpp: GetKey(365) > _MessagePortService::GetKey
02-23 17:24:19.707+0000 I/MESSAGE_PORT(  438): MessagePortService.cpp: CheckRemotePort(220) > Check a remote message port: [com.samsung.w-home:music-control-service-message-port]
02-23 17:24:19.707+0000 I/MESSAGE_PORT(  438): MessagePortIpcServer.cpp: Send(847) > _MessagePortIpcServer::Stop
02-23 17:24:19.742+0000 I/MESSAGE_PORT(  438): MessagePortIpcServer.cpp: OnReadMessage(739) > _MessagePortIpcServer::OnReadMessage
02-23 17:24:19.742+0000 I/MESSAGE_PORT(  438): MessagePortIpcServer.cpp: HandleReceivedMessage(578) > _MessagePortIpcServer::HandleReceivedMessage
02-23 17:24:19.742+0000 I/MESSAGE_PORT(  438): MessagePortStub.cpp: OnIpcRequestReceived(147) > MessagePort message received
02-23 17:24:19.742+0000 I/MESSAGE_PORT(  438): MessagePortStub.cpp: OnSendMessage(126) > MessagePort OnSendMessage
02-23 17:24:19.742+0000 I/MESSAGE_PORT(  438): MessagePortService.cpp: SendMessage(291) > _MessagePortService::SendMessage
02-23 17:24:19.742+0000 I/MESSAGE_PORT(  438): MessagePortService.cpp: GetKey(365) > _MessagePortService::GetKey
02-23 17:24:19.742+0000 I/MESSAGE_PORT(  438): MessagePortService.cpp: SendMessage(299) > Sends a message to a remote message port [com.samsung.w-home:music-control-service-message-port]
02-23 17:24:19.742+0000 I/MESSAGE_PORT(  438): MessagePortStub.cpp: SendMessage(138) > MessagePort SendMessage
02-23 17:24:19.742+0000 I/MESSAGE_PORT(  438): MessagePortIpcServer.cpp: SendResponse(884) > _MessagePortIpcServer::SendResponse
02-23 17:24:19.742+0000 I/MESSAGE_PORT(  438): MessagePortIpcServer.cpp: Send(847) > _MessagePortIpcServer::Stop
02-23 17:24:19.747+0000 W/W_HOME  (  711): clock_shortcut.c: _music_service_messageport_cb(361) > mode:remote state:unknown 
02-23 17:24:19.747+0000 E/W_HOME  (  711): clock_shortcut.c: _mp_state_get(104) > (s_info.music_service.state != 1) -> _mp_state_get() return
02-23 17:24:20.002+0000 I/CAPI_WATCH_APPLICATION(  753): watch_app_main.c: _watch_core_time_tick(306) > _watch_core_time_tick
02-23 17:24:20.952+0000 E/rpm-installer(22326): installer-util.c: _installer_util_get_configuration_value(331) > [signature]=[on]
02-23 17:24:21.007+0000 I/CAPI_WATCH_APPLICATION(  753): watch_app_main.c: _watch_core_time_tick(306) > _watch_core_time_tick
02-23 17:24:21.062+0000 E/PKGMGR_SERVER(22325): pkgmgr-server.c: exit_server(1338) > exit_server Start [backend_status=0, queue_status=1] 
02-23 17:24:22.007+0000 I/CAPI_WATCH_APPLICATION(  753): watch_app_main.c: _watch_core_time_tick(306) > _watch_core_time_tick
02-23 17:24:23.002+0000 I/CAPI_WATCH_APPLICATION(  753): watch_app_main.c: _watch_core_time_tick(306) > _watch_core_time_tick
02-23 17:24:23.062+0000 E/PKGMGR_SERVER(22325): pkgmgr-server.c: exit_server(1338) > exit_server Start [backend_status=0, queue_status=1] 
02-23 17:24:24.002+0000 I/CAPI_WATCH_APPLICATION(  753): watch_app_main.c: _watch_core_time_tick(306) > _watch_core_time_tick
02-23 17:24:25.002+0000 I/CAPI_WATCH_APPLICATION(  753): watch_app_main.c: _watch_core_time_tick(306) > _watch_core_time_tick
02-23 17:24:25.062+0000 E/PKGMGR_SERVER(22325): pkgmgr-server.c: exit_server(1338) > exit_server Start [backend_status=0, queue_status=1] 
02-23 17:24:25.547+0000 E/WMS     (  474): wms_event_handler.c: _wms_event_handler_cb_log_package(4451) > package [_________] callback : [UPDATE, PROCESSING]
02-23 17:24:25.547+0000 E/PKGMGR_SERVER(22325): pkgmgr-server.c: sighandler(445) > child NORMAL exit [22326]
02-23 17:24:25.577+0000 E/WMS     (  474): wms_event_handler.c: _wms_event_handler_cb_log_package(4451) > package [_________] callback : [UPDATE, COMPLETED]
02-23 17:24:25.577+0000 E/WMS     (  474): wms_event_handler.c: _wms_event_handler_cb_package_manager_event(6799) > package install complete
02-23 17:24:25.577+0000 E/WMS     (  474): wms_event_handler.c: _wms_event_handler_package_install_event(4679) > 
02-23 17:24:25.577+0000 E/WMS     (  474): wms_event_handler.c: _wms_event_handler_get_index_from_install_req_list(1742) > Found in install_req_list?[0], index[-1]
02-23 17:24:25.667+0000 W/W_HOME  (  711): clock_event.c: _pkgmgr_event_cb(238) > Pkg:org.example.gears2robotcontrol is updated, need to check validation
02-23 17:24:25.667+0000 W/W_HOME  (  711): clock_event.c: _pkgmgr_event_cb(242) > attacheck clock:zHNI5O5ZNh
02-23 17:24:25.722+0000 E/PKGMGR_INFO(  473): pkgmgrinfo_appinfo.c: pkgmgrinfo_appinfo_get_list(848) > (component == PMINFO_SVC_APP) PMINFO_SVC_APP is done
02-23 17:24:25.762+0000 W/APPS    (  711): pkgmgr.c: _update_app(732) >  old order:[41]
02-23 17:24:25.852+0000 E/EFL     (  711): elementary<711> elm_layout.c:1020 _elm_layout_smart_content_set() could not swallow 0x47b27538 into part 'elm.swallow.event.0'
02-23 17:24:25.877+0000 E/APPS    (  711): AppsViewNecklace.cpp: onShow(568) >  AppsItemList[43]
02-23 17:24:25.997+0000 I/CAPI_WATCH_APPLICATION(  753): watch_app_main.c: _watch_core_time_tick(306) > _watch_core_time_tick
02-23 17:24:26.002+0000 E/Vi::Animations(  711): result Vi::Animations::_AnimationManager::addAnimation(Vi::Animations::Visual&, const string*, Vi::Animations::Animation&)(288) > [E_OBJ_ALREADY_EXIST] Animation with keyName already exists. key name = hide
02-23 17:24:26.002+0000 I/Vi::Animations(  711): result Vi::Animations::_VisualImpl::addAnimation(const string*, Vi::Animations::Animation&)(6999) > [E_OBJ_ALREADY_EXIST] Propagating.
02-23 17:24:26.022+0000 E/EFL     (  711): elementary<711> elm_layout.c:1020 _elm_layout_smart_content_set() could not swallow 0x47b27538 into part 'elm.swallow.event.0'
02-23 17:24:26.047+0000 E/APPS    (  711): AppsViewNecklace.cpp: onShow(568) >  AppsItemList[44]
02-23 17:24:26.547+0000 W/APPS    (  711): pkgmgr.c: _update_app_cb(711) >  Update apps order
02-23 17:24:26.547+0000 W/APPS    (  711): AppsViewNecklace.cpp: onTouchEventCancel(4324) >  touch cancel
02-23 17:24:27.002+0000 I/CAPI_WATCH_APPLICATION(  753): watch_app_main.c: _watch_core_time_tick(306) > _watch_core_time_tick
02-23 17:24:27.062+0000 E/PKGMGR_SERVER(22325): pkgmgr-server.c: exit_server(1338) > exit_server Start [backend_status=1, queue_status=1] 
02-23 17:24:27.062+0000 E/PKGMGR_SERVER(22325): pkgmgr-server.c: main(2180) > package manager server terminated.
02-23 17:24:28.002+0000 I/CAPI_WATCH_APPLICATION(  753): watch_app_main.c: _watch_core_time_tick(306) > _watch_core_time_tick
02-23 17:24:29.002+0000 I/CAPI_WATCH_APPLICATION(  753): watch_app_main.c: _watch_core_time_tick(306) > _watch_core_time_tick
02-23 17:24:29.487+0000 E/TIZEN_N_SYSTEM_SETTINGS(  787): system_settings.c: system_settings_get_value_string(522) > Enter [system_settings_get_value_string]
02-23 17:24:29.487+0000 E/TIZEN_N_SYSTEM_SETTINGS(  787): system_settings.c: system_settings_get_value(386) > Enter [system_settings_get_value]
02-23 17:24:29.487+0000 E/TIZEN_N_SYSTEM_SETTINGS(  787): system_settings.c: system_settings_get_item(361) > Enter [system_settings_get_item], key=13
02-23 17:24:29.487+0000 E/TIZEN_N_SYSTEM_SETTINGS(  787): system_settings.c: system_settings_get_item(374) > Enter [system_settings_get_item], index = 13, key = 13, type = 0
02-23 17:24:29.492+0000 E/TIZEN_N_SYSTEM_SETTINGS(  787): system_settings.c: system_settings_get_value_string(522) > Enter [system_settings_get_value_string]
02-23 17:24:29.492+0000 E/TIZEN_N_SYSTEM_SETTINGS(  787): system_settings.c: system_settings_get_value(386) > Enter [system_settings_get_value]
02-23 17:24:29.492+0000 E/TIZEN_N_SYSTEM_SETTINGS(  787): system_settings.c: system_settings_get_item(361) > Enter [system_settings_get_item], key=13
02-23 17:24:29.492+0000 E/TIZEN_N_SYSTEM_SETTINGS(  787): system_settings.c: system_settings_get_item(374) > Enter [system_settings_get_item], index = 13, key = 13, type = 0
02-23 17:24:30.007+0000 I/CAPI_WATCH_APPLICATION(  753): watch_app_main.c: _watch_core_time_tick(306) > _watch_core_time_tick
02-23 17:24:30.997+0000 I/CAPI_WATCH_APPLICATION(  753): watch_app_main.c: _watch_core_time_tick(306) > _watch_core_time_tick
02-23 17:24:31.642+0000 W/AUL_AMD (  476): amd_request.c: __request_handler(640) > __request_handler: 0
02-23 17:24:31.662+0000 I/AUL_AMD (  476): menu_db_util.h: _get_app_info_from_db_by_apppath(239) > path : /usr/bin/launch_app, ret : 0
02-23 17:24:31.682+0000 I/AUL_AMD (  476): menu_db_util.h: _get_app_info_from_db_by_apppath(239) > path : /bin/bash, ret : 0
02-23 17:24:31.682+0000 E/AUL_AMD (  476): amd_launch.c: _start_app(1649) > no caller appid info, ret: -1
02-23 17:24:31.682+0000 W/AUL_AMD (  476): amd_launch.c: _start_app(1659) > caller pid : 22385
02-23 17:24:31.697+0000 W/AUL_AMD (  476): amd_launch.c: _start_app(2026) > pad pid(-5)
02-23 17:24:31.702+0000 W/AUL_PAD ( 1134): launchpad.c: __launchpad_main_loop(512) > Launch on type-based process-pool
02-23 17:24:31.702+0000 W/AUL_PAD ( 1134): launchpad.c: __send_result_to_caller(265) > Check app launching
02-23 17:24:31.702+0000 E/RESOURCED(  478): block.c: block_prelaunch_state(134) > [block_prelaunch_state,134] insert data org.example.gears2robotcontrol, table num : 5
02-23 17:24:31.702+0000 E/RESOURCED(  478): heart-memory.c: heart_memory_get_data(601) > [heart_memory_get_data,601] hashtable heart_memory_app_list is NULL
02-23 17:24:31.727+0000 I/efl-extension(22050): efl_extension.c: eext_mod_init(40) > Init
02-23 17:24:31.727+0000 D/main    (22050): app start
02-23 17:24:31.727+0000 I/CAPI_APPFW_APPLICATION(22050): app_main.c: ui_app_main(704) > app_efl_main
02-23 17:24:31.732+0000 I/CAPI_APPFW_APPLICATION(22050): app_main.c: _ui_app_appcore_create(563) > app_appcore_create
02-23 17:24:31.732+0000 D/main    (22050): resolved remote socket address 192.168.43.218, 21234
02-23 17:24:31.732+0000 D/main    (22050): Socket created: 22
02-23 17:24:31.732+0000 D/main    (22050): get_UDPsocket: 
02-23 17:24:31.732+0000 D/main    (22050): app_create: udp connection success
02-23 17:24:31.782+0000 E/TBM     (22050): tbm_bufmgr.c: _tbm_bufmgr_init_state(674) > USE TGL LOCK!
02-23 17:24:31.812+0000 E/RESOURCED(  478): proc-main.c: proc_add_program_list(233) > [proc_add_program_list,233] not found ppi : org.example.gears2robotcontrol
02-23 17:24:31.862+0000 I/efl-extension(22050): efl_extension_rotary.c: eext_rotary_event_handler_add(77) > init_count: 0
02-23 17:24:31.862+0000 I/efl-extension(22050): efl_extension_rotary.c: _init_Xi2_system(314) > In
02-23 17:24:31.862+0000 E/E17     (  409): e_manager.c: _e_manager_cb_window_show_request(1128) > Show request(0x02e00002)
02-23 17:24:31.917+0000 W/W_HOME  (  711): event_manager.c: _ecore_x_message_cb(403) > state: 0 -> 1
02-23 17:24:31.917+0000 W/W_HOME  (  711): event_manager.c: _state_control(194) > control:4, app_state:1 win_state:1(1) pm_state:1 home_visible:1 clock_visible:1 tutorial_state:0 editing : 0, home_clocklist:0, addviewer:0 scrolling : 0, powersaving : 0, apptray state : 1, apptray visibility : 0, apptray edit visibility : 0
02-23 17:24:31.917+0000 W/W_HOME  (  711): event_manager.c: _state_control(194) > control:2, app_state:1 win_state:1(1) pm_state:1 home_visible:1 clock_visible:1 tutorial_state:0 editing : 0, home_clocklist:0, addviewer:0 scrolling : 0, powersaving : 0, apptray state : 1, apptray visibility : 0, apptray edit visibility : 0
02-23 17:24:31.917+0000 W/W_HOME  (  711): event_manager.c: _state_control(194) > control:1, app_state:1 win_state:1(1) pm_state:1 home_visible:1 clock_visible:1 tutorial_state:0 editing : 0, home_clocklist:0, addviewer:0 scrolling : 0, powersaving : 0, apptray state : 1, apptray visibility : 0, apptray edit visibility : 0
02-23 17:24:31.917+0000 W/W_HOME  (  711): main.c: _ecore_x_message_cb(1222) > main_info.is_win_on_top: 0
02-23 17:24:31.932+0000 I/efl-extension(22050): efl_extension_rotary.c: _init_Xi2_system(375) > Done
02-23 17:24:31.937+0000 I/APP_CORE(22050): appcore-efl.c: __do_app(429) > [APP 22050] Event: RESET State: CREATED
02-23 17:24:31.942+0000 I/CAPI_APPFW_APPLICATION(22050): app_main.c: _ui_app_appcore_reset(645) > app_appcore_reset
02-23 17:24:31.942+0000 I/GESTURE (  138): gesture.c: BackGestureSetProperty(4502) > [BackGestureSetProperty] atom=_E_MOVE_W_HOME_CLOCK_STATE, value=0, No clock display 
02-23 17:24:31.947+0000 I/MALI    (  711): egl_platform_x11_tizen.c: tizen_update_native_surface_private(194) > [EGL-X11] surface->[0x442b64c8] swap changed from sync to async
02-23 17:24:31.992+0000 I/APP_CORE(22050): appcore-efl.c: __do_app(472) > Legacy lifecycle: 0
02-23 17:24:31.992+0000 I/APP_CORE(22050): appcore-efl.c: __do_app(474) > [APP 22050] Initial Launching, call the resume_cb
02-23 17:24:31.992+0000 I/CAPI_APPFW_APPLICATION(22050): app_main.c: _ui_app_appcore_resume(628) > app_appcore_resume
02-23 17:24:31.992+0000 D/main    (22050): APP_RESUME: Start message sent
02-23 17:24:32.002+0000 I/CAPI_WATCH_APPLICATION(  753): watch_app_main.c: _watch_core_time_tick(306) > _watch_core_time_tick
02-23 17:24:32.232+0000 W/CRASH_MANAGER(22387): worker.c: worker_job(1199) > 11220506765611456248271
02-23 17:24:32.282+0000 W/PROCESSMGR(  409): e_mod_processmgr.c: _e_mod_processmgr_send_update_watch_action(639) > [PROCESSMGR] =====================> send UpdateClock
02-23 17:24:32.287+0000 I/AUL_AMD (  476): amd_main.c: __app_dead_handler(261) > __app_dead_handler, pid: 22050
02-23 17:24:32.287+0000 W/WATCH_CORE(  753): appcore-watch.c: __signal_process_manager_handler(1163) > process_manager_signal
02-23 17:24:32.287+0000 I/WATCH_CORE(  753): appcore-watch.c: __signal_process_manager_handler(1167) > Skip the background tick update
02-23 17:24:32.302+0000 W/W_HOME  (  711): event_manager.c: _ecore_x_message_cb(403) > state: 1 -> 0
02-23 17:24:32.302+0000 W/W_HOME  (  711): event_manager.c: _state_control(194) > control:4, app_state:1 win_state:0(1) pm_state:1 home_visible:1 clock_visible:1 tutorial_state:0 editing : 0, home_clocklist:0, addviewer:0 scrolling : 0, powersaving : 0, apptray state : 1, apptray visibility : 0, apptray edit visibility : 0
02-23 17:24:32.302+0000 W/W_HOME  (  711): event_manager.c: _state_control(194) > control:2, app_state:1 win_state:0(1) pm_state:1 home_visible:1 clock_visible:1 tutorial_state:0 editing : 0, home_clocklist:0, addviewer:0 scrolling : 0, powersaving : 0, apptray state : 1, apptray visibility : 0, apptray edit visibility : 0
02-23 17:24:32.302+0000 W/W_HOME  (  711): event_manager.c: _state_control(194) > control:1, app_state:1 win_state:0(1) pm_state:1 home_visible:1 clock_visible:1 tutorial_state:0 editing : 0, home_clocklist:0, addviewer:0 scrolling : 0, powersaving : 0, apptray state : 1, apptray visibility : 0, apptray edit visibility : 0
02-23 17:24:32.302+0000 W/W_HOME  (  711): main.c: _ecore_x_message_cb(1222) > main_info.is_win_on_top: 1
02-23 17:24:32.307+0000 I/GESTURE (  138): gesture.c: BackGestureSetProperty(4497) > [BackGestureSetProperty] atom=_E_MOVE_W_HOME_CLOCK_STATE, value=1, Clock display 
02-23 17:24:32.332+0000 I/efl-extension(20323): efl_extension_rotary.c: _process_raw_event(444) > direction: Clockwise
02-23 17:24:32.332+0000 I/efl-extension(  711): efl_extension_rotary.c: _process_raw_event(444) > direction: Clockwise
02-23 17:24:32.332+0000 I/efl-extension(  711): efl_extension_rotary.c: _rotary_rotate_handler_cb(526) > Deliver clockwise rotary event to object: 0x45b5c9a8, elm_box, time_stamp : 15963271
02-23 17:24:32.332+0000 I/wnotib  (  711): w-notification-board-broker-main.c: _wnotib_rotary_cb(568) > Pass rotary event to home.
02-23 17:24:32.342+0000 I/efl-extension(  753): efl_extension_rotary.c: _process_raw_event(444) > direction: Clockwise
02-23 17:24:32.367+0000 W/W_HOME  (  711): home_navigation.c: _is_rightedge(188) > (360 360) not right edge: 0 0 0x45bbfbd0 -> 360 0 0x47b50a58
02-23 17:24:32.377+0000 I/efl-extension(  711): efl_extension_circle_object_scroller.c: _eext_circle_object_scroller_rotary_changed_cb(616) > [0x45b5a428 : elm_scroller] rotary callabck is called.
02-23 17:24:32.377+0000 I/efl-extension(  711): efl_extension_circle_object_scroller.c: _eext_circle_object_scroller_rotary_changed_cb(646) > [0x45b5a428 : elm_scroller] block(2)
02-23 17:24:32.377+0000 I/efl-extension(  711): efl_extension_circle_object_scroller.c: _eext_circle_object_scroller_rotary_changed_cb(647) > [0x45b5a428 : elm_scroller] scroll_locked_x(0), scroll_locked_y(0)
02-23 17:24:32.377+0000 I/efl-extension(  711): efl_extension_circle_object_scroller.c: _eext_circle_object_scroller_rotary_changed_cb(648) > [0x45b5a428 : elm_scroller] content size (w, h)(5040, 360)
02-23 17:24:32.377+0000 I/efl-extension(  711): efl_extension_circle_object_scroller.c: _eext_circle_object_scroller_rotary_changed_cb(649) > [0x45b5a428 : elm_scroller] viewport size (w, h)(360, 360)
02-23 17:24:32.377+0000 I/efl-extension(  711): efl_extension_circle_object_scroller.c: _eext_circle_object_scroller_rotary_changed_cb(712) > [0x45b5a428 : elm_scroller] CurrentPage(1) DetentCount(1)
02-23 17:24:32.377+0000 I/efl-extension(  711): efl_extension_circle_object_scroller.c: _eext_circle_object_scroller_can_scroll(405) > [0x45b5a428 : elm_scroller] mx(4680), my(0), minx(0), miny(0), px(360), py(0)
02-23 17:24:32.377+0000 I/efl-extension(  711): efl_extension_circle_object_scroller.c: _eext_circle_object_scroller_can_scroll(405) > [0x45b5a428 : elm_scroller] mx(4680), my(0), minx(0), miny(0), px(360), py(0)
02-23 17:24:32.377+0000 I/efl-extension(  711): efl_extension_circle_object_scroller.c: _eext_circle_object_scroller_can_scroll(405) > [0x45b5a428 : elm_scroller] mx(4680), my(0), minx(0), miny(0), px(360), py(0)
02-23 17:24:32.377+0000 I/efl-extension(  711): efl_extension_circle_object_scroller.c: _eext_circle_object_scroller_rotary_changed_cb(744) > [0x45b5a428 : elm_scroller] bring in 2 page
02-23 17:24:32.382+0000 W/W_HOME  (  711): event_manager.c: _home_scroll_cb(564) > scroll,start
02-23 17:24:32.432+0000 W/W_HOME  (  711): index.c: index_show(299) > is_paused:0 show VI:1 visibility:0 vi:(nil)
02-23 17:24:32.432+0000 W/W_HOME  (  711): event_manager.c: _clock_view_obscured_cb(621) > state: 1 -> 0
02-23 17:24:32.432+0000 W/W_HOME  (  711): event_manager.c: _state_control(194) > control:2, app_state:1 win_state:0(1) pm_state:1 home_visible:1 clock_visible:0 tutorial_state:0 editing : 0, home_clocklist:0, addviewer:0 scrolling : 1, powersaving : 0, apptray state : 1, apptray visibility : 0, apptray edit visibility : 0
02-23 17:24:32.447+0000 I/ELM_RPANEL(  711): elm-rpanel.c: _panel_swap_effect(2829) > tobj_item_01 is null
02-23 17:24:32.447+0000 I/ELM_RPANEL(  711): elm-rpanel.c: _panel_swap_effect(2884) > tobj_item_02 is null
02-23 17:24:32.462+0000 I/GESTURE (  138): gesture.c: BackGestureSetProperty(4502) > [BackGestureSetProperty] atom=_E_MOVE_W_HOME_CLOCK_STATE, value=0, No clock display 
02-23 17:24:32.487+0000 I/ELM_RPANEL(  711): elm-rpanel.c: _panel_swap_effect(2829) > tobj_item_01 is null
02-23 17:24:32.487+0000 I/ELM_RPANEL(  711): elm-rpanel.c: _panel_swap_effect(2884) > tobj_item_02 is null
02-23 17:24:32.512+0000 I/ELM_RPANEL(  711): elm-rpanel.c: _panel_swap_effect(2829) > tobj_item_01 is null
02-23 17:24:32.512+0000 I/ELM_RPANEL(  711): elm-rpanel.c: _panel_swap_effect(2884) > tobj_item_02 is null
02-23 17:24:32.532+0000 I/ELM_RPANEL(  711): elm-rpanel.c: _panel_swap_effect(2829) > tobj_item_01 is null
02-23 17:24:32.532+0000 I/ELM_RPANEL(  711): elm-rpanel.c: _panel_swap_effect(2884) > tobj_item_02 is null
02-23 17:24:32.562+0000 I/ELM_RPANEL(  711): elm-rpanel.c: _panel_swap_effect(2829) > tobj_item_01 is null
02-23 17:24:32.562+0000 I/ELM_RPANEL(  711): elm-rpanel.c: _panel_swap_effect(2884) > tobj_item_02 is null
02-23 17:24:32.587+0000 I/ELM_RPANEL(  711): elm-rpanel.c: _panel_swap_effect(2829) > tobj_item_01 is null
02-23 17:24:32.587+0000 I/ELM_RPANEL(  711): elm-rpanel.c: _panel_swap_effect(2884) > tobj_item_02 is null
02-23 17:24:32.602+0000 I/ELM_RPANEL(  711): elm-rpanel.c: _panel_swap_effect(2829) > tobj_item_01 is null
02-23 17:24:32.602+0000 I/ELM_RPANEL(  711): elm-rpanel.c: _panel_swap_effect(2884) > tobj_item_02 is null
02-23 17:24:32.617+0000 W/wnotib  (  711): w-notification-board-noti-manager.c: wnotib_noti_manager_do_postponed_job(1695) > No postponed update.
02-23 17:24:32.617+0000 I/efl-extension(  711): efl_extension_circle_object_scroller.c: _eext_circle_object_scroller_scroll_animatioin_stop_cb(501) > [0x45b5a428 : elm_scroller] CurrentPage(2)
02-23 17:24:32.632+0000 W/WATCH_CORE(  753): appcore-watch.c: __widget_pause(1001) > widget_pause
02-23 17:24:32.752+0000 W/W_HOME  (  711): event_manager.c: _home_scroll_cb(564) > scroll,done
02-23 17:24:32.807+0000 W/AUL_AMD (  476): amd_key.c: _key_ungrab(254) > fail(-1) to ungrab key(XF86Stop)
02-23 17:24:32.807+0000 W/AUL_AMD (  476): amd_launch.c: __grab_timeout_handler(1362) > back key ungrab error
02-23 17:24:32.817+0000 E/RESOURCED( 1113): proc-stat.c: send_socket_with_repy(767) > [send_socket_with_repy,767] send_socket_with_repy: read failed
02-23 17:24:32.817+0000 E/AUL     ( 1113): pkginfo.c: __get_id_bypid(197) > Failed to get the cmdline of pid, error: -1
02-23 17:24:32.817+0000 E/CAPI_APPFW_APP_MANAGER( 1113): app_manager.c: app_manager_error(76) > [app_context_get_app_context_by_pid] No such application(0xfeef0001)
02-23 17:24:32.822+0000 I/MALI    (  711): egl_platform_x11_tizen.c: tizen_update_native_surface_private(176) > [EGL-X11] surface->[0x442b64c8] swap changed from async to sync
02-23 17:24:32.867+0000 I/CAPI_WIDGET_APPLICATION(  787): widget_app.c: __provider_resume_cb(314) > widget obj was resumed
02-23 17:24:32.867+0000 I/CAPI_WIDGET_APPLICATION(  787): widget_app.c: __check_status_for_cgroup(134) > enter foreground group
02-23 17:24:33.122+0000 W/W_HOME  (  711): index.c: index_hide(337) > hide VI:1 visibility:1 vi:(nil)
02-23 17:24:33.202+0000 I/AUL_PAD (22400): launchpad_loader.c: main(603) > [candidate] elm init, returned: 1
02-23 17:24:33.282+0000 I/efl-extension(20323): efl_extension_rotary.c: _process_raw_event(438) > direction: Counter Clockwise
02-23 17:24:33.282+0000 I/efl-extension(  711): efl_extension_rotary.c: _process_raw_event(438) > direction: Counter Clockwise
02-23 17:24:33.282+0000 I/efl-extension(  711): efl_extension_rotary.c: _rotary_rotate_handler_cb(528) > Deliver counter clockwise rotary event to object: 0x45b5c9a8, elm_box, time_stamp : 15964221
02-23 17:24:33.282+0000 I/wnotib  (  711): w-notification-board-broker-main.c: _wnotib_rotary_cb(568) > Pass rotary event to home.
02-23 17:24:33.282+0000 I/efl-extension(  753): efl_extension_rotary.c: _process_raw_event(438) > direction: Counter Clockwise
02-23 17:24:33.302+0000 W/W_HOME  (  711): home_navigation.c: _is_rightedge(188) > (720 360) not right edge: 0 0 0x47b50a58 -> 360 0 0x47b4b1b0
02-23 17:24:33.307+0000 I/efl-extension(  711): efl_extension_circle_object_scroller.c: _eext_circle_object_scroller_rotary_changed_cb(616) > [0x45b5a428 : elm_scroller] rotary callabck is called.
02-23 17:24:33.307+0000 I/efl-extension(  711): efl_extension_circle_object_scroller.c: _eext_circle_object_scroller_rotary_changed_cb(646) > [0x45b5a428 : elm_scroller] block(2)
02-23 17:24:33.307+0000 I/efl-extension(  711): efl_extension_circle_object_scroller.c: _eext_circle_object_scroller_rotary_changed_cb(647) > [0x45b5a428 : elm_scroller] scroll_locked_x(0), scroll_locked_y(0)
02-23 17:24:33.307+0000 I/efl-extension(  711): efl_extension_circle_object_scroller.c: _eext_circle_object_scroller_rotary_changed_cb(648) > [0x45b5a428 : elm_scroller] content size (w, h)(5040, 360)
02-23 17:24:33.307+0000 I/efl-extension(  711): efl_extension_circle_object_scroller.c: _eext_circle_object_scroller_rotary_changed_cb(649) > [0x45b5a428 : elm_scroller] viewport size (w, h)(360, 360)
02-23 17:24:33.312+0000 I/efl-extension(  711): efl_extension_circle_object_scroller.c: _eext_circle_object_scroller_rotary_changed_cb(712) > [0x45b5a428 : elm_scroller] CurrentPage(2) DetentCount(-1)
02-23 17:24:33.312+0000 I/efl-extension(  711): efl_extension_circle_object_scroller.c: _eext_circle_object_scroller_can_scroll(405) > [0x45b5a428 : elm_scroller] mx(4680), my(0), minx(0), miny(0), px(720), py(0)
02-23 17:24:33.312+0000 I/efl-extension(  711): efl_extension_circle_object_scroller.c: _eext_circle_object_scroller_can_scroll(405) > [0x45b5a428 : elm_scroller] mx(4680), my(0), minx(0), miny(0), px(720), py(0)
02-23 17:24:33.312+0000 I/efl-extension(  711): efl_extension_circle_object_scroller.c: _eext_circle_object_scroller_can_scroll(405) > [0x45b5a428 : elm_scroller] mx(4680), my(0), minx(0), miny(0), px(720), py(0)
02-23 17:24:33.312+0000 I/efl-extension(  711): efl_extension_circle_object_scroller.c: _eext_circle_object_scroller_rotary_changed_cb(744) > [0x45b5a428 : elm_scroller] bring in 1 page
02-23 17:24:33.312+0000 W/W_HOME  (  711): event_manager.c: _home_scroll_cb(564) > scroll,start
02-23 17:24:33.317+0000 I/ELM_RPANEL(  711): elm-rpanel.c: _panel_swap_effect(2829) > tobj_item_01 is null
02-23 17:24:33.317+0000 I/ELM_RPANEL(  711): elm-rpanel.c: _panel_swap_effect(2884) > tobj_item_02 is null
02-23 17:24:33.337+0000 W/WATCH_CORE(  753): appcore-watch.c: __widget_resume(1012) > widget_resume
02-23 17:24:33.342+0000 I/CAPI_WATCH_APPLICATION(  753): watch_app_main.c: _watch_core_time_tick(306) > _watch_core_time_tick
02-23 17:24:33.352+0000 I/ELM_RPANEL(  711): elm-rpanel.c: _panel_swap_effect(2829) > tobj_item_01 is null
02-23 17:24:33.352+0000 I/ELM_RPANEL(  711): elm-rpanel.c: _panel_swap_effect(2884) > tobj_item_02 is null
02-23 17:24:33.362+0000 W/W_HOME  (  711): index.c: index_show(299) > is_paused:0 show VI:1 visibility:0 vi:(nil)
02-23 17:24:33.362+0000 I/ELM_RPANEL(  711): elm-rpanel.c: _panel_swap_effect(2829) > tobj_item_01 is null
02-23 17:24:33.362+0000 I/ELM_RPANEL(  711): elm-rpanel.c: _panel_swap_effect(2884) > tobj_item_02 is null
02-23 17:24:33.392+0000 I/ELM_RPANEL(  711): elm-rpanel.c: _panel_swap_effect(2829) > tobj_item_01 is null
02-23 17:24:33.392+0000 I/ELM_RPANEL(  711): elm-rpanel.c: _panel_swap_effect(2884) > tobj_item_02 is null
02-23 17:24:33.407+0000 I/ELM_RPANEL(  711): elm-rpanel.c: _panel_swap_effect(2829) > tobj_item_01 is null
02-23 17:24:33.407+0000 I/ELM_RPANEL(  711): elm-rpanel.c: _panel_swap_effect(2884) > tobj_item_02 is null
02-23 17:24:33.432+0000 I/ELM_RPANEL(  711): elm-rpanel.c: _panel_swap_effect(2829) > tobj_item_01 is null
02-23 17:24:33.432+0000 I/ELM_RPANEL(  711): elm-rpanel.c: _panel_swap_effect(2884) > tobj_item_02 is null
02-23 17:24:33.447+0000 I/ELM_RPANEL(  711): elm-rpanel.c: _panel_swap_effect(2829) > tobj_item_01 is null
02-23 17:24:33.447+0000 I/ELM_RPANEL(  711): elm-rpanel.c: _panel_swap_effect(2884) > tobj_item_02 is null
02-23 17:24:33.467+0000 I/ELM_RPANEL(  711): elm-rpanel.c: _panel_swap_effect(2829) > tobj_item_01 is null
02-23 17:24:33.467+0000 I/ELM_RPANEL(  711): elm-rpanel.c: _panel_swap_effect(2884) > tobj_item_02 is null
02-23 17:24:33.487+0000 W/W_HOME  (  711): event_manager.c: _clock_view_visible_cb(608) > state: 0 -> 1
02-23 17:24:33.487+0000 W/W_HOME  (  711): event_manager.c: _state_control(194) > control:2, app_state:1 win_state:0(1) pm_state:1 home_visible:1 clock_visible:1 tutorial_state:0 editing : 0, home_clocklist:0, addviewer:0 scrolling : 1, powersaving : 0, apptray state : 1, apptray visibility : 0, apptray edit visibility : 0
02-23 17:24:33.487+0000 I/ELM_RPANEL(  711): elm-rpanel.c: _panel_swap_effect(2829) > tobj_item_01 is null
02-23 17:24:33.487+0000 I/ELM_RPANEL(  711): elm-rpanel.c: _panel_swap_effect(2884) > tobj_item_02 is null
02-23 17:24:33.497+0000 I/GESTURE (  138): gesture.c: BackGestureSetProperty(4497) > [BackGestureSetProperty] atom=_E_MOVE_W_HOME_CLOCK_STATE, value=1, Clock display 
02-23 17:24:33.512+0000 I/ELM_RPANEL(  711): elm-rpanel.c: _panel_swap_effect(2829) > tobj_item_01 is null
02-23 17:24:33.512+0000 I/ELM_RPANEL(  711): elm-rpanel.c: _panel_swap_effect(2884) > tobj_item_02 is null
02-23 17:24:33.532+0000 I/ELM_RPANEL(  711): elm-rpanel.c: _panel_swap_effect(2829) > tobj_item_01 is null
02-23 17:24:33.532+0000 I/ELM_RPANEL(  711): elm-rpanel.c: _panel_swap_effect(2884) > tobj_item_02 is null
02-23 17:24:33.557+0000 I/ELM_RPANEL(  711): elm-rpanel.c: _panel_swap_effect(2829) > tobj_item_01 is null
02-23 17:24:33.557+0000 I/ELM_RPANEL(  711): elm-rpanel.c: _panel_swap_effect(2884) > tobj_item_02 is null
02-23 17:24:33.557+0000 W/wnotib  (  711): w-notification-board-noti-manager.c: wnotib_noti_manager_do_postponed_job(1695) > No postponed update.
02-23 17:24:33.557+0000 I/efl-extension(  711): efl_extension_circle_object_scroller.c: _eext_circle_object_scroller_scroll_animatioin_stop_cb(501) > [0x45b5a428 : elm_scroller] CurrentPage(1)
02-23 17:24:33.572+0000 I/CAPI_WIDGET_APPLICATION(  787): widget_app.c: __provider_pause_cb(296) > widget obj was paused
02-23 17:24:33.572+0000 I/CAPI_WIDGET_APPLICATION(  787): widget_app.c: __check_status_for_cgroup(145) > enter background group
02-23 17:24:33.702+0000 W/W_HOME  (  711): event_manager.c: _home_scroll_cb(564) > scroll,done
02-23 17:24:34.002+0000 I/CAPI_WATCH_APPLICATION(  753): watch_app_main.c: _watch_core_time_tick(306) > _watch_core_time_tick
02-23 17:24:34.062+0000 W/W_HOME  (  711): index.c: index_hide(337) > hide VI:1 visibility:1 vi:(nil)
02-23 17:24:35.007+0000 I/CAPI_WATCH_APPLICATION(  753): watch_app_main.c: _watch_core_time_tick(306) > _watch_core_time_tick
02-23 17:24:35.507+0000 W/STARTER (  692): hw_key.c: _key_press_cb(1200) > [_key_press_cb:1200] POWER Key is pressed
02-23 17:24:35.507+0000 W/STARTER (  692): hw_key.c: _key_press_cb(1203) > [_key_press_cb:1203] LCD state : 1
02-23 17:24:35.507+0000 W/STARTER (  692): hw_key.c: _key_press_cb(1210) > [_key_press_cb:1210] PM state : 1
02-23 17:24:35.507+0000 W/STARTER (  692): hw_key.c: _key_press_cb(1224) > [_key_press_cb:1224] powerkey count : 1
02-23 17:24:35.702+0000 W/STARTER (  692): hw_key.c: _key_release_cb(1124) > [_key_release_cb:1124] POWER Key is released
02-23 17:24:35.952+0000 W/STARTER (  692): hw_key.c: _powerkey_timer_cb(806) > [_powerkey_timer_cb:806] _powerkey_timer_cb, powerkey count[1]
02-23 17:24:35.957+0000 W/STARTER (  692): hw_key.c: _powerkey_timer_cb(961) > [_powerkey_timer_cb:961] clock visibility[1] pressed lcd status[1], current lcd status[1] pressed pm state[1]
02-23 17:24:35.957+0000 E/STARTER (  692): dbus-util.c: dbus_request_cpu_boost(337) > [dbus_request_cpu_boost:337] failed to _invoke_dbus_method_sync
02-23 17:24:35.957+0000 W/AUL_AMD (  476): amd_request.c: __request_handler(640) > __request_handler: 0
02-23 17:24:35.962+0000 W/AUL_AMD (  476): amd_launch.c: _start_app(1659) > caller pid : 692
02-23 17:24:35.967+0000 W/AUL_AMD (  476): amd_launch.c: __nofork_processing(1138) > __nofork_processing, cmd: 0, pid: 711
02-23 17:24:35.967+0000 W/AUL_AMD (  476): amd_launch.c: __reply_handler(909) > listen fd(28) , send fd(27), pid(711), cmd(0)
02-23 17:24:35.967+0000 I/APP_CORE(  711): appcore-efl.c: __do_app(429) > [APP 711] Event: RESET State: RUNNING
02-23 17:24:35.967+0000 I/CAPI_APPFW_APPLICATION(  711): app_main.c: app_appcore_reset(245) > app_appcore_reset
02-23 17:24:35.967+0000 W/W_HOME  (  711): main.c: _app_control(1726) > Service value : powerkey
02-23 17:24:35.967+0000 I/wnotib  (  711): w-notification-board-broker-main.c: _wnotib_view_event_handler(1182) > Home view event: 0x40001
02-23 17:24:35.972+0000 E/wnotib  (  711): w-notification-board-action-drawer.c: wnotib_action_drawer_popup_shown(4518) > [NULL==g_wnotib_action_drawer_data] msg Drawer not initialized.
02-23 17:24:35.972+0000 E/wnotib  (  711): w-notification-board-action-drawer.c: wnotib_action_drawer_hidden_get(4570) > [NULL==g_wnotib_action_drawer_data] msg Drawer not initialized.
02-23 17:24:35.972+0000 W/W_HOME  (  711): noti_broker.c: _noti_broker_home_cb(781) > continue the home key execution
02-23 17:24:35.972+0000 E/W_HOME  (  711): cs_broker.c: _cs_broker_home_cb(256) > (s_info.is_displayed == 0) -> _cs_broker_home_cb() return
02-23 17:24:35.972+0000 W/W_HOME  (  711): move.c: move_move_to_apps(216) > move to apps
02-23 17:24:35.972+0000 W/W_HOME  (  711): rotary.c: rotary_attach(138) > rotary_attach:0x47b29938
02-23 17:24:35.972+0000 I/efl-extension(  711): efl_extension_rotary.c: eext_rotary_object_event_activated_set(283) > eext_rotary_object_event_activated_set : 0x47b29938, elm_layout, _activated_obj : 0x45b5c9a8, activated : 1
02-23 17:24:35.972+0000 I/efl-extension(  711): efl_extension_rotary.c: eext_rotary_object_event_activated_set(291) > Activation delete!!!!
02-23 17:24:35.972+0000 W/W_HOME  (  711): event_manager.c: _move_module_anim_start_cb(635) > state: 0 -> 1
02-23 17:24:35.972+0000 W/W_HOME  (  711): event_manager.c: _state_control(194) > control:3, app_state:1 win_state:0(1) pm_state:1 home_visible:1 clock_visible:1 tutorial_state:0 editing : 0, home_clocklist:0, addviewer:0 scrolling : 0, powersaving : 0, apptray state : 1, apptray visibility : 0, apptray edit visibility : 0
02-23 17:24:35.972+0000 W/W_HOME  (  711): event_manager.c: _state_control(194) > control:2, app_state:1 win_state:0(1) pm_state:1 home_visible:1 clock_visible:1 tutorial_state:0 editing : 0, home_clocklist:0, addviewer:0 scrolling : 0, powersaving : 0, apptray state : 1, apptray visibility : 0, apptray edit visibility : 0
02-23 17:24:35.992+0000 I/APP_CORE(  711): appcore-efl.c: __do_app(479) > Legacy lifecycle: 1
02-23 17:24:35.992+0000 I/GESTURE (  138): gesture.c: BackGestureSetProperty(4502) > [BackGestureSetProperty] atom=_E_MOVE_W_HOME_CLOCK_STATE, value=0, No clock display 
02-23 17:24:35.997+0000 W/W_HOME  (  711): event_manager.c: _apptray_visibility_cb(578) > apps,show,start
02-23 17:24:35.997+0000 W/W_HOME  (  711): event_manager.c: _apptray_visibility_cb(596) > state: 1 -> 0
02-23 17:24:35.997+0000 W/W_HOME  (  711): event_manager.c: _state_control(194) > control:2, app_state:1 win_state:0(1) pm_state:1 home_visible:1 clock_visible:1 tutorial_state:0 editing : 0, home_clocklist:0, addviewer:0 scrolling : 0, powersaving : 0, apptray state : 1, apptray visibility : 0, apptray edit visibility : 0
02-23 17:24:35.997+0000 W/W_HOME  (  711): event_manager.c: _state_control(194) > control:0, app_state:1 win_state:0(1) pm_state:1 home_visible:1 clock_visible:1 tutorial_state:0 editing : 0, home_clocklist:0, addviewer:0 scrolling : 0, powersaving : 0, apptray state : 1, apptray visibility : 0, apptray edit visibility : 0
02-23 17:24:35.997+0000 W/W_HOME  (  711): event_manager.c: _state_control(194) > control:1, app_state:1 win_state:0(1) pm_state:1 home_visible:1 clock_visible:1 tutorial_state:0 editing : 0, home_clocklist:0, addviewer:0 scrolling : 0, powersaving : 0, apptray state : 1, apptray visibility : 0, apptray edit visibility : 0
02-23 17:24:35.997+0000 W/W_HOME  (  711): noti_broker.c: _apptray_visibility_cb(788) > apps,show,start
02-23 17:24:35.997+0000 W/W_HOME  (  711): noti_broker.c: noti_broker_event_fire_to_plugin(1006) > source:1 event:80002
02-23 17:24:35.997+0000 I/wnotib  (  711): w-notification-board-broker-main.c: _wnotib_view_event_handler(1182) > Home view event: 0x80002
02-23 17:24:35.997+0000 I/wnotib  (  711): w-notification-board-broker-main.c: _wnotib_view_event_handler(1263) > Unhandled type: 0x80002
02-23 17:24:36.002+0000 I/CAPI_WATCH_APPLICATION(  753): watch_app_main.c: _watch_core_time_tick(306) > _watch_core_time_tick
02-23 17:24:36.267+0000 W/W_HOME  (  711): event_manager.c: _move_module_anim_end_cb(649) > state: 1 -> 0
02-23 17:24:36.267+0000 W/W_HOME  (  711): event_manager.c: _state_control(194) > control:3, app_state:1 win_state:0(1) pm_state:1 home_visible:1 clock_visible:1 tutorial_state:0 editing : 0, home_clocklist:0, addviewer:0 scrolling : 0, powersaving : 0, apptray state : 1, apptray visibility : 0, apptray edit visibility : 0
02-23 17:24:36.272+0000 W/W_HOME  (  711): rotary.c: rotary_deattach(156) > rotary_deattach:0x47b29938
02-23 17:24:36.272+0000 I/efl-extension(  711): efl_extension_rotary.c: eext_rotary_object_event_callback_del(235) > In
02-23 17:24:36.272+0000 I/efl-extension(  711): efl_extension_rotary.c: eext_rotary_object_event_callback_del(240) > callback del 0x47b29938, elm_layout, func : 0x4004ac29
02-23 17:24:36.272+0000 I/efl-extension(  711): efl_extension_rotary.c: eext_rotary_object_event_callback_del(248) > Removed cb from callbacks
02-23 17:24:36.272+0000 I/efl-extension(  711): efl_extension_rotary.c: eext_rotary_object_event_callback_del(266) > Freed cb
02-23 17:24:36.272+0000 I/efl-extension(  711): efl_extension_rotary.c: eext_rotary_object_event_callback_del(273) > done
02-23 17:24:36.272+0000 I/efl-extension(  711): efl_extension_rotary.c: eext_rotary_object_event_activated_set(283) > eext_rotary_object_event_activated_set : 0x45b5c9a8, elm_box, _activated_obj : 0x47b29938, activated : 1
02-23 17:24:36.272+0000 I/efl-extension(  711): efl_extension_rotary.c: eext_rotary_object_event_activated_set(291) > Activation delete!!!!
02-23 17:24:36.272+0000 E/wnotib  (  711): w-notification-board-action-drawer.c: wnotib_action_drawer_hidden_get(4570) > [NULL==g_wnotib_action_drawer_data] msg Drawer not initialized.
02-23 17:24:36.272+0000 I/wnotib  (  711): w-notification-board-broker-main.c: _wnotib_scroller_event_handler(1108) > No second depth view available.
02-23 17:24:36.272+0000 W/W_HOME  (  711): event_manager.c: _apptray_visibility_cb(578) > apps,show
02-23 17:24:36.277+0000 W/W_HOME  (  711): event_manager.c: _apptray_visibility_cb(596) > state: 1 -> 1
02-23 17:24:36.277+0000 W/W_HOME  (  711): event_manager.c: _state_control(194) > control:2, app_state:1 win_state:0(1) pm_state:1 home_visible:0 clock_visible:1 tutorial_state:0 editing : 0, home_clocklist:0, addviewer:0 scrolling : 0, powersaving : 0, apptray state : 1, apptray visibility : 1, apptray edit visibility : 0
02-23 17:24:36.282+0000 W/W_HOME  (  711): event_manager.c: _state_control(194) > control:0, app_state:1 win_state:0(1) pm_state:1 home_visible:0 clock_visible:1 tutorial_state:0 editing : 0, home_clocklist:0, addviewer:0 scrolling : 0, powersaving : 0, apptray state : 1, apptray visibility : 1, apptray edit visibility : 0
02-23 17:24:36.282+0000 W/W_HOME  (  711): main.c: home_pause(751) > clock/widget paused
02-23 17:24:36.282+0000 W/W_HOME  (  711): event_manager.c: _state_control(194) > control:1, app_state:1 win_state:0(1) pm_state:1 home_visible:0 clock_visible:1 tutorial_state:0 editing : 0, home_clocklist:0, addviewer:0 scrolling : 0, powersaving : 0, apptray state : 1, apptray visibility : 1, apptray edit visibility : 0
02-23 17:24:36.282+0000 W/APPS    (  711): apps_main.c: _time_changed_cb(295) >  date : 23->23
02-23 17:24:36.282+0000 W/W_HOME  (  711): rotary.c: rotary_attach(138) > rotary_attach:0x4654cb98
02-23 17:24:36.282+0000 I/efl-extension(  711): efl_extension_rotary.c: eext_rotary_object_event_activated_set(283) > eext_rotary_object_event_activated_set : 0x4654cb98, elm_layout, _activated_obj : 0x45b5c9a8, activated : 1
02-23 17:24:36.287+0000 I/efl-extension(  711): efl_extension_rotary.c: eext_rotary_object_event_activated_set(291) > Activation delete!!!!
02-23 17:24:36.287+0000 W/W_HOME  (  711): noti_broker.c: _apptray_visibility_cb(788) > apps,show
02-23 17:24:36.287+0000 W/W_HOME  (  711): noti_broker.c: noti_broker_event_fire_to_plugin(1006) > source:1 event:80000
02-23 17:24:36.287+0000 I/wnotib  (  711): w-notification-board-broker-main.c: _wnotib_view_event_handler(1182) > Home view event: 0x80000
02-23 17:24:36.287+0000 I/wnotib  (  711): w-notification-board-noti-manager.c: wnotib_noti_manager_app_tray_changed(1701) > is_app_tray_displayed: 1
02-23 17:24:36.287+0000 E/APPS    (  711): apps_main.c: apps_main_resume(633) >  resumed already
02-23 17:24:36.297+0000 I/GESTURE (  138): gesture.c: BackGestureSetProperty(4534) > [BackGestureSetProperty] atom=_E_MOVE_ENABLE_DISABLE_BACK_GESTURE, value=0, No apps display 
02-23 17:24:36.297+0000 I/GESTURE (  138): gesture.c: BackGestureSetProperty(4529) > [BackGestureSetProperty] atom=_E_MOVE_ENABLE_DISABLE_BACK_GESTURE, value=1, Apps display 
02-23 17:24:36.297+0000 I/GESTURE (  138): gesture.c: BackGestureSetProperty(4529) > [BackGestureSetProperty] atom=_E_MOVE_ENABLE_DISABLE_BACK_GESTURE, value=1, Apps display 
02-23 17:24:36.297+0000 I/GESTURE (  138): gesture.c: BackGestureSetProperty(4529) > [BackGestureSetProperty] atom=_E_MOVE_ENABLE_DISABLE_BACK_GESTURE, value=1, Apps display 
02-23 17:24:36.317+0000 W/WATCH_CORE(  753): appcore-watch.c: __widget_pause(1001) > widget_pause
02-23 17:24:36.767+0000 I/GESTURE (  138): gesture.c: GestureRecognize(2948) > disable_home_back_gesture=0, disable_apps_back_gesture=1, disable back key!!!
02-23 17:24:36.767+0000 E/EFL     (  711): evas_main<711> evas_events.c:994 evas_event_feed_mouse_down() ButtonEvent:down time=15967706 button=1 downs=1
02-23 17:24:36.772+0000 W/APPS    (  711): AppsViewNecklace.cpp: touchPressed(1250) >  TOUCH [145, 189]
02-23 17:24:36.867+0000 E/EFL     (  711): evas_main<711> evas_events.c:1258 evas_event_feed_mouse_up() ButtonEvent:up time=15967794 button=1 downs=0
02-23 17:24:36.867+0000 W/APPS    (  711): AppsViewNecklace.cpp: touchReleased(1568) >  TOUCH [145, 189]->[143, 185]
02-23 17:24:36.867+0000 W/APPS    (  711): AppsItem.cpp: onItemClicked(390) >  onItemClicked[0,41]
02-23 17:24:36.867+0000 E/APPS    (  711): effect.c: apps_effect_play_sound(86) >  effect_info.sound_status: [0]
02-23 17:24:36.867+0000 W/APPS    (  711): AppsItem.cpp: onItemClicked(409) >  item(Robot Control) launched, open(0)
02-23 17:24:36.872+0000 W/AUL_AMD (  476): amd_request.c: __request_handler(640) > __request_handler: 0
02-23 17:24:36.872+0000 W/AUL_AMD (  476): amd_launch.c: _start_app(1659) > caller pid : 711
02-23 17:24:36.887+0000 E/RESOURCED(  478): block.c: block_prelaunch_state(134) > [block_prelaunch_state,134] insert data org.example.gears2robotcontrol, table num : 5
02-23 17:24:36.887+0000 E/RESOURCED(  478): heart-memory.c: heart_memory_get_data(601) > [heart_memory_get_data,601] hashtable heart_memory_app_list is NULL
02-23 17:24:36.887+0000 W/AUL_AMD (  476): amd_launch.c: _start_app(2026) > pad pid(-5)
02-23 17:24:36.892+0000 W/AUL_PAD ( 1134): launchpad.c: __launchpad_main_loop(512) > Launch on type-based process-pool
02-23 17:24:36.892+0000 W/AUL_PAD ( 1134): launchpad.c: __send_result_to_caller(265) > Check app launching
02-23 17:24:36.902+0000 I/efl-extension(22400): efl_extension.c: eext_mod_init(40) > Init
02-23 17:24:36.902+0000 D/main    (22400): app start
02-23 17:24:36.902+0000 I/CAPI_APPFW_APPLICATION(22400): app_main.c: ui_app_main(704) > app_efl_main
02-23 17:24:36.907+0000 I/CAPI_APPFW_APPLICATION(22400): app_main.c: _ui_app_appcore_create(563) > app_appcore_create
02-23 17:24:36.907+0000 D/main    (22400): resolved remote socket address 192.168.43.218, 21234
02-23 17:24:36.907+0000 D/main    (22400): Socket created: 23
02-23 17:24:36.907+0000 D/main    (22400): get_UDPsocket: 
02-23 17:24:36.907+0000 D/main    (22400): app_create: udp connection success
02-23 17:24:36.927+0000 E/TBM     (22400): tbm_bufmgr.c: _tbm_bufmgr_init_state(674) > USE TGL LOCK!
02-23 17:24:36.967+0000 E/E17     (  409): e_manager.c: _e_manager_cb_window_show_request(1128) > Show request(0x02e00002)
02-23 17:24:36.997+0000 E/RESOURCED(  478): proc-main.c: proc_add_program_list(233) > [proc_add_program_list,233] not found ppi : org.example.gears2robotcontrol
02-23 17:24:37.007+0000 I/MALI    (  711): egl_platform_x11_tizen.c: tizen_update_native_surface_private(194) > [EGL-X11] surface->[0x442b64c8] swap changed from sync to async
02-23 17:24:37.022+0000 I/efl-extension(22400): efl_extension_rotary.c: eext_rotary_event_handler_add(77) > init_count: 0
02-23 17:24:37.022+0000 I/efl-extension(22400): efl_extension_rotary.c: _init_Xi2_system(314) > In
02-23 17:24:37.027+0000 I/efl-extension(22400): efl_extension_rotary.c: _init_Xi2_system(375) > Done
02-23 17:24:37.032+0000 I/APP_CORE(22400): appcore-efl.c: __do_app(429) > [APP 22400] Event: RESET State: CREATED
02-23 17:24:37.032+0000 I/CAPI_APPFW_APPLICATION(22400): app_main.c: _ui_app_appcore_reset(645) > app_appcore_reset
02-23 17:24:37.037+0000 W/W_HOME  (  711): event_manager.c: _ecore_x_message_cb(403) > state: 0 -> 1
02-23 17:24:37.037+0000 W/W_HOME  (  711): event_manager.c: _state_control(194) > control:4, app_state:1 win_state:1(1) pm_state:1 home_visible:0 clock_visible:1 tutorial_state:0 editing : 0, home_clocklist:0, addviewer:0 scrolling : 0, powersaving : 0, apptray state : 0, apptray visibility : 1, apptray edit visibility : 0
02-23 17:24:37.037+0000 W/W_HOME  (  711): event_manager.c: _state_control(194) > control:2, app_state:1 win_state:1(1) pm_state:1 home_visible:0 clock_visible:1 tutorial_state:0 editing : 0, home_clocklist:0, addviewer:0 scrolling : 0, powersaving : 0, apptray state : 0, apptray visibility : 1, apptray edit visibility : 0
02-23 17:24:37.037+0000 W/W_HOME  (  711): event_manager.c: _state_control(194) > control:1, app_state:1 win_state:1(1) pm_state:1 home_visible:0 clock_visible:1 tutorial_state:0 editing : 0, home_clocklist:0, addviewer:0 scrolling : 0, powersaving : 0, apptray state : 0, apptray visibility : 1, apptray edit visibility : 0
02-23 17:24:37.042+0000 W/W_HOME  (  711): main.c: _ecore_x_message_cb(1222) > main_info.is_win_on_top: 0
02-23 17:24:37.047+0000 I/GESTURE (  138): gesture.c: BackGestureSetProperty(4529) > [BackGestureSetProperty] atom=_E_MOVE_ENABLE_DISABLE_BACK_GESTURE, value=1, Apps display 
02-23 17:24:37.047+0000 I/GESTURE (  138): gesture.c: BackGestureSetProperty(4534) > [BackGestureSetProperty] atom=_E_MOVE_ENABLE_DISABLE_BACK_GESTURE, value=0, No apps display 
02-23 17:24:37.072+0000 I/APP_CORE(22400): appcore-efl.c: __do_app(472) > Legacy lifecycle: 0
02-23 17:24:37.072+0000 I/APP_CORE(22400): appcore-efl.c: __do_app(474) > [APP 22400] Initial Launching, call the resume_cb
02-23 17:24:37.077+0000 I/CAPI_APPFW_APPLICATION(22400): app_main.c: _ui_app_appcore_resume(628) > app_appcore_resume
02-23 17:24:37.077+0000 D/main    (22400): APP_RESUME: Start message sent
02-23 17:24:37.162+0000 W/CRASH_MANAGER(22387): worker.c: worker_job(1199) > 1122400676561145624827
