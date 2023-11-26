interface Data {
  __typename: string;
  id: string;
  avatar: string;
  fullName: string
}

export const getObjectData = (icon: object, data: Data, title: string) => {
  let label;

  if (title === 'Assignee') {
    label = 'Assign To';
  } else if (title === 'Label') {
    label = 'Tag Title';
  } else {
    label = title;
  }

  const objectItem = {
    icon: icon,
    title: title,
    label: label,
    dataArray: data,
  };

  return objectItem;
};
