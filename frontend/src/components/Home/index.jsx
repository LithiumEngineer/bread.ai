import { VertexAI } from "@langchain/google-vertexai-web"

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
