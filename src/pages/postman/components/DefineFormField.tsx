import { useTheme } from "@emotion/react";
import { Button, DatePicker, Form, FormInstance, Input, Select } from "antd";
import Upload from "antd/es/upload/Upload";
import dayjs from "dayjs";
import { includes, map } from "lodash-es";
import { useTranslation } from "react-i18next";

import { MinusOutlined, PlusOutlined, UploadOutlined } from "@/components/icon";
import { Section } from "@/components/section";
import { ITheme, dsc } from "@/core/style/defaultStyleConfig";
import { flexAlignItemsCenterOpts, flexCenterOpts } from "@/core/style/utils";

import {
  CustomFileField,
  CustomTimeField,
  FullTimeType,
  ICustomFile,
  ICustomTime,
  TimeType,
  UploadFileType,
  displayTimeType,
  displayUploadFileType,
} from "../common/config";

export function DefineFormField({ position, form }: { position: string; form: FormInstance<any> }) {
  const { t } = useTranslation();
  const theme = useTheme() as ITheme;

  const timeTypeOptions = map(TimeType, (item) => ({
    label: displayTimeType(item),
    value: item,
  }));

  const uploadFileTypeOptions = map(UploadFileType, (item) => ({
    label: displayUploadFileType(item),
    value: item,
  }));

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }

    return e?.fileList;
  };

  const getFieldValue = (formItemName: string, index: number) => {
    return form.getFieldValue(formItemName)?.[index] || {};
  };

  const addFieldGroupBtnStyle = [
    flexCenterOpts(),
    { width: "60%", fontSize: dsc.fontSize.xs },
    {
      "&:hover path": {
        fill: theme.color.primary,
      },
    },
  ];

  return (
    <>
      <Section title={t("postman.customTime")}>
        <Form.List name={`custom${position}Times`}>
          {(fields, { add, remove }) => {
            return (
              <>
                {fields.map(({ key, name, ...restField }, index) => {
                  const fieldValues: ICustomTime = getFieldValue(`custom${position}Times`, index);

                  return (
                    <div key={key} style={{ display: "flex" }}>
                      <Form.Item
                        {...restField}
                        name={[name, CustomTimeField.fieldName]}
                        style={{ width: "35%", marginRight: 8 }}
                      >
                        <Input addonBefore={t("postman.fieldName")} placeholder={t("postman.fieldNamePlaceholder")} />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, CustomTimeField.fieldType]}
                        style={{ width: "27%", marginRight: 8 }}
                      >
                        <Select options={timeTypeOptions} placeholder="please select time type" />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, CustomTimeField.fieldValue]}
                        style={{ width: "33%", marginRight: 8 }}
                      >
                        <DatePicker
                          needConfirm={false}
                          showTime={includes(FullTimeType, fieldValues.fieldType)}
                          style={{ width: "100%" }}
                        />
                      </Form.Item>
                      <Form.Item {...restField} style={{ width: "5%" }}>
                        <a onClick={() => remove(name)}>
                          <MinusOutlined fill={theme.color.menuItem} />
                        </a>
                      </Form.Item>
                    </div>
                  );
                })}
                <div>
                  <Button
                    css={addFieldGroupBtnStyle}
                    icon={<PlusOutlined fill={theme.color.menuItem} />}
                    type="dashed"
                    onClick={() =>
                      add({
                        [CustomTimeField.fieldName]: "time",
                        [CustomTimeField.fieldType]: TimeType.dateTimeUnix,
                        [CustomTimeField.fieldValue]: dayjs(),
                      })
                    }
                  >
                    {t("postman.addTimeField")}
                  </Button>
                </div>
              </>
            );
          }}
        </Form.List>
      </Section>
      {position === "Data" && (
        <Section title={t("postman.customFile")}>
          <Form.List name="customDataFiles">
            {(fields, { add, remove }) => {
              return (
                <>
                  {fields.map(({ key, name, ...restField }, index) => {
                    const fieldValues: ICustomFile = getFieldValue("customDataFiles", index);

                    return (
                      <div key={key} style={{ display: "flex" }}>
                        <Form.Item
                          {...restField}
                          name={[name, CustomFileField.fieldName]}
                          style={{ width: "35%", marginRight: 8 }}
                        >
                          <Input addonBefore={t("postman.fieldName")} placeholder={t("postman.fieldNamePlaceholder")} />
                        </Form.Item>
                        <Form.Item
                          {...restField}
                          name={[name, CustomTimeField.fieldType]}
                          style={{ width: "27%", marginRight: 8 }}
                        >
                          <Select options={uploadFileTypeOptions} placeholder="please select upload file type" />
                        </Form.Item>
                        <Form.Item
                          {...restField}
                          getValueFromEvent={normFile}
                          name={[name, CustomFileField.fieldValue]}
                          style={{ width: "33%", marginRight: 8 }}
                          valuePropName="fileList"
                        >
                          <Upload beforeUpload={() => false} multiple={fieldValues?.fieldType === "multiple"}>
                            <Button
                              icon={<UploadOutlined fill={theme.color.menuItem} />}
                              css={[
                                flexAlignItemsCenterOpts(),
                                {
                                  "&:hover path": {
                                    fill: theme.color.primary,
                                  },
                                },
                              ]}
                            >
                              <span style={{ fontSize: dsc.fontSize.xs }}>{t("postman.uploadFile")}</span>
                            </Button>
                          </Upload>
                        </Form.Item>
                        <Form.Item {...restField} style={{ width: "5%" }}>
                          <a onClick={() => remove(name)}>
                            <MinusOutlined fill={theme.color.menuItem} />
                          </a>
                        </Form.Item>
                      </div>
                    );
                  })}
                  <div>
                    <Button
                      css={addFieldGroupBtnStyle}
                      icon={<PlusOutlined fill={theme.color.menuItem} />}
                      type="dashed"
                      onClick={() =>
                        add({
                          [CustomTimeField.fieldName]: "file",
                          [CustomTimeField.fieldType]: UploadFileType.single,
                          [CustomTimeField.fieldValue]: null,
                        })
                      }
                    >
                      {t("postman.addFileField")}
                    </Button>
                  </div>
                </>
              );
            }}
          </Form.List>
        </Section>
      )}
    </>
  );
}
