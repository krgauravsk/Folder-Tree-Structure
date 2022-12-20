import FolderTree from "react-folder-tree";

const treeState = {
  name: "root",
  checked: 0.5,
  isOpen: true,
  children: [
    { name: "Child 1", checked: 0 },
    { name: "Child 2", checked: 0 },
    {
      name: "Child 3",
      checked: 0.5,
      isOpen: false,
      children: [{ name: "Grandchild", checked: 0 }]
    }
  ]
};

const CustomizeDataTreeBrowser = () => {
  return (
    <div>
      <FolderTree
        data={treeState}
        initCheckedStatus="custom" // default: 0 [unchecked]
        initOpenStatus="custom" // default: 'open'
      />
    </div>
  );
};

export default CustomizeDataTreeBrowser;
