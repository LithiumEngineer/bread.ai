import { VertexAI } from "@langchain/google-vertexai-web"

const model = new VertexAI({
  authOptions: {
    credentials: {"type":"service_account","project_id":"genai-418815"},
  },
  temperature: 0.7,
})

const invokeModel = async () => {
  try {
    const res = await model.invoke(
      "What would be a good company name for a company that makes colorful socks?"
    );
    console.log({ res });
  } catch (error) {
    console.error("Error invoking model:", error);
  }
};

invokeModel();

const Home = () => {
  return <div>Home</div>
}

export default Home
