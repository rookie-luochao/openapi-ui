import { faker } from "@faker-js/faker/locale/zh_CN";
import dayjs from "dayjs";
import { filter, find, forEach, includes, isEmpty, toLower } from "lodash-es";
import { sample } from "openapi-sampler";
import { toDate, toDateUnix, toFullTimeWithSecond, toFullTimeWithSecondUnix } from "../core/time";
import { IOpenAPI, ISchema, TParameter } from "./type";

enum SampleMockFieldName {
  // uuid
  id = "id",
  // time
  timestamp = "timestamp",
  datetimeunix = "datetimeunix",
  datetime = "datetime",
  time = "time",
  dateunix = "dateunix",
  date = "date",
  // email
  email = "email",
  // ip
  ip = "ip",
  // url
  host = "host",
  url = "url",
  // user name
  username = "username",
  // password
  password = "password",
  // mobile
  mobile = "mobile",
  tel = "tel",
  phone = "phone",
  // id card
  idcard = "idcard",
  // bank card
  bankcard = "bankcard",
  // address
  address = "address",
  // birthday
  birth = "birth",
  // page offset
  offset = "offset",
  pagesn = "pagesn",
  pageno = "pageno",
  pagenumber = "pagenumber",
  // page size
  size = "size",
}

function getMockValueByFieldName(fieldName: string) {
  let value;

  switch (fieldName) {
    case SampleMockFieldName.id:
      value = faker.string.uuid();
      break;
    case SampleMockFieldName.dateunix:
      value = toDateUnix(faker.date.anytime());
      break;
    case SampleMockFieldName.date:
      value = toDate(faker.date.anytime());
      break;
    case SampleMockFieldName.datetimeunix:
    case SampleMockFieldName.timestamp:
      value = toFullTimeWithSecondUnix(faker.date.anytime());
      break;
    case SampleMockFieldName.datetime:
    case SampleMockFieldName.time:
      value = toFullTimeWithSecond(faker.date.anytime());
      break;
    case SampleMockFieldName.email:
      value = faker.internet.email();
      break;
    case SampleMockFieldName.ip:
      value = faker.internet.ip();
      break;
    case SampleMockFieldName.host:
    case SampleMockFieldName.url:
      value = faker.internet.url();
      break;
    case SampleMockFieldName.username:
      value = faker.internet.userName();
      break;
    case SampleMockFieldName.password:
      value = faker.internet.password();
      break;
    case SampleMockFieldName.mobile:
    case SampleMockFieldName.tel:
    case SampleMockFieldName.phone:
      value = faker.phone.number();
      break;
    case SampleMockFieldName.idcard:
      value = `${faker.location.zipCode()}${dayjs(faker.date.past({ years: 30 })).format(
        "YYYYMMDD",
      )}${faker.helpers.rangeToNumber({ min: 100, max: 999 })}X`;
      break;
    case SampleMockFieldName.bankcard:
      value = faker.finance.creditCardNumber();
      break;
    case SampleMockFieldName.address:
      value = `${faker.location.state()}${faker.location.city()}${faker.location.streetAddress()}`;
      break;
    case SampleMockFieldName.birth:
      value = toDate(faker.date.birthdate({ min: 1950, max: dayjs().get("year") }));
      break;
    case SampleMockFieldName.offset:
    case SampleMockFieldName.pagesn:
    case SampleMockFieldName.pageno:
    case SampleMockFieldName.pagenumber:
      value = faker.number.int({ min: 0, max: 10 });
      break;
    case SampleMockFieldName.size:
      value = faker.number.int({ min: 10, max: 50 });
      break;
    default:
      value = "";
  }

  return value;
}

export function getMockQueryDataBySchema(parameters?: TParameter[], isRequired?: boolean) {
  const mockData = {} as any;
  if (isRequired) {
    parameters = filter(parameters, (item) => toLower(item.name) !== "authorization" && !!item.required);
  } else {
    parameters = filter(parameters, (item) => toLower(item.name) !== "authorization");
  }

  forEach(parameters, (parameter) => {
    const schema = parameter.schema as ISchema;

    if (!isEmpty(schema)) {
      // if schema format predefined
      if (schema?.format) {
        mockData[parameter.name] = sample(schema as any, { skipReadOnly: true });
      } else {
        const sampleMockFieldName = find(SampleMockFieldName, (fieldName) =>
          includes(toLower(parameter.name), fieldName),
        );
        // if field name predefined
        if (sampleMockFieldName) {
          mockData[parameter.name] = getMockValueByFieldName(sampleMockFieldName);
        } else if (schema.type === "integer") {
          mockData[parameter.name] = faker.number.int({ min: 0, max: 100000 });
        } else if (schema.type === "string") {
          mockData[parameter.name] = faker.string.sample({ min: 1, max: 30 });
        } else if (schema.type === "boolean") {
          mockData[parameter.name] = faker.datatype.boolean();
        }
      }
    }
  });

  return mockData;
}

export function getMockBodyDataBySchema(bodySchema: ISchema, spec?: IOpenAPI) {
  if (isEmpty(bodySchema)) {
    return;
  }

  const mockData = sample(bodySchema as any, { skipReadOnly: true }, spec);

  return mockData;
}
