//Please use react-folder-tree => v^4.1.0 instead of latest version => for better styling
import FolderTree, { testData } from "react-folder-tree";
import CustomizeDataTreeBrowser from "./CustomizeDataTreeBrowser";

const BasicTree = () => {
  // const onTreeStateChange = (state) => console.log("tree state: ", state);

  return (
    <FolderTree
      data={testData}
      // onChange={onTreeStateChange}
    />
  );
};

export default function App() {
  return (
    <div className="App">
      <div>
        <h1>Default Data</h1>
        <BasicTree />
      </div>

      <div>
        <h1>Customize Data FolderTree</h1>
        <CustomizeDataTreeBrowser />
      </div>
    </div>
  );
}
