fmt:
	swag fmt
swag: fmt
	swag init -g swagger.go --parseDependency --parseInternal --parseDepth 1 -o ./swagger
run: swag
	go run -v ./cmd