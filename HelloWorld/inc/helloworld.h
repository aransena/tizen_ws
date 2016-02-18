#ifndef __helloworld_H__
#define __helloworld_H__

#include <app.h>
#include <Elementary.h>
#include <system_settings.h>
#include <efl_extension.h>
#include <dlog.h>

#ifdef  LOG_TAG
#undef  LOG_TAG
#endif
#define LOG_TAG "helloworld"

#if !defined(PACKAGE)
#define PACKAGE "org.example.helloworld"
#endif

#endif /* __helloworld_H__ */
