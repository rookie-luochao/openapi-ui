import { Dropdown } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import postmanIcon from "../../assets/images/postman.svg";
import { dsc } from "../../core/style/defaultStyleConfig";
import { flexBetweenCenterOpts, flexCenterOpts } from "../../core/style/utils";
import { loginModuleName } from "../../login/routes";
import { defaultMenuTitleHeight } from "../../main";
import { ChangeLangComp } from "../change-lang";
import GithubStar from "../github-star";
import { IconDown, UpdateConfigInfoModalComp } from "./common";

export function PostmanHead() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {isModalOpen && <UpdateConfigInfoModalComp onSuccess={() => setIsModalOpen(false)} />}
      <div
        css={[
          flexBetweenCenterOpts(),
          {
            height: defaultMenuTitleHeight,
            backgroundColor: dsc.color.bg,
            padding: 12,
            margin: "0 16px",
            boxSizing: "border-box",
          },
        ]}
      >
        <a
          css={{
            height: "100%",
            cursor: "pointer",
          }}
          onClick={() => {
            navigate(loginModuleName);
          }}
        >
          <img src={postmanIcon} alt="postman" />
        </a>
        <div css={[flexCenterOpts(), { "& > * + *": { marginLeft: 6 } }]}>
          <Dropdown
            menu={{
              items: [
                {
                  key: "0",
                  label: t("head.updateConfig"),
                  onClick() {
                    setIsModalOpen(true);
                  },
                },
                {
                  key: "1",
                  label: t("head.reselectService"),
                  onClick() {
                    navigate(loginModuleName);
                  },
                },
              ],
            }}
          >
            <a css={flexCenterOpts()} onClick={(e) => e.preventDefault()}>
              <IconDown />
            </a>
          </Dropdown>
          <ChangeLangComp />
          <GithubStar />
        </div>
      </div>
    </>
  );
}
