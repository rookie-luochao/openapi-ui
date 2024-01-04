import { Tooltip } from "antd";
import { useEffect, useState } from "react";
import githubIcon from "../../assets/images/github.svg";

export default function GithubStar() {
  const [star, setStar] = useState(0);
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await getStar();
        setStar(res.stargazers_count);
        setIsFetched(true);
      } catch (e) {
        console.log("fetch github info error:", e);
      }
    })();
  }, []);

  async function getStar() {
    const res = await fetch("https://api.github.com/repos/rookie-luochao/openapi-ui");

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  }

  if (!isFetched) {
    return null;
  }

  return (
    <a href="https://github.com/rookie-luochao/openapi-ui" target="_blank">
      <Tooltip
        title={
          <span>
            {`${star}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            <span css={{ color: "gold" }}>&#9733;</span>
          </span>
        }
      >
        <img css={{ width: 16, opacity: 0.6, "&:hover": { opacity: 1 } }} src={githubIcon} alt="github" />
      </Tooltip>
    </a>
  );
}
