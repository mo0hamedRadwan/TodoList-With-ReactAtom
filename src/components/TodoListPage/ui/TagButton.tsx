import { tags } from '../../../constant';

type propsType = {
  tagName: string;
  selectTag?: (tagName: string) => void;
  selected?: boolean;
};

const TagButton = ({ tagName, selectTag, selected }: propsType) => {
  const tagArray = tags.map((tag) => ({ [tag.tagName]: tag.backgroundColor }));

  const tagStyle = Object.assign({}, ...tagArray);

  return (
    <button
      type= 'button'
      className="bg-gray-200 cursor-pointer px-2 py-0.5 rounded-md"
      style={{ backgroundColor: `${selected ? tagStyle[tagName] : '#f9f9f9'}` }}
      onClick={() => selectTag!(tagName)}
    >
      {tagName}
    </button>
  );
};

export default TagButton;
