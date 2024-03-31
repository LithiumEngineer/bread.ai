import { VertexAI } from "@langchain/google-vertexai-web"
import {useState, useEffect} from "react"



const model = new VertexAI({
  authOptions: {
    credentials: {
      "type": "service_account",
      "project_id": "genai-418815",
      "private_key_id": "06e0fba3969ac75eb88383864fbdbd260b05b72a",
      "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC/OcJap/N4orir\nUrp1Dqu5gQK3v+PtZh2V87cRStDKPkxc9n7HHG5+GBJdDUODdRvOtD1Pnp9ov47P\n17eKNE0Js7600Q8upwpmZ8Wz1qVbNveDTEW75AJ84ti8iePZ+R02+lYFewuvno6C\na93Xvhx/FM9yjqf+1F9Q48IvovYrAp7sQbc0+LJdfy7lhzeEIMkdW8cUk+8P0Euw\nFRdO9gJAWqt9/UgtJVaqBn+f1pP7HBGxlfYCWtPujKWX9aIsI7RXVGa0oHAqarWL\nFo3oqRRnqLEjYm7vGZcl1U+KNUFZ5AKopCYniwyAx9KcLxQISH33TYGqVLRxG1V3\njl3iCoZHAgMBAAECggEAIDeZfI+WUAlORqMKAgXGPdsz+4RLYOhW7LgibDnoImLL\nl8/5vQ8XuIvSsDW3XbMBy9oHCF6Hqey4IWFNLW4xWoSbiTg9sBT5hhZOs0VjF5KT\nsd3MU+MO3j6T2HP83PEBEI2tp3+7EMwMY4HL3vjLMUfuyXSqbh8Wrfipc0An7Efa\nPEHpCn4wU6aJp8XQCtzriuheYIqw7e2hrSy8a+p7UD33WplAvf3h8oU3fx4lN7aR\nXLC1ca+OemJGX5ZbW9TzS+fGtn5MwlNXVUSsn5Q5DwlVKtAHHCVtSkAXTPBlCgfv\n9C/xoMs66C5D72e6yKgYDQLVt3hVFookAewmz80YYQKBgQD3cUUGBqk0FLz6kXpN\nz1x8eHlqU0FKFhiqP5rMAhbrVFvzJP9ltpuKfR4Jb0cH08Xc2EyTwQaFFHpCsJu0\nDt2OCqUXFPL5JkAHtgdEx+7QdV1Az9MuRi9obyab94H8Pl2CSgis16iVxTzi7xJI\njnq8au1bq3LVMryAkR6QRd+rYQKBgQDF1sYtOWkyxggcycBKOOaC7LzFvXX9s+HE\ndB6s5SSSB8aq4xecwzKKkDrZn51klGe4nb7Kc8Haw8AJtpZdHviRmrCeRgIhsQ6N\nODwGLK7jzYOH4RbmU3b0BxGHBZoUZaM6c5ekGE0fdyFwzXO8MwiYbUZ0MUNCp0RO\nfmaa0uX6pwKBgH4C2hLSi5KxSPgV5AICKuhcdgCWu3YeQJta3tsr6T4Y7OarHcFP\nuHBTfVtypuquh2ILaRwJvedB4W1bAUA2HdA7TY2upnoJZ6xFn/gAFXdlfYMHE1XK\nelQl3rSo3DJ4FCjIyRg0j28OTg6Hj3kRziFsFsqLSmSWfPbAcJ8qZlihAoGARO+V\nlmSO13ZRlVZnfnVdPPmovW5LEt//JykfFzexCoFTJHCE5cbOcaHYH8SSX12m1pmA\nxaKYRdY3sCrDMid8jZ/NMxlJ3NuJKoQRxkUDm7Ucw9gW1qL2rAlafiXhjoHr4o4s\npK0jEne8W0X7sfRGZnaNOieAPFV0Y7V/oyshn7kCgYAvbjmU4eOwHnRZ70Gs007w\n98QbTxwzwWmcnHyO/+2L/lMacrxZ5p/zhmvVCAvZDY8WUY4OEVEyLoCCQATCw5ct\nt6gFw2TysadHzwGjd+u2tKmtVnTLemFLbg3+i2n2conu602UH2VUcJqaoLKe5JfO\nFxiQ4vNoVxbUVFVzq98hmQ==\n-----END PRIVATE KEY-----\n",
      "client_email": "my-service-account@genai-418815.iam.gserviceaccount.com",
      "client_id": "107143975472000095560",
      "auth_uri": "https://accounts.google.com/o/oauth2/auth",
      "token_uri": "https://oauth2.googleapis.com/token",
      "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
      "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/my-service-account%40genai-418815.iam.gserviceaccount.com",
      "universe_domain": "googleapis.com"
    },
  },
  temperature: 0.1,
})


const Home = () => {
  const [loading, setLoading] = useState(true)
  const [response, setResponse] = useState("")
  const invokeModel = async (prompt) => {
    try {
      const res = await model.invoke(
        prompt
      );
      setResponse(res.split(/\d+\./).filter(Boolean).map(str => str.trim()))
      setLoading(false)
    } catch (error) {
      console.error("Error invoking model:", error);
    }
  };

  useEffect(() => {
    invokeModel("What are the titles of 6 simple dish that can be made of 1 tomato, 2 carrots, 1 potato, eggs, chicken, salt, pepper, and cream, each followed by a \n, then the time it takes to make them (just the number + minutes).");
  }, [])

  const [formList, setFormList] = useState([]);
  const [selectList, setSelectList] = useState([]);

  const [formData, setFormData] = useState({
    ingredient: '',
    quantity: '',
    units: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
    ...prevFormData,
    [name]: value,
    }));
  };

  const selectBox = (event) => {
    const { name, value } = event.target;
    let tmp = [];
    for (let i = 0; i < selectList.length; i++) {
      if (i == name) tmp.push(!selectList[i]);
      else tmp.push(selectList[i]);
    }
    setSelectList(tmp);
    let ask = "What are the titles of 6 simple dishes that can be made of ";
    for (let i = 0; i < formList.length; i++) {
      if (i == name) {
        if (selectList[i]) continue;
        ask += formList[i][1] + " of ";
        ask += formList[i][2] + " ";
        ask += formList[i][0] + ", ";
      }
      else {
        if (!selectList[i]) continue;
        ask += formList[i][1] + " of ";
        ask += formList[i][2] + " ";
        ask += formList[i][0] + ", ";
      }
    }
    ask += "each followed by a \n, then the time it takes to make them (just the number + minutes).";
    invokeModel(ask);
    console.log(ask);
    for (let i = 0; i < formList.length; i++) {
      console.log(selectList[i]);
    }
    console.log("mmm\n");
  };
  
  const submit = () => {
    if (formData.quantity <= 0) return;
    if (!formData.quantity || !formData.ingredient || !formData.units) return;
    setFormList([...formList, [formData.ingredient, formData.quantity, formData.units]]);
    setFormData((prevFormData) => ({
      ...prevFormData,
      ["ingredient"]: "",
      ["quantity"]: "",
    }));
    setSelectList([...selectList, false]);
    let ask = "What are the titles of 6 simple dishes that can be made of ";
    for (let i = 0; i < formList.length; i++) {
      if (!selectList[i]) continue;
      ask += formList[i][1] + " of ";
      ask += formList[i][2] + " ";
      ask += formList[i][0] + ", ";
    }
    ask += "each followed by a \n, then the time it takes to make them (just the number + minutes).";
    invokeModel(ask);
    console.log(ask);
    for (let i = 0; i < formList.length; i++) {
      console.log(selectList[i]);
    }
    console.log("mmm\n");
  };
  
  const deleteFunction = (event) => {
    const { name } = event.target;
      let tmp1 = [];
      let tmp2 = [];
      for (let i = 0; i < selectList.length; i++) {
        if (i != name) {
          tmp1.push(selectList[i]);
          tmp2.push(formList[i]);
        }
      }
      setSelectList(tmp1);
      setFormList(tmp2);
  };
  
  return (
    <div className="px-16 pt-10 bg-[#f7faff]">
      <div>
        <div>Bread AI</div>
        <div className="bg-[#595a5c] h-[2px] w-full mt-2 mb-2 rounded-full"></div>
      </div>
      <div className="mt-5 flex items-center h-10 w-full bg-transparent border border-solid border-[#595a5c] rounded-full"><input className="px-5 bg-transparent w-full outline-none" type="text" placeholder="Search"></input></div>
      <div className="w-full h-fit min-h-screen">{loading? <div>Loading</div> : 
      <div className="flex flex-wrap">{response.map((item, idx) => (
        <div className="w-1/4 h-80 mx-4 my-4 bg-red-200 flex justify-around" key={"recipe"+idx}>
          <div className="text-center text-4xl my-auto leading-[50px] px-4">{item}</div>
          </div>
      ))}</div>
      }
      </div>
      <form>
      <div className="w-full h-fit flex">
        <div className="flex w-full flex-grow justify-between mb-4">
          {/* <div className="bg-cyan-100 flex flex-center"><input className="ml-4 bg-cyan-100" type="text" name="ingredient" placeholder="Enter ingredient" value={formData.ingredient} onChange={handleInputChange}/></div>
          <div className="bg-cyan-100 flex flex-center"><input className="ml-4 bg-cyan-100" type="number" name="quantity" placeholder="Enter quantity" min="0" value={formData.quantity} onChange={handleInputChange}/></div>
          <div className="bg-cyan-100 flex flex-center"><select className="ml-4 bg-cyan-100" type="text" name="units" placeholder="Enter units" onChange={handleInputChange}> */}

          <div className="bg-cyan-100 flex flex-center"><input className="ml-4 bg-cyan-100" type="text" name="ingredient" placeholder="Enter ingredient" value={formData.ingredient} onChange={handleInputChange}/></div>
          <div className="bg-cyan-100 flex flex-center"><input className="ml-4 bg-cyan-100" type="number" name="quantity" placeholder="Enter quantity" min="0" value={formData.quantity} onChange={handleInputChange}/></div>
          <div className="bg-cyan-100 flex flex-center"><select className="ml-4 bg-cyan-100" type="text" name="units" placeholder="Enter units" onChange={handleInputChange}>
            
            <option value=""></option>
            <option value="counts">counts</option>
            <option value="tsp">tsp</option>
            <option value="cups">cups</option>
            <option value="grams">grams</option>
          </select></div>
        </div>
        <input className="w-20 mx-10 px-4 py-1 bg-cyan-100 border border-1 border-black rounded-lg hover:bg-white hover:text-black duration-300 hover:cursor-pointer" type="button" value="Add" onClick={submit}></input>
      </div>
      
      <div className="flex bg-cyan-100 w-full h-fit py-2 border border-1 border-black">
            <div className="flex-grow flex items-center justify-between px-10">
              <div className="w-10 ml-4" >Ingredient</div>
              <div className="w-10" >Quantity</div>
              <div className="w-10 mr-20" >Units</div>
            </div>
          </div>
      <ul>
        {formList.map((formItem, index) => (
          <div className="flex bg-cyan-100 w-full h-fit py-2 border border-1 border-black">
            <input className="ml-4" type="checkbox" name={index} onChange={selectBox} value={selectList[index]} key={"check"+index} ></input>
            <div className="flex-grow flex items-center justify-between px-10">
              <div className="w-10" key={"item1"+index}>{formItem[0]}</div>
              <div className="w-10" key={"item2"+index}>{formItem[1]}</div>
              <div className="w-10" key={"item3"+index}>{formItem[2]}</div>
            </div>
            <input className="mr-4 bg-red-200 text-white p-2 rounded-lg hover:bg-red-400 hover:cursor-pointer" type="button" name={index} onClick={deleteFunction} value="Delete"></input>
          </div>
        ))}
      </ul>
      </form>
    </div>
  )
}

export default Home

