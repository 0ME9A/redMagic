import { FaGithub } from "react-icons/fa";
import BtnLink from "app/_components/Links&Btns/BtnLink";
import { externaL } from "@/data/siteLinks";

export default function JoinContribution({ repoName }: { repoName: string | null; }) {
  if (repoName)
    return (
      <div className="p-2 space-y-2 mt-5">
        <BtnLink
          title={`Contribute`}
          href={`https://github.com/codinasion/${repoName}`}
          target="_blank">
          <FaGithub className="group-hover:scale-125" />
          Contribute
        </BtnLink>
        <BtnLink
          title={externaL.invite.name}
          href={externaL.invite.href}
          target="_blank">
          <FaGithub className="group-hover:scale-125" />
          {externaL.invite.name}
        </BtnLink>
      </div>
    );

  return <></>;
}
