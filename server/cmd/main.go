package main

import (
	"fmt"
	"github.com/go-playground/validator"
	"github.com/labstack/echo/v4"
	"github.com/labstack/gommon/log"
	"github.com/rookie-luochao/openapi-ui/server/route"
	_ "github.com/rookie-luochao/openapi-ui/server/swagger"
	esw "github.com/swaggo/echo-swagger"
	"net/http"
)

type CustomValidator struct {
	validator *validator.Validate
}

func (cv *CustomValidator) Validate(i interface{}) error {
	if err := cv.validator.Struct(i); err != nil {
		// Optionally, you could return the error to give each route more control over the status code
		return echo.NewHTTPError(http.StatusBadRequest, err.Error())
	}
	return nil
}

func main() {
	e := echo.New()
	e.Debug = true
	e.Logger.SetLevel(log.DEBUG)
	e.Validator = &CustomValidator{validator: validator.New()}

	e.GET("/swagger/*", esw.WrapHandler)

	route.Create(e)

	// log route list
	PrintPath(e.Routes())

	e.Logger.Fatal(e.Start(":1323"))
}

func PrintPath(routes []*echo.Route) {
	fmt.Println("*****route*****")
	for _, r := range routes {
		fmt.Printf("method:%s, path:%s, name:%s\n", r.Method, r.Path, r.Name)
	}
	fmt.Println("*****route*****")

}
