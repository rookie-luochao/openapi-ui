package user

import (
	"github.com/labstack/echo/v4"
	"net/http"
)

//	@Summary	GetUser
//
//	@Schemes
//	@Description	获取用户信息
//	@Tags			User
//	@Param			id	path		string		true	"用户id"
//	@Success		200	{object}	UserInfo	"成功"
//	@Failure		500	{object}	nil			"失败"
//	@Router			/users/{id} [GET]
//	@ID				GetUser
func GetUser(c echo.Context) error {
	id := c.Param("id")

	return c.JSON(http.StatusOK, &UserInfo{
		ID:   id,
		Name: "hello world",
	})
}

type UserInfo struct {
	ID   string `json:"id"`   // 用户id
	Name string `json:"name"` // 用户名
}

//	@Summary	CreateUser
//
//	@Schemes
//	@Description	创建用户
//	@Tags			User
//	@Param			Body	body		CreateBody	true	"body请求"
//	@Success		200		{object}	CreateRESP	"成功"
//	@Failure		500		{object}	nil			"失败"
//	@Router			/users [POST]
//	@ID				CreateUser
func CreateUser(c echo.Context) error {
	body := new(CreateBody)
	if err := c.Bind(body); err != nil {
		return echo.NewHTTPError(http.StatusBadRequest, err.Error())
	}

	if err := c.Validate(body); err != nil {
		return err
	}

	// insert to db

	return c.JSON(http.StatusOK, &CreateRESP{
		ID: "xxxx",
	})
}

type CreateBody struct {
	Name string `json:"name" validate:"required"` // 用户名
}

type CreateRESP struct {
	ID string `json:"id"` // 用户id
}
