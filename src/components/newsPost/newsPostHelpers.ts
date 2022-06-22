// Display all comments
export const handleShowAllClick = (
  setState: (arg: number) => void,
  total: number
) => setState(total);

// Hide comments to default value
export const handleHideClick = (
  setState: (arg: number) => void,
  amountToShow: number
) => setState(amountToShow);
