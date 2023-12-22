PKG = $(shell cat package.json | grep 'name' | sed -e 's/  "name": "//g' -e 's/",//g')
VERSION = $(shell cat package.json | grep 'version' | sed -e 's/  "version": "//g' -e 's/",//g')

docker-build:
	docker build . -t $(PKG):v$(VERSION)

docker-run:
	docker run -d -p 80:80 $(PKG):v$(VERSION)

docker-build-run: docker-build docker-run

install: 
	pnpm install

dev: 
	npm run dev

build: 
	npm run build

preview: 
	npm run preview

lint: 
	npm run lint

lintfix: 
	npm run lintfix

prepare: 
	npm run prepare

openapi: 
	npm run openapi