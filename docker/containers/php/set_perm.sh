#!/usr/bin/env bash

# $1 user
# $2 folder
set_shared_permissions()
{
  	printf "For files in folder %s give permission to write for users %s and www-data\n" "$2" "$1"
    setfacl -Rm u:www-data:rwX,u:"$1":rwX "$2"

    printf "For all future files in folder %s give permission to write for users %s и www-data\n" "$2" "$1"
    setfacl -Rdm u:www-data:rwx,u:"$1":rwx "$2"
}

set -e

printf "Make owner of project user %s\n" "$1"
chown -R "$1:$1" ./

printf "Give permission for writing only to %s for all project\n" "$1"
find /var/www/php -type f -exec chmod 644 {} \;
find /var/www/php -type d -exec chmod 755 {} \;

set_shared_permissions "$1" "/var/www/php/bootstrap/cache"
set_shared_permissions "$1" "/var/www/php/storage"

printf "Add execution for bin files\n"
chmod u+x /var/www/php/vendor/bin/* || true
chmod u+x /var/www/php/node_modules/.bin/* || true
