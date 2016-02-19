#include "app_main.h"
#include<dlog.h>
#include <tizen.h>


int main(int argc, char **argv)
{
	int result = 0;
	app_data *app = app_create();
	dlog_print(DLOG_DEBUG, LOG_TAG, "Running updtest.c");


	if (app)
	{
		result = app_run(app, argc, argv);
		app_destroy(app);
	}

	return result;
}

