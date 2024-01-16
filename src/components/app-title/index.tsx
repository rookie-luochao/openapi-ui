import { useEffect, useRef } from "react";
import { Env } from "../../config";
import { getConfig } from "../../core/http/config";

export function ModifyAppTitle() {
  const isFlagRef = useRef(true);

  useEffect(() => {
    if (isFlagRef.current) {
      initAppTitle();
      // initAppCDN();
      isFlagRef.current = false;
    }
  }, []);

  function initAppTitle() {
    const config = getConfig();
    const element = document.getElementsByTagName("title") || [];

    if (config.env === Env.zh && element[0]) {
      element[0].textContent = config.appNameZH;
    }
  }

  // function initAppCDN() {
  //   const script = document.createElement("script");
  //   script.src = "https://cdn.jsdelivr.net/npm/api-spec-converter@2.12.0/dist/api-spec-converter.js";
  //   document.body.appendChild(script);
  // }

  return null;
}
