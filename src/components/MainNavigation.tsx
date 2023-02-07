import { useState } from "react";
import TopNavigation from "@cloudscape-design/components/top-navigation";
import Input from "@cloudscape-design/components/input";
const i18nStrings = {
  overflowMenuTriggerText: "More",
  overflowMenuTitleText: "All",
};

export const MainNavigation = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div id="h" style={{ position: "sticky", top: 0, zIndex: 1002 }}>
      <TopNavigation
        identity={{ title: "V2T", href: "/" }}
        i18nStrings={i18nStrings}
        utilities={[
          {
            type: "button",
            variant: "link",
            href: "/contact",
            text: "Contact",
          },
        ]}
        search={
          <Input
            type="search"
            placeholder="Search"
            ariaLabel="Search"
            value={searchValue}
            onChange={({ detail }) => setSearchValue(detail.value)}
          />
        }
      />
    </div>
  );
};
