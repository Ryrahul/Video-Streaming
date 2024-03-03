## Video Chunk Player - Backend (NestJS)

This repository contains the backend implementation of a web-based tool for playing videos, both in smaller, manageable chunks and without chunking. It's built using NestJS, a progressive Node.js framework.

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js
- pnpm (Performant Node Package Manager)
- Nest CLI (optional but recommended for scaffolding)

### Setup Instructions

1. **Clone the Repository:** Clone this repository to your local machine using the following command:

   ```
   git clone git@github.com:Ryrahul/Video-Streaming.git
   ```

2. **Navigate to the Directory:** Enter the directory of the cloned repository:

   ```
   cd video-upload
   ```

3. **Install Dependencies:** Install the required dependencies by running:

   ```
   pnpm install
   ```

4. **Start the Server:** Once the dependencies are installed, start the NestJS server by running:

   ```
   npm start
   ```

   This will start the server, and you should see a message indicating that the server is running.

5. **Configure Video Chunks:** You'll need to configure the backend to serve your video chunks. Update the necessary endpoints and configurations in the source code according to your requirements.

### Contributing

Contributions are welcome! If you have any improvements or suggestions, feel free to open an issue or submit a pull request.

### License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as you see fit.

### Additional Notes

- Ensure that the necessary permissions and configurations are set up for serving video files securely.
- Make sure to follow best practices for handling video chunk requests and responses to optimize performance and reliability.
- Consider implementing additional features such as authentication, authorization, and error handling as needed for your specific use case.
- For frontend integration, you can develop a client-side application that interacts with this backend API to provide a complete video player experience, both with and without chunking.
