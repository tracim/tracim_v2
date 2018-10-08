#!/bin/bash

# If no config file, create it
if [ ! -f /etc/tracim/config.ini ]; then
    cp /opt/tracim/backend/development.ini.sample /etc/tracim/config.ini
    # Must prepare some lines to be able to use tracim on 127.0.0.1 (and 127.0.0.1 only !)
    sed -i "s|listen = .*|listen = 0.0.0.0:6543|g" /etc/tracim/config.ini
    sed -i "s|website.base_url = .*|website.base_url = http://localhost:6543|g" /etc/tracim/config.ini
    # TODO BS 2018-10-08: Don't touch yet, it need a rebuild of js. If want to change it, keep in mind !!
    # sed -i "s|\"apiUrl\": \"http://localhost:6543/api/v2\"|\"apiUrl\": \"http://localhost:6543/api/v2\"|g" configEnv.json
    # TODO 2018-10-08: Must do some other things ... secret etc
fi

cd /opt/tracim/backend/
source env/bin/activate
# TODO BS 2018-10-08: More strong http server
pserve /etc/tracim/config.ini
