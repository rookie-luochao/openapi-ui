import { useEffect } from "react";
import { Env } from "../../config";
import { getConfig } from "../../core/http/config";

export function ModifyAppTitle() {
  useEffect(() => {
    init();
  }, []);

  function init() {
    const config = getConfig();
    const element = document.getElementsByTagName("title") || [];

    if (config.env === Env.zh && element[0]) {
      element[0].textContent = config.appNameZH;
    }
  }

  return null;
}
