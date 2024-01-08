import { dsc } from "../../core/style/defaultStyleConfig";
import { flexCenterOpts } from "../../core/style/utils";

export function ICPRegistration({ ...otherProps }) {
  return (
    <div
      css={[
        flexCenterOpts(),
        {
          width: "100%",
          minWidth: 1200,
          height: 32,
          fontSize: dsc.fontSize.xs,
          color: dsc.color.text,
          opacity: 0.6,
        },
      ]}
      {...otherProps}
    >
      湘ICP备2024041043号
    </div>
  );
}
