# 🚀 Secure Your App with Serverless Functions 🔒

As developers, we know how important it is to protect sensitive data—especially when small apps rely on third-party APIs. A great way to keep your API keys safe in production is by leveraging **serverless functions**. This approach is perfect for apps like weather services or other basic utilities where you don't need traditional backend code.

With serverless functions:
- 🔑 **Hide API keys**: Keep your secrets secure by moving them out of the front-end and away from the user's browser.
- 🛡️ **Enhance security**: Avoid exposing sensitive data, reducing the risk of breaches and improving overall app safety.
- 🌐 **Scalable backend**: Get low-cost, scalable backend functionality without managing servers.

In this project, I demonstrate how to use **Netlify serverless functions** to hide API calls (e.g., for a Weather app). The front-end remains clean while the serverless function handles all backend logic seamlessly.

---

## 🌟 Features

- **Secure API Key Handling**: Protects sensitive credentials from being exposed in the browser.
- **Serverless Architecture**: No need to manage servers or deploy complex backend infrastructure.
- **Scalability**: Automatically scales with usage, making it ideal for small to medium-sized applications.
- **Frontend-Friendly**: Keeps your frontend code clean and focused on UI/UX.

---

## 📸 Live Preview

Check out the live demo here:  
👉 [Live Preview](https://apiwithnetlify.netlify.app/)

---

## 🛠️ How It Works

1. **Frontend**: The user interacts with the app through a simple interface.
2. **Serverless Function**: When an API call is needed, the frontend triggers a serverless function hosted on Netlify.
3. **Backend Logic**: The serverless function securely retrieves the API key from environment variables, makes the API request, and returns the data to the frontend.
4. **Result**: The user gets the desired information without ever seeing the API key.

This architecture ensures that sensitive data remains hidden and secure while providing a seamless user experience.

---

Happy Coding 🚀
