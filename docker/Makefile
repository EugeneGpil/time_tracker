init:\
	build\
	up\
	perm\
	init-back-env\
	composer-install\
	key-generate\
	passport-keys\
	docs-install\
	docs\
	perm\
	db-migrate\
	test

build:
	docker compose --progress plain build >> "logs/build_$$(date "+%Y-%m-%d_%H:%M:%S").log"

up:
	docker compose up --detach --remove-orphans --force-recreate

exec:
	docker compose exec --user=app php bash

down:
	docker compose down

perm:
	docker compose run php bash -cl \
		"/set_perm.sh app"

docs-install:
	docker compose run --user=app php bash -cl \
		"npm install"

composer-install:
	docker compose run --user=app php bash -cl \
		"composer install"

init-back-env:
	@if [ -e $$(test ! -f ../php/.env || grep "^APP_KEY=" ../php/.env) ]; then\
  		echo "APP_KEY=" > ../php/.env.temp;\
	else\
		grep "^APP_KEY=" ../php/.env > ../php/.env.temp;\
	fi
	grep -v "^APP_KEY=" ../php/.env.docker > ../php/.env
	cat ../php/.env.temp >> ../php/.env
	echo "" >> ../php/.env
	rm ../php/.env.temp

key-generate:
	@if [ -e $$(test ! -f ../php/.env || egrep "^APP_KEY=.+" ../php/.env) ]; then\
		docker compose run --user=app php bash -cl \
			"php artisan key:generate";\
	else\
		echo "APP_KEY is already set. Skipped.";\
	fi

passport-keys:
	docker compose run --user=app php bash -cl \
		"php artisan passport:keys | true"

docs:
	docker compose run --user=app php bash -cl \
		"php artisan apiato:apidoc"

db-migrate:
	docker compose run --user=app php bash -cl \
		"php artisan migrate"

node-exec:
	docker compose exec node bash

test:
	docker compose exec --user=app php bash -cl \
		"./vendor/bin/phpunit --stop-on-failure --stop-on-error --display-skipped ./app/"
