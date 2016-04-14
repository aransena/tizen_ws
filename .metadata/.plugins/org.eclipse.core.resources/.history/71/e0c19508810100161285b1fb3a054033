#ifndef __APP_MAIN_H__
#define __APP_MAIN_H__

#include <Elementary.h>
#include <app.h>
#include <system_settings.h>
#include <efl_extension.h>
#include <dlog.h>
#include "uib_common.h"


/**
 * @brief Forward declaration of model
 */
typedef struct _app_data
{
	Evas_Object *win;
	Evas_Object *bg;
	Evas_Object *conformant;
	Eext_Circle_Surface *circle_surface;
} app_data;

/**
 * @brief Create application instance
 * @return Application instance on success, otherwise NULL
 */
app_data *app_create();

/**
 * @brief Destroy application instance
 * @param[in]   app     Application instance
 */
void app_destroy(app_data *app);

/**
 * @brief Run Tizen application
 * @param[in]   app     Application instance
 * @param[in]   argc    argc paremeter received in main
 * @param[in]   argv    argv parameter received in main
 */
int app_run(app_data *app, int argc, char **argv);

void app_get_resource(const char *edj_file_in, char *edj_path_out, int edj_path_max);

#endif /* __APP_MAIN_H__ */

