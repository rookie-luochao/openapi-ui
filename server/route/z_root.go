package route

import (
	"github.com/labstack/echo/v4"
	"github.com/rookie-luochao/openapi-ui/server/route/user"
)

func Create(e *echo.Echo) {
	g := e.Group("/users")

	g.GET("/:id", user.GetUser)
	g.POST("", user.CreateUser)
}
