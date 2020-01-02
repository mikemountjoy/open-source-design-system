import React from "react"
import { storiesOf } from "@storybook/react"

import FilterableApprovalList from "./FilterableApprovalList"

storiesOf("FilterableList", module).add("Filterable Approval List", () => {
  const items = [
    { key: "account1", label: "Account 1" },
    { key: "account2", label: "Account 2", approved: true },
    { key: "account3", label: "Account 3" },
    { key: "dove", label: "Dove" },
    { key: "dovey", label: "Dovey" },
    { key: "dovey1", label: "Dovey 1", approved: true, secondaryApproved: true },
    { key: "dovey2", label: "Dovey 2" },
  ]

  return <FilterableApprovalList id="filterExample" items={items} title="Select Unit" />
})
