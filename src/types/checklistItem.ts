export type ChecklistItemType = {
  label: string;
  isChecked: boolean;
};

export const isChecklistItemType = (value: any): value is ChecklistItemType => {
  return (
    typeof value === "object" &&
    typeof value.label === "string" &&
    typeof value.isChecked === "boolean"
  );
};
