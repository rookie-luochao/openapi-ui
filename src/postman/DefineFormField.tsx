import { Button, DatePicker, Form, FormInstance, Input, Select, Upload } from "antd";
import dayjs from "dayjs";
import { includes, map } from "lodash-es";
import { useTranslation } from "react-i18next";
import MinusOutlined from "../assets/images/minus.svg";
import PlusOutlined from "../assets/images/plus.svg";
import UploadOutlined from "../assets/images/upload.svg";
import { Section } from "../components/Section";
import { dsc } from "../core/style/defaultStyleConfig";
import { flexAlignItemsCenterOpts } from "../core/style/utils";
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
} from "./config";

export function DefineFormField({ position, form }: { position: string; form: FormInstance<any> }) {
  const { t } = useTranslation();

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

  return (
    <>
      <Section title={t("postman.customTime")}>
        <Form.List name={`custom${position}Times`}>
          {(fields, { add, remove }) => {
            return (
              <>
                {fields.map(({ key, name, ...restField }, index) => {
                  const fieldValues: ICustomTime = getFieldValue("customParamsTimes", index);

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
                        <Select placeholder="please select time type" options={timeTypeOptions} />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, CustomTimeField.fieldValue]}
                        style={{ width: "33%", marginRight: 8 }}
                      >
                        <DatePicker
                          showTime={includes(FullTimeType, fieldValues.fieldType)}
                          needConfirm={false}
                          style={{ width: "100%" }}
                        />
                      </Form.Item>
                      <Form.Item {...restField} style={{ width: "5%" }}>
                        <a onClick={() => remove(name)}>
                          <img src={MinusOutlined} />
                        </a>
                      </Form.Item>
                    </div>
                  );
                })}
                <div>
                  <Button
                    type="dashed"
                    onClick={() =>
                      add({
                        [CustomTimeField.fieldName]: "time",
                        [CustomTimeField.fieldType]: TimeType.dateTimeUnix,
                        [CustomTimeField.fieldValue]: dayjs(),
                      })
                    }
                    style={{ width: "60%" }}
                    icon={<img src={PlusOutlined} />}
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
          <Form.List name={`custom${position}Files`}>
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
                          <Select placeholder="please select upload file type" options={uploadFileTypeOptions} />
                        </Form.Item>
                        <Form.Item
                          {...restField}
                          name={[name, CustomFileField.fieldValue]}
                          valuePropName="fileList"
                          getValueFromEvent={normFile}
                          style={{ width: "33%", marginRight: 8 }}
                        >
                          <Upload multiple={fieldValues?.fieldType === "multiple"} beforeUpload={() => false}>
                            <Button
                              css={[
                                flexAlignItemsCenterOpts(),
                                {
                                  "&:hover img": {
                                    filter:
                                      "invert(30%) sepia(85%) saturate(2525%) hue-rotate(208deg) brightness(104%) contrast(101%)",
                                  },
                                },
                              ]}
                            >
                              <img src={UploadOutlined} style={{ marginRight: 6 }} alt="upload" />
                              <span style={{ fontSize: dsc.fontSize.xs }}>{t("postman.uploadFile")}</span>
                            </Button>
                          </Upload>
                        </Form.Item>
                        <Form.Item {...restField} style={{ width: "5%" }}>
                          <a onClick={() => remove(name)}>
                            <img src={MinusOutlined} />
                          </a>
                        </Form.Item>
                      </div>
                    );
                  })}
                  <div>
                    <Button
                      type="dashed"
                      onClick={() =>
                        add({
                          [CustomTimeField.fieldName]: "file",
                          [CustomTimeField.fieldType]: UploadFileType.single,
                          [CustomTimeField.fieldValue]: null,
                        })
                      }
                      style={{ width: "60%" }}
                      icon={<img src={PlusOutlined} />}
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
