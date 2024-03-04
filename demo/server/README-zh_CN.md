# 准备

1. 开始前请在本地安装好golang环境，建议版本 >= 1.21.6
2. 安装 [swag](https://github.com/swaggo/swag?tab=readme-ov-file#getting-started)

# 快速开始

1. 本地启动openapi-ui，见[快速开始](https://github.com/rookie-luochao/openapi-ui/blob/master/README-zh_CN.md#%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B)
2. 启动服务(会自动生成swager文档)

```shell
make run
```

3. 将 ./swagger 目录中 swagger.json/swagger.html 的导入 open-ui 项目。服务端地址填写localhost:1323
