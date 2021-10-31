import logo from './logo.svg';
import './App.css';
// import { DataStore } from '@aws-amplify/datastore';
// import { Dynamodbtest01 } from './models';

function App() {
    // DataStore.save(
    //   new Dynamodbtest01({
    //   "timestamp": 1023123,
    //   "datetime": "1970-01-01T12:30:23.999Z"
    // })
    // );

    var docClient = new AWS.DynamoDB.DocumentClient();
    var params = {
        TableName: tablename,
        Item:{
          "timestamp": 1023123,
          "datetime": "1970-01-01T12:30:23.999Z"
            //  identityId: identityId, // ★prime partition key
            //  email: _self.state.email,
            //  username: _self.state.username,
            //  filename: filepath,
            //  thumbnail: thumbnail,
            //  type: fileType,
            //  title: title,
            //  story: story,
            //  imageOverwrite: _self.state.imageOverwrite,
            //  mapUse: _self.state.mapUse,
            //  position: _self.state.position,
            //  uploadTime: uploadTime, // ★prime & secondary sort key
            //  uploadDate: uploadDate,
            //  partitionYear: partitionYear, //★secondary partition key
            //  refCounter: 0
        }
    };
    docClient.put(params, function(err, data) {
        if(err) {
            console.log("Err: table put :" +err);
        } else {
            console.log("Success: table put ok");
        }
    });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
